"use client";
export default function Page({ params }) {
  return (
    <div className="h-[90vh] flex">
      <div className=" w-[50%] mx-[4%] my-[5%] h-full">
        <div className=" h-[80%] w-[60%] bg-white border-2 border-black rounded-2xl">
          Post: {params.profile}
          </div>
      </div>
      <div className='w-[50%] m-4 h-full'>
        <div></div>
      </div>
    </div>
  );
}
