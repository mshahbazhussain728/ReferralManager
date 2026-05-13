
// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar.jsx";
// import Groups from "../assets/Groups.png";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// // ── ALL 22 marketing agents with their yearly-trial table data ────────────────
// const ALL_LEFT_USERS = [
//   {
//     name: "Courtney Smith",
//     balance: "$5000", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/1.jpg", earning: 5000,
//     tableData: [
//       { name: "Muhammad Junaid Khan", date: "May 15 2024", time: "11:35 PM", image: "https://randomuser.me/api/portraits/men/10.jpg"   },
//       { name: "Sarah Johnson",        date: "May 16 2024", time: "10:20 AM", image: "https://randomuser.me/api/portraits/women/11.jpg" },
//       { name: "Ahmed Ali",            date: "Dec 17 2024", time: "02:45 PM", image: "https://randomuser.me/api/portraits/men/12.jpg"   },
//       { name: "Emily Davis",          date: "Dec 18 2024", time: "09:15 AM", image: "https://randomuser.me/api/portraits/women/13.jpg" },
//       { name: "Michael Brown",        date: "Dec 19 2024", time: "04:30 PM", image: "https://randomuser.me/api/portraits/men/14.jpg"   },
//       { name: "Jessica Wilson",       date: "Dec 20 2024", time: "01:50 PM", image: "https://randomuser.me/api/portraits/women/15.jpg" },
//       { name: "David Martinez",       date: "Dec 21 2024", time: "08:25 AM", image: "https://randomuser.me/api/portraits/men/16.jpg"   },
//       { name: "Lisa Anderson",        date: "Dec 22 2024", time: "03:40 PM", image: "https://randomuser.me/api/portraits/women/17.jpg" },
//       { name: "James Taylor",         date: "May 23 2024", time: "12:15 PM", image: "https://randomuser.me/api/portraits/men/18.jpg"   },
//       { name: "Maria Garcia",         date: "May 24 2024", time: "05:55 PM", image: "https://randomuser.me/api/portraits/women/19.jpg" },
//       { name: "Robert Thomas",        date: "May 25 2024", time: "07:30 AM", image: "https://randomuser.me/api/portraits/men/20.jpg"   },
//       { name: "Jennifer Moore",       date: "May 26 2024", time: "11:45 AM", image: "https://randomuser.me/api/portraits/women/21.jpg" },
//       { name: "William Clark",        date: "May 27 2024", time: "09:30 AM", image: "https://randomuser.me/api/portraits/men/21.jpg"   },
//       { name: "Patricia Lewis",       date: "May 28 2024", time: "02:15 PM", image: "https://randomuser.me/api/portraits/women/22.jpg" },
//       { name: "Richard Walker",       date: "May 29 2024", time: "10:45 AM", image: "https://randomuser.me/api/portraits/men/22.jpg"   },
//       { name: "Linda Hall",           date: "May 30 2024", time: "04:20 PM", image: "https://randomuser.me/api/portraits/women/23.jpg" },
//       { name: "Charles Allen",        date: "May 31 2024", time: "08:50 AM", image: "https://randomuser.me/api/portraits/men/23.jpg"   },
//       { name: "Barbara Young",        date: "Jun 01 2024", time: "01:35 PM", image: "https://randomuser.me/api/portraits/women/24.jpg" },
//       { name: "Joseph King",          date: "Jun 02 2024", time: "11:10 AM", image: "https://randomuser.me/api/portraits/men/24.jpg"   },
//       { name: "Susan Wright",         date: "Jun 03 2024", time: "03:25 PM", image: "https://randomuser.me/api/portraits/women/25.jpg" },
//     ],
//   },
//   {
//     name: "Arlene",
//     balance: "$4000", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/2.jpg", earning: 4000,
//     tableData: [
//       { name: "Thomas Scott",   date: "Jun 04 2024", time: "09:40 AM", image: "https://randomuser.me/api/portraits/men/25.jpg"   },
//       { name: "Nancy Green",    date: "Jun 05 2024", time: "02:55 PM", image: "https://randomuser.me/api/portraits/women/26.jpg" },
//       { name: "Daniel Adams",   date: "Jun 06 2024", time: "10:05 AM", image: "https://randomuser.me/api/portraits/men/26.jpg"   },
//       { name: "Betty Baker",    date: "Jun 07 2024", time: "04:40 PM", image: "https://randomuser.me/api/portraits/women/27.jpg" },
//       { name: "Matthew Nelson", date: "Jun 08 2024", time: "08:15 AM", image: "https://randomuser.me/api/portraits/men/27.jpg"   },
//       { name: "Carlos Rivera",  date: "Jun 09 2024", time: "11:30 AM", image: "https://randomuser.me/api/portraits/men/28.jpg"   },
//       { name: "Diana Prince",   date: "Jun 10 2024", time: "03:15 PM", image: "https://randomuser.me/api/portraits/women/28.jpg" },
//       { name: "Ethan Cole",     date: "Jun 11 2024", time: "09:50 AM", image: "https://randomuser.me/api/portraits/men/29.jpg"   },
//     ],
//   },
//   {
//     name: "Aubrey",
//     balance: "$3000", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/3.jpg", earning: 3000,
//     tableData: [
//       { name: "Eric Reed",     date: "Jun 24 2024", time: "10:25 AM", image: "https://randomuser.me/api/portraits/men/35.jpg"   },
//       { name: "Donna Cook",    date: "Jun 25 2024", time: "04:50 PM", image: "https://randomuser.me/api/portraits/women/36.jpg" },
//       { name: "Kevin Hart",    date: "Jun 26 2024", time: "09:00 AM", image: "https://randomuser.me/api/portraits/men/29.jpg"   },
//       { name: "Sophie Turner", date: "Jun 27 2024", time: "01:45 PM", image: "https://randomuser.me/api/portraits/women/29.jpg" },
//       { name: "Leon Scott",    date: "Jun 28 2024", time: "06:20 PM", image: "https://randomuser.me/api/portraits/men/30.jpg"   },
//       { name: "Mia Roberts",   date: "Jun 29 2024", time: "11:10 AM", image: "https://randomuser.me/api/portraits/women/30.jpg" },
//     ],
//   },
//   {
//     name: "Sohan",
//     balance: "$2000", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/4.jpg", earning: 2000,
//     tableData: [
//       { name: "Frank Morgan", date: "Jul 01 2024", time: "07:35 AM", image: "https://randomuser.me/api/portraits/men/36.jpg"   },
//       { name: "Gloria Bell",  date: "Jul 02 2024", time: "01:55 PM", image: "https://randomuser.me/api/portraits/women/37.jpg" },
//       { name: "Harry Quinn",  date: "Jul 03 2024", time: "10:30 AM", image: "https://randomuser.me/api/portraits/men/31.jpg"   },
//     ],
//   },
//   {
//     name: "Eduardo",
//     balance: "$4500", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/5.jpg", earning: 4500,
//     tableData: [
//       { name: "Henry Murphy", date: "Jul 05 2024", time: "09:30 AM", image: "https://randomuser.me/api/portraits/men/37.jpg"   },
//       { name: "Irene Bailey", date: "Jul 06 2024", time: "03:10 PM", image: "https://randomuser.me/api/portraits/women/38.jpg" },
//       { name: "Oscar Wilde",  date: "Jul 07 2024", time: "08:45 AM", image: "https://randomuser.me/api/portraits/men/32.jpg"   },
//       { name: "Fiona Green",  date: "Jul 08 2024", time: "12:30 PM", image: "https://randomuser.me/api/portraits/women/32.jpg" },
//       { name: "Marco Polo",   date: "Jul 09 2024", time: "05:15 PM", image: "https://randomuser.me/api/portraits/men/33.jpg"   },
//       { name: "Nina Ross",    date: "Jul 10 2024", time: "02:40 PM", image: "https://randomuser.me/api/portraits/women/33.jpg" },
//       { name: "Paul Drake",   date: "Jul 11 2024", time: "10:00 AM", image: "https://randomuser.me/api/portraits/men/34.jpg"   },
//       { name: "Quinn Adams",  date: "Jul 12 2024", time: "04:25 PM", image: "https://randomuser.me/api/portraits/men/35.jpg"   },
//       { name: "Rose Chen",    date: "Jul 13 2024", time: "08:50 AM", image: "https://randomuser.me/api/portraits/women/34.jpg" },
//       { name: "Sam Bishop",   date: "Jul 14 2024", time: "01:15 PM", image: "https://randomuser.me/api/portraits/men/36.jpg"   },
//       { name: "Tara Banks",   date: "Jul 15 2024", time: "06:40 AM", image: "https://randomuser.me/api/portraits/women/35.jpg" },
//       { name: "Uma Jolie",    date: "Jul 16 2024", time: "03:05 PM", image: "https://randomuser.me/api/portraits/women/36.jpg" },
//     ],
//   },
//   {
//     name: "Colleen",
//     balance: "$3500", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/6.jpg", earning: 3500,
//     tableData: [
//       { name: "Jack Rivera",     date: "Jul 10 2024", time: "11:40 AM", image: "https://randomuser.me/api/portraits/men/38.jpg"   },
//       { name: "Kathleen Cooper", date: "Jul 11 2024", time: "02:25 PM", image: "https://randomuser.me/api/portraits/women/39.jpg" },
//       { name: "Arnold Shaw",     date: "Jul 12 2024", time: "07:50 AM", image: "https://randomuser.me/api/portraits/men/34.jpg"   },
//       { name: "Bella Swan",      date: "Jul 13 2024", time: "11:00 AM", image: "https://randomuser.me/api/portraits/women/33.jpg" },
//       { name: "Clark Kent",      date: "Jul 14 2024", time: "04:35 PM", image: "https://randomuser.me/api/portraits/men/40.jpg"   },
//       { name: "Dana White",      date: "Jul 15 2024", time: "09:20 AM", image: "https://randomuser.me/api/portraits/women/40.jpg" },
//       { name: "Eli Stone",       date: "Jul 16 2024", time: "01:55 PM", image: "https://randomuser.me/api/portraits/men/41.jpg"   },
//       { name: "Flora Sun",       date: "Jul 17 2024", time: "06:10 AM", image: "https://randomuser.me/api/portraits/women/41.jpg" },
//       { name: "Gary Fox",        date: "Jul 18 2024", time: "03:30 PM", image: "https://randomuser.me/api/portraits/men/42.jpg"   },
//     ],
//   },
//   {
//     name: "Shane",
//     balance: "$4200", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/7.jpg", earning: 4200,
//     tableData: [
//       { name: "Leonard Richardson", date: "Jul 15 2024", time: "08:05 AM", image: "https://randomuser.me/api/portraits/men/39.jpg"   },
//       { name: "Martha Cox",         date: "Jul 16 2024", time: "12:50 PM", image: "https://randomuser.me/api/portraits/women/40.jpg" },
//       { name: "Tyler Durden",       date: "Jul 17 2024", time: "04:10 PM", image: "https://randomuser.me/api/portraits/men/44.jpg"   },
//       { name: "Anna Karenina",      date: "Jul 18 2024", time: "09:35 AM", image: "https://randomuser.me/api/portraits/women/44.jpg" },
//       { name: "Bruce Wayne",        date: "Jul 19 2024", time: "02:50 PM", image: "https://randomuser.me/api/portraits/men/45.jpg"   },
//       { name: "Carol Danvers",      date: "Jul 20 2024", time: "07:15 AM", image: "https://randomuser.me/api/portraits/women/45.jpg" },
//       { name: "Dean Stark",         date: "Jul 21 2024", time: "11:40 AM", image: "https://randomuser.me/api/portraits/men/46.jpg"   },
//     ],
//   },
//   {
//     name: "Darrell",
//     balance: "$4800", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/8.jpg", earning: 4800,
//     tableData: [
//       { name: "Nathan Howard",  date: "Jul 20 2024", time: "05:20 PM", image: "https://randomuser.me/api/portraits/men/40.jpg"   },
//       { name: "Olivia Ward",    date: "Jul 21 2024", time: "10:15 AM", image: "https://randomuser.me/api/portraits/women/41.jpg" },
//       { name: "Peter Parker",   date: "Jul 22 2024", time: "03:00 PM", image: "https://randomuser.me/api/portraits/men/46.jpg"   },
//       { name: "Mary Jane",      date: "Jul 23 2024", time: "08:20 AM", image: "https://randomuser.me/api/portraits/women/45.jpg" },
//       { name: "Reed Richards",  date: "Jul 24 2024", time: "01:45 PM", image: "https://randomuser.me/api/portraits/men/47.jpg"   },
//       { name: "Sue Storm",      date: "Jul 25 2024", time: "06:10 AM", image: "https://randomuser.me/api/portraits/women/46.jpg" },
//       { name: "Tony Stark",     date: "Jul 26 2024", time: "11:35 AM", image: "https://randomuser.me/api/portraits/men/48.jpg"   },
//       { name: "Pepper Potts",   date: "Jul 27 2024", time: "04:00 PM", image: "https://randomuser.me/api/portraits/women/47.jpg" },
//       { name: "Steve Rogers",   date: "Jul 28 2024", time: "09:25 AM", image: "https://randomuser.me/api/portraits/men/49.jpg"   },
//       { name: "Natasha Roman",  date: "Jul 29 2024", time: "02:50 PM", image: "https://randomuser.me/api/portraits/women/48.jpg" },
//       { name: "Bruce Banner",   date: "Jul 30 2024", time: "07:15 AM", image: "https://randomuser.me/api/portraits/men/50.jpg"   },
//       { name: "Betty Banner",   date: "Jul 31 2024", time: "12:40 PM", image: "https://randomuser.me/api/portraits/women/49.jpg" },
//       { name: "Clint Barton",   date: "Aug 01 2024", time: "05:05 PM", image: "https://randomuser.me/api/portraits/men/51.jpg"   },
//       { name: "Laura Barton",   date: "Aug 02 2024", time: "10:30 AM", image: "https://randomuser.me/api/portraits/women/50.jpg" },
//       { name: "Thor Odinson",   date: "Aug 03 2024", time: "03:55 PM", image: "https://randomuser.me/api/portraits/men/52.jpg"   },
//     ],
//   },
//   {
//     name: "Marvin",
//     balance: "$3800", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/9.jpg", earning: 3800,
//     tableData: [
//       { name: "Peter Torres",    date: "Jul 25 2024", time: "03:45 PM", image: "https://randomuser.me/api/portraits/men/41.jpg"   },
//       { name: "Quincy Peterson", date: "Jul 26 2024", time: "09:00 AM", image: "https://randomuser.me/api/portraits/men/42.jpg"   },
//       { name: "Sandra Bullock",  date: "Jul 27 2024", time: "01:10 PM", image: "https://randomuser.me/api/portraits/women/46.jpg" },
//       { name: "Tom Hanks",       date: "Jul 28 2024", time: "06:40 AM", image: "https://randomuser.me/api/portraits/men/47.jpg"   },
//     ],
//   },
//   {
//     name: "Jessica",
//     balance: "$4100", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/10.jpg", earning: 4100,
//     tableData: [
//       { name: "Rachel Gray",    date: "Aug 01 2024", time: "01:30 PM", image: "https://randomuser.me/api/portraits/women/42.jpg" },
//       { name: "Samuel Ramirez", date: "Aug 02 2024", time: "07:15 AM", image: "https://randomuser.me/api/portraits/men/43.jpg"   },
//       { name: "Victor Stone",   date: "Aug 03 2024", time: "11:55 AM", image: "https://randomuser.me/api/portraits/men/48.jpg"   },
//       { name: "Wanda Maximoff", date: "Aug 04 2024", time: "03:30 PM", image: "https://randomuser.me/api/portraits/women/48.jpg" },
//       { name: "Xander Harris",  date: "Aug 05 2024", time: "08:10 AM", image: "https://randomuser.me/api/portraits/men/49.jpg"   },
//       { name: "Yvonne Blake",   date: "Aug 06 2024", time: "01:45 PM", image: "https://randomuser.me/api/portraits/women/49.jpg" },
//       { name: "Zane Grey",      date: "Aug 07 2024", time: "06:20 AM", image: "https://randomuser.me/api/portraits/men/50.jpg"   },
//       { name: "Amy Pond",       date: "Aug 08 2024", time: "11:50 AM", image: "https://randomuser.me/api/portraits/women/50.jpg" },
//       { name: "Rory Williams",  date: "Aug 09 2024", time: "04:15 PM", image: "https://randomuser.me/api/portraits/men/51.jpg"   },
//       { name: "Clara Oswald",   date: "Aug 10 2024", time: "09:40 AM", image: "https://randomuser.me/api/portraits/women/51.jpg" },
//       { name: "Danny Pink",     date: "Aug 11 2024", time: "02:05 PM", image: "https://randomuser.me/api/portraits/men/52.jpg"   },
//     ],
//   },
//   {
//     name: "Marcus Brown",
//     balance: "$3200", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/10.jpg", earning: 3200,
//     tableData: [
//       { name: "Alice Bennett",  date: "Aug 05 2024", time: "10:00 AM", image: "https://randomuser.me/api/portraits/women/43.jpg" },
//       { name: "Brian Foster",   date: "Aug 06 2024", time: "02:30 PM", image: "https://randomuser.me/api/portraits/men/44.jpg"   },
//       { name: "Chloe Adams",    date: "Aug 07 2024", time: "09:15 AM", image: "https://randomuser.me/api/portraits/women/49.jpg" },
//       { name: "Derek Stone",    date: "Aug 08 2024", time: "03:50 PM", image: "https://randomuser.me/api/portraits/men/50.jpg"   },
//       { name: "Elena Voss",     date: "Aug 09 2024", time: "07:25 AM", image: "https://randomuser.me/api/portraits/women/52.jpg" },
//     ],
//   },
//   {
//     name: "Jessica Davis",
//     balance: "$4700", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/11.jpg", earning: 4700,
//     tableData: [
//       { name: "Carl Hughes",   date: "Aug 10 2024", time: "09:15 AM", image: "https://randomuser.me/api/portraits/men/45.jpg"   },
//       { name: "Diana Price",   date: "Aug 11 2024", time: "03:45 PM", image: "https://randomuser.me/api/portraits/women/44.jpg" },
//       { name: "Evan Morris",   date: "Aug 12 2024", time: "11:00 AM", image: "https://randomuser.me/api/portraits/men/51.jpg"   },
//       { name: "Faith Turner",  date: "Aug 13 2024", time: "04:30 PM", image: "https://randomuser.me/api/portraits/women/50.jpg" },
//       { name: "Greg Nelson",   date: "Aug 14 2024", time: "07:45 AM", image: "https://randomuser.me/api/portraits/men/52.jpg"   },
//       { name: "Holly Webb",    date: "Aug 15 2024", time: "01:20 PM", image: "https://randomuser.me/api/portraits/women/53.jpg" },
//     ],
//   },
//   {
//     name: "Test User",
//     balance: "$0", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/20.jpg", earning: 3000,
//     tableData: [
//       { name: "Evan Sanders",  date: "Sep 01 2024", time: "11:00 AM", image: "https://randomuser.me/api/portraits/men/46.jpg"   },
//       { name: "Fiona Bryant",  date: "Sep 02 2024", time: "04:20 PM", image: "https://randomuser.me/api/portraits/women/45.jpg" },
//     ],
//   },
//   {
//     name: "Anthony Miller",
//     balance: "$5200", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/21.jpg", earning: 5200,
//     tableData: [
//       { name: "George Russell",  date: "Sep 05 2024", time: "08:50 AM", image: "https://randomuser.me/api/portraits/men/47.jpg"   },
//       { name: "Hannah Simmons",  date: "Sep 06 2024", time: "01:10 PM", image: "https://randomuser.me/api/portraits/women/46.jpg" },
//       { name: "Isaac Newton",    date: "Sep 07 2024", time: "06:30 AM", image: "https://randomuser.me/api/portraits/men/53.jpg"   },
//       { name: "Julia Roberts",   date: "Sep 08 2024", time: "02:15 PM", image: "https://randomuser.me/api/portraits/women/51.jpg" },
//       { name: "Karl Urban",      date: "Sep 09 2024", time: "09:40 AM", image: "https://randomuser.me/api/portraits/men/54.jpg"   },
//       { name: "Luna Lovegood",   date: "Sep 10 2024", time: "03:05 PM", image: "https://randomuser.me/api/portraits/women/54.jpg" },
//       { name: "Mike Ross",       date: "Sep 11 2024", time: "07:30 AM", image: "https://randomuser.me/api/portraits/men/55.jpg"   },
//     ],
//   },
//   {
//     name: "Natalie Wilson",
//     balance: "$3600", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/22.jpg", earning: 3600,
//     tableData: [
//       { name: "Ian Powell",    date: "Sep 10 2024", time: "10:30 AM", image: "https://randomuser.me/api/portraits/men/48.jpg"   },
//       { name: "Julia Flores",  date: "Sep 11 2024", time: "03:00 PM", image: "https://randomuser.me/api/portraits/women/47.jpg" },
//       { name: "Liam Neeson",   date: "Sep 12 2024", time: "08:10 AM", image: "https://randomuser.me/api/portraits/men/55.jpg"   },
//       { name: "Megan Fox",     date: "Sep 13 2024", time: "01:45 PM", image: "https://randomuser.me/api/portraits/women/52.jpg" },
//     ],
//   },
//   {
//     name: "Kevin Anderson",
//     balance: "$4400", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/23.jpg", earning: 4400,
//     tableData: [
//       { name: "Kyle Jenkins",  date: "Sep 15 2024", time: "09:00 AM", image: "https://randomuser.me/api/portraits/men/49.jpg"   },
//       { name: "Laura Hayes",   date: "Sep 16 2024", time: "02:40 PM", image: "https://randomuser.me/api/portraits/women/48.jpg" },
//       { name: "Noah Bennett",  date: "Sep 17 2024", time: "07:20 AM", image: "https://randomuser.me/api/portraits/men/56.jpg"   },
//       { name: "Olivia Pope",   date: "Sep 18 2024", time: "12:55 PM", image: "https://randomuser.me/api/portraits/women/53.jpg" },
//       { name: "Paul Walker",   date: "Sep 19 2024", time: "05:30 PM", image: "https://randomuser.me/api/portraits/men/57.jpg"   },
//       { name: "Quinn James",   date: "Sep 20 2024", time: "10:05 AM", image: "https://randomuser.me/api/portraits/men/58.jpg"   },
//     ],
//   },
//   {
//     name: "Samantha Lee",
//     balance: "$3900", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/24.jpg", earning: 3900,
//     tableData: [
//       { name: "Mason Grant",   date: "Sep 20 2024", time: "11:20 AM", image: "https://randomuser.me/api/portraits/men/50.jpg"   },
//       { name: "Nina Tucker",   date: "Sep 21 2024", time: "04:50 PM", image: "https://randomuser.me/api/portraits/women/49.jpg" },
//       { name: "Owen Hunt",     date: "Sep 22 2024", time: "10:05 AM", image: "https://randomuser.me/api/portraits/men/59.jpg"   },
//       { name: "Priya Kapoor",  date: "Sep 23 2024", time: "03:30 PM", image: "https://randomuser.me/api/portraits/women/55.jpg" },
//       { name: "Ray Romano",    date: "Sep 24 2024", time: "08:55 AM", image: "https://randomuser.me/api/portraits/men/60.jpg"   },
//     ],
//   },
//   {
//     name: "Daniel Carter",
//     balance: "$5300", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/25.jpg", earning: 5300,
//     tableData: [
//       { name: "Oscar Burns",   date: "Oct 01 2024", time: "08:30 AM", image: "https://randomuser.me/api/portraits/men/51.jpg"   },
//       { name: "Paula Ross",    date: "Oct 02 2024", time: "01:00 PM", image: "https://randomuser.me/api/portraits/women/50.jpg" },
//       { name: "Quentin Bell",  date: "Oct 03 2024", time: "05:25 PM", image: "https://randomuser.me/api/portraits/men/53.jpg"   },
//     ],
//   },
//   {
//     name: "Olivia Martinez",
//     balance: "$4600", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/26.jpg", earning: 4600,
//     tableData: [
//       { name: "Quinn Diaz",    date: "Oct 05 2024", time: "10:10 AM", image: "https://randomuser.me/api/portraits/men/52.jpg"   },
//       { name: "Rita Reyes",    date: "Oct 06 2024", time: "03:30 PM", image: "https://randomuser.me/api/portraits/women/51.jpg" },
//       { name: "Scott Lang",    date: "Oct 07 2024", time: "08:55 AM", image: "https://randomuser.me/api/portraits/men/54.jpg"   },
//       { name: "Hope Pym",      date: "Oct 08 2024", time: "02:20 PM", image: "https://randomuser.me/api/portraits/women/56.jpg" },
//     ],
//   },
//   {
//     name: "Ryan Thompson",
//     balance: "$4100", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/27.jpg", earning: 4100,
//     tableData: [
//       { name: "Steve Coleman", date: "Oct 10 2024", time: "09:45 AM", image: "https://randomuser.me/api/portraits/men/53.jpg"   },
//       { name: "Tina Perry",    date: "Oct 11 2024", time: "02:15 PM", image: "https://randomuser.me/api/portraits/women/52.jpg" },
//       { name: "Ursula King",   date: "Oct 12 2024", time: "07:40 AM", image: "https://randomuser.me/api/portraits/women/57.jpg" },
//     ],
//   },
//   {
//     name: "Emily Johnson",
//     balance: "$3700", country: "USA",
//     image: "https://randomuser.me/api/portraits/women/28.jpg", earning: 3700,
//     tableData: [
//       { name: "Uma Long",      date: "Oct 15 2024", time: "11:05 AM", image: "https://randomuser.me/api/portraits/women/53.jpg" },
//       { name: "Victor Medina", date: "Oct 16 2024", time: "04:35 PM", image: "https://randomuser.me/api/portraits/men/54.jpg"   },
//       { name: "Wendy Park",    date: "Oct 17 2024", time: "09:00 AM", image: "https://randomuser.me/api/portraits/women/58.jpg" },
//       { name: "Xavier Cole",   date: "Oct 18 2024", time: "01:25 PM", image: "https://randomuser.me/api/portraits/men/55.jpg"   },
//     ],
//   },
//   {
//     name: "Jacob Williams",
//     balance: "$4900", country: "USA",
//     image: "https://randomuser.me/api/portraits/men/29.jpg", earning: 4900,
//     tableData: [
//       { name: "Wendy Stone",   date: "Oct 20 2024", time: "08:20 AM", image: "https://randomuser.me/api/portraits/women/54.jpg" },
//       { name: "Xavier Shaw",   date: "Oct 21 2024", time: "01:50 PM", image: "https://randomuser.me/api/portraits/men/55.jpg"   },
//       { name: "Yara Greyjoy",  date: "Oct 22 2024", time: "06:15 AM", image: "https://randomuser.me/api/portraits/women/59.jpg" },
//       { name: "Zach Morris",   date: "Oct 23 2024", time: "11:40 AM", image: "https://randomuser.me/api/portraits/men/56.jpg"   },
//       { name: "April Kepner",  date: "Oct 24 2024", time: "04:05 PM", image: "https://randomuser.me/api/portraits/women/60.jpg" },
//     ],
//   },
// ];

// const THIS_WEEK_DATES = [
//   "Jan 14 2025", "Jan 15 2025", "Jan 16 2025", "Jan 17 2025",
//   "Jan 18 2025", "Jan 19 2025", "Jan 20 2025",
// ];

// export default function YearlyTrialUsers() {
//   const navigate  = useNavigate();
//   const location  = useLocation();
//   const [isOpen,           setIsOpen]           = useState(false);
//   const [userSearchTerm,   setUserSearchTerm]   = useState("");
//   const [tableSearchTerm,  setTableSearchTerm]  = useState("");
//   const [currentPage,      setCurrentPage]      = useState(1);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const itemsPerPage = 10;

//   // ── On mount: nav state → localStorage → first user ──────────────────────
//   useEffect(() => {
//     if (location.state?.selectedUserName) {
//       setSelectedUserName(location.state.selectedUserName);
//       localStorage.setItem("selectedUserName", location.state.selectedUserName);
//       window.history.replaceState({}, document.title);
//     } else {
//       const stored = localStorage.getItem("selectedUserName");
//       if (stored && ALL_LEFT_USERS.some((u) => u.name === stored)) {
//         setSelectedUserName(stored);
//       } else {
//         setSelectedUserName(ALL_LEFT_USERS[0].name);
//       }
//     }
//   }, []);

//   // ── Always resolve by name ────────────────────────────────────────────────
//   const currentUser =
//     ALL_LEFT_USERS.find((u) => u.name === selectedUserName) || ALL_LEFT_USERS[0];

//   // ── Left panel: only the selected user, filtered by user search ───────────
//   const filteredLeftUsers = ALL_LEFT_USERS
//     .filter((u) => u.name === currentUser.name)
//     .filter((u) => u.name.toLowerCase().includes(userSearchTerm.toLowerCase()));

//   // ── Table rows filtered by table search ──────────────────────────────────
//   const filteredTableData = currentUser.tableData.filter((row) =>
//     row.name.toLowerCase().includes(tableSearchTerm.toLowerCase())
//   );

//   // ── Stats derived from real tableData ────────────────────────────────────
//   const totalUsers     = currentUser.tableData.length;
//   const thisMonthUsers = currentUser.tableData.filter(
//     (u) => u.date.includes("Jan") && u.date.includes("2025")
//   ).length;
//   const thisWeekUsers  = currentUser.tableData.filter((u) =>
//     THIS_WEEK_DATES.includes(u.date)
//   ).length;
//   const totalRevenue   = currentUser.balance;

//   // ── Pagination ────────────────────────────────────────────────────────────
//   const totalPages  = Math.ceil(filteredTableData.length / itemsPerPage);
//   const startIndex  = (currentPage - 1) * itemsPerPage;
//   const endIndex    = startIndex + itemsPerPage;
//   const currentData = filteredTableData.slice(startIndex, endIndex);

//   useEffect(() => { setCurrentPage(1); }, [tableSearchTerm]);
//   useEffect(() => {
//     if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
//   }, [currentPage, totalPages]);

//   const handlePrevPage  = () => { if (currentPage > 1)          setCurrentPage(currentPage - 1); };
//   const handleNextPage  = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
//   const handlePageClick = (n) => { if (n <= totalPages)         setCurrentPage(n); };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

//   return (
//     <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
//       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search"
//           value={userSearchTerm}
//           onChange={(e) => setUserSearchTerm(e.target.value)}
//           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

//         <div className="absolute top-5 right-3">
//           <img
//             className="h-6 w-6 cursor-pointer"
//             src={Groups}
//             alt="Groups Icon"
//             onClick={() => setIsOpen(!isOpen)}
//           />
//           {isOpen && (
//             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
//               {["Active Users","Total Users","Monthly Users","Weekly Users",
//                 "Total Sales","Monthly Sales","Weekly Sales","Balance"].map((item) => (
//                 <button key={item} className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
//                   {item}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Only the selected user */}
//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           {filteredLeftUsers.length > 0 ? (
//             filteredLeftUsers.map((user, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]"
//               >
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center gap-2">
//                     <img
//                       src={user.image}
//                       alt={user.name}
//                       className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                     />
//                     <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
//                       {user.name}
//                     </p>
//                   </div>
//                   <span className="text-xs text-[#055860] mt-3">{user.country}</span>
//                 </div>
//                 <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//                   <span className="text-gray-500">
//                     Users: <span className="text-[#055860]">{user.tableData.length}</span>
//                   </span>
//                   <span className="text-gray-500">
//                     Balance: <span className="text-[#055860]">{user.balance}</span>
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="flex items-center justify-center h-full text-gray-500 text-sm">
//               No users found
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
//       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={currentUser.image}
//               alt={currentUser.name}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
//               {currentUser.name}
//             </h2>
//           </div>
//           <div className="relative w-full max-w-sm">
//             <Search
//               size={18}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]"
//               strokeWidth={2}
//             />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={tableSearchTerm}
//               onChange={(e) => setTableSearchTerm(e.target.value)}
//               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
//             />
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
//           <button
//             onClick={() => navigate(-1)}
//             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
//           >
//             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
//           </button>

//           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
//             <div className="grid grid-cols-5">
//               <div className="h-[115px] w-[160px] bg-[#055860] text-white text-center flex items-center justify-center">
//                 <div className="text-md font-semibold leading-[200%]">
//                   <span className="block whitespace-nowrap">Yearly</span>
//                   <span className="block whitespace-nowrap">Trial Users</span>
//                 </div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center ml-6">
//                 <div className="text-lg font-semibold mt-1">{totalUsers}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap ml-[-7px]">Total Users</div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-semibold mt-1">{thisMonthUsers}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-semibold leading-[70%]">{thisWeekUsers}</div>
//                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-semibold leading-[70%]">{totalRevenue}</div>
//                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white font-md">
//               <tr>
//                 <th className="p-2 text-left">User</th>
//                 <th className="p-2 text-center">Installed</th>
//                 <th className="p-2 text-center">Subscribed</th>
//                 <th className="p-2 text-center">Cancelled</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentData.length > 0 ? (
//                 currentData.map((row, idx) => (
//                   <tr key={idx} className="border-b">
//                     <td className="p-4">
//                       <div className="flex items-center gap-2">
//                         <img src={row.image} alt="User" className="w-8 h-8 rounded-full object-cover" />
//                         {row.name}
//                       </div>
//                     </td>
//                     <td className="p-2 text-center">
//                       {row.date}<br /><span className="text-xs text-gray-400">{row.time}</span>
//                     </td>
//                     <td className="p-2 text-center">
//                       {row.date}<br /><span className="text-xs text-gray-400">{row.time}</span>
//                     </td>
//                     <td className="p-2 text-center">
//                       {row.date}<br /><span className="text-xs text-gray-400">{row.time}</span>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-500">No users found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {filteredTableData.length > 0 ? startIndex + 1 : 0} to{" "}
//             {Math.min(endIndex, filteredTableData.length)} of {filteredTableData.length} entries
//           </p>
//           <div className="flex items-center gap-2 mr-[-19px]">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${
//                 currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
//               }`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">‹</span>
//             </button>
//             {pageNumbers.map((n) => (
//               <span
//                 key={n}
//                 onClick={() => handlePageClick(n)}
//                 className={`cursor-pointer ${
//                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
//                 }`}
//               >
//                 {n}
//               </span>
//             ))}
//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
//                 <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
//               </button>
//             )}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${
//                 currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
//               }`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">›</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import Groups from "../assets/Groups.png";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// // const BASE_URL = "https://referralapis.appistan.co/api";
// const BASE_URL = "https://apis.famocare.com/api/referralsystem";

// export default function YearlyTrialUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userSearchTerm, setUserSearchTerm] = useState("");
//   const [tableSearchTerm, setTableSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const itemsPerPage = 10;

//   // ── Exact same pattern as working MonthlySubscribedUsers ─────────────────
//   const selectedUserId =
//     location.state?.selectedUserId ||
//     localStorage.getItem("selectedUserId");

//   const selectedUserName_nav =
//     location.state?.selectedUserName ||
//     localStorage.getItem("selectedUserName") ||
//     "User";

//   const selectedUserAvatar =
//     location.state?.selectedUserAvatar ||
//     localStorage.getItem("selectedUserAvatar") ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName_nav)}&background=055860&color=fff`;

//   const selectedUserBalance =
//     location.state?.selectedUserBalance ||
//     localStorage.getItem("selectedUserBalance") ||
//     "0";

//   const selectedUserCountry =
//     location.state?.selectedUserCountry ||
//     localStorage.getItem("selectedUserCountry") ||
//     "USA";

//   // Persist to localStorage
//   useEffect(() => {
//     if (location.state?.selectedUserId)      localStorage.setItem("selectedUserId",      location.state.selectedUserId);
//     if (location.state?.selectedUserName)    localStorage.setItem("selectedUserName",    location.state.selectedUserName);
//     if (location.state?.selectedUserAvatar)  localStorage.setItem("selectedUserAvatar",  location.state.selectedUserAvatar);
//     if (location.state?.selectedUserBalance) localStorage.setItem("selectedUserBalance", location.state.selectedUserBalance);
//     if (location.state?.selectedUserCountry) localStorage.setItem("selectedUserCountry", location.state.selectedUserCountry);
//   }, []);

//   useEffect(() => {
//     setSelectedUserName(selectedUserName_nav);
//   }, []);

//   // ── API 1: Stats → yearlyTrialUsers ──────────────────────────────────────
//   const [stats, setStats] = useState({ thisMonth: 0, thisWeek: 0, revenue: 0 });
//   const [statsLoading, setStatsLoading] = useState(false);

//   const fetchStats = useCallback(async () => {
//     setStatsLoading(true);
//     try {
//       const res  = await fetch(`${BASE_URL}/referrals/details/get`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({}),
//       });
//       const json = await res.json();
//       if (json.success && json.data?.yearlyTrialUsers) {
//         const m = json.data.yearlyTrialUsers;
//         setStats({
//           thisMonth: m.thisMonth ?? 0,
//           thisWeek:  m.thisWeek  ?? 0,
//           revenue:   m.revenue   ?? 0,
//         });
//       }
//     } catch (err) {
//       console.error("fetchStats error:", err);
//     } finally {
//       setStatsLoading(false);
//     }
//   }, []);

//   // ── API 2: Table → yearly + trial ─────────────────────────────────────────
//   const [tableData, setTableData]       = useState([]);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [totalPages, setTotalPages]     = useState(1);
//   const [tableLoading, setTableLoading] = useState(false);

//   const fetchTableData = useCallback(async (page = 1) => {
//     if (!selectedUserId) return;
//     setTableLoading(true);
//     try {
//       const res  = await fetch(`${BASE_URL}/referrals/users/details`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           uid:    selectedUserId,
//           type:   "yearly",     // ✅ yearly
//           status: "trial",      // ✅ trial
//           sort:   "subscribedDate",
//           size:   itemsPerPage,
//           page,
//         }),
//       });
//       const json = await res.json();
//       if (json.success && json.metrics) {
//         setTableData(json.metrics.data           || []);
//         setTotalRecords(json.pagination?.total    || 0);
//         setTotalPages(json.pagination?.totalPages || 1);
//         setCurrentPage(json.pagination?.page      || 1);
//       }
//     } catch (err) {
//       console.error("fetchTableData error:", err);
//     } finally {
//       setTableLoading(false);
//     }
//   }, [selectedUserId]);

//   useEffect(() => { fetchStats(); }, []);
//   useEffect(() => { if (selectedUserId) fetchTableData(1); }, [selectedUserId]);
//   useEffect(() => { setCurrentPage(1); }, [tableSearchTerm]);

//   const filteredTableData = tableData.filter((row) =>
//     (row.name || "").toLowerCase().includes(tableSearchTerm.toLowerCase())
//   );

//   const showLeftUser = selectedUserName.toLowerCase().includes(userSearchTerm.toLowerCase());

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   const handlePrevPage  = () => { if (currentPage > 1)          { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
//   const handleNextPage  = () => { if (currentPage < totalPages)  { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
//   const handlePageClick = (p) => { if (p !== currentPage)        { setCurrentPage(p); fetchTableData(p); } };

//   const getPageNumbers = () => {
//     const pages = [];
//     for (let i = 1; i <= Math.min(4, totalPages); i++) pages.push(i);
//     return pages;
//   };
//   const pageNumbers = getPageNumbers();

//   const fmtDate = (iso) => iso
//     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//     : "—";
//   const fmtTime = (iso) => iso
//     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//     : "—";

//   return (
//     <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* LEFT PANEL */}
//       <div className="min-h-screen h-[979px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search"
//           value={userSearchTerm}
//           onChange={(e) => setUserSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

  

//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           {showLeftUser ? (
//             <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={selectedUserAvatar}
//                     alt={selectedUserName}
//                     onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName)}&background=055860&color=fff`; }}
//                     className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                   />
//                   <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">{selectedUserName}</p>
//                 </div>
//                 <span className="text-xs text-[#055860] mt-3">{selectedUserCountry}</span>
//               </div>
//               <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//                 <span className="text-gray-500">Users: <span className="text-[#055860]">{totalRecords}</span></span>
//                 <span className="text-gray-500">Balance: <span className="text-[#055860]">${parseFloat(selectedUserBalance).toLocaleString()}</span></span>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
//           )}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       {/* <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]"> */}
//                         <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={selectedUserAvatar}
//               alt={selectedUserName}
//               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName)}&background=055860&color=fff`; }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{selectedUserName}</h2>
//           </div>
//           <div className="relative w-full max-w-sm">
//             <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]" strokeWidth={2} />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={tableSearchTerm}
//               onChange={(e) => setTableSearchTerm(e.target.value)}
//               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
//             />
//           </div>
//         </div>

// <div className="flex items-center gap-4 mb-4 mt-[-8px]">
//   <button
//     onClick={() => navigate(-1)}
//     className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
//   >
//     <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
//   </button>

//   <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
//     <div className="flex">

//       {/* Label column with white right border */}
//       <div className="h-[115px] w-[135px] bg-[#055860] text-white text-center flex items-center justify-center" style={{ borderRight: "0.5px solid white" }}>
//         <div className="text-md font-semibold leading-[210%]">
//           <span className="block whitespace-nowrap">Yearly</span>
//           <span className="block whitespace-nowrap">Trial Users</span>
//         </div>
//       </div>

//       {/* Stats columns */}
//       <div className="flex flex-1">
//         {/* Total Users */}
//         <div className="w-[220px] flex-1 bg-[#055860] text-white p-6 text-center">
//           <div className="text-lg font-semibold mt-1">{tableLoading ? "..." : totalRecords}</div>
//           <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//         </div>

//         {/* This Month */}
//         <div className="flex-1 bg-[#055860] text-white p-6 text-center">
//           <div className="text-lg font-semibold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
//           <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//         </div>

//         {/* This Week */}
//         <div className="flex-1 bg-[#055860] text-white pt-9 text-center">
//           <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
//           <div className="text-md opacity-90 mt-[14px]">This Week</div>
//         </div>

//         {/* Revenue - with left white border */}
//         <div className="flex-1 bg-[#055860] text-white pt-9 text-center" style={{ borderLeft: "0.5px solid white" }}>
//           <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
//           <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//         </div>
//       </div>

//     </div>
//   </div>
// </div>

//         {/* Table */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white font-md">
//               <tr>
//                 {/* <th className="p-2 text-left">User</th> */}
//                  <th className="px-4 py-3 text-start">
//                   <div className="ml-1">User</div>
//                 </th>
//                 <th className="p-2 text-center">Installed</th>
//                 <th className="p-2 text-center">Subscribed</th>
//                 <th className="p-2 text-center">Clearance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableLoading ? (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
//               ) : filteredTableData.length > 0 ? (
//                 filteredTableData.map((row, index) => {
//                   const sub        = row.Subscriptions?.[0];
//                   const userName   = row.name || "Unknown";
//                   const userAvatar = row.image ||
//                     `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;
//                   return (
//                     <tr key={row.id || index} className="border-b">
//                       <td className="p-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src={userAvatar}
//                             alt="User"
//                             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
//                             className="w-8 h-8 rounded-full object-cover"
//                           />
//                           {userName}
//                         </div>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(row.installedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.startDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.startDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.clearedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.clearedDate)}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">
//                   {selectedUserId ? "No trial users found" : "No user selected"}
//                 </td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalRecords > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, totalRecords)} of {totalRecords} entries
//           </p>
//           <div className="flex items-center gap-2 mr-[-19px]">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">‹</span>
//             </button>
//             {pageNumbers.map((pageNum) => (
//               <span
//                 key={pageNum}
//                 onClick={() => handlePageClick(pageNum)}
//                 className={`cursor-pointer ${currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"}`}
//               >
//                 {pageNum}
//               </span>
//             ))}
//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
//                 <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
//               </button>
//             )}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">›</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


////localstorage


// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// const BASE_URL = "https://apis.famocare.com/api/referralsystem";

// export default function YearlyTrialUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userSearchTerm, setUserSearchTerm] = useState("");
//   const [tableSearchTerm, setTableSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // ── User identity — only from location.state ──────────────────────────────
//   const selectedUserId      = location.state?.selectedUserId     || null;
//   const selectedUserName    = location.state?.selectedUserName   || "";
//   const selectedUserAvatar  = location.state?.selectedUserAvatar ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(location.state?.selectedUserName || "U")}&background=055860&color=fff`;
//   const selectedUserBalance = location.state?.selectedUserBalance || "0";
//   const selectedUserCountry = location.state?.selectedUserCountry || "";

//   // ── Stats state ───────────────────────────────────────────────────────────
//   const [stats, setStats] = useState({ thisMonth: 0, thisWeek: 0, revenue: 0 });
//   const [statsLoading, setStatsLoading] = useState(false);

//   const fetchStats = useCallback(async () => {
//     setStatsLoading(true);
//     try {
//       const res  = await fetch(`${BASE_URL}/referrals/details/get`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({}),
//       });
//       const json = await res.json();
//       if (json.success && json.data?.yearlyTrialUsers) {
//         const m = json.data.yearlyTrialUsers;
//         setStats({
//           thisMonth: m.thisMonth ?? 0,
//           thisWeek:  m.thisWeek  ?? 0,
//           revenue:   m.revenue   ?? 0,
//         });
//       }
//     } catch (err) {
//       console.error("fetchStats error:", err);
//     } finally {
//       setStatsLoading(false);
//     }
//   }, []);

//   // ── Table state ───────────────────────────────────────────────────────────
//   const [tableData, setTableData]       = useState([]);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [totalPages, setTotalPages]     = useState(1);
//   const [tableLoading, setTableLoading] = useState(false);

//   const fetchTableData = useCallback(async (page = 1) => {
//     if (!selectedUserId) return;
//     setTableLoading(true);
//     try {
//       const res  = await fetch(`${BASE_URL}/referrals/users/details`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           uid:    selectedUserId,
//           type:   "yearly",
//           status: "trial",
//           sort:   "subscribedDate",
//           size:   itemsPerPage,
//           page,
//         }),
//       });
//       const json = await res.json();
//       if (json.success && json.metrics) {
//         setTableData(json.metrics.data           || []);
//         setTotalRecords(json.pagination?.total    || 0);
//         setTotalPages(json.pagination?.totalPages || 1);
//         setCurrentPage(json.pagination?.page      || 1);
//       }
//     } catch (err) {
//       console.error("fetchTableData error:", err);
//     } finally {
//       setTableLoading(false);
//     }
//   }, [selectedUserId]);

//   useEffect(() => { fetchStats(); }, []);
//   useEffect(() => { if (selectedUserId) fetchTableData(1); }, [selectedUserId]);
//   useEffect(() => { setCurrentPage(1); }, [tableSearchTerm]);

//   const filteredTableData = tableData.filter((row) =>
//     (row.name || "").toLowerCase().includes(tableSearchTerm.toLowerCase())
//   );

//   const showLeftUser =
//     !!selectedUserName &&
//     selectedUserName.toLowerCase().includes(userSearchTerm.toLowerCase());

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   const handlePrevPage  = () => { if (currentPage > 1)          { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
//   const handleNextPage  = () => { if (currentPage < totalPages)  { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
//   const handlePageClick = (p) => { if (p !== currentPage)        { setCurrentPage(p); fetchTableData(p); } };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

//   const fmtDate = (iso) => iso
//     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//     : "—";
//   const fmtTime = (iso) => iso
//     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//     : "—";

//   const resolveAvatar = (src, name) =>
//     src || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "U")}&background=055860&color=fff`;

//   return (
//     <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* LEFT PANEL */}
//       <div className="min-h-screen h-[979px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search"
//           value={userSearchTerm}
//           onChange={(e) => setUserSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           {showLeftUser ? (
//             <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={resolveAvatar(selectedUserAvatar, selectedUserName)}
//                     alt={selectedUserName}
//                     onError={(e) => { e.target.src = resolveAvatar("", selectedUserName); }}
//                     className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                   />
//                   <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">{selectedUserName}</p>
//                 </div>
//                 <span className="text-xs text-[#055860] mt-3">{selectedUserCountry}</span>
//               </div>
//               <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//                 <span className="text-gray-500">Users: <span className="text-[#055860]">{totalRecords}</span></span>
//                 <span className="text-gray-500">Balance: <span className="text-[#055860]">${parseFloat(selectedUserBalance).toLocaleString()}</span></span>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
//           )}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={resolveAvatar(selectedUserAvatar, selectedUserName)}
//               alt={selectedUserName}
//               onError={(e) => { e.target.src = resolveAvatar("", selectedUserName); }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{selectedUserName}</h2>
//           </div>
//           <div className="relative w-full max-w-sm">
//             <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]" strokeWidth={2} />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={tableSearchTerm}
//               onChange={(e) => setTableSearchTerm(e.target.value)}
//               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
//             />
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
//           <button
//             onClick={() => navigate(-1)}
//             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
//           >
//             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
//           </button>

//           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
//             <div className="flex">
//               <div className="h-[115px] w-[135px] bg-[#055860] text-white text-center flex items-center justify-center" style={{ borderRight: "0.5px solid white" }}>
//                 <div className="text-md font-semibold leading-[210%]">
//                   <span className="block whitespace-nowrap">Yearly</span>
//                   <span className="block whitespace-nowrap">Trial Users</span>
//                 </div>
//               </div>
//               <div className="flex flex-1">
//                 <div className="w-[220px] flex-1 bg-[#055860] text-white p-6 text-center">
//                   <div className="text-lg font-semibold mt-1">{tableLoading ? "..." : totalRecords}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white p-6 text-center">
//                   <div className="text-lg font-semibold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center">
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
//                   <div className="text-md opacity-90 mt-[14px]">This Week</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center" style={{ borderLeft: "0.5px solid white" }}>
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
//                   <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white font-md">
//               <tr>
//                 <th className="px-4 py-3 text-start">
//                   <div className="ml-1">User</div>
//                 </th>
//                 <th className="p-2 text-center">Installed</th>
//                 <th className="p-2 text-center">Subscribed</th>
//                 <th className="p-2 text-center">Clearance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableLoading ? (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
//               ) : filteredTableData.length > 0 ? (
//                 filteredTableData.map((row, index) => {
//                   const sub        = row.Subscriptions?.[0];
//                   const userName   = row.name || "Unknown";
//                   const userAvatar = resolveAvatar(row.image, userName);
//                   return (
//                     <tr key={row.id || index} className="border-b">
//                       <td className="p-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src={userAvatar}
//                             alt="User"
//                             onError={(e) => { e.target.src = resolveAvatar("", userName); }}
//                             className="w-8 h-8 rounded-full object-cover"
//                           />
//                           {userName}
//                         </div>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(row.installedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.startDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.startDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.clearedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.clearedDate)}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">
//                   {selectedUserId ? "No trial users found" : "No user selected"}
//                 </td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalRecords > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, totalRecords)} of {totalRecords} entries
//           </p>
//           <div className="flex items-center gap-2 mr-[-19px]">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">‹</span>
//             </button>
//             {pageNumbers.map((pageNum) => (
//               <span
//                 key={pageNum}
//                 onClick={() => handlePageClick(pageNum)}
//                 className={`cursor-pointer ${currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"}`}
//               >
//                 {pageNum}
//               </span>
//             ))}
//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
//                 <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
//               </button>
//             )}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">›</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


////



// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// const BASE_URL = "https://apis.famocare.com/api/referralsystem";

// export default function YearlyTrialUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userSearchTerm, setUserSearchTerm] = useState("");
//   const [tableSearchTerm, setTableSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // ── User identity — only from location.state ──────────────────────────────
//   const selectedUserId      = location.state?.selectedUserId     || null;
//   const selectedUserName    = location.state?.selectedUserName   || "";
//   const selectedUserAvatar  = location.state?.selectedUserAvatar ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(location.state?.selectedUserName || "U")}&background=055860&color=fff`;
//   const selectedUserCountry = location.state?.selectedUserCountry || "";

//   // ── Stats state ───────────────────────────────────────────────────────────
//   const [stats, setStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, thisYear: 0, totalrevenue: 0 });
//   const [statsLoading, setStatsLoading] = useState(false);

//   // ── Table state ───────────────────────────────────────────────────────────
//   const [tableData, setTableData]       = useState([]);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [totalPages, setTotalPages]     = useState(1);
//   const [tableLoading, setTableLoading] = useState(false);

//   const fetchTableData = useCallback(async (page = 1) => {
//     if (!selectedUserId) return;
//     setTableLoading(true);
//     setStatsLoading(true);
//     try {
//       const res = await fetch(`${BASE_URL}/referrals/users/details`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           uid:    selectedUserId,
//           type:   "yearly",
//           status: "trial",
//           sort:   "subscribedDate",
//           size:   itemsPerPage,
//           page,
//         }),
//       });
//       const json = await res.json();
//       if (json.success && json.metrics) {
//         setTableData(json.metrics.data || []);
//         // ✅ Pull all stats directly from metrics as per API response
//         setStats({
//           total:        json.metrics.total        ?? 0,
//           thisMonth:    json.metrics.thisMonth     ?? 0,
//           thisWeek:     json.metrics.thisWeek      ?? 0,
//           thisYear:     json.metrics.thisYear      ?? 0,
//           totalrevenue: json.metrics.totalrevenue  ?? 0,
//         });
//         setTotalRecords(json.pagination?.total    || 0);
//         setTotalPages(json.pagination?.totalPages || 1);
//         setCurrentPage(json.pagination?.page      || 1);
//       }
//     } catch (err) {
//       console.error("fetchTableData error:", err);
//     } finally {
//       setTableLoading(false);
//       setStatsLoading(false);
//     }
//   }, [selectedUserId]);

//   useEffect(() => { if (selectedUserId) fetchTableData(1); }, [selectedUserId]);
//   useEffect(() => { setCurrentPage(1); }, [tableSearchTerm]);

//   const filteredTableData = tableData.filter((row) =>
//     (row.name || "").toLowerCase().includes(tableSearchTerm.toLowerCase())
//   );

//   const showLeftUser =
//     !!selectedUserName &&
//     selectedUserName.toLowerCase().includes(userSearchTerm.toLowerCase());

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   const handlePrevPage  = () => { if (currentPage > 1)         { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
//   const handleNextPage  = () => { if (currentPage < totalPages) { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
//   const handlePageClick = (p) => { if (p !== currentPage)       { setCurrentPage(p); fetchTableData(p); } };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

//   const fmtDate = (iso) => iso
//     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//     : "—";
//   const fmtTime = (iso) => iso
//     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//     : "—";

//   const resolveAvatar = (src, name) =>
//     src || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "U")}&background=055860&color=fff`;

//   return (
//     <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* LEFT PANEL */}
//       <div className="min-h-screen h-[979px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search"
//           value={userSearchTerm}
//           onChange={(e) => setUserSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           {showLeftUser ? (
//             <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={resolveAvatar(selectedUserAvatar, selectedUserName)}
//                     alt={selectedUserName}
//                     onError={(e) => { e.target.src = resolveAvatar("", selectedUserName); }}
//                     className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                   />
//                   <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">{selectedUserName}</p>
//                 </div>
//                 <span className="text-xs text-[#055860] mt-3">{selectedUserCountry}</span>
//               </div>
//               <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//                 <span className="text-gray-500">Users: <span className="text-[#055860]">{totalRecords}</span></span>
//                 {/* ✅ Balance shows real-time totalrevenue from API */}
//                 <span className="text-gray-500">Balance: <span className="text-[#055860]">{statsLoading ? "..." : `$${Number(stats.totalrevenue).toLocaleString()}`}</span></span>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
//           )}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={resolveAvatar(selectedUserAvatar, selectedUserName)}
//               alt={selectedUserName}
//               onError={(e) => { e.target.src = resolveAvatar("", selectedUserName); }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{selectedUserName}</h2>
//           </div>
//           <div className="relative w-full max-w-sm">
//             <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]" strokeWidth={2} />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={tableSearchTerm}
//               onChange={(e) => setTableSearchTerm(e.target.value)}
//               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
//             />
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
//           <button
//             onClick={() => navigate(-1)}
//             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
//           >
//             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
//           </button>

//           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
//             <div className="flex">
//               <div className="h-[115px] w-[135px] bg-[#055860] text-white text-center flex items-center justify-center" style={{ borderRight: "0.5px solid white" }}>
//                 <div className="text-md font-semibold leading-[210%]">
//                   <span className="block whitespace-nowrap">Yearly</span>
//                   <span className="block whitespace-nowrap">Trial Users</span>
//                 </div>
//               </div>
//               <div className="flex flex-1">
//                 <div className="w-[220px] flex-1 bg-[#055860] text-white p-6 text-center">
//                   {/* ✅ Total from metrics.total */}
//                   <div className="text-lg font-semibold mt-1">{statsLoading ? "..." : stats.total}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white p-6 text-center">
//                   {/* ✅ thisMonth from metrics.thisMonth */}
//                   <div className="text-lg font-semibold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center">
//                   {/* ✅ thisWeek from metrics.thisWeek */}
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
//                   <div className="text-md opacity-90 mt-[14px]">This Week</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center" style={{ borderLeft: "0.5px solid white" }}>
//                   {/* ✅ Revenue from metrics.totalrevenue */}
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : `$${Number(stats.totalrevenue).toLocaleString()}`}</div>
//                   <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white font-md">
//               <tr>
//                 <th className="px-4 py-3 text-start">
//                   <div className="ml-1">User</div>
//                 </th>
//                 <th className="p-2 text-center">Installed</th>
//                 <th className="p-2 text-center">Trial Start</th>
//                 <th className="p-2 text-center">Trial End</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableLoading ? (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
//               ) : filteredTableData.length > 0 ? (
//                 filteredTableData.map((row, index) => {
//                   const sub        = row.Subscriptions?.[0];
//                   const userName   = row.name || "Unknown";
//                   const userAvatar = resolveAvatar(row.image, userName);
//                   return (
//                     <tr key={row.id || index} className="border-b">
//                       <td className="p-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src={userAvatar}
//                             alt="User"
//                             onError={(e) => { e.target.src = resolveAvatar("", userName); }}
//                             className="w-8 h-8 rounded-full object-cover"
//                           />
//                           {userName}
//                         </div>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(row.installedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate)}</span>
//                       </td>
//                       {/* ✅ Using trialStartDate from API response */}
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.trialStartDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.trialStartDate)}</span>
//                       </td>
//                       {/* ✅ Using trialEndDate from API response */}
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.trialEndDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.trialEndDate)}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">
//                   {selectedUserId ? "No trial users found" : "No user selected"}
//                 </td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalRecords > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, totalRecords)} of {totalRecords} entries
//           </p>
//           <div className="flex items-center gap-2 mr-[-19px]">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">‹</span>
//             </button>
//             {pageNumbers.map((pageNum) => (
//               <span
//                 key={pageNum}
//                 onClick={() => handlePageClick(pageNum)}
//                 className={`cursor-pointer ${currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"}`}
//               >
//                 {pageNum}
//               </span>
//             ))}
//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
//                 <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
//               </button>
//             )}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">›</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



/////


import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar.jsx";
import BackArrow from "../assets/BackArrow.png";
import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BASE_URL = "https://apis.famocare.com/api/referralsystem";

export default function YearlyTrialUsers() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [tableSearchTerm, setTableSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ── Persist location.state to sessionStorage on arrival ──────────────────
  useEffect(() => {
    if (location.state?.selectedUserId) {
      sessionStorage.setItem("yearlyTrialUsersState", JSON.stringify(location.state));
    }
  }, [location.state]);

  // ── Read from location.state first, fallback to sessionStorage ────────────
  const savedState = location.state?.selectedUserId
    ? location.state
    : (() => {
        try {
          const s = sessionStorage.getItem("yearlyTrialUsersState");
          return s ? JSON.parse(s) : {};
        } catch { return {}; }
      })();

  const selectedUserId      = savedState.selectedUserId     || null;
  const selectedUserName    = savedState.selectedUserName   || "";
  const selectedUserAvatar  = savedState.selectedUserAvatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(savedState.selectedUserName || "U")}&background=055860&color=fff`;
  const selectedUserCountry = savedState.selectedUserCountry || "";

  // ── Stats state ───────────────────────────────────────────────────────────
  const [stats, setStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, thisYear: 0, totalrevenue: 0 });
  const [statsLoading, setStatsLoading] = useState(false);

  // ── Table state ───────────────────────────────────────────────────────────
  const [tableData, setTableData]       = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages]     = useState(1);
  const [tableLoading, setTableLoading] = useState(false);

  const fetchTableData = useCallback(async (page = 1) => {
    if (!selectedUserId) return;
    setTableLoading(true);
    setStatsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/referrals/users/details`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid:    selectedUserId,
          type:   "yearly",
          status: "trial",
          sort:   "subscribedDate",
          size:   itemsPerPage,
          page,
        }),
      });
      const json = await res.json();
      if (json.success && json.metrics) {
        setTableData(json.metrics.data || []);
        setStats({
          total:        json.metrics.total        ?? 0,
          thisMonth:    json.metrics.thisMonth     ?? 0,
          thisWeek:     json.metrics.thisWeek      ?? 0,
          thisYear:     json.metrics.thisYear      ?? 0,
          totalrevenue: json.metrics.totalrevenue  ?? 0,
        });
        setTotalRecords(json.pagination?.total    || 0);
        setTotalPages(json.pagination?.totalPages || 1);
        setCurrentPage(json.pagination?.page      || 1);
      }
    } catch (err) {
      console.error("fetchTableData error:", err);
    } finally {
      setTableLoading(false);
      setStatsLoading(false);
    }
  }, [selectedUserId]);

  useEffect(() => { if (selectedUserId) fetchTableData(1); }, [selectedUserId]);
  useEffect(() => { setCurrentPage(1); }, [tableSearchTerm]);

  const filteredTableData = tableData.filter((row) =>
    (row.name || "").toLowerCase().includes(tableSearchTerm.toLowerCase())
  );

  const showLeftUser =
    !!selectedUserName &&
    selectedUserName.toLowerCase().includes(userSearchTerm.toLowerCase());

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex   = startIndex + itemsPerPage;

  const handlePrevPage  = () => { if (currentPage > 1)         { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
  const handleNextPage  = () => { if (currentPage < totalPages) { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
  const handlePageClick = (p) => { if (p !== currentPage)       { setCurrentPage(p); fetchTableData(p); } };

  const pageNumbers = [];
  for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

  const fmtDate = (iso) => iso
    ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    : "—";
  const fmtTime = (iso) => iso
    ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    : "—";

  const resolveAvatar = (src, name) =>
    src || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "U")}&background=055860&color=fff`;

  return (
    <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
      <Sidebar isCurrentPageFreeAllUsers={false} />

      {/* LEFT PANEL */}
      <div className="min-h-screen h-[979px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        <input
          type="text"
          placeholder="Search"
          value={userSearchTerm}
          onChange={(e) => setUserSearchTerm(e.target.value)}
          className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

        <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
          {showLeftUser ? (
            <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <img
                    src={resolveAvatar(selectedUserAvatar, selectedUserName)}
                    alt={selectedUserName}
                    onError={(e) => { e.target.src = resolveAvatar("", selectedUserName); }}
                    className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
                  />
                  <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">{selectedUserName}</p>
                </div>
                <span className="text-xs text-[#055860] mt-3">{selectedUserCountry}</span>
              </div>
              <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
                <span className="text-gray-500">Users: <span className="text-[#055860]">{totalRecords}</span></span>
                <span className="text-gray-500">Balance: <span className="text-[#055860]">{statsLoading ? "..." : `$${Number(stats.totalrevenue).toLocaleString()}`}</span></span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={resolveAvatar(selectedUserAvatar, selectedUserName)}
              alt={selectedUserName}
              onError={(e) => { e.target.src = resolveAvatar("", selectedUserName); }}
              className="w-12 h-12 rounded-full object-cover mt-[-17px]"
            />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{selectedUserName}</h2>
          </div>
          <div className="relative w-full max-w-sm">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search..."
              value={tableSearchTerm}
              onChange={(e) => setTableSearchTerm(e.target.value)}
              className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex items-center gap-4 mb-4 mt-[-8px]">
          <button
            onClick={() => navigate(-1)}
            className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
          >
            <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
          </button>

          <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex">
              <div className="h-[115px] w-[135px] bg-[#055860] text-white text-center flex items-center justify-center" style={{ borderRight: "0.5px solid white" }}>
                <div className="text-md font-semibold leading-[210%]">
                  <span className="block whitespace-nowrap">Yearly</span>
                  <span className="block whitespace-nowrap">Trial Users</span>
                </div>
              </div>
              <div className="flex flex-1">
                <div className="w-[220px] flex-1 bg-[#055860] text-white p-6 text-center">
                  <div className="text-lg font-semibold mt-1">{statsLoading ? "..." : stats.total}</div>
                  <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
                </div>
                <div className="flex-1 bg-[#055860] text-white p-6 text-center">
                  <div className="text-lg font-semibold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
                  <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
                </div>
                <div className="flex-1 bg-[#055860] text-white pt-9 text-center">
                  <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
                  <div className="text-md opacity-90 mt-[14px]">This Week</div>
                </div>
                <div className="flex-1 bg-[#055860] text-white pt-9 text-center" style={{ borderLeft: "0.5px solid white" }}>
                  <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : `$${Number(stats.totalrevenue).toLocaleString()}`}</div>
                  <div className="text-md opacity-90 mt-[14px]">Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-md text-sm">
            <thead className="h-[45px] bg-[#055860] text-white font-md">
              <tr>
                <th className="px-4 py-3 text-start">
                  <div className="ml-1">User</div>
                </th>
                <th className="p-2 text-center">Installed</th>
                <th className="p-2 text-center">Trial Start</th>
                <th className="p-2 text-center">Trial End</th>
              </tr>
            </thead>
            <tbody>
              {tableLoading ? (
                <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
              ) : filteredTableData.length > 0 ? (
                filteredTableData.map((row, index) => {
                  const sub        = row.Subscriptions?.[0];
                  const userName   = row.name || "Unknown";
                  const userAvatar = resolveAvatar(row.image, userName);
                  return (
                    <tr key={row.id || index} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={userAvatar}
                            alt="User"
                            onError={(e) => { e.target.src = resolveAvatar("", userName); }}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          {userName}
                        </div>
                      </td>
                      <td className="p-2 text-center">
                        {fmtDate(row.installedDate)}<br />
                        <span className="text-xs text-gray-400">{fmtTime(row.installedDate)}</span>
                      </td>
                      <td className="p-2 text-center">
                        {fmtDate(sub?.trialStartDate)}<br />
                        <span className="text-xs text-gray-400">{fmtTime(sub?.trialStartDate)}</span>
                      </td>
                      <td className="p-2 text-center">
                        {fmtDate(sub?.trialEndDate)}<br />
                        <span className="text-xs text-gray-400">{fmtTime(sub?.trialEndDate)}</span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr><td colSpan="4" className="p-4 text-center text-gray-500">
                  {selectedUserId ? "No trial users found" : "No user selected"}
                </td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
          <p className="text-sm text-gray-600 ml-[-13px]">
            Showing {totalRecords > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, totalRecords)} of {totalRecords} entries
          </p>
          <div className="flex items-center gap-2 mr-[-19px]">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
            >
              <span className="arrow text-white text-[25px] leading-none mt-[-7px]">‹</span>
            </button>
            {pageNumbers.map((pageNum) => (
              <span
                key={pageNum}
                onClick={() => handlePageClick(pageNum)}
                className={`cursor-pointer ${currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"}`}
              >
                {pageNum}
              </span>
            ))}
            {totalPages > 4 && (
              <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
                <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
              </button>
            )}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
            >
              <span className="arrow text-white text-[25px] leading-none mt-[-7px]">›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}