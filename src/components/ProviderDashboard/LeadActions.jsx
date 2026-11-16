
import React, { useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import { MdCake } from "react-icons/md";
import { MdClose, MdAccessTime, MdCurrencyRupee } from "react-icons/md";

const leads = [
  {
    id: 1,
    title: "New High value Lead",
    event: "Wedding Celebration",
    time: "Requested 12m ago",
    budget: "₹84,500/-",
    icon: <GiPartyPopper />,
    iconBg: "bg-green-600",
    titleColor: "text-gray-800",
    status: "NEW",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    title: "Negotiation Pending",
    event: "Birthday Event",
    time: "Requested 10hr ago",
    budget: "₹11,500/-",
    icon: <MdCake />,
    iconBg: "bg-sky-600",
    titleColor: "text-red-600",
    status: "PENDING",
    statusColor: "bg-orange-100 text-orange-700",
  },
  {
    id: 3,
    title: "New Event",
    event: "Birthday Event",
    time: "Requested 2m ago",
    budget: "₹14,500/-",
    icon: <MdCake />,
    iconBg: "bg-sky-600",
    titleColor: "text-gray-800",
    status: "NEW",
    statusColor: "bg-blue-100 text-blue-700",
  },
];

const LeadActions = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const displayedLeads = showAll ? leads : leads.slice(0, 3);

  return (
    <div
      className="w-full rounded-lg bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* HEADER */}
      <div className="flex min-h-[50px] w-full items-center justify-between border-b border-gray-200 px-4 sm:min-h-[58px] sm:px-6 md:px-8 lg:px-10 xl:px-12">

        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-[16px] font-semibold uppercase text-gray-800">
            Lead Actions Required
          </h2>

          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-red-100 px-2 text-[11px] font-semibold text-[#990000]">
            {leads.length}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="whitespace-nowrap text-[13px] font-medium text-[#252525] underline transition-colors hover:text-[#990000] sm:text-[14px]"
        >
          {showAll ? "Show less" : "View all leads"}
        </button>
      </div>

      {/* LEADS */}
      <div className="w-full space-y-3 px-4 py-4 sm:space-y-4 sm:px-6 md:space-y-5 md:px-8 lg:px-10 xl:px-12">

        {displayedLeads.map((lead) => (
          <div
            key={lead.id}
            className="
              flex
              w-full
              min-h-[68px]
              items-center
              rounded-lg
              border
              border-gray-300
              bg-white
              px-3
              py-3
              transition-all
              duration-200
              hover:border-gray-400
              hover:shadow-md

              sm:min-h-[74px]
              sm:rounded-xl
              sm:px-4

              md:min-h-[80px]
              md:px-5
            "
          >
            {/* ICON */}
            <div
              className={`
                mr-3
                flex
                h-[44px]
                w-[44px]
                shrink-0
                items-center
                justify-center
                rounded-full
                text-white
                ${lead.iconBg}

                sm:mr-4
                sm:h-[52px]
                sm:w-[52px]

                md:h-[62px]
                md:w-[62px]
              `}
            >
              <span className="text-[22px] sm:text-[25px] md:text-[30px]">
                {lead.icon}
              </span>
            </div>

            {/* CONTENT */}
            <div className="min-w-0 flex-1">

              {/* TITLE + STATUS */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">

                <p className="text-[14px] leading-4 text-gray-700 sm:text-[14px] md:text-[11px] md:leading-5">

                  <span className={`font-semibold ${lead.titleColor}`}>
                    {lead.title}
                  </span>

                  <span>
                    {" : "}
                    {lead.event}
                  </span>

                </p>

                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${lead.statusColor}`}
                >
                  {lead.status}
                </span>

              </div>

              {/* TIME + BUDGET */}
              <p className="mt-1 flex flex-wrap items-center gap-y-1 text-[12px] leading-4 text-gray-500 sm:text-[12px] md:mt-2 md:text-[10px]">

                <span className="inline-flex items-center gap-1">
                  <MdAccessTime className="text-[14px]" />
                  {lead.time}
                </span>

                <span className="mx-2 text-gray-400">
                  |
                </span>

                <span className="inline-flex items-center gap-1 font-semibold text-gray-800">
                  <MdCurrencyRupee className="text-[14px] text-green-700" />
                  Budget : {lead.budget.replace("₹", "")}
                </span>

              </p>

            </div>

            {/* RESPOND BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedLead(lead)}
              className="
                ml-2
                shrink-0
                cursor-pointer
                rounded-md
                bg-[#990000]
                px-3
                py-2
                text-[13.85px]
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-[#750000]
                hover:shadow-md
                active:scale-95

                sm:ml-3
                sm:px-4
                sm:text-[13.85px]

                md:px-5
                md:text-[10px]
              "
            >
              Respond
            </button>

          </div>
        ))}

      </div>

      {/* RESPOND DETAILS MODAL */}
      {selectedLead && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="relative w-full max-w-[430px] rounded-xl bg-white p-5 shadow-xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedLead(null)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-600"
              aria-label="Close modal"
            >
              <MdClose size={22} />
            </button>

            {/* MODAL HEADER */}
            <h3 className="pr-8 text-[18px] font-semibold text-gray-800">
              Lead Details
            </h3>

            <p className="mt-1 text-[12px] text-gray-500">
              Selected lead information
            </p>

            {/* LEAD DETAILS */}
            <div className="mt-5 space-y-4 rounded-lg border border-gray-200 p-4">

              <div>
                <p className="text-[11px] text-gray-500">
                  Lead Title
                </p>
                <p className="mt-1 text-[14px] font-semibold text-gray-800">
                  {selectedLead.title}
                </p>
              </div>

              <div>
                <p className="text-[11px] text-gray-500">
                  Event
                </p>
                <p className="mt-1 text-[14px] font-medium text-gray-800">
                  {selectedLead.event}
                </p>
              </div>

              <div>
                <p className="text-[11px] text-gray-500">
                  Requested Time
                </p>
                <p className="mt-1 text-[14px] font-medium text-gray-800">
                  {selectedLead.time}
                </p>
              </div>

              <div>
                <p className="text-[11px] text-gray-500">
                  Budget
                </p>
                <p className="mt-1 text-[16px] font-semibold text-green-700">
                  {selectedLead.budget}
                </p>
              </div>

              <div>
                <p className="text-[11px] text-gray-500">
                  Status
                </p>
                <span className={`mt-1 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${selectedLead.statusColor}`}>
                  {selectedLead.status}
                </span>
              </div>

            </div>

            {/* MODAL FOOTER */}
            <button
              type="button"
              onClick={() => setSelectedLead(null)}
              className="mt-5 w-full rounded-md bg-[#990000] py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#750000]"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default LeadActions;
