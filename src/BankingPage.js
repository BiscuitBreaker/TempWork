import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Calculator, FileText, Phone, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const loanOptions = [
  {
    title: "Personal Loan",
    description: "A flexible loan to cover personal expenses. Whether you're consolidating high-interest debt, paying for a wedding, or covering unexpected medical bills, a personal loan can provide the financial breathing room you need. Our competitive rates and flexible repayment plans make it a great choice for various situations.",
    image: "https://placehold.co/200x200/C7D2FE/312E81?text=Personal",
    color: {
      accent: 'bg-indigo-600',
      accentHover: 'hover:bg-indigo-700',
      ring: 'focus:ring-indigo-500',
      light: 'bg-indigo-100',
      text: 'text-indigo-600'
    },
    action: () => console.log("Navigating to Personal Loan application..."),
  },
  {
    title: "Home Loan",
    description: "Secure financing to help you purchase a new home or refinance your existing mortgage. Our home loan options are designed to make the homebuying process as smooth as possible, with competitive interest rates and expert guidance from our loan officers. We offer various mortgage types to fit your needs.",
    image: "https://placehold.co/200x200/A5B4FC/4338CA?text=Home",
    color: {
      accent: 'bg-blue-600',
      accentHover: 'hover:bg-blue-700',
      ring: 'focus:ring-blue-500',
      light: 'bg-blue-100',
      text: 'text-blue-600'
    },
    action: () => console.log("Navigating to Home Loan application..."),
  },
  {
    title: "Vehicle Loan",
    description: "Financing options to help you buy a new or used car, truck, or motorcycle. Our vehicle loans offer a straightforward application process and quick approval times, getting you on the road faster. With a range of terms and rates, you can find a plan that fits your budget and lifestyle.",
    image: "https://placehold.co/200x200/C4B5FD/5B21B6?text=Vehicle",
    color: {
      accent: 'bg-purple-600',
      accentHover: 'hover:bg-purple-700',
      ring: 'focus:ring-purple-500',
      light: 'bg-purple-100',
      text: 'text-purple-600'
    },
    action: () => console.log("Navigating to Vehicle Loan application..."),
  },
  {
    title: "Education Loan",
    description: "Loans to help cover the cost of tuition, books, and living expenses for students. Our education loans come with favorable repayment terms and competitive rates, allowing you to focus on your studies without financial stress. Whether you're an undergraduate or pursuing a post-graduate degree, we can help.",
    image: "https://placehold.co/200x200/FBCFE8/831843?text=Education",
    color: {
      accent: 'bg-pink-600',
      accentHover: 'hover:bg-pink-700',
      ring: 'focus:ring-pink-500',
      light: 'bg-pink-100',
      text: 'text-pink-600'
    },
    action: () => console.log("Navigating to Education Loan application..."),
  },
];



const BankingPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const buttonOptions = (loan) => [
    { name: 'Check Eligibility', icon: <Award className="w-5 h-5" />, action: () => alert('Check Eligibility clicked for ' + loan.title) },
    { name: 'EMI Calculator', icon: <Calculator className="w-5 h-5" />, action: () => alert('EMI Calculator clicked for ' + loan.title) },
    { name: 'Know More', icon: <FileText className="w-5 h-5" />, action: () => alert('Know More clicked for ' + loan.title) },
    { name: 'Contact Us', icon: <Phone className="w-5 h-5" />, action: () => alert('Contact Us clicked for ' + loan.title) },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // This defines the animation for the page
const pageVariants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
};

// This controls the speed and easing of the animation
const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5
};

const navigate = useNavigate();

  return (
    <motion.div 
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-8 font-sans">
      <button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg text-gray-700 hover:bg-gray-200 transition-colors transform hover:scale-105"
    >
      <ArrowLeft className="w-5 h-5" />
      Back
    </button>
      <div className="w-full max-w-5xl mx-auto text-center mb-10 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Explore Our Loan Options</h1>
        <p className="text-base text-gray-600 max-w-3xl mx-auto">
          We offer a variety of loan products designed to meet your specific needs. Choose an option below to learn more and begin your application.
        </p>
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-8">
        {loanOptions.map((loan, index) => {
          const isHovered = hoveredIndex === index;
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`relative flex items-center w-full max-w-5xl group`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main card content */}
              <div
                className={`bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center relative z-10 w-full transform transition-all duration-500 ease-in-out border border-gray-200 ${isReversed ? 'md:flex-row-reverse' : ''} ${isHovered ? (isReversed ? 'translate-x-48' : '-translate-x-48') : 'translate-x-0'}`}
              >
                <div
                  className={`p-4 mb-4 md:mb-0 md:w-1/3 flex-shrink-0 `}
                >
                  <img src={loan.image} alt={loan.title} className={`w-full max-w-xs h-auto mx-auto rounded-lg ${loan.color.light} object-cover`} />
                </div>
                <div className="md:w-2/3 flex-grow flex flex-col p-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{loan.title}</h2>
                  <p className="text-sm text-gray-600 flex-grow mb-4">{loan.description}</p>
                  <Link to="/personaldetails" className={`mt-auto inline-flex items-center justify-center md:justify-start rounded-md border border-transparent ${loan.color.accent} px-5 py-2 text-sm font-medium text-white shadow-sm ${loan.color.accentHover} focus:outline-none focus:ring-2 focus:ring-offset-2 ${loan.color.ring} transition-colors self-center md:self-start`}>
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Buttons container */}
              <div className={`absolute h-full flex flex-col justify-center items-center gap-2 p-4 w-48 z-0 transform transition-transform duration-500 ease-in-out ${isReversed ? 'left-0' : 'right-0'} ${isHovered ? (isReversed ? '-translate-x-10' : 'translate-x-10') : 'translate-x-0'}`}>
                {buttonOptions(loan).map((button, i) => (
                  <button
                    key={i}
                    onClick={button.action}
                    className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md transition-colors w-full ${loan.color.light} ${loan.color.text} hover:${loan.color.accent} hover:text-white`}
                  >
                    {button.icon}
                    <span className="whitespace-nowrap">{button.name}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </motion.div>
  );
};

export default BankingPage;