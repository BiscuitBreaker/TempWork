import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import CustomerLogin from "./CustomerLogin";
import MemberLogin from "./MemberLogin";
import BankingPage from "./BankingPage";
import PersonalDetails from "./PersonalDetails";
import EmploymentDetails from "./EmploymentDetails";
import LoanDetails from "./LoanDetails";
import NomineeDetails from "./NomineeDetails";
import VerificationPage from "./VerificationPage";
import MemberDashboard from "./MemberDashboard";
import MakerDocumentValidation from "./MakerDocumentValidation";
import MakerDataValidation from "./MakerDataValidation";
import CheckerDocumentValidation from "./CheckerDocumentValidation";
import CheckerDataValidation from "./CheckerDataValidation";
import VerifiedLoansDashboard from "./VerifiedLoansDashboard";
import { useEffect } from "react";
import { AnimatePresence } from "motion/react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
    const location = useLocation();
  return (
    
      <AnimatePresence mode="wait">
          <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<CustomerLogin />} />
          <Route path="/member" element={<MemberLogin />} />
          <Route path="/banking" element={<BankingPage />} />
          <Route path="/personaldetails" element={<PersonalDetails />} />
          <Route path="/employmentdetails" element={<EmploymentDetails />} />
          <Route path="/loandetails" element={<LoanDetails />} />
          <Route path="/nomineedetails" element={<NomineeDetails />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/dashboard" element={<MemberDashboard />} />
          <Route path="/maker-document-validation" element={<MakerDocumentValidation />} />
          <Route path="/maker-data-validation" element={<MakerDataValidation />} />
          <Route path="/checker-document-validation" element={<CheckerDocumentValidation />} />
          <Route path="/checker-data-validation" element={<CheckerDataValidation />} />
          <Route path="/verified-loans-dashboard" element={<VerifiedLoansDashboard />} />
        </Routes>
      </AnimatePresence>
    
  );
}

export default App;



// import React, { useState } from 'react';
// import { ArrowRight, ArrowLeft, X, Eye, CheckSquare, Users, Briefcase, CreditCard, FileText, LayoutList, Check, RotateCcw, PanelLeft, PanelTop } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';

// const mockApplication = {
//   id: 'APP001',
//   applicantName: 'John Doe',
//   loanType: 'Home Loan',
//   documents: [
//     { name: 'Photograph', file: { name: 'john_photo.jpg', url: 'https://placehold.co/800x600/C7D2FE/312E81?text=Photograph' }, status: 'valid', remark: '' },
//     { name: 'Aadhaar Card', file: { name: 'john_aadhaar.pdf', url: 'https://placehold.co/800x600/A5B4FC/4338CA?text=Aadhaar+Card' }, status: 'valid', remark: '' },
//     { name: 'PAN Card', file: { name: 'john_pan.pdf', url: 'https://placehold.co/800x600/C4B5FD/5B21B6?text=PAN+Card' }, status: 'valid', remark: '' },
//     { name: 'Salary Proof', file: { name: 'john_payslip.pdf', url: 'https://placehold.co/800x600/FBCFE8/831843?text=Salary+Proof' }, status: 'review', remark: 'Blurry, but readable. Need to verify against bank statement later.' },
//   ],
//   personal: {
//     firstName: 'John',
//     middleName: 'M',
//     lastName: 'Doe',
//     emailAddress: 'john.doe@example.com',
//     phoneNumber: '123-456-7890',
//     aadhaarNumber: 'XXXX XXXX XXXX',
//     panNumber: 'ABCDE1234F',
//   },
//   employment: {
//     employerName: 'ABC Corp',
//     annualIncome: '75000',
//     workExperience: '5',
//   },
//   loanDetails: {
//     loanType: 'Home Loan',
//     requiredLoanAmount: '500000',
//     loanDuration: '20',
//   },
//   makerRemarks: '',
// };

// const App = () => {
//   const [application, setApplication] = useState(mockApplication);
//   const [activeTabs, setActiveTabs] = useState([]);
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false);
//   const [isDataPanelVisible, setIsDataPanelVisible] = useState(true);
//   const [stackingLayout, setStackingLayout] = useState('horizontal'); // 'horizontal' or 'vertical'
//   const [dataStatus, setDataStatus] = useState({
//     firstName: 'unchecked', middleName: 'unchecked', lastName: 'unchecked', emailAddress: 'unchecked',
//     phoneNumber: 'unchecked', aadhaarNumber: 'unchecked', panNumber: 'unchecked', employerName: 'unchecked',
//     annualIncome: 'unchecked', workExperience: 'unchecked', loanType: 'unchecked', requiredLoanAmount: 'unchecked',
//     loanDuration: 'unchecked',
//   });

//   const allDataVerified = Object.values(dataStatus).every(status => status === 'verified');
//   const hasMismatch = Object.values(dataStatus).some(status => status === 'mismatch');

//   const openDocument = (doc) => {
//     if (!activeTabs.find(tab => tab.name === doc.name)) {
//       if (activeTabs.length >= 2) {
//         setActiveTabs(prev => [...prev.slice(1), doc]); // Replace oldest tab
//       } else {
//         setActiveTabs(prev => [...prev, doc]);
//       }
//     }
//     setIsSidebarVisible(false);
//   };

//   const closeTab = (docName) => {
//     setActiveTabs(activeTabs.filter(tab => tab.name !== docName));
//   };
  
//   const handleDataStatusChange = (key, status) => {
//     setDataStatus(prevStatus => ({ ...prevStatus, [key]: status }));
//   };

//   const handleMakerRemarkChange = (e) => {
//     setApplication(prevApp => ({
//       ...prevApp,
//       makerRemarks: e.target.value
//     }));
//   };

//   const handleProceed = () => {
//     console.log('Forwarding to Checker:', application);
//   };

//   const handleReturn = () => {
//     console.log('Returning to Applicant:', application);
//   };

//   const renderDataSection = (title, icon, data, fields) => (
//     <section className="mb-6 pb-4 border-b border-gray-200">
//       <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
//         {icon} {title}
//       </h2>
//       <div className="space-y-3">
//         {fields.map((field) => (
//           <div key={field.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
//             <span className="text-sm font-medium text-gray-700">{field.label}:</span>
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-gray-600">{data[field.key]}</span>
//               <button
//                 onClick={() => handleDataStatusChange(field.key, 'verified')}
//                 className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200 ${dataStatus[field.key] === 'verified' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-green-100 hover:text-green-600'}`}
//               >
//                 <Check className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => handleDataStatusChange(field.key, 'mismatch')}
//                 className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200 ${dataStatus[field.key] === 'mismatch' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-red-100 hover:text-red-600'}`}
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );

//   return (
//     <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4 sm:p-6 font-sans">
//       <div 
//         className={`flex w-full max-w-[88rem] gap-8 items-start relative transition-all duration-500 ease-in-out`}
//       >
//         {/* Toggle button to show/hide data panel */}
//         {!isDataPanelVisible && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="fixed left-0 top-1/2 -translate-y-1/2 z-50 p-2 bg-white rounded-r-lg shadow-md cursor-pointer"
//             onMouseEnter={() => setIsDataPanelVisible(true)}
//           >
//             <ArrowRight className="w-6 h-6 text-gray-700" />
//           </motion.div>
//         )}

//         {/* Data Container (Left Column) */}
//         <div 
//           className={`bg-white rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-10 transition-all duration-500 ease-in-out ${isSidebarVisible ? 'transform -translate-x-[100%] w-0 opacity-0' : 'w-full md:w-2/5'} `}
//           // style={{ width: isDataPanelVisible ? '40%' : '0', opacity: isDataPanelVisible ? 1 : 0 }}
//         >
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Data Cross-Check</h1>
//             {activeTabs.length > 1 && (
//               <button onClick={() => setIsDataPanelVisible(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-md">
//                 <ArrowLeft className="w-5 h-5" />
//               </button>
//             )}
//           </div>
//           <p className="text-sm text-gray-600 mb-6">Verify the data for Application ID: {application.id}</p>

//           {renderDataSection('Personal Details', <Users className="w-5 h-5 text-blue-600" />, application.personal, [
//             { key: 'firstName', label: 'First Name' }, { key: 'middleName', label: 'Middle Name' }, { key: 'lastName', label: 'Last Name' },
//             { key: 'emailAddress', label: 'Email Address' }, { key: 'phoneNumber', label: 'Phone Number' },
//             { key: 'aadhaarNumber', label: 'Aadhaar Number' }, { key: 'panNumber', label: 'PAN Number' },
//           ])}
//           {renderDataSection('Employment Details', <Briefcase className="w-5 h-5 text-blue-600" />, application.employment, [
//             { key: 'employerName', label: 'Employer Name' }, { key: 'annualIncome', label: 'Annual Income' }, { key: 'workExperience', label: 'Work Experience' },
//           ])}
//           {renderDataSection('Loan Details', <CreditCard className="w-5 h-5 text-blue-600" />, application.loanDetails, [
//             { key: 'loanType', label: 'Loan Type' }, { key: 'requiredLoanAmount', label: 'Required Loan Amount' }, { key: 'loanDuration', label: 'Loan Duration' },
//           ])}

//           <div className="mt-8">
//             <label htmlFor="maker-remarks" className="block text-sm font-medium text-gray-700">Maker's Final Remarks</label>
//             <textarea
//               id="maker-remarks"
//               name="maker-remarks"
//               rows="4"
//               value={application.makerRemarks}
//               onChange={handleMakerRemarkChange}
//               placeholder="Add your final remarks for the Checker..."
//               className="mt-1 w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//             ></textarea>
//           </div>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={handleReturn}
//               disabled={!hasMismatch}
//               className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <ArrowLeft className="h-4 w-4 mr-2" />
//               Return to Applicant
//             </button>
//             <button
//               onClick={handleProceed}
//               disabled={!allDataVerified}
//               className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Forward to Checker
//               <ArrowRight className="h-4 w-4 ml-2" />
//             </button>
//           </div>
//         </div>
        
//         {/* Document Viewer (Right-side column) */}
//         {/* <div className={`w-full transition-all duration-500 ease-in-out h-[80vh] bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 overflow-y-auto sticky top-4 ${isDataPanelVisible ? '' : `(${isSidebarVisible ? '': 'md:w-full'})`}`}> */}
//         <div className={`w-full transition-all duration-500 ease-in-out md:w-3/5 ${isSidebarVisible ? 'md:w-3/5' : 'md:w-3/5'} h-[80vh] bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 overflow-y-auto sticky top-4`}>
//           <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
//             <h3 className="text-lg font-bold text-gray-900">Document Viewer</h3>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setStackingLayout('horizontal')}
//                 className={`p-2 rounded-full transition-colors duration-200 ${stackingLayout === 'horizontal' ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:bg-gray-100'}`}
//               >
//                 <PanelLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setStackingLayout('vertical')}
//                 className={`p-2 rounded-full transition-colors duration-200 ${stackingLayout === 'vertical' ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:bg-gray-100'}`}
//               >
//                 <PanelTop className="w-5 h-5" />
//               </button>
//               <button onClick={() => setIsSidebarVisible(true)} className="p-2 text-gray-500 hover:text-gray-900">
//                 <LayoutList className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//           <div className="flex-grow bg-gray-200 rounded-md flex items-center justify-center overflow-hidden h-full p-2">
//             <AnimatePresence>
//               {activeTabs.length === 0 ? (
//                 <motion.div
//                   key="placeholder"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="text-center text-gray-500 flex flex-col items-center justify-center h-full"
//                 >
//                   <Eye className="w-12 h-12 mx-auto mb-4" />
//                   <p>Select a document from the sidebar to view it here.</p>
//                 </motion.div>
//               ) : (
//                 <div className={`w-full h-full flex gap-2 ${stackingLayout === 'horizontal' ? 'flex-row' : 'flex-col'}`}>
//                   {activeTabs.map(tab => (
//                     <motion.div 
//                       key={tab.name}
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.95 }}
//                       className="relative flex-1 bg-white rounded-md overflow-hidden"
//                     >
//                       <button 
//                         onClick={() => closeTab(tab.name)} 
//                         className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 z-10"
//                       >
//                         <X className="w-4 h-4" />
//                       </button>
//                       <img
//                         src={tab.file.url}
//                         alt={tab.name}
//                         className="w-full h-full object-contain"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
        
//         {/* Document Sidebar (Hover to show) */}
//         <div 
//           className={`fixed top-0 right-0 h-full bg-white z-50 p-6 shadow-2xl transition-transform duration-500 ease-in-out md:w-1/5 ${isSidebarVisible ? 'transform translate-x-0' : 'transform translate-x-[85%]'}`}
//           onMouseEnter={() => setIsSidebarVisible(true)}
//           onMouseLeave={() => setIsSidebarVisible(false)}
//         >
//           <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
//             <h3 className="text-lg font-bold text-blue-600">Documents</h3>
//             <button onClick={() => setIsSidebarVisible(false)} className="text-gray-500 hover:text-gray-900">
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//           <ul className="space-y-2">
//             {application.documents.map((doc) => (
//               <li 
//                 key={doc.name} 
//                 className="p-3 bg-gray-100 rounded-md cursor-pointer hover:bg-blue-100 transition-colors"
//                 onClick={() => openDocument(doc)}
//               >
//                 <span className="text-sm font-medium text-gray-700">{doc.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { ArrowRight, ArrowLeft, X, Eye, CheckSquare, Users, Briefcase, CreditCard, FileText, LayoutList, Check, RotateCcw, PanelLeft, PanelTop } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';

// const mockApplication = {
//   id: 'APP001',
//   applicantName: 'John Doe',
//   loanType: 'Home Loan',
//   documents: [
//     { name: 'Photograph', file: { name: 'john_photo.jpg', url: 'https://placehold.co/800x600/C7D2FE/312E81?text=Photograph' }, status: 'valid', remark: '' },
//     { name: 'Aadhaar Card', file: { name: 'john_aadhaar.pdf', url: 'https://placehold.co/800x600/A5B4FC/4338CA?text=Aadhaar+Card' }, status: 'valid', remark: '' },
//     { name: 'PAN Card', file: { name: 'john_pan.pdf', url: 'https://placehold.co/800x600/C4B5FD/5B21B6?text=PAN+Card' }, status: 'valid', remark: '' },
//     { name: 'Salary Proof', file: { name: 'john_payslip.pdf', url: 'https://placehold.co/800x600/FBCFE8/831843?text=Salary+Proof' }, status: 'review', remark: 'Blurry, but readable. Need to verify against bank statement later.' },
//   ],
//   personal: {
//     firstName: 'John',
//     middleName: 'M',
//     lastName: 'Doe',
//     emailAddress: 'john.doe@example.com',
//     phoneNumber: '123-456-7890',
//     aadhaarNumber: 'XXXX XXXX XXXX',
//     panNumber: 'ABCDE1234F',
//   },
//   employment: {
//     employerName: 'ABC Corp',
//     annualIncome: '75000',
//     workExperience: '5',
//   },
//   loanDetails: {
//     loanType: 'Home Loan',
//     requiredLoanAmount: '500000',
//     loanDuration: '20',
//   },
//   makerRemarks: '',
// };

// const App = () => {
//   const [application, setApplication] = useState(mockApplication);
//   const [activeTabs, setActiveTabs] = useState([]);
//   const [isSidebarHovered, setIsSidebarHovered] = useState(false);
//   const [isDataPanelHovered, setIsDataPanelHovered] = useState(false);
//   const [stackingLayout, setStackingLayout] = useState('horizontal'); // 'horizontal' or 'vertical'
//   const [dataStatus, setDataStatus] = useState({
//     firstName: 'unchecked', middleName: 'unchecked', lastName: 'unchecked', emailAddress: 'unchecked',
//     phoneNumber: 'unchecked', aadhaarNumber: 'unchecked', panNumber: 'unchecked', employerName: 'unchecked',
//     annualIncome: 'unchecked', workExperience: 'unchecked', loanType: 'unchecked', requiredLoanAmount: 'unchecked',
//     loanDuration: 'unchecked',
//   });

//   const allDataVerified = Object.values(dataStatus).every(status => status === 'verified');
//   const hasMismatch = Object.values(dataStatus).some(status => status === 'mismatch');
//   const showDataToggle = activeTabs.length > 1 && stackingLayout === 'horizontal';

//   const openDocument = (doc) => {
//     if (!activeTabs.find(tab => tab.name === doc.name)) {
//       if (activeTabs.length >= 2) {
//         setActiveTabs(prev => [...prev.slice(1), doc]);
//       } else {
//         setActiveTabs(prev => [...prev, doc]);
//       }
//     }
//     setIsSidebarHovered(false);
//   };

//   const closeTab = (docName) => {
//     setActiveTabs(activeTabs.filter(tab => tab.name !== docName));
//   };
  
//   const handleDataStatusChange = (key, status) => {
//     setDataStatus(prevStatus => ({ ...prevStatus, [key]: status }));
//   };

//   const handleMakerRemarkChange = (e) => {
//     setApplication(prevApp => ({
//       ...prevApp,
//       makerRemarks: e.target.value
//     }));
//   };

//   const handleProceed = () => {
//     console.log('Forwarding to Checker:', application);
//   };

//   const handleReturn = () => {
//     console.log('Returning to Applicant:', application);
//   };

//   const renderDataSection = (title, icon, data, fields) => (
//     <section className="mb-6 pb-4 border-b border-gray-200">
//       <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
//         {icon} {title}
//       </h2>
//       <div className="space-y-3">
//         {fields.map((field) => (
//           <div key={field.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
//             <span className="text-sm font-medium text-gray-700">{field.label}:</span>
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-gray-600">{data[field.key]}</span>
//               <button
//                 onClick={() => handleDataStatusChange(field.key, 'verified')}
//                 className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200 ${dataStatus[field.key] === 'verified' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-green-100 hover:text-green-600'}`}
//               >
//                 <Check className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => handleDataStatusChange(field.key, 'mismatch')}
//                 className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200 ${dataStatus[field.key] === 'mismatch' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-red-100 hover:text-red-600'}`}
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );

//   const sidebarWidth = 'w-[15%]';
//   const dataPanelWidth = 'w-[40%]';
//   const documentViewerWidth = 'w-[45%]';

//   // Calculate dynamic widths based on states
//   const getLayoutClasses = () => {
//     if (isSidebarHovered) {
//       return {
//         data: 'w-[0%] translate-x-0 overflow-hidden opacity-0',
//         viewer: 'w-[85%]',
//         sidebar: 'w-[15%] translate-x-0'
//       };
//     } else if (isDataPanelHovered) {
//       return {
//         data: 'w-[40%] translate-x-0',
//         viewer: 'w-[45%]',
//         sidebar: 'w-[15%] translate-x-[85%]'
//       };
//     } else {
//       return {
//         data: 'w-[40%] translate-x-0',
//         viewer: 'w-[45%]',
//         sidebar: 'w-[15%] translate-x-[85%]'
//       };
//     }
//   };
  
//   const layoutClasses = getLayoutClasses();

//   return (
//     <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4 sm:p-6 font-sans">
//       <div className="relative flex h-[90vh] w-full max-w-[88rem] gap-8 transition-all duration-500 ease-in-out">
//         {/* Main Content Area */}
//         <div 
//           className={`flex w-full h-full gap-8 transition-all duration-500 ease-in-out`}
//         >
//           {/* Data Container (Left Column) */}
//           <div 
//             className={`
//               bg-white rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-10
//               transition-all duration-500 ease-in-out flex-shrink-0 relative h-full
//               ${layoutClasses.data}
//             `}
//             onMouseEnter={() => {
//               if (showDataToggle) setIsDataPanelHovered(true);
//             }}
//             onMouseLeave={() => {
//               if (showDataToggle) setIsDataPanelHovered(false);
//             }}
//           >
//             {/* The small hoverable area for the data panel when it's minimized */}
//             <div className={`absolute top-0 right-0 h-full w-[20px] cursor-pointer block md:hidden`}></div>
            
//             <div className={`flex justify-between items-center mb-4`}>
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Data Cross-Check</h1>
//               {showDataToggle && (
//                 <button onClick={() => setIsDataPanelHovered(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-md">
//                   <ArrowLeft className="w-5 h-5" />
//                 </button>
//               )}
//             </div>
//             <p className="text-sm text-gray-600 mb-6">Verify the data for Application ID: {application.id}</p>

//             <div className="h-[calc(100vh-250px)] overflow-y-auto">
//               {renderDataSection('Personal Details', <Users className="w-5 h-5 text-blue-600" />, application.personal, [
//                 { key: 'firstName', label: 'First Name' }, { key: 'middleName', label: 'Middle Name' }, { key: 'lastName', label: 'Last Name' },
//                 { key: 'emailAddress', label: 'Email Address' }, { key: 'phoneNumber', label: 'Phone Number' },
//                 { key: 'aadhaarNumber', label: 'Aadhaar Number' }, { key: 'panNumber', label: 'PAN Number' },
//               ])}
//               {renderDataSection('Employment Details', <Briefcase className="w-5 h-5 text-blue-600" />, application.employment, [
//                 { key: 'employerName', label: 'Employer Name' }, { key: 'annualIncome', label: 'Annual Income' }, { key: 'workExperience', label: 'Work Experience' },
//               ])}
//               {renderDataSection('Loan Details', <CreditCard className="w-5 h-5 text-blue-600" />, application.loanDetails, [
//                 { key: 'loanType', label: 'Loan Type' }, { key: 'requiredLoanAmount', label: 'Required Loan Amount' }, { key: 'loanDuration', label: 'Loan Duration' },
//               ])}

//               <div className="mt-8">
//                 <label htmlFor="maker-remarks" className="block text-sm font-medium text-gray-700">Maker's Final Remarks</label>
//                 <textarea
//                   id="maker-remarks"
//                   name="maker-remarks"
//                   rows="4"
//                   value={application.makerRemarks}
//                   onChange={handleMakerRemarkChange}
//                   placeholder="Add your final remarks for the Checker..."
//                   className="mt-1 w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//                 ></textarea>
//               </div>

//               <div className="flex justify-between mt-6">
//                 <button
//                   onClick={handleReturn}
//                   disabled={!hasMismatch}
//                   className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <ArrowLeft className="h-4 w-4 mr-2" />
//                   Return to Applicant
//                 </button>
//                 <button
//                   onClick={handleProceed}
//                   disabled={!allDataVerified}
//                   className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Forward to Checker
//                   <ArrowRight className="h-4 w-4 ml-2" />
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Document Viewer (Middle Column) */}
//           <div 
//             className={`bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 overflow-y-auto sticky top-4 h-full
//             transition-all duration-500 ease-in-out
//             ${layoutClasses.viewer}
//             ${showDataToggle ? 'w-full' : ''}
//             `}
//           >
//             <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
//               <h3 className="text-lg font-bold text-gray-900">Document Viewer</h3>
//               <div className="flex items-center gap-2">
//                 {activeTabs.length > 1 && (
//                   <>
//                     <button
//                       onClick={() => setStackingLayout('horizontal')}
//                       className={`p-2 rounded-full transition-colors duration-200 ${stackingLayout === 'horizontal' ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:bg-gray-100'}`}
//                     >
//                       <PanelLeft className="w-5 h-5" />
//                     </button>
//                     <button
//                       onClick={() => setStackingLayout('vertical')}
//                       className={`p-2 rounded-full transition-colors duration-200 ${stackingLayout === 'vertical' ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:bg-gray-100'}`}
//                     >
//                       <PanelTop className="w-5 h-5" />
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//             <div className="flex-grow bg-gray-200 rounded-md flex items-center justify-center overflow-hidden h-[90%] p-2">
//               <AnimatePresence>
//                 {activeTabs.length === 0 ? (
//                   <motion.div
//                     key="placeholder"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="text-center text-gray-500 flex flex-col items-center justify-center h-full"
//                   >
//                     <Eye className="w-12 h-12 mx-auto mb-4" />
//                     <p>Select a document to view it here.</p>
//                   </motion.div>
//                 ) : (
//                   <div className={`w-full h-full flex gap-2 ${stackingLayout === 'horizontal' ? 'flex-row' : 'flex-col'}`}>
//                     {activeTabs.map(tab => (
//                       <motion.div 
//                         key={tab.name}
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.95 }}
//                         className="relative flex-1 bg-white rounded-md overflow-hidden"
//                       >
//                         <button 
//                           onClick={() => closeTab(tab.name)} 
//                           className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 z-10"
//                         >
//                           <X className="w-4 h-4" />
//                         </button>
//                         <img
//                           src={tab.file.url}
//                           alt={tab.name}
//                           className="w-full h-full object-contain"
//                         />
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
        
//         {/* Document Sidebar (Right Column) */}
//         <div 
//           className={`
//             fixed top-0 right-0 h-full bg-white z-50 p-6 shadow-2xl
//             transition-transform duration-500 ease-in-out flex-shrink-0
//             ${isSidebarHovered ? 'w-[15%] translate-x-0' : 'w-[3%] md:w-[5%] translate-x-0 overflow-hidden'}
//           `}
//           onMouseEnter={() => setIsSidebarHovered(true)}
//           onMouseLeave={() => setIsSidebarHovered(false)}
//         >
//           <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
//             <h3 className="text-lg font-bold text-blue-600">Documents</h3>
//             <button onClick={() => setIsSidebarHovered(false)} className="text-gray-500 hover:text-gray-900">
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//           <ul className="space-y-2">
//             {application.documents.map((doc) => (
//               <li 
//                 key={doc.name} 
//                 className="p-3 bg-gray-100 rounded-md cursor-pointer hover:bg-blue-100 transition-colors"
//                 onClick={() => openDocument(doc)}
//               >
//                 <span className="text-sm font-medium text-gray-700">{doc.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;





