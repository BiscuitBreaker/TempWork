import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  User,
  FileText,
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Upload,
} from "lucide-react";

// Mock data to simulate user profile and documents
const mockUserData = {
  firstName: "John",
  lastName: "Doe",
  middleName: "",
  email: "john.doe@example.com",
  phoneNumber: "123-456-7890",
  aadhaarNumber: "",
  panNumber: "",
  currentAddress: "",
  permanentAddress: "",
};

const mockDocuments = {
  aadhaar: { name: "Aadhaar Card", status: "Missing", file: null },
  pan: { name: "PAN Card", status: "Missing", file: null },
  passport: { name: "Passport", status: "Missing", file: null },
};

// Simple component for a circular progress bar
const CircularProgressBar = ({ progress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50"
          cy="50"
          r="40"
          strokeWidth="8"
          fill="transparent"
          className="text-gray-300"
          stroke="currentColor"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          strokeWidth="8"
          fill="transparent"
          stroke="currentColor"
          strokeLinecap="round"
          className="text-sc-blue-600"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: strokeDashoffset }}
          transition={{ duration: 0.5 }}
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="text-xl font-bold text-gray-900">{`${progress}%`}</span>
      </div>
    </div>
  );
};

const CustomerProfile = () => {
  const [userData, setUserData] = useState(mockUserData);
  const [userDocuments, setUserDocuments] = useState(mockDocuments);
  const [editMode, setEditMode] = useState(false);
  const [completion, setCompletion] = useState(0);

  const calculateCompletion = () => {
    let completedFields = 0;
    const totalFields =
      Object.keys(mockUserData).length + Object.keys(mockDocuments).length;

    // Count filled text fields
    for (const key in userData) {
      if (userData[key]) {
        completedFields++;
      }
    }
    // Count uploaded documents
    for (const key in userDocuments) {
      if (userDocuments[key].status === "Uploaded") {
        completedFields++;
      }
    }

    setCompletion(Math.floor((completedFields / totalFields) * 100));
  };

  useEffect(() => {
    calculateCompletion();
  }, [userData, userDocuments]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDocumentUpload = (docName, file) => {
    setUserDocuments((prevDocs) => ({
      ...prevDocs,
      [docName]: {
        ...prevDocs[docName],
        status: "Uploaded",
        file: file.name,
      },
    }));
  };

  const handleSaveChanges = () => {
    console.log("Saved data:", userData);
    console.log("Saved documents:", userDocuments);
    setEditMode(false);
  };

  const handleReturnToDashboard = () => {
    navigate("/user-dashboard");
    console.log("Returning to dashboard...");
  };

  const renderEditableFields = () => (
    <AnimatePresence>
      <motion.div
        key="editable-fields"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {Object.keys(userData).map((key) => (
          <div key={key}>
            <label
              htmlFor={key}
              className="block text-sm font-medium text-gray-700"
            >
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={userData[key]}
              onChange={handleInputChange}
              disabled={
                !editMode &&
                (key === "firstName" || key === "lastName" || key === "email")
              }
              className="mt-1 w-full p-3 rounded-md border border-gray-300 shadow-sm sm:text-sm disabled:bg-gray-200"
            />
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-sans">
      <div className="w-full max-w-5xl mx-auto space-y-8">
        {/* Header with Greeting and Progress */}
        <div
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
          style={{
            backgroundImage: `url(https://av.sc.com/corp-en/nr/content/images/our-locations-desktop.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center backdrop-blur-sm justify-between z-5 p-6 bg-black/20 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-6">
              <button
                onClick={handleReturnToDashboard}
                className="p-2 text-gray-50 hover:text-gray-200"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-100">
                  Hello, {userData.firstName}!
                </h1>
                <p className="text-sm text-gray-300">
                  Let's get your profile up to date.
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-200">Profile Completion</p>
                <CircularProgressBar progress={completion} />
              </div>
            </div>
          </motion.header>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-6">
          {/* Personal Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 bg-white rounded-2xl shadow-xl space-y-4"
          >
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-sc-blue-600" />
                Personal Information
              </h2>
              <button
                onClick={() => setEditMode(!editMode)}
                className="px-4 py-2 text-sm font-medium rounded-lg shadow-sm transition-colors"
              >
                {editMode ? "Cancel" : "Edit"}
              </button>
            </div>
            {renderEditableFields()}
          </motion.div>

          {/* Document Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-6 bg-white rounded-2xl shadow-xl space-y-4"
          >
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-sc-blue-600" />
              Upload Documents
            </h2>
            <p className="text-sm text-gray-600">
              Upload these documents to make future applications faster.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(userDocuments).map((docKey) => (
                <div
                  key={docKey}
                  className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    {userDocuments[docKey].status === "Uploaded" && (
                      <Check className="w-5 h-5 text-green-500" />
                    )}
                    {userDocuments[docKey].status === "Missing" && (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-semibold text-gray-800">
                      {userDocuments[docKey].name}
                    </span>
                  </div>
                  <label
                    htmlFor={`upload-${docKey}`}
                    className="cursor-pointer"
                  >
                    <input
                      id={`upload-${docKey}`}
                      type="file"
                      className="sr-only"
                      onChange={(e) =>
                        handleDocumentUpload(docKey, e.target.files[0])
                      }
                    />
                    <div className="px-3 py-1 text-xs text-white bg-sc-blue-600 rounded-full hover:bg-sc-blue-700 transition-colors">
                      Upload
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Save Changes Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-end pt-4"
          >
            <button
              onClick={handleSaveChanges}
              className="px-6 py-3 text-sm font-medium text-white bg-sc-blue-600 rounded-full shadow-lg hover:bg-sc-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
