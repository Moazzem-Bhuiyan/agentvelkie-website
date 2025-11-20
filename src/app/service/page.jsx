import React from 'react';
import ServiceTypeTable from './Component/ServiceTypeTable';

export const metadata = {
  title: 'Service',
  description: 'Service Velki Agent Call List Page',
};

export default function page() {
  return (
    <div className="w-full">
      <ServiceTypeTable />
    </div>
  );
}
