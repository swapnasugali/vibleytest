
import React, { useMemo, useState } from "react";
import { FaBookOpen } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

// ==========================================
// SAMPLE LEAD DATA
// Later replace this with actual Leads data
// ==========================================

const initialLeads = [
  { id: 1, status: "New" },
  { id: 2, status: "New" },
  { id: 3, status: "New" },
  { id: 4, status: "New" },
  { id: 5, status: "Contacted" },
  { id: 6, status: "Contacted" },
  { id: 7, status: "Contacted" },
  { id: 8, status: "Booked" },
  { id: 9, status: "Booked" },
  { id: 10, status: "Booked" },
  { id: 11, status: "Rejected" },
  { id: 12, status: "Missed" },
];

// ==========================================
// STATUS CONFIGURATION
// ==========================================

const statusConfig = [
  {
    name: "New",
    color: "bg-blue-500",
    dotColor: "bg-blue-500",
    description:
      "Newly received leads that are yet to be contacted.",
  },
  {
    name: "Contacted",
    color: "bg-orange-500",
    dotColor: "bg-orange-500",
    description:
      "Leads that have been reached out to but not finalized.",
  },
  {
    name: "Booked",
    color: "bg-green-600",
    dotColor: "bg-green-600",
    description:
      "Leads successfully converted into confirmed bookings.",
  },
  {
    name: "Rejected",
    color: "bg-red-500",
    dotColor: "bg-red-500",
    description:
      "Leads that did not proceed due to decline or mismatch.",
  },
  {
    name: "Missed",
    color: "bg-gray-400",
    dotColor: "bg-gray-400",
    description:
      "Leads not responded to before the event date and marked as missed.",
  },
];

// ==========================================
// LEGEND COMPONENT
// ==========================================

const Legend = ({ color, label, count }) => {
  return (
    <div
      className="flex min-w-0 items-center gap-2"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <span
        className={`block h-[8px] w-[8px] shrink-0 rounded-full ${color}`}
      />

      <span className="whitespace-nowrap text-[14px] font-normal text-gray-700">
        {label}(
        <span className="font-semibold">{count}</span>
        )
      </span>
    </div>
  );
};

// ==========================================
// LEAD STATUS POPUP
// ==========================================

const LeadStatusPopup = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[756px] overflow-hidden rounded-[14px] bg-white"
        style={{ fontFamily: "Poppins, sans-serif" }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* HEADER */}

        <div className="flex h-[69px] items-center justify-between border-b border-gray-200 px-6 sm:px-10">
          <h2 className="text-[16px] font-semibold uppercase tracking-[0.3px] text-[#222222]">
            Lead Status Summary
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#B00000] text-[#B00000] transition-colors hover:bg-[#B00000] hover:text-white"
          >
            <FaTimes className="cursor-pointer text-[19px]" />
          </button>
        </div>

        {/* CONTENT */}

        <div className="px-6 pb-10 pt-6 sm:px-10 sm:pb-12">
          {statusConfig.map((status, index) => (
            <div
              key={status.name}
              className={
                index === statusConfig.length - 1
                  ? ""
                  : "mb-[19px]"
              }
            >
              <h3 className="border-b border-gray-100 text-[18px] font-semibold leading-[27px] text-[#111111]">
                {status.name}
              </h3>

              <p className="mt-[5px] text-[16px] font-normal leading-[25px] text-[#111111]">
                {status.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN LEAD STATUS SUMMARY
// ==========================================

const LeadStatusSummary = ({ leads = initialLeads }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate counts dynamically

  const statusCounts = useMemo(() => {
    const counts = {
      New: 0,
      Contacted: 0,
      Booked: 0,
      Rejected: 0,
      Missed: 0,
    };

    leads.forEach((lead) => {
      const status = lead.status;

      if (Object.prototype.hasOwnProperty.call(counts, status)) {
        counts[status]++;
      }
    });

    return counts;
  }, [leads]);

  // Calculate total leads

  const totalLeads = leads.length;

  // Calculate percentage

  const getPercentage = (count) => {
    return totalLeads > 0
      ? (count / totalLeads) * 100
      : 0;
  };

  return (
    <>
      <div
        className="w-full rounded-lg bg-white"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* HEADER */}

        <div className="flex min-h-[50px] w-full items-center border-b border-gray-200 px-4 sm:min-h-[58px] sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h2 className="text-[16px] font-semibold uppercase text-gray-800">
            Lead Status Summary
          </h2>
        </div>

        {/* CONTENT */}

        <div className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12">

          {/* TOTAL LEADS */}

          <div className="mb-2 flex w-full items-center justify-between">
            <span className="text-[14px] font-semibold text-gray-700">
              Total Leads
            </span>

            <span className="text-[14px] font-semibold text-gray-700">
              {totalLeads}
            </span>
          </div>

          {/* DYNAMIC STATUS BAR */}

          <div className="flex h-[10px] w-full overflow-hidden rounded-full bg-gray-300 sm:h-[11px] md:h-[12px]">
            {statusConfig.map((status) => (
              <div
                key={status.name}
                className={`${status.color} transition-all duration-500`}
                style={{
                  width: `${getPercentage(
                    statusCounts[status.name]
                  )}%`,
                }}
                title={`${status.name}: ${statusCounts[status.name]}`}
              />
            ))}
          </div>

          {/* DYNAMIC LEGEND */}

          <div className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
            {statusConfig.map((status) => (
              <Legend
                key={status.name}
                color={status.dotColor}
                label={status.name}
                count={String(statusCounts[status.name]).padStart(2, "0")}
              />
            ))}
          </div>

          {/* HELP LINK */}

          <div className="mt-8 flex w-full justify-center sm:mt-10">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex cursor-pointer items-center text-center text-[8px] text-gray-500 underline sm:text-[9px] md:text-[10px]"
            >
              <FaBookOpen className="mr-1 text-[14px] text-yellow-500" />

              know about the tabs / purpose
            </button>
          </div>
        </div>
      </div>

      {/* POPUP */}

      {isModalOpen && (
        <LeadStatusPopup
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default LeadStatusSummary;
