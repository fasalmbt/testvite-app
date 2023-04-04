import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendly = () => {
  const [value, setValue] = useState(new Date());

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const today = new Date();
      const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      return isToday ? "bg-blue-500 text-white rounded-full" : "";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <Calendar
        value={value}
        onChange={setValue}
        tileClassName={tileClassName}
        calendarType="US"
      />
    </div>
  );
};

const CalendSec = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-8 mr-7">
      <div className="flex justify-between mb-4">
        <h1 className="text-white text-xl font-bold">{`${currentMonth} ${currentYear}`}</h1>
        <div className="flex items-center">
          <span className="mr-2 bg-red-500 w-3 h-3 rounded-full"></span>
          <span className="text-white font-bold mr-4">9</span>
          <span className="mr-2 bg-green-500 w-3 h-3 rounded-full"></span>
          <span className="text-white font-bold mr-4">0</span>
          <span className="mr-2 bg-purple-500 w-3 h-3 rounded-full"></span>
          <span className="text-white font-bold mr-4">0</span>
          <span className="mr-2 border border-white w-3 h-3 rounded-full"></span>
          <span className="text-white font-bold">0</span>
        </div>
      </div>
      <Calendly />
    </div>
  );
};

export default CalendSec;
