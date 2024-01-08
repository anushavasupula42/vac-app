"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession} from 'next-auth/react';
import Dropdown from '@components/Dropdown'
import Feed from '@components/Feed'
import LeaveManagement from "@components/LeaveManagement";

const Nav = () => {
    const dropdownItems = [
        { label: 'Leave Management', href: "/LeaveManagement" },
        { label: 'Attendance', href: '/option2' },
        { label: 'Personal Requests', href: '/option2' },

        { label: 'Application Status', href: '/option2' },
        // Add more options as needed
    ];


    const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
        <Link href="/" className="flex gap-2">
            <p className="text-3xl ">Im-Par</p>
        </Link>

        {/* <Link href="/" className="flex gap-2">
            <p className="logo_text"></p>

        </Link> */}


        <div className="sm:flex">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/" className="outline_btn">
                        Home
                    </Link>
                    <Dropdown items={dropdownItems} />
                    
                    <Link href="/" className="outline_btn">
                        My Applications
                    </Link>
                    <Link href="/" className="outline_btn">
                        Profile
                    </Link>
                    
                    


                </div>

            ) : (
                <>

                </>
            )}

        </div>


    </nav>
  )
}

export default Nav

