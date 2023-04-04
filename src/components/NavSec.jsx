import React from 'react';
import { RiDashboardLine, RiUserLine, RiMoneyDollarCircleLine, RiCalendar2Line, RiLogoutBoxLine, RiSettings4Line } from 'react-icons/ri';

const NavSec = () => {
    return (
        <nav className="bg-gradient-to-b from-pink-200 to-pink-100 text-black w-72 px-4 py-8 flex flex-col rounded-lg shadow-lg mt-10 mb-4 ml-7">
            <div className="flex flex-col space-y-2">
                <a href="/" className="hover:bg-pink-700 bg-pink-700 px-4 py-2 rounded-lg flex items-center">
                    <RiDashboardLine className="mr-2" size="20" />
                    Dashboard
                </a>
                <a href="/hr" className="hover:bg-pink-700 px-4 py-2 rounded-lg flex items-center">
                    <RiUserLine className="mr-2" size="20" />
                    HR
                </a>
                <a href="/payroll" className="hover:bg-pink-700 px-4 py-2 rounded-lg flex items-center">
                    <RiMoneyDollarCircleLine className="mr-2" size="20" />
                    Payroll
                </a>
                <a href="/events" className="hover:bg-pink-700 px-4 py-2 rounded-lg flex items-center">
                    <RiCalendar2Line className="mr-2" size="20" />
                    Events
                </a>
                <a href="/team" className="hover:bg-pink-700 px-4 py-2 rounded-lg flex items-center">
                    <RiUserLine className="mr-2" size="20" />
                    Team
                </a>
                <div className="h-px bg-gray-400 my-2"></div>
                <a href="/settings" className="hover:bg-pink-700 px-4 py-2 rounded-lg flex items-center mt-8">
                    <RiSettings4Line className="mr-2" size="20" />
                    Settings
                </a>
                <a href="/sign-out" className="hover:bg-pink-700 px-4 py-2 rounded-lg flex items-center">
                    <RiLogoutBoxLine className="mr-2" size="20" />
                    Sign Out
                </a>
            </div>
        </nav>
    );
};

export default NavSec;
