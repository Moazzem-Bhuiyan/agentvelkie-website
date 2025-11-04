'use client';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Table } from 'antd';

export default function MasterTypetable() {
  const agentData = [
    {
      key: '1',
      type: 'Master',
      name: '[ADMIN] Kadir Malik',
      id: 1,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '2',
      type: 'Master',
      name: 'Gentlemen',
      id: 68,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '3',
      type: 'Master',
      name: 'Ag Tamim',
      id: 49,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '4',
      type: 'Master',
      name: 'Rip',
      id: 94,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
  ];
  const columns = [
    {
      title: 'TYPE',
      dataIndex: 'type',
      key: 'type',
      className: 'table-header-cell',
      align: 'center',
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      className: 'table-header-cell',
      align: 'center',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      className: 'table-header-cell',
      align: 'center',
    },
    {
      title: 'PHONE AND LINK',
      key: 'phone',
      align: 'center',
      render: (_, record) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
          // className="flex justify-center items-center bg-green-500 text-white  w-8 h-10 !py-1 "
        >
          <a
            href={`https://wa.me/${record.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block' }}
            className="!flex !justify-center !items-center !bg-green-500 text-white  w-6 h-6  "
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
          href={`https://wa.me/${record.phone.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ color: 'red', fontWeight: '' }}>{text}</span>
        </a>
      ),
    },
  ];
  return (
    <div className="">
      <Table
        columns={columns}
        dataSource={agentData}
        pagination={false}
        scroll={{ x: 'max-content' }}
        bordered
      />
    </div>
  );
}
