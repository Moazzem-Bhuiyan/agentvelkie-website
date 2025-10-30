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
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      className: 'table-header-cell',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      className: 'table-header-cell',
    },
    {
      title: 'PHONE AND LINK',
      key: 'phone',
      render: (_, record) => (
        <a
          href={`https://wa.me/${record.phone.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppOutlined style={{ fontSize: '20px', color: '#25D366' }} />
        </a>
      ),
      className: 'table-header-cell',
    },
    {
      title: 'PHONE NUMBER',
      dataIndex: 'phone',
      key: 'phoneNumber',
    },
    {
      title: 'ADMIN',
      dataIndex: 'admin',
      key: 'admin',
      width: 120,
      render: (text, record) => (
        <a
          href={`https://wa.me/${record.phone.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ color: '#FF9800', fontWeight: 'bold' }}>{text}</span>
        </a>
      ),
    },
  ];
  return (
    <div className="!mt-10">
      <Table
        columns={columns}
        dataSource={agentData}
        pagination={{ pageSize: 50 }}
        scroll={{ x: 'max-content' }}
        bordered
      />
    </div>
  );
}
