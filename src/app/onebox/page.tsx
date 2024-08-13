"use client"

import { ChartNoAxesColumn, House, Inbox, Mail, Menu, Send, UserSearch } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {

    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    const handleIconClick = (iconName: string) => {
        setSelectedIcon(iconName);
    };

    return (
        <div className="flex min-h-screen">
            <aside className="border-r-2 border-gray-900 flex flex-col justify-between items-center w-20 bg-gray-800 min-h-screen">
                {/* Logo */}
                <div className="flex justify-center mt-4">
                    <Image src="/image.png" alt="logo" width={50} height={50} quality={100} />
                </div>



                {/* Menu Items */}
                <div className="flex flex-col justify-center items-center gap-4 mt-6 flex-1">
                    <span className={`flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "House" ? "bg-gray-600" : "hover:bg-gray-700"} `}
                        onClick={() => handleIconClick("House")}
                    >
                        <House className="text-white " />
                    </span>
                    <span className={`flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-700 ${selectedIcon === "UserSearch" ? "bg-gray-600" : "hover:bg-gray-700"} `}
                        onClick={() => handleIconClick("UserSearch")}
                    >
                        <UserSearch className="text-white" />
                    </span>
                    <span className={`flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-700 ${selectedIcon === "Mail" ? "bg-gray-600" : "hover:bg-gray-700"} `}
                        onClick={() => handleIconClick("Mail")}>
                        <Mail className="text-white" />
                    </span>
                    <span className={`flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-700 ${selectedIcon === "Send" ? "bg-gray-600" : "hover:bg-gray-700"} `}
                        onClick={() => handleIconClick("Send")}
                    >

                        <Send className="text-white" />
                    </span>
                    <span className={`flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-700 ${selectedIcon === "Menu" ? "bg-gray-600" : "hover:bg-gray-700"} `}
                        onClick={() => handleIconClick("Menu")}
                    >

                        <Menu className="text-white" />
                    </span>
                    <span className={`relative flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-700 ${selectedIcon === "Inbox" ? "bg-gray-600" : "hover:bg-gray-700"} `}
                        onClick={() => handleIconClick("Inbox")}>
                        <Inbox className="text-white" />
                        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs font-medium flex justify-center items-center">
                            3
                        </span>
                    </span>
                    <span className={`flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-700 ${selectedIcon === "Menu" ? "bg-gray-600" : "hover:bg-gray-700"} `}
                        onClick={() => handleIconClick("Menu")}
                        >

                        <ChartNoAxesColumn className="text-white" />
                    </span>

                </div>

                {/* User Avatar */}
                <div className="flex justify-center mb-2">
                    <span className="rounded-full bg-green-800 w-10 h-10 flex justify-center items-center text-white">
                        AS
                    </span>
                </div>

            </aside >
        </div >
    );
};

export default Sidebar;
