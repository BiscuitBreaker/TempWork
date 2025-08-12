import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, X, Eye, CheckSquare, Users, Briefcase, CreditCard, FileText, LayoutList, Check, RotateCcw, PanelLeft, PanelTop } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const mockApplication = {
  id: 'APP001',
  applicantName: 'John Doe',
  loanType: 'Home Loan',
  documents: [
    { name: 'Photograph', file: { name: 'john_photo.jpg', url: 'https://placehold.co/800x600/C7D2FE/312E81?text=Photograph' }, status: 'valid', remark: '' },
    { name: 'Aadhaar Card', file: { name: 'john_aadhaar.pdf', url: 'https://placehold.co/800x600/A5B4FC/4338CA?text=Aadhaar+Card' }, status: 'valid', remark: '' },
    { name: 'PAN Card', file: { name: 'john_pan.pdf', url: 'https://placehold.co/800x600/C4B5FD/5B21B6?text=PAN+Card' }, status: 'valid', remark: '' },
    { name: 'Salary Proof', file: { name: 'john_payslip.pdf', url: 'https://placehold.co/800x600/FBCFE8/831843?text=Salary+Proof' }, status: 'review', remark: 'Blurry, but readable. Need to verify against bank statement later.' },
  ],
  personal: {
    firstName: 'John',
    middleName: 'M',
    lastName: 'Doe',
    emailAddress: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    aadhaarNumber: 'XXXX XXXX XXXX',
    panNumber: 'ABCDE1234F',
  },
  employment: {
    employerName: 'ABC Corp',
    annualIncome: '75000',
    workExperience: '5',
  },
  loanDetails: {
    loanType: 'Home Loan',
    requiredLoanAmount: '500000',
    loanDuration: '20',
  },
  makerRemarks: '',
};

const App = () => {
  const [application, setApplication] = useState(mockApplication);
  const [activeTabs, setActiveTabs] = useState([]);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isDataPanelHovered, setIsDataPanelHovered] = useState(false);
  const [stackingLayout, setStackingLayout] = useState('horizontal');
  const [dataStatus, setDataStatus] = useState({
    firstName: 'unchecked', middleName: 'unchecked', lastName: 'unchecked', emailAddress: 'unchecked',
    phoneNumber: 'unchecked', aadhaarNumber: 'unchecked', panNumber: 'unchecked', employerName: 'unchecked',
    annualIncome: 'unchecked', workExperience: 'unchecked', loanType: 'unchecked', requiredLoanAmount: 'unchecked',
    loanDuration: 'unchecked',
  });

  const allDataVerified = Object.values(dataStatus).every(status => status === 'verified');
  const hasMismatch = Object.values(dataStatus).some(status => status === 'mismatch');
  
  const openDocument = (doc) => {
    if (!activeTabs.find(tab => tab.name === doc.name)) {
      if (activeTabs.length >= 2) {
        setActiveTabs(prev => [...prev.slice(1), doc]);
      } else {
        setActiveTabs(prev => [...prev, doc]);
      }
    }
    setIsSidebarHovered(false);
  };

  const closeTab = (docName) => {
    setActiveTabs(activeTabs.filter(tab => tab.name !== docName));
  };
  
  const handleDataStatusChange = (key, status) => {
    setDataStatus(prevStatus => ({ ...prevStatus, [key]: status }));
  };

  const handleMakerRemarkChange = (e) => {
    setApplication(prevApp => ({
      ...prevApp,
      makerRemarks: e.target.value
    }));
  };

  const handleProceed = () => {
    console.log('Forwarding to Checker:', application);
  };

  const handleReturn = () => {
    console.log('Returning to Applicant:', application);
  };

  const renderDataSection = (title, icon, data, fields) => (
    <section className="mb-6 pb-4 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
        {icon} {title}
      </h2>
      <div className="space-y-3">
        {fields.map((field) => (
          <div key={field.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
            <span className="text-sm font-medium text-gray-700">{field.label}:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{data[field.key]}</span>
              <button
                onClick={() => handleDataStatusChange(field.key, 'verified')}
                className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200 ${dataStatus[field.key] === 'verified' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-green-100 hover:text-green-600'}`}
              >
                <Check className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDataStatusChange(field.key, 'mismatch')}
                className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200 ${dataStatus[field.key] === 'mismatch' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-red-100 hover:text-red-600'}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
  const sidebarWidth = 'md:w-[25%]';
  const dataPanelWidth = 'md:w-[25%]';

  // This class controls the full-screen layout on hover
  const getCentralViewerMargin = () => {
    let ml = isDataPanelHovered ? 'ml-[25%]' : 'ml-[0%]';
    let mr = isSidebarHovered ? 'mr-[15%]' : 'mr-[0%]';
    return `${ml} ${mr}`;
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4 sm:p-6 font-sans">
        <button
                onClick={() => navigate(-1)}
                className={`fixed top-4 left-20 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg text-gray-700 hover:bg-gray-200 transform hover:scale-105 transition-all duration-500 ease-in-out ${
                  isDataPanelHovered ? "transform translate-x-[470%]" : ""
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                Exit
              </button>
        <div className="absolute top-6 right-20 flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <Briefcase className="w-4 h-4" />
                  Maker
                </div>
      <div className="relative h-[90vh] w-full max-w-[88rem] flex items-center">

        {/* Data Sidebar (Left) */}
        <div
          className={`fixed top-0 left-0 h-full bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out ${dataPanelWidth} flex-shrink-0 ${isDataPanelHovered ? 'transform translate-x-0' : 'transform -translate-x-[85%]'}`}
          onMouseEnter={() => setIsDataPanelHovered(true)}
        >
          <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-blue-600">Data</h3>
            <button onClick={() => setIsDataPanelHovered(false)} className="text-gray-500 hover:text-gray-900">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="h-[calc(100vh-100px)] overflow-y-auto px-6 py-4">
            {renderDataSection('Personal Details', <Users className="w-5 h-5 text-blue-600" />, mockApplication.personal, [
              { key: 'firstName', label: 'First Name' }, { key: 'middleName', label: 'Middle Name' }, { key: 'lastName', label: 'Last Name' },
              { key: 'emailAddress', label: 'Email Address' }, { key: 'phoneNumber', label: 'Phone Number' },
              { key: 'aadhaarNumber', label: 'Aadhaar Number' }, { key: 'panNumber', label: 'PAN Number' },
            ])}
            {renderDataSection('Employment Details', <Briefcase className="w-5 h-5 text-blue-600" />, mockApplication.employment, [
              { key: 'employerName', label: 'Employer Name' }, { key: 'annualIncome', label: 'Annual Income' }, { key: 'workExperience', label: 'Work Experience' },
            ])}
            {renderDataSection('Loan Details', <CreditCard className="w-5 h-5 text-blue-600" />, mockApplication.loanDetails, [
              { key: 'loanType', label: 'Loan Type' }, { key: 'requiredLoanAmount', label: 'Required Loan Amount' }, { key: 'loanDuration', label: 'Loan Duration' },
            ])}
            <div className="mt-8">
              <label htmlFor="maker-remarks" className="block text-sm font-medium text-gray-700">Maker's Final Remarks</label>
              <textarea
                id="maker-remarks"
                name="maker-remarks"
                rows="4"
                value={mockApplication.makerRemarks}
                placeholder="Add your final remarks for the Checker..."
                className="mt-1 w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={() => console.log('Return')} className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Return
              </button>
              <button onClick={() => console.log('Forward')} className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                Forward
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Document Viewer (Central Column) */}
        <div className={`w-full h-[90vh] bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 overflow-y-auto sticky top-4 transition-all duration-500 ease-in-out ${getCentralViewerMargin()}`}>
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Document Viewer</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStackingLayout('horizontal')}
                className={`p-2 rounded-full transition-colors duration-200 ${stackingLayout === 'horizontal' ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                <PanelLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setStackingLayout('vertical')}
                className={`p-2 rounded-full transition-colors duration-200 ${stackingLayout === 'vertical' ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                <PanelTop className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-grow bg-gray-200 rounded-md flex items-center justify-center overflow-hidden h-[90%] p-2">
            <AnimatePresence>
              {activeTabs.length === 0 ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-gray-500 flex flex-col items-center justify-center h-full"
                >
                  <Eye className="w-12 h-12 mx-auto mb-4" />
                  <p>Hover on the sidebars to select a document or verify data.</p>
                </motion.div>
              ) : (
                <div className={`w-full h-full flex gap-2 ${stackingLayout === 'horizontal' ? 'flex-row' : 'flex-col'}`}>
                  {activeTabs.map(tab => (
                    <motion.div 
                      key={tab.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="relative flex-1 bg-white rounded-md overflow-hidden"
                    >
                      <button 
                        onClick={() => closeTab(tab.name)} 
                        className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 z-10"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <img
                        src={tab.file.url}
                        alt={tab.name}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Document Sidebar (Right) */}
        <div
          className={`fixed top-0 right-0 h-full bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out ${sidebarWidth} flex-shrink-0 ${isSidebarHovered ? 'transform translate-x-0' : 'transform translate-x-[85%]'}`}
          onMouseEnter={() => setIsSidebarHovered(true)}
          onMouseLeave={() => setIsSidebarHovered(false)}
        >
          <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-blue-600">Documents</h3>
            <button onClick={() => setIsSidebarHovered(false)} className="text-gray-500 hover:text-gray-900">
              <X className="w-5 h-5" />
            </button>
          </div>
          <ul className="h-[calc(100vh-100px)] overflow-y-auto px-6 py-4 space-y-2">
            {mockApplication.documents.map((doc) => (
              <li 
                key={doc.name} 
                className="p-3 bg-gray-100 rounded-md cursor-pointer hover:bg-blue-100 transition-colors"
                onClick={() => openDocument(doc)}
              >
                <span className="text-sm font-medium text-gray-700">{doc.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
