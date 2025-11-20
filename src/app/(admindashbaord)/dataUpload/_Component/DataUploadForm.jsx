'use client';
import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button, Card } from 'antd';
import 'antd/dist/reset.css';
import toast from 'react-hot-toast';
import Image from 'next/image';

const { Option } = Select;

export default function AntDForm() {
  const [form] = Form.useForm();
  const [countries, setCountries] = useState([]);

  // Fetch country codes dynamically
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,flags');
        const data = await res.json();

        const formatted = data
          ?.map((c) => ({
            name: c.name.common,
            code:
              c.idd?.root && c.idd?.suffixes?.length ? `${c.idd.root}${c.idd.suffixes[0]}` : null,
            flag: c.flags?.png,
          }))
          .filter((c) => c.code !== null)
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formatted);
      } catch (error) {
        console.error('Error loading country codes:', error);
      }
    };

    fetchCountries();
  }, []);

  const onFinish = async (data) => {
    try {
      // Combine country code + phone number
      const fullNumber = data.countryCode + data.phoneNumber;
      data.phoneNumber = fullNumber;
      delete data.countryCode;

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/velki-agent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || 'Addition failed');
        return;
      }
      toast.success('Agent added successfully');
      form.resetFields();
    } catch (error) {
      console.error('Error during submit:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-xl shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">User Form</h2>

        <Form
          form={form}
          name="userForm"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ type: 'home' }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Name is required' }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

          <Form.Item
            label="Type ID"
            name="id"
            rules={[{ required: true, message: 'Type ID is required' }]}
          >
            <Input placeholder="Enter type ID" />
          </Form.Item>

          {/* Phone Number + Country Code */}
          <Form.Item label="Phone Number" required>
            <Input.Group compact>
              {/* Country Code Select */}
              <Form.Item
                name="countryCode"
                noStyle
                rules={[{ required: true, message: 'Country code is required' }]}
              >
                <Select
                  style={{ width: '35%' }}
                  placeholder="Code"
                  showSearch
                  optionFilterProp="label"
                  loading={countries.length === 0}
                >
                  {countries.map((item) => (
                    <Option key={item.code} value={item.code} label={item.name}>
                      <div className="flex items-center gap-2">
                        <Image
                          alt="country flag"
                          height={20}
                          width={20}
                          src={item.flag}
                          className="rounded"
                        />
                        <span>{item.name}</span>
                        <span>({item.code})</span>
                      </div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Phone Input */}
              <Form.Item
                name="phoneNumber"
                noStyle
                rules={[
                  { required: true, message: 'Phone number is required' },
                  {
                    pattern: /^\d{6,15}$/,
                    message: 'Enter valid phone digits (6–15 numbers)',
                  },
                ]}
              >
                <Input style={{ width: '65%' }} placeholder="Enter phone number" />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: 'Please select a type' }]}
          >
            <Select placeholder="Select type">
              <Option value="home">Home</Option>
              <Option value="master">Master</Option>
              <Option value="admin">Admin</Option>
              <Option value="super">Super</Option>
              <Option value="service">Service</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end">
              <Button className="primary w-full" type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
