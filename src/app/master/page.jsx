import React from 'react';
import MasterTypetable from './Component/MasterTypetable';

export const metadata = {
  title: 'Master',
  description: 'Master Velki Agent Call List Page',
};

export default function page() {
  return (
    <div className="w-full">
      <MasterTypetable />
    </div>
  );
}
