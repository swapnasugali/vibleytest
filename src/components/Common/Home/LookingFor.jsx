import React from 'react'

function LookingFor() {
  return (
    <section className="w-full bg-[#f5f4f2] py-8 px-6">
  
  <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

    {/* Title */}
    <div className="min-w-[140px] text-[#30343b]">
      <p className="text-[18px] font-medium leading-6">
        What Are You
      </p>

      <p className="text-[18px] font-medium leading-6">
        Looking For<span className="text-red-800">?</span>
      </p>
    </div>


    {/* Options */}
    <div className="flex flex-1 flex-col gap-4 md:flex-row">

      {/* Service Providers */}
      <div className="relative flex-1 h-[104px] w-full lg:w-[650px] overflow-hidden rounded-md bg-[#a82f2b] px-8 py-4 text-center text-white">

        {/* Left dashed line */}
        <div className="absolute left-3 top-0 h-full border-l-2 border-dashed border-white/80"></div>

        {/* Top small curve effect */}
        <div className="absolute -top-4 right-12 h-8 w-[72px] rounded-b-full bg-[#f5f4f2]"></div>


        {/* bottom small curve */}
        <div className="absolute -bottom-4 right-12 h-8 w-[72px] rounded-t-full bg-[#f5f4f2]"></div>

        <h3 className="relative z-40 text-[22px] font-semibold">
          SERVICE PROVIDERS
        </h3>

        <p className="relative z-40 mt-2 text-[12px] leading-4 text-white">
          Experts who provide specific event services for your special occasion.
        </p>

      </div>


      {/* Event Organizers */}
      <div className="relative flex-1 h-[104px] w-full lg:w-[650px]overflow-hidden rounded-md bg-[#e59a00] px-8 py-4 text-center text-white">

        {/* Left dashed line */}
        <div className="absolute left-3 top-0 h-full border-l-2 border-dashed border-white/80"></div>

        {/* Top curve */}
        <div className="absolute -top-4 right-12 h-8 w-[72px] rounded-b-full bg-[#f5f4f2]"></div>

        {/* Bottom curve */}
        <div className="absolute -bottom-4 right-12 h-8 w-[72px] rounded-t-full bg-[#f5f4f2]"></div>

        <h3 className="relative text-[22px] font-semibold">
          EVENT ORGANIZERS
        </h3>

        <p className="relative mt-2 text-[12px] leading-4 text-white">
          Experts who plan and manage your complete event from start to finish.
        </p>

      </div>

    </div>

  </div>

</section>
  )
}

export default LookingFor