import React from 'react';
import Search from '../../../assets/search';
import Notification from '@/assets/notification';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className=" flex align-middle items-center pt-4">
            <h1>Stream IT</h1>
            <ul className=" flex gap-2 border bg-white text-black border-gray-400 rounded-md p-2">
                <Link href="/pages/home" className=" cursor-pointer">
                    <li className=" active:border-red-400">Home</li>
                </Link>
                <Link href="/pages/movies" className=" cursor-pointer">
                    <li>Movies & Shows</li>
                </Link>
                <Link href="/pages/support" className=" cursor-pointer">
                    <li>Support</li>
                </Link>
                <Link href="/pages/subscription" className=" cursor-pointer">
                    <li>Subscription</li>
                </Link>
            </ul>
            <div className=" flex gap-4">
                <Search />
                <Notification />
            </div>
        </div>
    );
};

export default Navbar;
