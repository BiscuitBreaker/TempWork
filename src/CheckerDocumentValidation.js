import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, X, Eye, Square, CheckSquare, RotateCcw, FileText, Briefcase } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const mockApplication = {
  id: 'APP001',
  applicantName: 'John Doe',
  loanType: 'Home Loan',
  documents: [
    { name: 'Photograph', file: { name: 'john_photo.jpg', url: 'https://placehold.co/800x600/C7D2FE/312E81?text=Photograph' }, status: 'valid', remark: 'Clear and in focus.' },
    { name: 'Aadhaar Card', file: { name: 'john_aadhaar.pdf', url: 'https://placehold.co/800x600/A5B4FC/4338CA?text=Aadhaar+Card' }, status: 'valid', remark: '' },
    { name: 'PAN Card', file: { name: 'john_pan.pdf', url: 'https://placehold.co/800x600/C4B5FD/5B21B6?text=PAN+Card' }, status: 'valid', remark: '' },
    { name: 'Salary Proof', file: { name: 'john_payslip.pdf', url: 'https://placehold.co/800x600/FBCFE8/831843?text=Salary+Proof' }, status: 'review', remark: 'Blurry, but readable. Maker\'s note: Need to verify against bank statement later.' },
  ],
  makerRemarks: '',
};

const App = () => {
  const [application] = useState(mockApplication);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [checkerRemarks, setCheckerRemarks] = useState('');

  const handleCheckerRemarkChange = (e) => {
    setCheckerRemarks(e.target.value);
  };

  const handleFinalApprove = () => {
    console.log('Final Application Approved by Checker:', {
      ...application,
      checkerRemarks,
    });
    // In a real app, this would update the application status to 'Approved'.
  };

  const handleReturnToMaker = () => {
    console.log('Application Returned to Maker with remarks:', checkerRemarks);
    // In a real app, this would change the application status and notify the Maker.
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4 sm:p-6 font-sans">
        <button
                onClick={() => navigate(-1)}
                className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg text-gray-700 hover:bg-gray-200 transition-colors transform hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
      <div className="flex flex-col md:flex-row w-full max-w-[88rem] gap-8 items-start">
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            <Briefcase className="w-4 h-4" />
            Checker
          </div>
        {/* Main form container */}
        <div className="w-full md:w-2/5 bg-white rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-10 relative">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Document Verification</h1>
          <p className="text-sm text-gray-600 mb-6">Verify the documents for Application ID: {application.id}</p>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-600" />
              Uploaded Documents
            </h2>
            <ul className="space-y-4">
              {application.documents.map((doc) => (
                <div key={doc.name}>
                  <li className="flex items-center justify-between p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4">
                      {doc.status === 'valid' && <CheckSquare className="w-5 h-5 text-green-500" />}
                      {doc.status === 'invalid' && <X className="w-5 h-5 text-red-500" />}
                      {doc.status === 'review' && <RotateCcw className="w-5 h-5 text-yellow-500" />}
                      {doc.status === 'unchecked' && <Square className="w-5 h-5 text-gray-400" />}
                      <span className="font-medium text-gray-800">{doc.name}</span>
                      <button
                        onClick={() => setSelectedDocument(doc)}
                        className="text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors flex items-center gap-1"
                      >
                        <Eye className="w-4 h-4" /> View
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                        doc.status === 'valid' ? 'bg-green-100 text-green-700' :
                        doc.status === 'invalid' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {doc.status.toUpperCase()}
                      </span>
                    </div>
                  </li>
                  {(doc.remark) && (
                    <div className="mt-2 p-2 bg-gray-100 rounded-md">
                      <p className="text-xs font-medium text-gray-700">Maker's Remark:</p>
                      <p className="text-sm text-gray-600 italic">{doc.remark}</p>
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <label htmlFor="checker-remarks" className="block text-sm font-medium text-gray-700">Checker's Remarks</label>
            <textarea
              id="checker-remarks"
              name="checker-remarks"
              rows="4"
              value={checkerRemarks}
              onChange={handleCheckerRemarkChange}
              placeholder="Add your comments here..."
              className="mt-1 w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
            ></textarea>
          </div>
          
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleReturnToMaker}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Maker
            </button>
            {/* <button
              type="button"
              onClick={handleFinalApprove}
              className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200"
            >
              Approve & Proceed
              <ArrowRight className="h-4 w-4 ml-2" />
            </button> */}
            <Link to="/checker-data-validation" className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200">
              Approve & Proceed
            </Link>
          </div>
        </div>
        
        {/* Document Viewer */}
        <div className="w-full md:w-3/5 h-[80vh] bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 overflow-y-auto sticky top-4 flex items-center justify-center">
          {selectedDocument ? (
            <div className="w-full h-full flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Viewing: {selectedDocument.name}</h3>
              <div className="flex-grow bg-gray-200 rounded-md overflow-hidden flex items-center justify-center p-4">
                <img
                  src={selectedDocument.file.url}
                  alt={selectedDocument.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <Eye className="w-12 h-12 mx-auto mb-4" />
              <p>Select a document from the list to view it here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
