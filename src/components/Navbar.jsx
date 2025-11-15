// import React from "react";
// import logo from "../assets/images/Brand-logo.png";
// import { Link } from "react-router";
// import { IoIosSearch } from "react-icons/io";
// import { MdKeyboardArrowDown } from "react-icons/md";

// const Navbar = () => {
//   return (
//     <>
//       <section className="py-[26px]">
//         <div className="container">
//           <div className="navbar_row flex justify-between items-center">
//             <Link to={"/"}>
//               {" "}
//               <img src={logo} alt="" />{" "}
//             </Link>
//             <div className="">
//               <ul className="flex gap-[32px]">
//                 <li>
//                   <Link className="text-[16px] font-normal font-roboto text-main">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto flex gap-[5px] items-center text-main">
//                     Divisions <MdKeyboardArrowDown />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto  text-main">
//                     Destination{" "}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto text-main">
//                     Hotel & Resort
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto text-main">
//                     Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto text-main">
//                     Shop
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto text-main">
//                     Blog
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex  gap-[16px] ">
//               <Link className="py-[10px] px-[20px] bg-[#5927E5] rounded-[4px]">
//                 <p className="text-base font-normal  font-roboto text-[#fff]">
//                   Login
//                 </p>
//               </Link>
//               <div className="flex  items-center  relative">
//                 <input
//                   className="w-[118px] border  py-[10px] px-[20px] overflow-hidden text-base font-normal font-roboto text-[#808080]"
//                   type="text"
//                   placeholder="search"
//                 />
//                 <IoIosSearch className="text-[18px] absolute left-[96px]" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import logo from "../assets/images/Brand-logo.png";
// import { Link } from "react-router";
// import { IoIosSearch } from "react-icons/io";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { IoMdMenu } from "react-icons/io";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // state to control the menu toggle

//   const handleToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <section className="py-[26px]">
//         <div className="container">
//           <div className="navbar_row flex justify-between items-center">
//             <Link to={"/"}>
//               <img src={logo} alt="logo" />
//             </Link>
//             {/* Hamburger icon for mobile view */}
//             <div className="block lg:hidden">
//               <button onClick={handleToggle} className="text-2xl">
//                 <IoMdMenu />
//               </button>
//             </div>

//             {/* Nav items and login/search bar (hidden on small screens by default) */}
//             <div className={`lg:flex gap-[32px] ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
//               <ul className="flex gap-[32px]">
//                 <li>
//                   <Link className="text-[16px] font-normal font-roboto text-main">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto flex gap-[5px] items-center text-main">
//                     Divisions <MdKeyboardArrowDown />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto text-main">
//                     Destination{" "}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto text-main">
//                     Hotel & Resort
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto text-main">
//                     Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto text-main">
//                     Shop
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-normal font-roboto text-main">
//                     Blog
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div className={`lg:flex gap-[16px] ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
//               <Link className="py-[10px] px-[20px] bg-[#5927E5] rounded-[4px]">
//                 <p className="text-base font-normal font-roboto text-[#fff]">
//                   Login
//                 </p>
//               </Link>
//               <div className="flex items-center relative">
//                 <input
//                   className="w-[118px] border py-[10px] px-[20px] overflow-hidden text-base font-normal font-roboto text-[#808080]"
//                   type="text"
//                   placeholder="search"
//                 />
//                 <IoIosSearch className="text-[18px] absolute left-[96px]" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "../assets/images/Brand-logo.png";
import { Link } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="py-[16px] sm:py-[26px] sticky top-0 z-50 bg-white shadow-sm">
        <div className="container px-4 sm:px-6">
          <div className="navbar_row flex justify-between items-center gap-2 sm:gap-4">
            {/* Logo */}
            <Link to={"/"} className="flex-shrink-0">
              <img src={logo} alt="logo" className="h-8 sm:h-10" />
            </Link>

            {/* Hamburger Icon for Mobile */}
            <button
              onClick={handleToggle}
              className="lg:hidden flex-shrink-0 text-2xl sm:text-3xl text-main p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>

            {/* Nav items - Desktop and Mobile */}
            <div
              className={`absolute lg:static top-full left-0 right-0 lg:mx-auto ${
                isMenuOpen ? "block" : "hidden lg:block"
              } bg-white lg:bg-transparent shadow-md lg:shadow-none lg:flex lg:justify-center w-full lg:w-auto`}
            >
              <ul className="flex flex-col lg:flex-row p-4 sm:p-6 lg:p-0 gap-3 lg:gap-[32px]">
                <li>
                  <Link
                    onClick={closeMenu}
                    className="text-[14px] sm:text-[16px] font-normal font-roboto text-main hover:text-[#5927E5] transition-colors block py-2 lg:py-0"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    className="text-[14px] sm:text-base font-normal font-roboto flex gap-[5px] items-center text-main hover:text-[#5927E5] transition-colors py-2 lg:py-0"
                  >
                    Divisions{" "}
                    <MdKeyboardArrowDown className="hidden lg:inline" />
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    className="text-[14px] sm:text-base font-normal font-roboto text-main hover:text-[#5927E5] transition-colors block py-2 lg:py-0"
                  >
                    Destination
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    className="text-[14px] sm:text-base font-normal font-roboto text-main hover:text-[#5927E5] transition-colors block py-2 lg:py-0"
                  >
                    Hotel & Resort
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    className="text-[14px] sm:text-base font-normal font-roboto text-main hover:text-[#5927E5] transition-colors block py-2 lg:py-0"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    className="text-[14px] sm:text-base font-normal font-roboto text-main hover:text-[#5927E5] transition-colors block py-2 lg:py-0"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    className="text-[14px] sm:text-base font-normal font-roboto text-main hover:text-[#5927E5] transition-colors block py-2 lg:py-0"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Login and Search Section - Desktop and Mobile */}
            <div
              className={`absolute lg:static top-full left-0 right-0 ${
                isMenuOpen ? "block" : "hidden lg:flex"
              } bg-white lg:bg-transparent shadow-md lg:shadow-none lg:flex w-full lg:w-auto flex-col lg:flex-row gap-3 lg:gap-[12px] p-4 sm:p-6 lg:p-0 flex-shrink-0`}
            >
              <Link
                onClick={closeMenu}
                className="py-[10px] px-[24px] bg-[#5927E5] rounded-[6px] text-center lg:text-left hover:bg-[#4620d0] transition-colors shadow-sm"
              >
                <p className="text-[14px] sm:text-base font-medium font-roboto text-[#fff] whitespace-nowrap">
                  Login
                </p>
              </Link>
              <div className="flex items-center relative w-full lg:w-auto">
                <input
                  className="w-full lg:w-[140px] border border-[#e0e0e0] py-[10px] pl-[16px] pr-[36px] text-sm sm:text-base font-normal font-roboto text-[#808080] rounded-[6px] focus:outline-none focus:border-[#5927E5] transition-colors"
                  type="text"
                  placeholder="Search"
                />
                <IoIosSearch className="text-[18px] absolute right-3 text-[#999] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
