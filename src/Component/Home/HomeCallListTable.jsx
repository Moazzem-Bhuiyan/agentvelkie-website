'use client';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Table } from 'antd';

// Fisher-Yates shuffle function
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function HomeCallListTable() {
  const agentData = [
    {
      key: '1',
      type: 'HOME',
      name: '[ADMIN] Kadir Malik',
      id: 1,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '2',
      type: 'HOME',
      name: 'Gentlemen',
      id: 68,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '3',
      type: 'HOME',
      name: 'Ag Tamim',
      id: 49,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '4',
      type: 'HOME',
      name: 'Rip',
      id: 94,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '5',
      type: 'HOME',
      name: 'Laboni',
      id: 95,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '6',
      type: 'HOME',
      name: 'Ag Rahmat',
      id: 111,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '7',
      type: 'HOME',
      name: 'Ikm Vai',
      id: 38,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '8',
      type: 'HOME',
      name: 'Ashik Vai',
      id: 100,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '9',
      type: 'HOME',
      name: 'Rihad',
      id: 81,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '10',
      type: 'HOME',
      name: 'Ag Tamim',
      id: 110,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '11',
      type: 'HOME',
      name: 'UDT SMS [Bkash]',
      id: 29,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '12',
      type: 'HOME',
      name: 'Ag Nobab',
      id: 12,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '13',
      type: 'HOME',
      name: 'Hasad AS',
      id: 79,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '14',
      type: 'HOME',
      name: 'Mashrafe Murtaza',
      id: 91,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '15',
      type: 'HOME',
      name: 'Ricky Vai',
      id: 77,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '16',
      type: 'HOME',
      name: 'Doni Vai',
      id: 89,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '17',
      type: 'HOME',
      name: 'Shyan Khan',
      id: 56,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '18',
      type: 'HOME',
      name: 'Rohan Khan',
      id: 28,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '19',
      type: 'HOME',
      name: 'Tarif Khan',
      id: 97,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
    {
      key: '20',
      type: 'HOME',
      name: 'Nokab Bhai',
      id: 88,
      phone: '+8801723448301',
      admin: 'COMPLAIN',
    },
  ];

  // Keep first item fixed, shuffle the rest on every page load
  const [first, ...rest] = agentData;
  const shuffledRest = shuffleArray(rest);
  const dataSource = [first, ...shuffledRest];

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
        dataSource={dataSource}
        pagination={{ pageSize: 50 }}
        scroll={{ x: 'max-content' }}
        bordered
      />
    </div>
  );
}
