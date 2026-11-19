
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";

const STORAGE_KEY = "vibelyCalendarNotes";
const BLOCKED_DATES_STORAGE_KEY = "vibelyBlockedDates";

const monthNames = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL",
  "MAY", "JUNE", "JULY", "AUGUST",
  "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
];

const weekDays = [
  "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT",
];

// Convert date to YYYY-MM-DD
const getDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// Get consecutive dates starting from a selected date.
// The range automatically continues into the next month/year.
const getDateRangeKeys = (startDate, numberOfDays) => {
  if (!startDate) return [];

  const safeDays = Math.max(1, Math.min(365, Number(numberOfDays) || 1));

  return Array.from({ length: safeDays }, (_, index) => {
    const date = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + index
    );

    return getDateKey(date);
  });
};

// Display date
const formatDate = (date) => {
  return date
    .toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
};

// Display weekday
const formatWeekday = (date) => {
  return date
    .toLocaleDateString("en-US", {
      weekday: "long",
    })
    .toUpperCase();
};

// Get default status for each date
const getDateStatus = (date, today) => {
  const start = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const selected = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const offset = Math.round(
    (selected.getTime() - start.getTime()) / 86400000
  );

  if (offset === 0) {
    return {
      status: "Available all day",
      type: "available",
    };
  }

  if (offset === 1) {
    return {
      status: "1 event from 11 am",
      type: "event",
    };
  }

  if (offset === 2 || offset === 7) {
    return {
      status: "2 events",
      type: "event",
    };
  }

  return {
    status: "Available all day",
    type: "available",
  };
};

// Generate calendar dates
const getMonthWeeks = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const totalDays = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const calendarDays = [];

  // Empty spaces before first date
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push("");
  }

  // Add all month dates
  for (let day = 1; day <= totalDays; day++) {
    calendarDays.push(day);
  }

  // Complete last week
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push("");
  }

  // Divide into weeks
  const weeks = [];

  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return weeks;
};

// Get dates from selected starting date to month end
const getDateList = (
  year,
  month,
  startDay,
  showAll = true
) => {
  const totalDays = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const count = showAll
    ? totalDays - startDay + 1
    : Math.min(3, totalDays - startDay + 1);

  return Array.from(
    { length: Math.max(0, count) },
    (_, index) =>
      new Date(year, month, startDay + index)
  );
};

// Reusable Calendar Grid
const CalendarGrid = ({
  weeks,
  year,
  month,
  today,
  notes,
  blockedDates,
  onDateClick,
  selectedDateKey = "",
  interactive = false,
  popup = false,
}) => {
  const todayKey = getDateKey(today);

  return (
    <div className={popup ? "space-y-[9px]" : "space-y-[6px]"}>
      {weeks.map((week, weekIndex) => (
        <div
          key={weekIndex}
          className={`grid grid-cols-7 ${
            popup ? "gap-[8px] sm:gap-[12px]" : "gap-[6px]"
          }`}
        >
          {week.map((day, dayIndex) => {
            const date =
              day !== ""
                ? new Date(year, month, day)
                : null;

            const dateKey = date
              ? getDateKey(date)
              : "";

            const dateStatus = date
              ? getDateStatus(date, today)
              : null;

            const isToday = dateKey === todayKey;

            const isMarked = Boolean(notes[dateKey]);
            const isBlocked = Boolean(blockedDates?.[dateKey]);

            const isEvent =
              dateStatus?.type === "event";

            const isPast =
              dateKey !== "" && dateKey < todayKey;

            let dateStyle =
              "bg-[#e2e2e2] font-medium text-black";

            if (day === "") {
              dateStyle = "bg-transparent";
            } else if (isBlocked) {
              dateStyle =
                "bg-[#f5bd00] font-semibold text-[#292000] shadow-[0_1px_3px_rgba(0,0,0,0.18)]";
            } else if (isMarked || isEvent) {
              dateStyle =
                "bg-[#f5bd00] font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.35)]";
            } else if (isToday) {
              dateStyle =
                "bg-[#e5e5e5] font-semibold text-black";
            } else if (isPast) {
              dateStyle =
                "bg-[#e2e2e2] font-medium text-[#aaaaaa]";
            }

            const dateSize = popup
              ? "aspect-square w-full text-[14px] sm:text-[20px]"
              : "h-[32px] w-full text-[14px]";

            const commonClass = `
              flex items-center justify-center
              rounded-[7px] font-medium transition
              ${dateSize}
              ${dateStyle}
              ${selectedDateKey && dateKey === selectedDateKey ? "ring-2 ring-[#d99d00] ring-offset-1" : ""}
              ${
                interactive && day !== ""
                  ? "cursor-pointer hover:ring-2 hover:ring-[#d99d00]"
                  : "cursor-default"
              }
            `;

            if (interactive) {
              return (
                <button
                  key={`${weekIndex}-${dayIndex}`}
                  type="button"
                  disabled={day === ""}
                  onClick={() => onDateClick(day)}
                  aria-label={
                    day !== ""
                      ? `Select ${dateKey}`
                      : "Empty date"
                  }
                  className={commonClass}
                >
                  {day}
                </button>
              );
            }

            return (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={commonClass}
              >
                {day}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const AvailabilityCalendar = () => {
  // Automatically get current date
  const [today] = useState(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  });

  const todayKey = getDateKey(today);

  // Main calendar month
  const [currentDate, setCurrentDate] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );

  // View all dates
  const [showAllDates, setShowAllDates] = useState(false);

  // Edit popup
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Popup month
  const [modalMonth, setModalMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );

  // Selected date inside the Edit Calendar popup
  const [selectedDate, setSelectedDate] = useState(
    () => new Date(today)
  );

  // Date selected directly from the dashboard calendar
  const [mainSelectedDate, setMainSelectedDate] = useState(null);

  // Saved notes
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Unable to load saved notes:", error);
      return {};
    }
  });

  // Dates blocked by the user from the calendar UI
  const [blockedDates, setBlockedDates] = useState(() => {
    try {
      const saved = localStorage.getItem(BLOCKED_DATES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Unable to load blocked dates:", error);
      return {};
    }
  });

  // Draft note and event name for the selected blocked date range.
  const [note, setNote] = useState("");
  const [eventName, setEventName] = useState("");

  // Number of consecutive days to block for one event.
  const [blockDays, setBlockDays] = useState(2);

  // Save notes in localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(notes)
      );
    } catch (error) {
      console.error("Unable to save notes:", error);
    }
  }, [notes]);

  // Save blocked dates automatically so they remain after refresh
  useEffect(() => {
    try {
      localStorage.setItem(
        BLOCKED_DATES_STORAGE_KEY,
        JSON.stringify(blockedDates)
      );
    } catch (error) {
      console.error("Unable to save blocked dates:", error);
    }
  }, [blockedDates]);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const modalMonthIndex = modalMonth.getMonth();
  const modalYear = modalMonth.getFullYear();

  const mainWeeks = getMonthWeeks(currentDate);
  const modalWeeks = getMonthWeeks(modalMonth);

  const selectedDateKey = selectedDate
    ? getDateKey(selectedDate)
    : "";

  // Select a date directly from the dashboard calendar
  const handleMainCalendarDateClick = (day) => {
    if (!day) return;

    const date = new Date(currentYear, currentMonth, day);
    setMainSelectedDate(date);
    setEventName(blockedDates[getDateKey(date)]?.eventName || "");
  };

  // Block or unblock the selected date range from the dashboard calendar.
  const handleToggleMainBlockedDate = () => {
    if (!mainSelectedDate) return;

    const dateKeys = getDateRangeKeys(mainSelectedDate, blockDays);
    const shouldUnblock = dateKeys.some((key) => Boolean(blockedDates[key]));

    if (!shouldUnblock && !eventName.trim()) {
      window.alert("Please enter an event name before blocking the dates.");
      return;
    }

    setBlockedDates((prev) => {
      const updatedBlockedDates = { ...prev };

      dateKeys.forEach((key) => {
        if (shouldUnblock) {
          delete updatedBlockedDates[key];
        } else {
          updatedBlockedDates[key] = {
            eventName: eventName.trim(),
            groupId: `${getDateKey(mainSelectedDate)}-${Date.now()}`,
          };
        }
      });

      return updatedBlockedDates;
    });
  };

  // Previous month
  const handlePreviousMonth = () => {
    setMainSelectedDate(null);
    setCurrentDate(
      (prev) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth() - 1,
          1
        )
    );

    setShowAllDates(false);
  };

  // Next month
  const handleNextMonth = () => {
    setMainSelectedDate(null);
    setCurrentDate(
      (prev) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth() + 1,
          1
        )
    );

    setShowAllDates(false);
  };

  // Open Edit Calendar popup
  const handleEditCalendar = () => {
    const isCurrentMonth =
      currentYear === today.getFullYear() &&
      currentMonth === today.getMonth();

    const initialDate = isCurrentMonth
      ? new Date(today)
      : new Date(currentYear, currentMonth, 1);

    setModalMonth(
      new Date(currentYear, currentMonth, 1)
    );

    setSelectedDate(initialDate);
    setNote(notes[getDateKey(initialDate)] || "");
    setEventName(blockedDates[getDateKey(initialDate)]?.eventName || "");
    setIsEditOpen(true);
  };

  // Close popup
  const handleCloseModal = () => {
    setIsEditOpen(false);
    setNote("");
  };

  // Previous month in popup
  const handleModalPreviousMonth = () => {
    const newMonth = new Date(
      modalYear,
      modalMonthIndex - 1,
      1
    );

    setModalMonth(newMonth);

    const firstDate = new Date(
      newMonth.getFullYear(),
      newMonth.getMonth(),
      1
    );

    setSelectedDate(firstDate);
    setNote(notes[getDateKey(firstDate)] || "");
    setEventName(blockedDates[getDateKey(firstDate)]?.eventName || "");
  };

  // Next month in popup
  const handleModalNextMonth = () => {
    const newMonth = new Date(
      modalYear,
      modalMonthIndex + 1,
      1
    );

    setModalMonth(newMonth);

    const firstDate = new Date(
      newMonth.getFullYear(),
      newMonth.getMonth(),
      1
    );

    setSelectedDate(firstDate);
    setNote(notes[getDateKey(firstDate)] || "");
    setEventName(blockedDates[getDateKey(firstDate)]?.eventName || "");
  };

  // Select date in popup calendar
  const handleSelectDate = (day) => {
    if (day === "") return;

    const date = new Date(
      modalYear,
      modalMonthIndex,
      day
    );

    setSelectedDate(date);
    setNote(notes[getDateKey(date)] || "");
    setEventName(blockedDates[getDateKey(date)]?.eventName || "");
  };

  // Select date in popup left-side list
  const handleSelectListDate = (date) => {
    setSelectedDate(date);
    setNote(notes[getDateKey(date)] || "");
    setEventName(blockedDates[getDateKey(date)]?.eventName || "");
  };

  // Note change
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  // Save note
  const handleSaveNote = () => {
    if (!selectedDate) return;

    const key = getDateKey(selectedDate);

    setNotes((prev) => {
      const updatedNotes = { ...prev };

      if (note.trim()) {
        updatedNotes[key] = note.trim();
      } else {
        delete updatedNotes[key];
      }

      return updatedNotes;
    });

    setIsEditOpen(false);
    setNote("");
  };

  // Block or unblock the selected date range from the edit popup.
  const handleToggleBlockedDate = () => {
    if (!selectedDate) return;

    const dateKeys = getDateRangeKeys(selectedDate, blockDays);
    const shouldUnblock = dateKeys.some((key) => Boolean(blockedDates[key]));

    if (!shouldUnblock && !eventName.trim()) {
      window.alert("Please enter an event name before blocking the dates.");
      return;
    }

    setBlockedDates((prev) => {
      const updatedBlockedDates = { ...prev };

      dateKeys.forEach((key) => {
        if (shouldUnblock) {
          delete updatedBlockedDates[key];
        } else {
          updatedBlockedDates[key] = {
            eventName: eventName.trim(),
            groupId: `${getDateKey(selectedDate)}-${Date.now()}`,
          };
        }
      });

      return updatedBlockedDates;
    });
  };

  const isSelectedRangeBlocked = (date) => {
    if (!date) return false;

    return getDateRangeKeys(date, blockDays).some((key) =>
      Boolean(blockedDates[key])
    );
  };

  // View all dates
  const handleViewAllDates = () => {
    setShowAllDates((prev) => !prev);
  };

  // Status text
  const getStatusLabel = (date) => {
    const key = getDateKey(date);

    if (blockedDates[key]) {
      return typeof blockedDates[key] === "object"
        ? blockedDates[key].eventName || "Blocked"
        : "Blocked";
    }

    if (notes[key]) {
      return notes[key];
    }

    return getDateStatus(date, today).status;
  };

  // Status color
  const getStatusColor = (date) => {
    const key = getDateKey(date);

    if (blockedDates[key]) {
      return "text-[#b88600]";
    }

    if (notes[key]) {
      return "text-[#b88600]";
    }

    const status = getDateStatus(date, today);

    return status.type === "available"
      ? "text-green-600"
      : "text-[#a90000] underline";
  };

  // Main left-side dates
  const mainIsCurrentMonth =
    currentYear === today.getFullYear() &&
    currentMonth === today.getMonth();

  const mainStartDay = mainIsCurrentMonth
    ? today.getDate()
    : 1;

  const visibleDates = getDateList(
    currentYear,
    currentMonth,
    mainStartDay,
    showAllDates
  );

  // Popup left-side dates: all remaining dates
  const modalIsCurrentMonth =
    modalYear === today.getFullYear() &&
    modalMonthIndex === today.getMonth();

  const modalStartDay = modalIsCurrentMonth
    ? today.getDate()
    : 1;

  const modalVisibleDates = getDateList(
    modalYear,
    modalMonthIndex,
    modalStartDay,
    true
  );

  return (
    <>
      {/* MAIN AVAILABILITY CALENDAR */}
      <section
        className="w-full rounded-[14px] bg-white"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* HEADER */}
        <div className="flex min-h-[60px] items-center justify-between border-b border-[#e5e5e5] px-5 sm:px-8 md:px-[44px]">

          <h2 className="text-[17px] font-semibold uppercase tracking-[1px] text-[#252525] sm:text-[20px]">
            AVAILABILITY CALENDAR
          </h2>

          <button
            type="button"
            onClick={handleEditCalendar}
            className="whitespace-nowrap cursor-pointer text-[14px] font-medium text-[#252525] underline sm:text-[16px]"
          >
            Edit Calendar
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-6 px-5 py-6 sm:px-8 md:grid-cols-[minmax(0,1fr)_318px] md:gap-8 md:px-[44px] md:py-[28px]">

          {/* LEFT SIDE - DATE DETAILS */}
          <div className="min-w-0">

            <div
              className={`space-y-[28px] ${
                showAllDates
                  ? "max-h-[500px] overflow-y-auto pr-2"
                  : ""
              }`}
            >
              {visibleDates.map((date) => {
                const dateKey = getDateKey(date);

                return (
                  <div
                    key={dateKey}
                    className="flex min-h-[54px] items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold text-[#333] sm:text-[15px]">
                        {formatDate(date)}
                      </p>

                      <p className="mt-[3px] text-[14px] font-normal text-[#444] sm:text-[16px]">
                        {dateKey === todayKey
                          ? "TODAY"
                          : formatWeekday(date)}
                      </p>
                    </div>

                    <p
                      className={`shrink-0 text-right text-[13px] font-semibold sm:text-[16px] ${getStatusColor(date)}`}
                    >
                      {getStatusLabel(date)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* VIEW ALL DATES */}
            <div className="mt-[20px] border-t border-[#cccccc] pt-[14px]">
              <button
                type="button"
                onClick={handleViewAllDates}
                className="cursor-pointer text-[13px] font-medium text-[#333] underline sm:text-[14px]"
              >
                {showAllDates ? "view less" : "view all dates"}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - CALENDAR */}
          <div className="w-full md:w-[318px]">

            <div className="rounded-[15px] border border-[#d2d2d2] bg-[#f3f3f3] p-[15px] shadow-[0_0_3px_1px_rgba(0,0,0,0.18)]">

              {/* MONTH HEADER */}
              <div className="mb-[10px] flex h-[20px] items-center justify-between px-[12px]">

                <button
                  type="button"
                  onClick={handlePreviousMonth}
                  aria-label="Previous month"
                  className="flex h-[24px] w-[24px] items-center justify-center rounded hover:bg-gray-200"
                >
                  <FaChevronLeft className="text-[12px] text-[#222]" />
                </button>

                <span className="text-[14px] font-bold text-[#b00000]">
                  {monthNames[currentMonth]} {currentYear}
                </span>

                <button
                  type="button"
                  onClick={handleNextMonth}
                  aria-label="Next month"
                  className="flex h-[24px] w-[24px] items-center justify-center rounded hover:bg-gray-200"
                >
                  <FaChevronRight className="text-[12px] text-[#222]" />
                </button>
              </div>

              {/* WEEKDAY NAMES */}
              <div className="mb-[6px] grid grid-cols-7 gap-[6px]">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="flex h-[18px] items-center justify-center text-[8px] font-bold text-[#555]"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* CALENDAR DATES */}
              <CalendarGrid
                weeks={mainWeeks}
                year={currentYear}
                month={currentMonth}
                today={today}
                notes={notes}
                blockedDates={blockedDates}
                onDateClick={handleMainCalendarDateClick}
                selectedDateKey={mainSelectedDate ? getDateKey(mainSelectedDate) : ""}
                interactive={true}
              />

              {/* DIRECT BLOCK / UNBLOCK ACTION */}
              <div className="mt-[14px] border-t border-[#d5d5d5] pt-[12px]">
                {mainSelectedDate ? (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-[#333]">
                        {formatDate(mainSelectedDate)}
                      </p>
                      <p className={`mt-1 text-[12px] font-semibold ${isSelectedRangeBlocked(mainSelectedDate) ? "text-[#b88600]" : "text-green-600"}`}>
                        {isSelectedRangeBlocked(mainSelectedDate)
                          ? `${blockDays} day${Number(blockDays) === 1 ? "" : "s"} blocked`
                          : "Available"}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {!isSelectedRangeBlocked(mainSelectedDate) && (
                        <input
                          type="text"
                          value={eventName}
                          onChange={(event) => setEventName(event.target.value)}
                          placeholder="Event name"
                          maxLength={80}
                          className="h-[34px] w-[110px] rounded-[6px] border border-[#d2d2d2] bg-white px-2 text-[11px] outline-none focus:border-[#d99d00]"
                        />
                      )}
                      <label className="flex items-center gap-2 text-[11px] font-medium text-[#555]">
                        Days
                        <input
                          type="number"
                          min="1"
                          max="365"
                          value={blockDays}
                          onChange={(event) =>
                            setBlockDays(Math.max(1, Math.min(365, Number(event.target.value) || 1)))
                          }
                          className="h-[34px] w-[58px] rounded-[6px] border border-[#d2d2d2] bg-white px-2 text-center text-[12px] outline-none focus:border-[#d99d00]"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={handleToggleMainBlockedDate}
                        className={`rounded-[7px] px-[13px] py-[8px] text-[12px] font-semibold transition ${
                          isSelectedRangeBlocked(mainSelectedDate)
                            ? "bg-[#eeeeee] text-[#333333] hover:bg-[#dddddd]"
                            : "bg-[#f5bd00] text-[#292000] hover:bg-[#e5ad00]"
                        }`}
                      >
                        {isSelectedRangeBlocked(mainSelectedDate)
                          ? `Unblock ${blockDays} Day${Number(blockDays) === 1 ? "" : "s"}`
                          : `Block ${blockDays} Day${Number(blockDays) === 1 ? "" : "s"}`}
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-[11px] text-[#777]">Select a date to block or unblock it</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDIT CALENDAR POPUP */}
      {isEditOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-black/50 p-[10px] sm:p-[18px]"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-calendar-title"
            className="my-auto max-h-[96vh] w-full max-w-[1150px] overflow-x-hidden overflow-y-auto rounded-[15px] bg-white shadow-2xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >

            {/* POPUP HEADER */}
            <div className="flex min-h-[70px] items-center justify-between border-b border-[#dedede] px-5 sm:px-[44px]">

              <h2
                id="edit-calendar-title"
                className="text-[17px] font-semibold uppercase tracking-[1px] text-[#252525] sm:text-[20px]"
              >
                AVAILABILITY CALENDAR
              </h2>

              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close popup"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-full text-[#555] hover:bg-gray-100"
              >
                <FaTimes className="text-[19px]" />
              </button>
            </div>

            {/* POPUP CONTENT */}
            <div className="grid min-w-0 grid-cols-1 gap-8 px-5 py-6 sm:px-[44px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-[36px] md:py-[32px]">

              {/* LEFT SIDE - ALL DATES AND STATUS */}
              <div className="min-w-0">

                <div className="max-h-[700px] space-y-[22px] overflow-y-auto pr-2">

                  {modalVisibleDates.map((date) => (
                    <button
                      key={getDateKey(date)}
                      type="button"
                      onClick={() => handleSelectListDate(date)}
                      className={`
                        flex min-h-[68px] w-full items-center justify-between gap-3
                        rounded-[4px] px-1 text-left transition
                        ${
                          selectedDateKey === getDateKey(date)
                            ? "bg-[#fff8e6]"
                            : "bg-transparent hover:bg-gray-50"
                        }
                      `}
                    >
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold text-[#333] sm:text-[17px]">
                          {formatDate(date)}
                        </p>

                        <p className="mt-[3px] text-[14px] font-normal text-[#444] sm:text-[17px]">
                          {getDateKey(date) === todayKey
                            ? "TODAY"
                            : formatWeekday(date)}
                        </p>
                      </div>

                      <p
                        className={`shrink-0 text-right text-[13px] font-semibold sm:text-[16px] ${getStatusColor(date)}`}
                      >
                        {getStatusLabel(date)}
                      </p>
                    </button>
                  ))}

                </div>
              </div>

              {/* RIGHT SIDE - CALENDAR AND MARK DATE */}
              <div className="min-w-0 w-full rounded-[16px] border border-[#d2d2d2] bg-white p-[14px] shadow-[0_1px_5px_rgba(0,0,0,0.18)] sm:p-[20px]">

                {/* CALENDAR BOX */}
                <div className="w-full min-w-0 rounded-[22px] border border-[#dddddd] bg-[#f4f2f2] p-[12px] shadow-[0_0_4px_2px_rgba(0,0,0,0.15)] sm:p-[20px]">

                  {/* MONTH HEADER */}
                  <div className="mb-[16px] flex items-center justify-between px-[8px] sm:px-[22px]">

                    <button
                      type="button"
                      onClick={handleModalPreviousMonth}
                      aria-label="Previous month"
                      className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded hover:bg-gray-200"
                    >
                      <FaChevronLeft className="text-[17px] text-black" />
                    </button>

                    <span className="text-[16px] font-bold text-[#aa0000] sm:text-[22px]">
                      {monthNames[modalMonthIndex]} {modalYear}
                    </span>

                    <button
                      type="button"
                      onClick={handleModalNextMonth}
                      aria-label="Next month"
                      className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded hover:bg-gray-200"
                    >
                      <FaChevronRight className="text-[17px] text-black" />
                    </button>
                  </div>

                  {/* POPUP CALENDAR DATES */}
                  <CalendarGrid
                    weeks={modalWeeks}
                    year={modalYear}
                    month={modalMonthIndex}
                    today={today}
                    notes={notes}
                    blockedDates={blockedDates}
                    onDateClick={handleSelectDate}
                    interactive={true}
                    popup={true}
                  />
                </div>

                {/* MARK DATE */}
                <div className="mt-[18px] flex min-w-0 items-center justify-between gap-2 border-t border-[#c7c7c7] px-[4px] pt-[18px]">

                  <h3 className="shrink-0 text-[15px] font-semibold text-[#999] sm:text-[18px]">
                    SELECTED DATE
                  </h3>

                  <span className="truncate text-right text-[15px] text-[#999] sm:text-[19px]">
                    {selectedDate
                      ? `--- ${monthNames[selectedDate.getMonth()]}`
                      : ""}
                  </span>
                </div>

                {/* INFORMATION */}
                <div className="mt-[22px] flex items-start gap-[9px] text-[13px] text-[#444] sm:text-[16px]">
                  <FaInfoCircle className="mt-[2px] shrink-0 text-[20px] text-[#f0ae00]" />

                  <span className="leading-[1.5]">
                    Select a starting date, choose the event duration, then block or unblock the consecutive dates.
                  </span>
                </div>

                {/* EVENT NAME */}
                <div className="mt-[18px]">
                  <label className="mb-2 block text-[13px] font-semibold text-[#333]">
                    Event name
                  </label>
                  <input
                    type="text"
                    value={eventName}
                    onChange={(event) => setEventName(event.target.value)}
                    placeholder="Enter event name (e.g. Wedding Event)"
                    maxLength={80}
                    className="h-[44px] w-full rounded-[6px] border border-[#d2d2d2] bg-white px-3 text-[13px] outline-none focus:border-[#d99d00]"
                  />
                </div>

                {/* EVENT DURATION */}
                <div className="mt-[18px] flex flex-wrap items-center justify-between gap-3 rounded-[8px] bg-[#fff9e6] px-3 py-3">
                  <div>
                    <p className="text-[13px] font-semibold text-[#333]">Event duration</p>
                    <p className="mt-1 text-[11px] text-[#777]">Block consecutive dates from the selected date</p>
                  </div>
                  <label className="flex items-center gap-2 text-[12px] font-medium text-[#555]">
                    Number of days
                    <input
                      type="number"
                      min="1"
                      max="365"
                      value={blockDays}
                      onChange={(event) =>
                        setBlockDays(Math.max(1, Math.min(365, Number(event.target.value) || 1)))
                      }
                      className="h-[38px] w-[70px] rounded-[6px] border border-[#d2d2d2] bg-white px-2 text-center text-[13px] outline-none focus:border-[#d99d00]"
                    />
                  </label>
                </div>

                {/* BLOCK / UNBLOCK SELECTED DATE */}
                <div className="mt-[18px] flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[14px] font-medium text-[#444] sm:text-[15px]">
                    {selectedDate && isSelectedRangeBlocked(selectedDate)
                      ? `Blocked dates found in this ${blockDays}-day range`
                      : `All ${blockDays} days are available`}
                  </p>

                  <button
                    type="button"
                    onClick={handleToggleBlockedDate}
                    disabled={!selectedDate}
                    className={`min-w-[145px] rounded-[8px] px-[20px] py-[11px] text-[14px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 sm:text-[16px] ${
                      selectedDate && isSelectedRangeBlocked(selectedDate)
                        ? "bg-[#eeeeee] text-[#333333] hover:bg-[#dddddd]"
                        : "bg-[#f5bd00] text-[#292000] hover:bg-[#e5ad00]"
                    }`}
                  >
                    {selectedDate && isSelectedRangeBlocked(selectedDate)
                      ? `Unblock ${blockDays} Day${Number(blockDays) === 1 ? "" : "s"}`
                      : `Block ${blockDays} Day${Number(blockDays) === 1 ? "" : "s"}`}
                  </button>
                </div>

                {/* OPTIONAL NOTE INPUT */}
                <div className="mt-[18px]">
                  <input
                    type="text"
                    value={note}
                    onChange={handleNoteChange}
                    placeholder="Enter Text"
                    maxLength={200}
                    className="h-[54px] w-full min-w-0 rounded-[5px] border border-[#d3d3d3] px-[20px] text-[14px] text-[#333] outline-none placeholder:text-[#aaaaaa] focus:border-[#d99d00] sm:text-[16px]"
                  />
                </div>

                {/* SAVE BUTTON */}
                <div className="mt-[30px] flex justify-end">
                  <button
                    type="button"
                    onClick={handleSaveNote}
                    className="min-w-[125px] rounded-[10px] bg-[#b48686] px-[25px] py-[12px] text-[17px] font-medium text-white transition hover:bg-[#a47373] sm:text-[20px]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AvailabilityCalendar;
