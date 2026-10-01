import React from "react";

function LookingFor() {
  return (
    <section className="w-full overflow-hidden bg-[#f5f4f2] px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-5 lg:flex-row lg:items-center">

        <div className="min-w-0 shrink-0 text-[#30343b] lg:w-[150px]">
          <p className="text-[18px] font-medium leading-6">
            What Are You
          </p>

          <p className="text-[18px] font-medium leading-6">
            Looking For<span className="text-red-800">?</span>
          </p>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row">

          <div className="relative min-w-0 flex-1 overflow-hidden rounded-md bg-[#a82f2b] px-5 py-4 text-center text-white transition-transform duration-300 hover:scale-105 hover:brightness-110 sm:px-6 md:px-8">

            <div className="absolute left-3 top-0 h-full border-l-2 border-dashed border-white/80" />

            <div className="absolute -top-4 right-8 h-8 w-16 rounded-b-full bg-[#f5f4f2] sm:right-10 sm:w-[72px]" />

            <div className="absolute -bottom-4 right-8 h-8 w-16 rounded-t-full bg-[#f5f4f2] sm:right-10 sm:w-[72px]" />

            <h3 className="relative z-40 text-lg font-semibold sm:text-xl md:text-[22px]">
              SERVICE PROVIDERS
            </h3>

            <p className="relative z-40 mt-2 text-[11px] leading-4 sm:text-[12px]">
              Experts who provide specific event services for your special occasion.
            </p>
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden rounded-md bg-[#e59a00] px-5 py-4 text-center text-white transition-transform duration-300 hover:scale-105 hover:brightness-110 sm:px-6 md:px-8">

            <div className="absolute left-3 top-0 h-full border-l-2 border-dashed border-white/80" />

            <div className="absolute -top-4 right-8 h-8 w-16 rounded-b-full bg-[#f5f4f2] sm:right-10 sm:w-[72px]" />

            <div className="absolute -bottom-4 right-8 h-8 w-16 rounded-t-full bg-[#f5f4f2] sm:right-10 sm:w-[72px]" />

            <h3 className="relative z-40 text-lg font-semibold sm:text-xl md:text-[22px]">
              EVENT ORGANIZERS
            </h3>

            <p className="relative z-40 mt-2 text-[11px] leading-4 sm:text-[12px]">
              Experts who plan and manage your complete event from start to finish.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LookingFor;