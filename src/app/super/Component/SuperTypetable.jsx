'use client';

import { useEffect, useState } from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Table } from 'antd';

export default function AdminTypetable() {
  const [agentData, setAgentData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch API data
  const fetchAgents = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/velki-agent?type=super`);
      const result = await res.json();

      if (result?.success) {
        const formattedData = result.data?.data?.map((item, index) => ({
          key: item._id,
          type: item.type,
          name: item.name,
          id: item.id,
          phone: item.phoneNumber,
          admin: 'COMPLAIN',
        }));

        setAgentData(formattedData);
      }
    } catch (error) {
      console.error('Error fetching agents:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const columns = [
    {
      title: 'TYPE',
      dataIndex: 'type',
      key: 'type',
      align: 'center',
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'PHONE AND LINK',
      key: 'phone',
      align: 'center',
      render: (_, record) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            href={`https://wa.me/${record.phone?.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="!flex !justify-center !items-center !bg-green-500 text-white w-6 h-6 rounded"
          >
            <WhatsAppOutlined style={{ fontSize: '18px', color: 'white' }} />
          </a>
        </div>
      ),
    },
    {
      title: 'PHONE NUMBER',
      dataIndex: 'phone',
      key: 'phoneNumber',
      align: 'center',
    },
    {
      title: 'ADMIN',
      dataIndex: 'admin',
      key: 'admin',
      align: 'center',
      width: 120,
      render: (text, record) => (
        <a
          href={`https://wa.me/${record.phone?.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ color: '#FF9800', fontWeight: 'bold' }}>{text}</span>
        </a>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={agentData}
        loading={loading}
        pagination={false}
        bordered
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
}
