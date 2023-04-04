import React from 'react'
import { HiBell, HiSearch } from 'react-icons/hi';

const Header = () => {
    return (
        <>
            <header className="bg-white text-gray-100 flex justify-between items-center px-6 py-3">
                <div className="flex items-center">
                    <span className="text-xl text-black font-bold uppercase tracking-widest">hroski</span>
                </div>
                <div className="flex items-center justify-center flex-grow">
                    <form className="w-full max-w-md">
                        <div className="flex items-center border-2 border-gray-300 rounded-full py-1 px-2">
                            <input className="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-sm" type="text" placeholder="Search for employees" />
                            <button className="flex-shrink-0 text-gray-700 hover:text-gray-900" type="button">
                                <HiSearch />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-end">
                    <div className="relative mr-4">
                        <div className="absolute -top-2 -right-2 rounded-full bg-red-600 w-4 h-4 text-white text-xs flex items-center justify-center">3</div>
                        <HiBell className="text-lg text-gray-800 hover:text-gray-900 cursor-pointer border-2 border-gray-400 rounded-full p-2" />
                    </div>
                    <div className="text-gray-800">
                        <div className="font-semibold">Fasal</div>
                        <div className="text-sm text-gray-400">Full stack developer</div>
                    </div>
                    <img className="w-8 h-8 ml-4 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small/man-avatar-icon-free-vector.jpg" alt="Admin Avatar" />
                </div>
            </header>
        </>
    );
};

export default Header;
