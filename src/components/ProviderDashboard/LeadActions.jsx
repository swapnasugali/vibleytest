import React from "react";
import {
  FaBullhorn,
  FaCalendarAlt,
} from "react-icons/fa";

const leads = [
  {
    title: "New High value Lead",
    event: "Wedding Celebration",
    time: "Requested 12m ago",
    budget: "₹84,500/-",
    icon: <FaBullhorn />,
    iconBg: "bg-green-600",
    titleColor: "text-gray-800",
  },
  {
    title: "Negotiation Pending",
    event: "Birthday Event",
    time: "Requested 10hr ago",
    budget: "₹11,500/-",
    icon: <FaCalendarAlt />,
    iconBg: "bg-sky-600",
    titleColor: "text-red-600",
  },
  {
    title: "New Event",
    event: "Birthday Event",
    time: "Requested 2m ago",
    budget: "₹14,500/-",
    icon: <FaCalendarAlt />,
    iconBg: "bg-sky-600",
    titleColor: "text-gray-800",
  },
];

const LeadActions = () => {
  return (
    <div className="w-full rounded-lg bg-white">

      {/* HEADER */}
      <div className="flex h-[43px] items-center justify-between border-b border-gray-200 px-5">

        <h2 className="text-[10px] font-bold uppercase text-gray-800">
          Lead Actions Required
        </h2>

        <a
          href="#"
          className="text-[9px] text-gray-700 underline"
        >
          view all leads
        </a>

      </div>


      {/* LEADS */}
      <div className="space-y-3 px-5 py-3">

        {leads.map((lead, index) => (
          <div
            key={index}
            className="flex h-[56px] w-full items-center rounded-lg border border-gray-300 px-3"
          >

            {/* ICON */}
            <div
              className={`mr-3 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-white ${lead.iconBg}`}
            >
              {lead.icon}
            </div>


            {/* DETAILS */}
            <div className="min-w-0 flex-1">

              <p className="truncate text-[9px] text-gray-600">

                <span className={`font-semibold ${lead.titleColor}`}>
                  {lead.title}
                </span>

                <span>
                  {" : "}
                  {lead.event}
                </span>

              </p>


              <p className="mt-[2px] text-[8px] text-gray-600">

                {lead.time}

                <span className="mx-2">
                  |
                </span>

                <span className="font-semibold">
                  Budget : {lead.budget}
                </span>

              </p>

            </div>


            {/* BUTTON */}
            <button
              className="ml-2 shrink-0 rounded bg-[#990000] px-4 py-[6px] text-[9px] font-semibold text-white"
            >
              Respond
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default LeadActions;