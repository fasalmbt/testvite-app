import React from 'react';

const EventSec = () => {
    return (
        <div className="flex justify-center items-center mt-7">
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg shadow-lg p-8 w-5/6 md:w-3/4">
                <h2 className="text-white text-2xl mb-4">Upcoming Events</h2>
                <div className="relative">
                    <div className="border-r-2 border-pink-600 absolute h-full top-0" style={{ left: "15px" }}></div>
                    <ul className="list-none m-0 p-0">
                        <li className="mb-4">
                            <div className="flex items-center mb-2">
                                <div className="bg-pink-600 rounded-full h-6 w-6"></div>
                                <div className="flex-1 ml-4 font-medium text-white">Meeting with team</div>
                                <div className="text-white text-right text-xs">April 5</div>
                            </div>
                            <div className="ml-12">
                                <div className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum sem ut metus auctor.</div>
                            </div>
                        </li>
                        <li className="mb-4">
                            <div className="flex items-center mb-2">
                                <div className="bg-pink-600 rounded-full h-6 w-6"></div>
                                <div className="flex-1 ml-4 font-medium text-white">Product launch</div>
                                <div className="text-white text-right text-xs">April 8</div>
                            </div>
                            <div className="ml-12">
                                <div className="text-sm text-white">Donec at lectus nec ante tincidunt pretium ac sit amet turpis. Sed euismod, sapien in eleifend lacinia, metus orci euismod est, vel eleifend ipsum eros vel dolor.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EventSec;
