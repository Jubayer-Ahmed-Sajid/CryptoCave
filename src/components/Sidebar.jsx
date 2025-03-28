"use client";
import React, { useState } from "react";
import { CiCoins1 } from "react-icons/ci";
import {
  RiDashboardLine,
  RiExchangeDollarLine,
  RiWalletLine,
} from "react-icons/ri";
import { BiNews } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: RiDashboardLine, label: "Dashboard", href: "/dashboard" },
    { icon: RiExchangeDollarLine, label: "Markets", href: "/markets" },
    { icon: RiWalletLine, label: "Portfolio", href: "/portfolio" },
    { icon: BiNews, label: "News", href: "/news" },
    { icon: IoSettingsOutline, label: "Settings", href: "/settings" },
    { icon: FiHelpCircle, label: "Help", href: "/help" },
  ];

  return (
    <div
      className={cn(
        "h-screen  text-white bg-cyan-900 transition-all duration-300 flex flex-col",
        isExpanded ? "w-52" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={cn("p-4 mb-6", isExpanded ? "flex items-center" : "")}>
        <CiCoins1 className="text-3xl text-white" />
        <span
          className={cn(
            "ml-2 font-bold text-lg whitespace-nowrap",
            isExpanded ? "opacity-100" : "opacity-0"
          )}
        >
          CryptoCave
        </span>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={cn(
                  "mx-auto  p-3 rounded-lg hover:bg-blue-800 transition-colors",
                  isExpanded ? "flex items-center" : ""
                )}
              >
                <item.icon className="text-3xl text-white" />
                <span
                  className={cn(
                    "ml-3 whitespace-nowrap transition-opacity",
                    isExpanded ? "opacity-100" : "opacity-0"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
            <span className="font-semibold">U</span>
          </div>
          <div
            className={cn(
              "ml-3 transition-opacity",
              isExpanded ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="font-medium">User</div>
            <div className="text-xs text-gray-300">user@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
