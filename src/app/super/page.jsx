import React from 'react';
import AdminTypetable from './Component/SuperTypetable';

export const metadata = {
  title: 'Super',
  description: 'Super Velki Agent Call List Page',
};

export default function page() {
  return (
    <div className="w-full">
      <AdminTypetable />
    </div>
  );
}
