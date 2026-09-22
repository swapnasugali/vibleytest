import React from "react";
import { GiPartyPopper } from "react-icons/gi";
import { MdCake } from "react-icons/md";

const leads = [
  {
    title: "New High value Lead",
    event: "Wedding Celebration",
    time: "Requested 12m ago",
    budget: "₹84,500/-",
    icon: <GiPartyPopper />,
    iconBg: "bg-green-600",
    titleColor: "text-gray-800",
  },
  {
    title: "Negotiation Pending",
    event: "Birthday Event",
    time: "Requested 10hr ago",
    budget: "₹11,500/-",
    icon: <MdCake />,
    iconBg: "bg-sky-600",
    titleColor: "text-red-600",
  },
  {
    title: "New Event",
    event: "Birthday Event",
    time: "Requested 2m ago",
    budget: "₹14,500/-",
    icon: <MdCake />,
    iconBg: "bg-sky-600",
    titleColor: "text-gray-800",
  },
];

const LeadActions = () => {
  return (
    <div className="w-full rounded-lg bg-white">

      {/* HEADER */}
      <div className="flex w-full min-h-[50px] items-center justify-between border-b border-gray-200 px-4 sm:min-h-[58px] sm:px-5 md:px-6">
        <h2 className="text-[10px] font-bold uppercase text-gray-800 sm:text-[11px]">
          Lead Actions Required
        </h2>

        <a
          href="#"
          className="whitespace-nowrap text-[8px] text-gray-700 underline sm:text-[9px]"
        >
          view all leads
        </a>
      </div>

      {/* LEADS */}
      <div className="w-full space-y-3 px-3 py-4 sm:space-y-4 sm:px-5 md:space-y-5 md:px-6">

        {leads.map((lead, index) => (
          <div
            key={index}
            className="
              flex
              w-full
              min-h-[68px]
              items-center
              rounded-lg
              border
              border-gray-400
              px-3
              py-3

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

              {/* TITLE */}
              <p className="text-[8px] leading-4 text-gray-700 sm:text-[9px] md:text-[11px] md:leading-5">
                <span className={`font-semibold ${lead.titleColor}`}>
                  {lead.title}
                </span>

                <span>
                  {" : "}
                  {lead.event}
                </span>
              </p>

              {/* TIME + BUDGET */}
              <p className="mt-1 flex flex-wrap items-center text-[7px] leading-4 text-gray-700 sm:text-[8px] md:mt-2 md:text-[10px]">
                <span>{lead.time}</span>

                <span className="mx-2 text-black">
                  |
                </span>

                <span className="font-semibold text-gray-800">
                  Budget : {lead.budget}
                </span>
              </p>

            </div>

            {/* RESPOND BUTTON */}
            <button
              type="button"
              className="
                ml-2
                shrink-0
                rounded-md
                bg-[#990000]
                px-3
                py-2
                text-[8px]
                font-semibold
                text-white

                sm:ml-3
                sm:px-4
                sm:text-[9px]

                md:px-5
                md:text-[10px]
                cursor-pointer
              "
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