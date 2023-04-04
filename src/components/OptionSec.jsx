import React from 'react';
import { MdEventBusy, MdPeople, MdAssignment, MdGroup, MdViewAgenda } from 'react-icons/md';

const OptionSec = () => {
  return (
    <>
      <span className="text-xl text-black font-bold uppercase tracking-widest ml-7">Quick links</span>
      <div className="flex flex-wrap mt-7 ml-7">
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md p-4 flex items-center w-52 mr-4 mb-4">
          <MdEventBusy className="text-white mr-4 text-2xl" />
          <p className="text-white text-sm font-medium truncate">Leave</p>
        </div>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md p-4 flex items-center w-52 mr-4 mb-4">
          <MdAssignment className="text-white mr-4 text-2xl" />
          <p className="text-white text-sm font-medium truncate">Appraisals</p>
        </div>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md p-4 flex items-center w-52 mr-4 mb-4">
          <MdPeople className="text-white mr-4 text-2xl" />
          <p className="text-white text-sm font-medium truncate">Colleagues</p>
        </div>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md p-4 flex items-center w-52 mr-4 mb-4">
          <MdGroup className="text-white mr-4 text-2xl" />
          <p className="text-white text-sm font-medium truncate">Team Meeting</p>
        </div>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md p-4 flex items-center w-52 mr-4 mb-4">
          <MdViewAgenda className="text-white mr-4 text-2xl" />
          <p className="text-white text-sm font-medium truncate">Quick Meetup</p>
        </div>
      </div>
    </>
  )
}

export default OptionSec;
