
import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaRegCalendar,
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
  MdCelebration,
  MdCorporateFare,
  MdCake,
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
      "Hello,\nWe are currently looking for a dedicated candid photographer and came across\n your portfolio and work samples, which perfectly match our taste and expectations.\n We would be delighted to hire you as the candid photographer for our daughter's\n grand wedding. Additionally, we are interested in exploring any add-on services you\n offer within this category, based on your recommendations.\nKindly let us know a convenient time to connect so we can discuss further details\n and proceed accordingly.",
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
  },
];

// ======================================================
// TABS AND STATUS STYLES
// ======================================================

const TAB_CONFIG = [
  { name: "All", color: "#292929" },
  { name: "New", color: "#078cf0" },
  { name: "Contacted", color: "#f36b08" },
  { name: "Booked", color: "#079b3d" },
  { name: "Rejected", color: "#ff0000" },
  { name: "Missed", color: "#999999" },
];

const STATUS_STYLES = {
  New: { background: "#078cf0", color: "#ffffff" },
  Contacted: { background: "#f36b08", color: "#ffffff" },
  Booked: { background: "#079b3d", color: "#ffffff" },
  Rejected: { background: "#ff0000", color: "#ffffff" },
  Missed: { background: "#999999", color: "#ffffff" },
};

// ======================================================
// EVENT TYPE ICON
// ======================================================

const EventTypeIcon = ({ eventType, className = "" }) => {
  switch (eventType) {
    case "Wedding Celebration":
      return <MdCelebration className={className} />;
    case "Birthday Event":
      return <MdCake className={className} />;
    case "Corporate Event":
      return <MdCorporateFare className={className} />;
    case "DJ Night":
      return <MdNightlife className={className} />;
    default:
      return <MdOutlineEvent className={className} />;
  }
};

// ======================================================
// LEAD CARD
// ======================================================

const LeadCard = ({ lead, selected, onClick }) => {
  const services = lead.services || [
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
        group w-full min-w-0 rounded-[8px] bg-white text-left
        transition-all duration-200 overflow-hidden
        ${
          selected
            ? "border border-[#df0000]"
            : "border border-transparent"
        }
        shadow-[0_1px_6px_rgba(0,0,0,0.06)]
        hover:shadow-[0_3px_12px_rgba(0,0,0,0.10)]
      `}
    >
      <div className="px-[14px] pb-[12px] pt-[16px] sm:px-[15px] xl:px-[16px]">
        {/* NAME + STATUS */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 truncate text-[16px] font-semibold leading-[20px] text-[#181111] xl:text-[18px]">
            {lead.name}
          </h3>

          <span
            className="shrink-0 rounded-[4px] px-[10px] py-[5px] text-[12px] font-medium leading-none text-white"
            style={{
              backgroundColor:
                STATUS_STYLES[lead.status]?.background || "#999999",
              color: STATUS_STYLES[lead.status]?.color || "#ffffff",
            }}
          >
            {lead.status}
          </span>
        </div>

        {/* EVENT + DATE */}
        <div className="mt-[6px] flex items-center justify-between gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-[5px] text-[#e00000]">
            <EventTypeIcon
              eventType={lead.eventType}
              className="shrink-0 text-[15px]"
            />
            <span className="truncate text-[12px] font-medium text-red-800">
              {lead.eventType}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-[4px] text-[#444444]">
            <FaRegCalendar className="text-[14px]" />
            <span className="whitespace-nowrap text-[11px] xl:text-[12px]">
              {lead.date}
            </span>
          </div>
        </div>

        {/* BUDGET */}
        <div className="mt-[12px] flex items-center gap-[5px] text-[#008b25]">
          <FaMoneyBillWave className="text-[16px]" />
          <span className="text-[16px] font-extrabold leading-none text-black">
            {lead.budget}
          </span>
        </div>

        <div className="mt-[13px] border-t border-[#FFD3D3]" />

        {/* SERVICES */}
        <div className="mt-[10px] flex flex-col gap-[7px]">
          {services.map((service, index) => (
            <div
              key={`${lead.id}-${index}`}
              className="flex min-w-0 items-center gap-[5px]"
            >
              <span className="shrink-0 rounded-full bg-[#eaaa00] px-[10px] py-[5px] text-[11px] font-semibold leading-none text-white">
                {service.category}
              </span>

              <span className="h-[20px] w-px shrink-0 bg-[#777777]" />

              <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-[#222222]">
                {service.service}
              </span>

              <span className="hidden shrink-0 text-[11px] text-[#888888] sm:inline">
                ({service.serviceType})
              </span>

              {index === services.length - 1 && (
                <span className="ml-auto shrink-0 whitespace-nowrap text-[11px] italic text-[#777777]">
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

const DetailItem = ({ icon, title, value }) => (
  <div className="flex min-w-0 items-start gap-[9px]">
    <div
      className="
        flex h-[31px] w-[31px] shrink-0 items-center justify-center
        rounded-[5px] border border-[#eaaa00]
        text-[14px] text-[#eaaa00]
      "
    >
      {icon}
    </div>

    <div className="min-w-0 flex-1">
      <p className="text-[12px] leading-[16px] text-[#999999]">
        {title}
      </p>
      <p className="break-words text-[12px] font-semibold leading-[17px] text-[#333333]">
        {value}
      </p>
    </div>
  </div>
);

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
      <div className="flex min-h-[300px] w-full items-center justify-center rounded-[10px] bg-white text-[12px] text-[#888888] shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        Select a lead
      </div>
    );
  }

  return (
    <div className="flex w-full min-w-0 flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_3px_12px_rgba(5,3,5,0.12)]">
      {/* PROFILE HEADER */}
      <div className="flex items-center gap-[16px] border-b border-[#dddddd] px-[20px] py-[20px] sm:px-[28px] sm:py-[24px] xl:px-[36px]">
        <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#f1f1f1] sm:h-[68px] sm:w-[68px]">
          <FaRegUserCircle className="text-[58px] text-[#888888] sm:text-[68px]" />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-[18px] font-semibold leading-[25px] text-[#181111] sm:text-[21px]">
            {lead.name}
          </h2>

          <div className="mt-[6px] flex flex-wrap items-center gap-x-[16px] gap-y-[6px]">
            <div className="flex min-w-0 items-center gap-[5px]">
              <FaEnvelope className="shrink-0 text-[15px] text-[#181111]" />
              <span className="truncate text-[11px] text-[#181111] sm:text-[12px]">
                {lead.email}
              </span>
            </div>

            <div className="flex items-center gap-[5px]">
              <FaPhoneAlt className="shrink-0 text-[14px] text-[#181111]" />
              <span className="whitespace-nowrap text-[11px] text-[#181111] sm:text-[12px]">
                {lead.phone}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS CONTENT */}
      <div className="px-[20px] py-[22px] sm:px-[28px] sm:py-[28px] xl:px-[36px]">
        {/* EVENT DETAILS + REQUIREMENTS */}
        <div className="grid grid-cols-2 gap-x-[22px] gap-y-[25px] sm:gap-x-[32px] xl:gap-x-[45px] max-[540px]:grid-cols-1">
          {/* EVENT DETAILS */}
          <div className="min-w-0">
            <h3 className="mb-[15px] text-[15px] font-semibold uppercase text-[#181111] sm:text-[17px]">
              Event Details
            </h3>

            <div className="flex flex-col gap-[18px]">
              <DetailItem
                icon={<EventTypeIcon eventType={lead.eventType} />}
                title="Event Type"
                value={lead.eventType}
              />

              <DetailItem
                icon={<FaRegCalendar />}
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
            <h3 className="mb-[15px] text-[15px] font-semibold uppercase text-[#181111] sm:text-[17px]">
              Requirements
            </h3>

            <div className="flex flex-col gap-[18px]">
              <DetailItem
                icon={<FaUsers />}
                title="Estimated Guests"
                value={lead.guests}
              />

              <DetailItem
                icon={<FaMoneyBillWave />}
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

        {/* CLIENT MESSAGE */}
        <div className="mt-[28px]">
          <h3 className="mb-[12px] text-[15px] font-semibold uppercase text-[#181111] sm:text-[17px]">
            Client Message
          </h3>

          <div className="min-h-[130px] rounded-[5px] bg-[#FFFAEF] px-[16px] py-[15px] sm:px-[18px] sm:py-[16px]">
            <p className="whitespace-pre-line break-words text-[11px] leading-[18px] text-[#777777] sm:text-[12px] sm:leading-[20px]">
              {lead.message}
            </p>
          </div>
        </div>

        {/* NOTES */}
        <div className="mt-[24px] min-h-[55px]">
          <h3 className="text-[15px] font-semibold uppercase text-[#181111] sm:text-[17px]">
            Notes
          </h3>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          flex min-h-[105px] items-start justify-between gap-[15px]
          border-t border-[#e5e5e5]
          px-[20px] py-[22px]
          sm:px-[28px] sm:py-[24px]
          xl:px-[36px]
          max-[560px]:flex-col
          max-[560px]:items-stretch
          max-[560px]:py-[18px]
        "
      >
        {/* CHANGE STATUS */}
        <div className="flex items-center gap-[10px] max-[560px]:justify-between">
          <span className="whitespace-nowrap text-[15px] font-semibold text-[#1C1C1C] sm:text-[17px]">
            Change Status
          </span>

          <div className="relative">
            <select
              value={selectedStatus}
              onChange={onStatusChange}
              className="
                h-[36px] w-[90px] appearance-none cursor-pointer
                rounded-[5px] border border-[#dddddd]
                bg-[#347FF5] pl-[11px] pr-[26px]
                text-[15px] text-white outline-none
                sm:w-[103px]
              "
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Booked">Booked</option>
              <option value="Rejected">Rejected</option>
              <option value="Missed">Missed</option>
            </select>

            <FaChevronDown className="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[11px] text-white" />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center justify-end gap-[12px] sm:gap-[20px] max-[560px]:w-full">
          <button
            type="button"
            onClick={onConnect}
            className="h-[36px] rounded-[5px] px-[12px] text-[15px] font-semibold text-[#0033A3] cursor-pointer sm:px-[18px] sm:text-[17px] max-[560px]:flex-1"
          >
            Connect
          </button>

          <button
            type="button"
            onClick={onReject}
            className="h-[36px] rounded-[5px] bg-white px-[10px] text-[15px] font-normal text-[#FF2E2E] cursor-pointer sm:px-[16px] sm:text-[17px] max-[560px]:flex-1"
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
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLeadId, setSelectedLeadId] = useState(1);

  const selectedLead =
    leads.find((lead) => lead.id === selectedLeadId) || leads[0];

  const [selectedStatus, setSelectedStatus] = useState(
    selectedLead?.status || "New"
  );

  // TAB COUNTS
  const tabCounts = useMemo(
    () => ({
      All: leads.length,
      New: leads.filter((lead) => lead.status === "New").length,
      Contacted: leads.filter((lead) => lead.status === "Contacted").length,
      Booked: leads.filter((lead) => lead.status === "Booked").length,
      Rejected: leads.filter((lead) => lead.status === "Rejected").length,
      Missed: leads.filter((lead) => lead.status === "Missed").length,
    }),
    [leads]
  );

  // FILTER LEADS
  const filteredLeads = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return leads.filter((lead) => {
      const matchesTab =
        activeTab === "All" || lead.status === activeTab;

      const services = lead.services || [];
      const serviceText = services
        .map((item) => `${item.service} ${item.category}`)
        .join(" ");

      const matchesSearch =
        !search ||
        lead.name.toLowerCase().includes(search) ||
        lead.eventType.toLowerCase().includes(search) ||
        lead.category.toLowerCase().includes(search) ||
        lead.service.toLowerCase().includes(search) ||
        serviceText.toLowerCase().includes(search);

      return matchesTab && matchesSearch;
    });
  }, [leads, activeTab, searchTerm]);

  // SELECT LEAD
  const handleSelectLead = (lead) => {
    setSelectedLeadId(lead.id);
    setSelectedStatus(lead.status);
  };

  // CHANGE STATUS
  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);

    setLeads((previousLeads) =>
      previousLeads.map((lead) =>
        lead.id === selectedLeadId
          ? { ...lead, status: newStatus }
          : lead
      )
    );
  };

  // CONNECT
  const handleConnect = () => {
    if (selectedLead) {
      alert(`Connecting with ${selectedLead.name}`);
    }
  };

  // REJECT
  const handleReject = () => {
    if (!selectedLead) return;

    setSelectedStatus("Rejected");

    setLeads((previousLeads) =>
      previousLeads.map((lead) =>
        lead.id === selectedLead.id
          ? { ...lead, status: "Rejected" }
          : lead
      )
    );
  };

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden bg-[#f3f3f3]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* HEADER */}
      <LeadsHeader />

      {/* TITLE + SEARCH */}
      <section className="w-full bg-white">
        <div
          className="
            mx-auto flex min-h-[76px] w-full max-w-[1400px]
            items-center justify-between gap-8
            px-5 sm:px-7 md:px-8 lg:px-10 xl:px-12
            max-md:flex-col max-md:items-stretch
            max-md:justify-center max-md:gap-[11px] max-md:py-[15px]
          "
        >
          <div className="min-w-0">
            <h1 className="text-[26px] font-medium leading-[31px] text-[#252525] sm:text-[22px] xl:text-[26px]">
              Leads
            </h1>
            <p className="mt-[4px] text-[13px] leading-[18px] text-[#999999] sm:text-[14px]">
              Manage and respond to your clients enquiry effectively
            </p>
          </div>

          {/* SEARCH */}
          <div className="flex h-[37px] w-[270px] shrink-0 items-center rounded-full border border-[#b88b87] bg-white px-3 sm:w-[285px] md:w-[300px] lg:w-[315px] xl:w-[335px] max-md:w-full">
            <FaSearch className="mr-2 shrink-0 text-[12px] text-[#333333]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search Leads..."
              className="min-w-0 flex-1 bg-transparent text-[12px] text-[#555555] outline-none placeholder:text-[#aaaaaa]"
            />
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="w-full bg-[#f3f3f3]">
        <div className="w-full overflow-x-auto overscroll-x-contain scrollbar-hide">
          <div className="mx-auto w-full max-w-[1400px] border-b border-[#cccccc] px-5 sm:px-7 md:px-8 lg:px-10 xl:px-12">
            <div className="flex min-w-max items-center gap-6 py-[13px] sm:gap-8 md:gap-9 lg:justify-between lg:gap-4 xl:gap-8">
              {TAB_CONFIG.map((tab) => {
                const isActive = activeTab === tab.name;

                return (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActiveTab(tab.name)}
                    className="relative flex shrink-0 items-center gap-[7px] bg-transparent px-1 pb-[1px] pt-0"
                  >
                    <span
                      className={`text-[15px] font-medium sm:text-[17px] ${
                        isActive ? "text-[#222222]" : "text-[#666666]"
                      }`}
                    >
                      {tab.name}
                    </span>

                    <span
                      className="flex h-[22px] min-w-[30px] items-center justify-center rounded-[4px] px-[7px] text-[12px] font-medium text-white"
                      style={{ backgroundColor: tab.color }}
                    >
                      {String(tabCounts[tab.name]).padStart(2, "0")}
                    </span>

                    {isActive && (
                      <span className="absolute -bottom-[14px] left-0 right-0 h-[2px] bg-[#222222]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-[1400px] px-5 pb-10 pt-[20px] sm:px-7 md:px-8 lg:px-10 xl:px-12">
        <div
          className="
            grid w-full min-w-0 items-start gap-[20px]
            lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.45fr)]
            lg:gap-[24.00px]
            xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.45fr)]
            xl:gap-[30px]
            max-lg:grid-cols-1
          "
        >
          {/* LEFT - LEAD LIST */}
          <section className="min-w-0">
            {filteredLeads.length === 0 ? (
              <div className="rounded-[8px] bg-white px-5 py-10 text-center text-[12px] text-[#888888] shadow-sm">
                No leads found.
              </div>
            ) : (
              <div className="flex flex-col gap-[18px]">
                {filteredLeads.map((lead) => (
                  <LeadCard
                    key={lead.id}
                    lead={lead}
                    selected={selectedLeadId === lead.id}
                    onClick={() => handleSelectLead(lead)}
                  />
                ))}
              </div>
            )}
          </section>

          {/* RIGHT - DETAILS */}
          <section className="min-w-0">
            <LeadDetails
              lead={selectedLead}
              selectedStatus={selectedStatus}
              onStatusChange={handleStatusChange}
              onConnect={handleConnect}
              onReject={handleReject}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Leads;