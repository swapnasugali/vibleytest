// ============================================
// Leads.jsx
// ============================================

import React, { useMemo, useState } from "react";

import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaEnvelope,
  FaPhoneAlt,
  FaRegUserCircle,
  FaChevronDown,
  FaCamera,
  FaMoneyBillWave,
} from "react-icons/fa";

import {
  MdOutlineEvent,
  MdNightlife,
} from "react-icons/md";

import LeadsHeader from "./LeadsHeader";


// ======================================================
// LEADS DATA
// ======================================================

const INITIAL_LEADS = [
  {
    id: 1,
    name: "Shiva Kumar Reddy",
    email: "shivakumarredd34@gmail.com",
    phone: "+91 9343445673",
    status: "New",
    eventType: "Wedding Celebration",
    date: "March 12th, 2026",
    eventDate: "April 12, 2026",
    eventTime: "5:00 PM",
    location: "N Banquets, Kukatpally, Hyderabad.",
    guests: "200 - 250 People",
    budget: "₹ 12000/-",
    category: "Photography",
    service: "Candid Photography",
    serviceType: "Specific Services",
    hoursAgo: "2 hours ago",
    message:
      "Hello,\nWe are currently looking for a dedicated candid photographer and came across your portfolio and work samples, which perfectly match our taste and expectations. We would be delighted to hire you as the candid photographer for our daughter's grand wedding. Additionally, we are interested in exploring any add-on services you offer within this category, based on your recommendations.\nKindly let us know a convenient time to connect so we can discuss further details and proceed accordingly.",
    notes: "Client is interested in candid photography.",
  },

  {
    id: 2,
    name: "Shilomithi Gannam",
    email: "shilomithi@gmail.com",
    phone: "+91 9876543210",
    status: "Contacted",
    eventType: "Birthday Event",
    date: "March 12th, 2026",
    eventDate: "March 20, 2026",
    eventTime: "7:00 PM",
    location: "Hyderabad",
    guests: "100 - 150 People",
    budget: "₹ 7000/-",
    category: "Photography",
    service: "Candid Photography",
    serviceType: "Specific Services",
    hoursAgo: "2 hours ago",
    message:
      "We are looking for a photographer for a birthday celebration. Please share your availability and package details.",
    notes: "Client is interested in event photography.",
  },

  {
    id: 3,
    name: "Dr. Santosh Rao Pulluri",
    email: "santoshrao@gmail.com",
    phone: "+91 9876543211",
    status: "Booked",
    eventType: "Corporate Event",
    date: "March 12th, 2026",
    eventDate: "April 05, 2026",
    eventTime: "6:00 PM",
    location: "Hyderabad",
    guests: "150 - 200 People",
    budget: "₹ 18000/-",
    category: "Photography",
    service: "All In One Trending Pack",
    serviceType: "Fixed Package",
    hoursAgo: "2 hours ago",

    services: [
      {
        category: "Photography",
        service: "All In One Trending Pack",
        serviceType: "Fixed Package",
      },
      {
        category: "Photography",
        service: "Dronography Service",
        serviceType: "Add On",
      },
    ],

    message:
      "We are looking for a professional photographer for our corporate event. Please share your availability and package details.",
    notes:
      "Client is interested in photography and drone services.",
  },

  {
    id: 4,
    name: "Anil Kumar Vepudi",
    email: "anilkumar@gmail.com",
    phone: "+91 9876543212",
    status: "Missed",
    eventType: "DJ Night",
    date: "March 12th, 2026",
    eventDate: "April 18, 2026",
    eventTime: "8:00 PM",
    location: "Hyderabad",
    guests: "300 - 400 People",
    budget: "₹ 60000/-",
    category: "Entertainment",
    service: "DJ Night Smash Limited",
    serviceType: "Fixed Package",
    hoursAgo: "2 hours ago",
    message:
      "We are looking for a DJ for our upcoming event. Please share your package details and availability.",
    notes: "Client is interested in DJ services.",
  },
];


// ======================================================
// TAB CONFIG
// ======================================================

const TAB_CONFIG = [
  { name: "All", color: "#292929" },
  { name: "New", color: "#078cf0" },
  { name: "Contacted", color: "#f36b08" },
  { name: "Booked", color: "#079b3d" },
  { name: "Rejected", color: "#ff0000" },
  { name: "Missed", color: "#999999" },
];


// ======================================================
// STATUS COLORS
// ======================================================

const STATUS_STYLES = {
  New: {
    background: "#078cf0",
    color: "#ffffff",
  },

  Contacted: {
    background: "#f36b08",
    color: "#ffffff",
  },

  Booked: {
    background: "#079b3d",
    color: "#ffffff",
  },

  Rejected: {
    background: "#ff0000",
    color: "#ffffff",
  },

  Missed: {
    background: "#999999",
    color: "#ffffff",
  },
};


// ======================================================
// LEAD CARD
// ======================================================

const LeadCard = ({
  lead,
  selected,
  onClick,
}) => {
  const services =
    lead.services || [
      {
        category: lead.category,
        service: lead.service,
        serviceType: lead.serviceType,
      },
    ];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        w-full
        rounded-[8px]
        bg-white
        text-left
        transition-all
        duration-200
        overflow-hidden

        ${
          selected
            ? "border border-[#df0000]"
            : "border border-transparent"
        }

        shadow-[0_1px_6px_rgba(0,0,0,0.06)]
        hover:shadow-[0_3px_12px_rgba(0,0,0,0.10)]
      `}
    >
      {/* ==================================================
          CARD CONTENT
      ================================================== */}

      <div
        className="
          px-[14px]
          pb-[8px]
          pt-[11px]

          sm:px-[15px]
          sm:pt-[12px]

          lg:px-[15px]

          xl:px-[16px]
        "
      >

        {/* ==================================================
            NAME + STATUS
        ================================================== */}

        <div className="flex items-start justify-between gap-3">

          <h3
            className="
              min-w-0
              flex-1
              truncate
              text-[12px]
              font-semibold
              leading-[17px]
              text-[#222222]

              sm:text-[13px]

              xl:text-[14px]
            "
          >
            {lead.name}
          </h3>

          <span
            className="
              shrink-0
              rounded-[4px]
              px-[10px]
              py-[4px]
              text-[8px]
              font-medium
              leading-none

              sm:text-[9px]
            "
            style={{
              backgroundColor:
                STATUS_STYLES[lead.status]?.background ||
                "#999999",

              color:
                STATUS_STYLES[lead.status]?.color ||
                "#ffffff",
            }}
          >
            {lead.status}
          </span>

        </div>


        {/* ==================================================
            EVENT + DATE
        ================================================== */}

        <div
          className="
            mt-[4px]
            flex
            items-center
            justify-between
            gap-2
          "
        >

          {/* EVENT */}

          <div
            className="
              flex
              min-w-0
              flex-1
              items-center
              gap-[5px]
              text-[#e00000]
            "
          >
            {lead.eventType === "DJ Night" ? (
              <MdNightlife className="shrink-0 text-[12px]" />
            ) : (
              <MdOutlineEvent className="shrink-0 text-[12px]" />
            )}

            <span
              className="
                truncate
                text-[9px]
                font-medium

                sm:text-[10px]
              "
            >
              {lead.eventType}
            </span>
          </div>


          {/* DATE */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-[4px]
              text-[#444444]
            "
          >
            <FaCalendarAlt className="text-[9px]" />

            <span
              className="
                whitespace-nowrap
                text-[7px]

                sm:text-[8px]
              "
            >
              {lead.date}
            </span>
          </div>

        </div>


        {/* ==================================================
            COST
        ================================================== */}

        <div
          className="
            mt-[8px]
            flex
            items-center
            gap-[5px]
            text-[#008b25]
          "
        >

          <FaMoneyBillWave className="text-[11px]" />

          <span
            className="
              text-[11px]
              font-bold
              leading-none

              sm:text-[12px]
            "
          >
            {lead.budget}
          </span>

        </div>


        {/* ==================================================
            DIVIDER
        ================================================== */}

        <div
          className="
            mt-[8px]
            border-t
            border-[#f0dada]
          "
        />


        {/* ==================================================
            SERVICES
        ================================================== */}

        <div
          className="
            mt-[7px]
            flex
            flex-col
            gap-[5px]
          "
        >

          {services.map((service, index) => (
            <div
              key={`${lead.id}-${index}`}
              className="
                flex
                min-w-0
                items-center
                gap-[5px]
              "
            >

              {/* CATEGORY */}

              <span
                className="
                  shrink-0
                  rounded-full
                  bg-[#eaaa00]
                  px-[9px]
                  py-[4px]
                  text-[7px]
                  font-semibold
                  leading-none
                  text-white

                  sm:text-[8px]
                  sm:px-[10px]
                "
              >
                {service.category}
              </span>


              {/* VERTICAL LINE */}

              <span
                className="
                  h-[14px]
                  w-px
                  shrink-0
                  bg-[#777777]
                "
              />


              {/* SERVICE */}

              <span
                className="
                  min-w-0
                  flex-1
                  truncate
                  text-[7px]
                  font-medium
                  text-[#222222]

                  sm:text-[8px]
                  lg:text-[8px]
                "
              >
                {service.service}
              </span>


              {/* SERVICE TYPE */}

              <span
                className="
                  hidden
                  shrink-0
                  text-[7px]
                  text-[#888888]

                  sm:inline
                "
              >
                ({service.serviceType})
              </span>


              {/* TIME */}

              {index === services.length - 1 && (
                <span
                  className="
                    ml-auto
                    shrink-0
                    whitespace-nowrap
                    text-[7px]
                    italic
                    text-[#777777]

                    sm:text-[8px]
                  "
                >
                  {lead.hoursAgo}
                </span>
              )}

            </div>
          ))}

        </div>

      </div>
    </button>
  );
};


// ======================================================
// DETAIL ITEM
// ======================================================

const DetailItem = ({
  icon,
  title,
  value,
}) => {
  return (
    <div
      className="
        flex
        min-w-0
        items-start
        gap-[9px]
      "
    >

      {/* ICON */}

      <div
        className="
          flex
          h-[29px]
          w-[29px]
          shrink-0
          items-center
          justify-center
          rounded-[5px]
          border
          border-[#e40000]
          text-[12px]
          text-[#e40000]

          sm:h-[31px]
          sm:w-[31px]
          sm:text-[13px]
        "
      >
        {icon}
      </div>


      {/* TEXT */}

      <div className="min-w-0 flex-1">

        <p
          className="
            text-[8px]
            leading-[12px]
            text-[#999999]

            sm:text-[9px]
          "
        >
          {title}
        </p>

        <p
          className="
            break-words
            text-[8px]
            font-semibold
            leading-[13px]
            text-[#333333]

            sm:text-[9px]
            sm:leading-[14px]
          "
        >
          {value}
        </p>

      </div>

    </div>
  );
};


// ======================================================
// LEAD DETAILS
// ======================================================

const LeadDetails = ({
  lead,
  selectedStatus,
  onStatusChange,
  onConnect,
  onReject,
}) => {

  if (!lead) {
    return (
      <div
        className="
          flex
          min-h-[300px]
          w-full
          items-center
          justify-center
          rounded-[10px]
          bg-white
          text-[12px]
          text-[#888888]
          shadow-[0_2px_10px_rgba(0,0,0,0.08)]
        "
      >
        Select a lead
      </div>
    );
  }


  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-[10px]
        bg-white
        shadow-[0_3px_12px_rgba(0,0,0,0.12)]
      "
    >

      {/* ==================================================
          PROFILE HEADER
      ================================================== */}

      <div
        className="
          flex
          items-center
          gap-[12px]
          border-b
          border-[#dddddd]
          px-[18px]
          py-[14px]

          sm:px-[22px]
          sm:py-[16px]

          lg:px-[24px]

          xl:px-[28px]
        "
      >

        {/* PROFILE ICON */}

        <div
          className="
            flex
            h-[52px]
            w-[52px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#f1f1f1]

            sm:h-[58px]
            sm:w-[58px]

            xl:h-[62px]
            xl:w-[62px]
          "
        >
          <FaRegUserCircle
            className="
              text-[49px]
              text-[#888888]

              sm:text-[55px]

              xl:text-[59px]
            "
          />
        </div>


        {/* PROFILE INFORMATION */}

        <div className="min-w-0 flex-1">

          <h2
            className="
              truncate
              text-[15px]
              font-semibold
              leading-[20px]
              text-[#222222]

              sm:text-[16px]

              xl:text-[18px]
            "
          >
            {lead.name}
          </h2>


          <div
            className="
              mt-[5px]
              flex
              flex-wrap
              items-center
              gap-x-[12px]
              gap-y-[5px]
            "
          >

            {/* EMAIL */}

            <div
              className="
                flex
                min-w-0
                max-w-full
                items-center
                gap-[5px]
              "
            >
              <FaEnvelope
                className="
                  shrink-0
                  text-[9px]
                  text-[#555555]
                "
              />

              <span
                className="
                  truncate
                  text-[8px]
                  text-[#777777]

                  sm:text-[9px]
                "
              >
                {lead.email}
              </span>
            </div>


            {/* PHONE */}

            <div
              className="
                flex
                items-center
                gap-[5px]
              "
            >
              <FaPhoneAlt
                className="
                  shrink-0
                  text-[8px]
                  text-[#555555]
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[8px]
                  text-[#777777]

                  sm:text-[9px]
                "
              >
                {lead.phone}
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* ==================================================
          DETAILS CONTENT
      ================================================== */}

      <div
        className="
          px-[18px]
          py-[20px]

          sm:px-[22px]
          sm:py-[23px]

          lg:px-[24px]
          lg:py-[25px]

          xl:px-[28px]
          xl:py-[27px]
        "
      >

        {/* ==================================================
            EVENT + REQUIREMENTS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-[22px]
            gap-y-[25px]

            sm:gap-x-[32px]

            lg:gap-x-[36px]

            xl:gap-x-[55px]

            max-[540px]:grid-cols-1
          "
        >

          {/* EVENT DETAILS */}

          <div className="min-w-0">

            <h3
              className="
                mb-[13px]
                text-[9px]
                font-bold
                uppercase
                text-[#333333]

                sm:text-[10px]
              "
            >
              Event Details
            </h3>


            <div
              className="
                flex
                flex-col
                gap-[17px]
              "
            >

              <DetailItem
                icon={<MdOutlineEvent />}
                title="Event Type"
                value={lead.eventType}
              />

              <DetailItem
                icon={<FaCalendarAlt />}
                title="Date & Time"
                value={`${lead.eventDate} – ${lead.eventTime}`}
              />

              <DetailItem
                icon={<FaMapMarkerAlt />}
                title="Location"
                value={lead.location}
              />

            </div>

          </div>


          {/* REQUIREMENTS */}

          <div className="min-w-0">

            <h3
              className="
                mb-[13px]
                text-[9px]
                font-bold
                uppercase
                text-[#333333]

                sm:text-[10px]
              "
            >
              Requirements
            </h3>


            <div
              className="
                flex
                flex-col
                gap-[17px]
              "
            >

              <DetailItem
                icon={<FaUsers />}
                title="Estimated Guests"
                value={lead.guests}
              />

              <DetailItem
                icon={<FaCamera />}
                title="Specific Price Budget"
                value={lead.budget}
              />

              <DetailItem
                icon={<FaCamera />}
                title="Category"
                value={lead.category}
              />

            </div>

          </div>

        </div>


        {/* ==================================================
            CLIENT MESSAGE
        ================================================== */}

        <div
          className="
            mt-[26px]

            sm:mt-[28px]
          "
        >

          <h3
            className="
              mb-[10px]
              text-[9px]
              font-bold
              uppercase
              text-[#333333]

              sm:text-[10px]
            "
          >
            Client Message
          </h3>


          <div
            className="
              min-h-[120px]
              rounded-[5px]
              bg-[#fffaf0]
              px-[14px]
              py-[12px]

              sm:min-h-[125px]

              lg:min-h-[135px]

              xl:min-h-[140px]
            "
          >

            <p
              className="
                whitespace-pre-line
                break-words
                text-[8px]
                leading-[12px]
                text-[#777777]

                sm:text-[9px]
                sm:leading-[14px]
              "
            >
              {lead.message}
            </p>

          </div>

        </div>


        {/* ==================================================
            NOTES
        ================================================== */}

        <div className="mt-[18px]">

          <h3
            className="
              mb-[7px]
              text-[9px]
              font-bold
              uppercase
              text-[#333333]

              sm:text-[10px]
            "
          >
            Notes
          </h3>

          <p
            className="
              break-words
              text-[8px]
              leading-[13px]
              text-[#777777]

              sm:text-[9px]
              sm:leading-[14px]
            "
          >
            {lead.notes}
          </p>

        </div>

      </div>


      {/* ==================================================
          ACTION FOOTER
      ================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-[15px]
          border-t
          border-[#e5e5e5]
          px-[18px]
          py-[15px]

          sm:px-[22px]

          lg:px-[24px]

          xl:px-[28px]

          max-[560px]:flex-col
          max-[560px]:items-stretch
        "
      >

        {/* CHANGE STATUS */}

        <div
          className="
            flex
            items-center
            gap-[8px]

            max-[560px]:justify-between
          "
        >

          <span
            className="
              whitespace-nowrap
              text-[10px]
              font-semibold
              text-[#222222]

              sm:text-[12px]

              xl:text-[13px]
            "
          >
            Change Status
          </span>


          <div className="relative">

            <select
              value={selectedStatus}
              onChange={onStatusChange}
              className="
                h-[35px]
                w-[95px]
                appearance-none
                rounded-[5px]
                border
                border-[#dddddd]
                bg-white
                pl-[11px]
                pr-[27px]
                text-[9px]
                text-[#555555]
                outline-none

                sm:w-[105px]

                xl:h-[38px]
                xl:w-[115px]
                xl:text-[10px]
              "
            >

              <option value="New">
                New
              </option>

              <option value="Contacted">
                Contacted
              </option>

              <option value="Booked">
                Booked
              </option>

              <option value="Rejected">
                Rejected
              </option>

              <option value="Missed">
                Missed
              </option>

            </select>


            <FaChevronDown
              className="
                pointer-events-none
                absolute
                right-[8px]
                top-1/2
                -translate-y-1/2
                text-[8px]
                text-[#777777]
              "
            />

          </div>

        </div>


        {/* ACTION BUTTONS */}

        <div
          className="
            flex
            items-center
            justify-end
            gap-[10px]

            sm:gap-[12px]

            max-[560px]:w-full
          "
        >

          <button
            type="button"
            onClick={onConnect}
            className="
              h-[35px]
              rounded-[5px]
              bg-[#079b3d]
              px-[18px]
              text-[10px]
              font-semibold
              text-white
              transition-colors
              hover:bg-[#078b38]

              sm:px-[22px]

              xl:h-[38px]
              xl:px-[25px]
              xl:text-[11px]

              max-[560px]:flex-1
            "
          >
            Connect
          </button>


          <button
            type="button"
            onClick={onReject}
            className="
              h-[35px]
              rounded-[5px]
              border
              border-[#ff0000]
              bg-white
              px-[15px]
              text-[10px]
              font-medium
              text-[#ff0000]
              transition-colors
              hover:bg-[#fff3f3]

              sm:px-[18px]

              xl:h-[38px]
              xl:px-[22px]
              xl:text-[11px]

              max-[560px]:flex-1
            "
          >
            Reject Lead
          </button>

        </div>

      </div>

    </div>
  );
};


// ======================================================
// MAIN COMPONENT
// ======================================================

const Leads = () => {

  const [leads, setLeads] =
    useState(INITIAL_LEADS);

  const [activeTab, setActiveTab] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedLeadId, setSelectedLeadId] =
    useState(1);

  const selectedLead =
    leads.find(
      (lead) =>
        lead.id === selectedLeadId
    ) || leads[0];

  const [selectedStatus, setSelectedStatus] =
    useState(
      selectedLead?.status || "New"
    );


  // ====================================================
  // TAB COUNTS
  // ====================================================

  const tabCounts = useMemo(() => {
    return {
      All: leads.length,

      New: leads.filter(
        (lead) => lead.status === "New"
      ).length,

      Contacted: leads.filter(
        (lead) =>
          lead.status === "Contacted"
      ).length,

      Booked: leads.filter(
        (lead) =>
          lead.status === "Booked"
      ).length,

      Rejected: leads.filter(
        (lead) =>
          lead.status === "Rejected"
      ).length,

      Missed: leads.filter(
        (lead) =>
          lead.status === "Missed"
      ).length,
    };
  }, [leads]);


  // ====================================================
  // FILTER
  // ====================================================

  const filteredLeads = useMemo(() => {

    const search =
      searchTerm
        .trim()
        .toLowerCase();

    return leads.filter((lead) => {

      const matchesTab =
        activeTab === "All" ||
        lead.status === activeTab;

      const services =
        lead.services || [];

      const serviceText =
        services
          .map(
            (item) =>
              `${item.service} ${item.category}`
          )
          .join(" ");

      const matchesSearch =
        !search ||
        lead.name
          .toLowerCase()
          .includes(search) ||
        lead.eventType
          .toLowerCase()
          .includes(search) ||
        lead.category
          .toLowerCase()
          .includes(search) ||
        lead.service
          .toLowerCase()
          .includes(search) ||
        serviceText
          .toLowerCase()
          .includes(search);

      return (
        matchesTab &&
        matchesSearch
      );
    });

  }, [
    leads,
    activeTab,
    searchTerm,
  ]);


  // ====================================================
  // SELECT LEAD
  // ====================================================

  const handleSelectLead = (lead) => {

    setSelectedLeadId(lead.id);

    setSelectedStatus(
      lead.status
    );
  };


  // ====================================================
  // STATUS CHANGE
  // ====================================================

  const handleStatusChange = (
    event
  ) => {

    const newStatus =
      event.target.value;

    setSelectedStatus(
      newStatus
    );

    setLeads(
      (previousLeads) =>
        previousLeads.map(
          (lead) =>
            lead.id ===
            selectedLeadId
              ? {
                  ...lead,
                  status:
                    newStatus,
                }
              : lead
        )
    );
  };


  // ====================================================
  // CONNECT
  // ====================================================

  const handleConnect = () => {

    alert(
      `Connecting with ${selectedLead?.name}`
    );
  };


  // ====================================================
  // REJECT
  // ====================================================

  const handleReject = () => {

    if (!selectedLead) return;

    setSelectedStatus(
      "Rejected"
    );

    setLeads(
      (previousLeads) =>
        previousLeads.map(
          (lead) =>
            lead.id ===
            selectedLead.id
              ? {
                  ...lead,
                  status:
                    "Rejected",
                }
              : lead
        )
    );
  };


  // ====================================================
  // UI
  // ====================================================

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#f3f3f3]
      "
      style={{
        fontFamily:
          "Poppins, sans-serif",
      }}
    >

      {/* ==================================================
          HEADER
      ================================================== */}

      <LeadsHeader />


      {/* ==================================================
          TITLE + SEARCH
      ================================================== */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            flex
            min-h-[76px]
            w-full
            max-w-[1400px]
            items-center
            justify-between
            gap-8
            px-5

            sm:px-7

            md:px-8

            lg:px-10

            xl:px-12

            2xl:px-0

            max-md:flex-col
            max-md:items-stretch
            max-md:justify-center
            max-md:gap-[11px]
            max-md:py-[15px]
          "
        >

          {/* TITLE */}

          <div className="min-w-0">

            <h1
              className="
                text-[17px]
                font-semibold
                leading-[21px]
                text-[#222222]

                sm:text-[18px]

                xl:text-[19px]
              "
            >
              Leads
            </h1>

            <p
              className="
                mt-[4px]
                text-[9px]
                leading-[14px]
                text-[#999999]

                sm:text-[10px]

                xl:text-[11px]
              "
            >
              Manage and respond to your clients enquiry effectively
            </p>

          </div>


          {/* SEARCH */}

          <div
            className="
              flex
              h-[37px]
              w-[270px]
              shrink-0
              items-center
              rounded-full
              border
              border-[#b88b87]
              bg-white
              px-3

              sm:w-[285px]

              md:w-[300px]

              lg:w-[315px]

              xl:w-[335px]

              max-md:w-full
            "
          >

            <FaSearch
              className="
                mr-2
                shrink-0
                text-[12px]
                text-[#333333]
              "
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
              placeholder="Search Leads..."
              className="
                min-w-0
                flex-1
                bg-transparent
                text-[10px]
                text-[#555555]
                outline-none
                placeholder:text-[#aaaaaa]
              "
            />

          </div>

        </div>

      </section>


      {/* ==================================================
          TABS
      ================================================== */}

      <section className="w-full bg-[#f3f3f3]">

        <div
          className="
            w-full
            overflow-x-auto
            overscroll-x-contain
            scrollbar-hide
          "
        >

          <div
            className="
              mx-auto
              w-full
              max-w-[1400px]
              border-b
              border-[#cccccc]
              px-5

              sm:px-7

              md:px-8

              lg:px-10

              xl:px-12

              2xl:px-0
            "
          >

            <div
              className="
                flex
                min-w-max
                items-center
                gap-6
                py-[13px]

                sm:gap-8

                md:gap-9

                lg:justify-between
                lg:gap-4

                xl:gap-8
              "
            >

              {TAB_CONFIG.map(
                (tab) => {

                  const isActive =
                    activeTab ===
                    tab.name;

                  return (
                    <button
                      key={tab.name}
                      type="button"
                      onClick={() =>
                        setActiveTab(
                          tab.name
                        )
                      }
                      className={`
                        relative
                        flex
                        shrink-0
                        items-center
                        gap-[7px]
                        bg-transparent
                        px-1
                        pb-[1px]
                        pt-0
                      `}
                    >

                      <span
                        className={`
                          text-[10px]
                          font-medium

                          sm:text-[11px]

                          ${
                            isActive
                              ? "text-[#222222]"
                              : "text-[#666666]"
                          }
                        `}
                      >
                        {tab.name}
                      </span>


                      <span
                        className="
                          flex
                          h-[20px]
                          min-w-[30px]
                          items-center
                          justify-center
                          rounded-[4px]
                          px-[7px]
                          text-[9px]
                          font-semibold
                          text-white
                        "
                        style={{
                          backgroundColor:
                            tab.color,
                        }}
                      >
                        {String(
                          tabCounts[
                            tab.name
                          ]
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>


                      {/* ACTIVE LINE */}

                      {isActive && (
                        <span
                          className="
                            absolute
                            -bottom-[14px]
                            left-0
                            right-0
                            h-[2px]
                            bg-[#222222]
                          "
                        />
                      )}

                    </button>
                  );
                }
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          pb-10
          pt-[20px]

          sm:px-7

          md:px-8

          lg:px-10

          xl:px-12

          2xl:px-0
        "
      >

        <div
          className="
            grid
            w-full
            items-start
            gap-[20px]

            /* SMALL LAPTOP */
            lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.45fr)]
            lg:gap-[24px]

            /* BIG LAPTOP */
            xl:grid-cols-[420px_minmax(0,1fr)]
            xl:gap-[30px]

            /* LARGE DESKTOP */
            2xl:grid-cols-[440px_minmax(0,1fr)]
            2xl:gap-[32px]

            /* TABLET + MOBILE */
            max-lg:grid-cols-1
          "
        >

          {/* ==================================================
              LEFT - LEAD LIST
          ================================================== */}

          <section className="min-w-0">

            {filteredLeads.length === 0 ? (

              <div
                className="
                  rounded-[8px]
                  bg-white
                  px-5
                  py-10
                  text-center
                  text-[11px]
                  text-[#888888]
                  shadow-sm
                "
              >
                No leads found.
              </div>

            ) : (

              <div
                className="
                  flex
                  flex-col
                  gap-[15px]

                  sm:gap-[17px]

                  xl:gap-[18px]
                "
              >

                {filteredLeads.map(
                  (lead) => (

                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      selected={
                        selectedLeadId ===
                        lead.id
                      }
                      onClick={() =>
                        handleSelectLead(
                          lead
                        )
                      }
                    />

                  )
                )}

              </div>

            )}

          </section>


          {/* ==================================================
              RIGHT - DETAILS
          ================================================== */}

          <section className="min-w-0">

            <LeadDetails
              lead={selectedLead}
              selectedStatus={
                selectedStatus
              }
              onStatusChange={
                handleStatusChange
              }
              onConnect={
                handleConnect
              }
              onReject={
                handleReject
              }
            />

          </section>

        </div>

      </main>

    </div>
  );
};

export default Leads;