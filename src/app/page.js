import HomeCallListTable from '@/Component/Home/HomeCallListTable';

export const metadata = {
  title: 'Home Velki Agent Call List',
  description: 'Home Velki Agent Call List Page',
};

export default function Home() {
  return (
    <div className=" z-10 !overflow-hidden px-5 md:px-10 lg:mx-auto lg:w-[90%] lg:space-y-40 lg:px-0 !w-full !max-w-2xl:w-3/4 2xl:!max-w-[1920px] 2xl:px-10 ">
      {/* ------------------home type Table ---------- */}
      <HomeCallListTable />
    </div>
  );
}
