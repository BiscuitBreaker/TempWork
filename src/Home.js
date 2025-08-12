// User Login Page Component

// import React, { useState } from "react";
// import { User, Lock, Mail } from "lucide-react";

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login attempt with:", { email, password });
//     // In a real application, you would handle authentication here.
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
//       <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-[1.01] border border-gray-200">
//         <div className="flex justify-center mb-6">
//           {/* A placeholder for the bank's logo. Using a simple SVG icon for a clean look. */}
//           <div className="p-3 bg-indigo-100 rounded-full">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-10 w-10 text-indigo-600"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//             </svg>
//           </div>
//         </div>
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
//           Welcome Back
//         </h2>
//         <p className="text-center text-gray-500 mb-8">
//           Sign in to your account
//         </p>

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//                 placeholder="••••••••"
//                 required
//               />
//             </div>
//             <div className="mt-2 text-right">
//               <a
//                 href="#"
//                 className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 Forgot your password?
//               </a>
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//             >
//               Login
//             </button>
//           </div>
//         </form>

//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a
//               href="#"
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               Apply Now
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// Member Login Page Component

// import React, { useState } from 'react';
// import { User, Lock } from 'lucide-react';

// const App = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Member login attempt with:', { username, password });
//     // In a real application, this would handle internal authentication.
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
//       <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-300 border border-gray-200">
//         <div className="flex justify-center mb-6">
//           {/* Bank's logo placeholder */}
//           <div className="p-3 bg-teal-100 rounded-full">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-10 w-10 text-teal-600"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//             </svg>
//           </div>
//         </div>
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Member Login</h2>
//         <p className="text-center text-gray-500 mb-8">Access the employee portal</p>

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username or Employee ID</label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <User className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
//                 placeholder="Your ID"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
//                 placeholder="••••••••"
//                 required
//               />
//             </div>
//             <div className="mt-2 text-right">
//               <a href="#" className="text-sm font-medium text-teal-600 hover:text-teal-500">
//                 Forgot your password?
//               </a>
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;

// Banking Page Component

// import React, { useState } from 'react';
// import { ArrowRight, Calculator, FileText, Phone, Award } from 'lucide-react';

// const loanOptions = [
//   {
//     title: "Personal Loan",
//     description: "A flexible loan to cover personal expenses. Whether you're consolidating high-interest debt, paying for a wedding, or covering unexpected medical bills, a personal loan can provide the financial breathing room you need. Our competitive rates and flexible repayment plans make it a great choice for various situations.",
//     image: "https://placehold.co/200x200/C7D2FE/312E81?text=Personal",
//     color: {
//       accent: 'bg-indigo-600',
//       accentHover: 'hover:bg-indigo-700',
//       ring: 'focus:ring-indigo-500',
//       light: 'bg-indigo-100',
//       text: 'text-indigo-600'
//     },
//     action: () => console.log("Navigating to Personal Loan application..."),
//   },
//   {
//     title: "Home Loan",
//     description: "Secure financing to help you purchase a new home or refinance your existing mortgage. Our home loan options are designed to make the homebuying process as smooth as possible, with competitive interest rates and expert guidance from our loan officers. We offer various mortgage types to fit your needs.",
//     image: "https://placehold.co/200x200/A5B4FC/4338CA?text=Home",
//     color: {
//       accent: 'bg-blue-600',
//       accentHover: 'hover:bg-blue-700',
//       ring: 'focus:ring-blue-500',
//       light: 'bg-blue-100',
//       text: 'text-blue-600'
//     },
//     action: () => console.log("Navigating to Home Loan application..."),
//   },
//   {
//     title: "Vehicle Loan",
//     description: "Financing options to help you buy a new or used car, truck, or motorcycle. Our vehicle loans offer a straightforward application process and quick approval times, getting you on the road faster. With a range of terms and rates, you can find a plan that fits your budget and lifestyle.",
//     image: "https://placehold.co/200x200/C4B5FD/5B21B6?text=Vehicle",
//     color: {
//       accent: 'bg-purple-600',
//       accentHover: 'hover:bg-purple-700',
//       ring: 'focus:ring-purple-500',
//       light: 'bg-purple-100',
//       text: 'text-purple-600'
//     },
//     action: () => console.log("Navigating to Vehicle Loan application..."),
//   },
//   {
//     title: "Education Loan",
//     description: "Loans to help cover the cost of tuition, books, and living expenses for students. Our education loans come with favorable repayment terms and competitive rates, allowing you to focus on your studies without financial stress. Whether you're an undergraduate or pursuing a post-graduate degree, we can help.",
//     image: "https://placehold.co/200x200/FBCFE8/831843?text=Education",
//     color: {
//       accent: 'bg-pink-600',
//       accentHover: 'hover:bg-pink-700',
//       ring: 'focus:ring-pink-500',
//       light: 'bg-pink-100',
//       text: 'text-pink-600'
//     },
//     action: () => console.log("Navigating to Education Loan application..."),
//   },
// ];

// const App = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const buttonOptions = (loan) => [
//     { name: 'Check Eligibility', icon: <Award className="w-5 h-5" />, action: () => alert('Check Eligibility clicked for ' + loan.title) },
//     { name: 'EMI Calculator', icon: <Calculator className="w-5 h-5" />, action: () => alert('EMI Calculator clicked for ' + loan.title) },
//     { name: 'Know More', icon: <FileText className="w-5 h-5" />, action: () => alert('Know More clicked for ' + loan.title) },
//     { name: 'Contact Us', icon: <Phone className="w-5 h-5" />, action: () => alert('Contact Us clicked for ' + loan.title) },
//   ];

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-8 font-sans">
//       <div className="w-full max-w-5xl mx-auto text-center mb-10 mt-8">
//         <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Explore Our Loan Options</h1>
//         <p className="text-base text-gray-600 max-w-3xl mx-auto">
//           We offer a variety of loan products designed to meet your specific needs. Choose an option below to learn more and begin your application.
//         </p>
//       </div>

//       <div className="w-full max-w-5xl flex flex-col gap-8">
//         {loanOptions.map((loan, index) => {
//           const isHovered = hoveredIndex === index;
//           const isReversed = index % 2 !== 0;

//           return (
//             <div
//               key={index}
//               className={`relative flex items-center w-full max-w-5xl group`}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               {/* Main card content */}
//               <div
//                 className={`bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center relative z-10 w-full transform transition-all duration-500 ease-in-out border border-gray-200 ${isReversed ? 'md:flex-row-reverse' : ''} ${isHovered ? (isReversed ? 'translate-x-48' : '-translate-x-48') : 'translate-x-0'}`}
//               >
//                 <div
//                   className={`p-4 mb-4 md:mb-0 md:w-1/3 flex-shrink-0 `}
//                 >
//                   <img src={loan.image} alt={loan.title} className={`w-full max-w-xs h-auto mx-auto rounded-lg ${loan.color.light} object-cover`} />
//                 </div>
//                 <div className="md:w-2/3 flex-grow flex flex-col p-4">
//                   <h2 className="text-2xl font-semibold text-gray-900 mb-2">{loan.title}</h2>
//                   <p className="text-sm text-gray-600 flex-grow mb-4">{loan.description}</p>
//                   <button
//                     onClick={loan.action}
//                     className={`mt-auto inline-flex items-center justify-center md:justify-start rounded-md border border-transparent ${loan.color.accent} px-5 py-2 text-sm font-medium text-white shadow-sm ${loan.color.accentHover} focus:outline-none focus:ring-2 focus:ring-offset-2 ${loan.color.ring} transition-colors self-center md:self-start`}
//                   >
//                     Apply Now
//                     <ArrowRight className="h-4 w-4 ml-2" />
//                   </button>
//                 </div>
//               </div>

//               {/* Buttons container */}
//               <div className={`absolute h-full flex flex-col justify-center items-center gap-2 p-4 w-48 z-0 transform transition-transform duration-500 ease-in-out ${isReversed ? 'left-0' : 'right-0'} ${isHovered ? (isReversed ? '-translate-x-10' : 'translate-x-10') : 'translate-x-0'}`}>
//                 {buttonOptions(loan).map((button, i) => (
//                   <button
//                     key={i}
//                     onClick={button.action}
//                     className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md transition-colors w-full ${loan.color.light} ${loan.color.text} hover:${loan.color.accent} hover:text-white`}
//                   >
//                     {button.icon}
//                     <span className="whitespace-nowrap">{button.name}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

// Landing Page Component

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { ArrowRight, User, Briefcase, Award, LifeBuoy } from "lucide-react";
import CustomerLogin from "./CustomerLogin";
import MemberLogin from "./MemberLogin";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.02 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const Home = () => {
  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="min-h-screen"
  >
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navbar - Simple placeholder */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">
                Financify Bank
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Personal
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Business
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Support
              </a>
              <Link
                to="/dashboard"
                className="ml-4 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                Login <User className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-600 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
        <Routes>
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/MemberLogin" element={<MemberLogin />} />
        </Routes>

      {/* Hero Section with Frosted Glass Effect */}
      <header className="relative bg-indigo-800 h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background image or pattern */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1568056308658-aa380181da25?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        ></div>

        {/* Frosted Glass Overlay */}
        <div className="relative z-10 p-8 rounded-2xl shadow-xl w-11/12 md:w-3/4 max-w-2xl text-center backdrop-blur-sm bg-black/40 transform transition-transform duration-500 hover:scale-105">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Your Financial Journey, Simplified.
          </h1>
          <p className="text-base md:text-lg text-indigo-100 mb-8 drop-shadow-md">
            Empowering you with modern tools and trusted services for personal
            and business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <a href="#" className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-colors transform hover:-translate-y-1">
              Customer Login
            </a> */}
            <Link className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-colors transform hover:-translate-y-1" to="/customer">Customer Login</Link>
            <Link className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-indigo-600 transition-colors transform hover:-translate-y-1" to="/member">
              Member Login</Link>
          </div>
        </div>
      </header>

      {/* Featured Content & Animated Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Discover What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Placeholder for Loans */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-indigo-100 inline-block mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Loans</h3>
              <p className="text-gray-600 text-sm mb-4">
                Find the perfect loan to achieve your goals. From home to
                personal, we have you covered.
              </p>
              <Link
                to="/banking"
                className="text-indigo-600 font-semibold flex items-center gap-2 group"
              >
                Explore Loans{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 2: Placeholder for Accounts */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-purple-100 inline-block mb-4">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Banking for Business
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Tailored solutions to help your business thrive, from small
                startups to large enterprises.
              </p>
              <a
                href="#"
                className="text-purple-600 font-semibold flex items-center gap-2 group"
              >
                Business Accounts{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Card 3: Placeholder for Articles with subtle animation */}
            <div className="relative bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 overflow-hidden transform transition-transform duration-300 hover:scale-105">
              {/* This is a placeholder for a moving image/frame */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 transition-transform duration-[4000ms] ease-in-out hover:scale-110"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0)",
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">
                  Financial Planning
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Read our latest articles on smart financial planning and
                  investment strategies.
                </p>
                <a
                  href="#"
                  className="text-indigo-600 font-semibold flex items-center gap-2 group"
                >
                  Read Articles{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 4: Placeholder for Support */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-yellow-100 inline-block mb-4">
                <LifeBuoy className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our dedicated support team is available around the clock to
                assist you with any questions.
              </p>
              <a
                href="#"
                className="text-yellow-600 font-semibold flex items-center gap-2 group"
              >
                Get Help{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Simple placeholder */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Financify Bank. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </motion.div>
  );
};

export default Home;
