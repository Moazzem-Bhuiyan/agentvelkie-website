'use client';

import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = async (data) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || 'Login failed');
        return;
      }

      // LOGIN SUCCESS
      toast.success('Login successful');

      // token save korte chaile:
      localStorage.setItem('accessToken', result?.data?.accessToken);

      router.push('/dataUpload');
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="!px-6 !py-8 shadow-none shadow-primary-blue/10 w-full bg-transparent rounded-md text-white  !mt-[100px]">
      <section className="!mb-8 !space-y-2">
        <h4 className="text-3xl font-semibold text-white text-center">Welcome back!</h4>
        <p className=" text-white text-center">Sign in to your account</p>
      </section>

      <Form form={form} name="userForm" layout="vertical" onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: 'Email required' }]}>
          <Input type="email" placeholder="Email" size="large" className="!h-10" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: 'Password required' }]}>
          <Input.Password placeholder="Password" size="large" className="!h-10" />
        </Form.Item>

        <Button
          htmlType="submit"
          type="primary"
          size="large"
          className="w-full !font-semibold !h-10"
          style={{ backgroundColor: '#2474A6' }}
          block
        >
          Log In
        </Button>
      </Form>
    </div>
  );
}
