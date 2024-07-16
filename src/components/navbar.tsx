// 'use client'
// import React, { useState } from "react";
// import Image from "next/image";
//
// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//
//   return (
//     <header className={`flex w-full items-center bg-brand-primary`}>
//       <div className="container md:px-12">
//         <div className="relative  flex items-center justify-between">
//           <div className="w-60 max-w-full px-4">
//             <a href="/#" className="block w-full py-5">
//               <Image
//                 src="/nav-logo-02.png"
//                 width={150}
//                 height={150}
//                 alt="logo"
//                 className=""
//               />
//               {/*<img*/}
//               {/*  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"*/}
//               {/*  alt="logo"*/}
//               {/*  className="hidden "*/}
//               {/*/>*/}
//             </a>
//           </div>
//           <div className="flex w-full items-center justify-center px-4">
//             <div>
//               <button
//                 onClick={() => setOpen(!open)}
//                 id="navbarToggler"
//                 className={` ${
//                   open && "navbarTogglerActive"
//                 } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
//               >
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-white "></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-white "></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-white "></span>
//               </button>
//               <nav
//                 // :className="!navbarOpen && 'hidden' "
//                 id="navbarCollapse"
//                 className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
//                   !open && "hidden"
//                 } `}
//               >
//                 <ul className="block lg:flex lg:text-white">
//                   <ListItem NavLink="/#">Home</ListItem>
//                   <ListItem NavLink="/#">About us</ListItem>
//                   <ListItem NavLink="/#">Projects</ListItem>
//                   <ListItem NavLink="/#">Contact Us</ListItem>
//                 </ul>
//               </nav>
//             </div>
//             <div className="hidden justify-end sm:fle lg:pr-0">
//               {/*<a*/}
//               {/*  href="/#"*/}
//               {/*  className="px-7 py-3 text-base font-medium text-dark hover:text-primary "*/}
//               {/*>*/}
//               {/*  Sign in*/}
//               {/*</a>*/}
//
//               <a
//                 href="/#"
//                 className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
//               >
//                 Sign In
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
//
// export default Navbar;
//
// const ListItem = ({ children, NavLink }) => {
//   return (
//     <>
//       <li>
//         <a
//           href={NavLink}
//           className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex"
//         >
//           {children}
//         </a>
//       </li>
//     </>
//   );
// };
