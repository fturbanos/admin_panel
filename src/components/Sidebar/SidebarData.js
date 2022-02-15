import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Equipment",
    path: "/equipment",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Add Equipment",
        path: "/equipment/add",
        icon: <IoIcons.IoIosBuild />,
      },
      {
        title: "Add Equipment Type",
        path: "/equipment/type",
        icon: <IoIcons.IoIosBuild />,
      },
      {
        title: "View Equipment List",
        path: "/equipment/view",
        icon: <IoIcons.IoIosBuild />,
      },
      {
        title: "View Equipment Request",
        path: "/equipment/request",
        icon: <IoIcons.IoIosBuild />,
      },
    ],
  },
  {
    title: "Employee",
    path: "/employee",
    icon: <FaIcons.FaIdBadge />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Add Employee",
        path: "/employee/add",
        icon: <IoIcons.IoIosContact />,
      },
      {
        title: "Employee List",
        path: "/employee/list",
        icon: <IoIcons.IoIosContact />,
      },
    ],
  },
  {
    title: "Office",
    path: "/office",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Add Office",
        path: "/office/add",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "View Office",
        path: "/office/view",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Users",
    path: "/users",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Add User",
        path: "/users/add",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "View Users",
        path: "/users/view",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Logs",
    path: "/logs",
    icon: <FaIcons.FaIdBadge />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Equipments",
        path: "/logs/equipments",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Employee",
        path: "/logs/employee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Office",
        path: "/logs/office",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Users",
        path: "/logs/users",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
