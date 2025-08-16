import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Info,
  LayoutList,
  Grip,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const makerPalette = {
  bg: "bg-sc-blue-50",
  accent: "text-sc-blue-600",
  button: "bg-sc-blue-600 hover:bg-sc-blue-700 focus:ring-sc-blue-500",
  card: "bg-sc-blue-100",
  borderColor: "border-sc-blue-200",
};

// Mock data for maker tasks
const makerTasks = [
  {
    id: "APP001",
    date: "2024-08-10",
    status: "Pending Review",
    ready: true,
    loanType: "Home Loan",
  },
  {
    id: "APP002",
    date: "2024-08-09",
    status: "Pending Review",
    ready: true,
    loanType: "Vehicle Loan",
  },
  {
    id: "APP003",
    date: "2024-08-09",
    status: "Returned for Edits",
    ready: false,
    loanType: "Education Loan",
  },
];

const MakerDashboard = () => {
  const [view, setView] = useState("card"); // 'card' or 'table'
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const palette = makerPalette;

  const sortedTasks = React.useMemo(() => {
    const tasks = [...makerTasks];
    if (sortConfig.key !== null) {
      tasks.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return tasks;
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "ascending" ? (
      <ArrowUp className="w-4 h-4 ml-2" />
    ) : (
      <ArrowDown className="w-4 h-4 ml-2" />
    );
  };

  const renderCardView = (tasks) => (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-4 rounded-lg shadow-sm border ${
            palette.borderColor
          } flex flex-col sm:flex-row items-center justify-between transition-colors duration-300 ${
            palette.card
          } ${!task.ready ? "opacity-50" : ""}`}
        >
          <div className="flex flex-col text-sm text-gray-700 text-center sm:text-left">
            <span className="font-semibold">{task.id}</span>
            <span className="text-xs text-gray-500">
              Applied on: {task.date}
            </span>
            <span className="text-xs text-gray-500">Status: {task.status}</span>
            <span className="text-xs text-gray-500">Type: {task.loanType}</span>
          </div>
          {task.ready ? (
            <Link 
              to="/maker-document-validation" 
              className={`mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 ${palette.button} flex items-center gap-2`}
            >
              Start Review <ArrowRight className="w-4 h-4"/>
            </Link>
          ) : (
            <button
              onClick={() => console.log(`Viewing more info for ${task.id}`)}
              className="mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
            >
              More Info <Info className="w-4 h-4" />
            </button>
          )}
        </div>
      ))}
    </div>
  );

  const renderTableView = (tasks) => (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => requestSort("id")}
            >
              <div className="flex items-center">
                Application ID {getSortIcon("id")}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => requestSort("loanType")}
            >
              <div className="flex items-center">
                Loan Type {getSortIcon("loanType")}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => requestSort("date")}
            >
              <div className="flex items-center">
                Applied On {getSortIcon("date")}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => requestSort("status")}
            >
              <div className="flex items-center">
                Status {getSortIcon("status")}
              </div>
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr key={task.id} className={`${!task.ready ? "opacity-50" : ""}`}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {task.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {task.loanType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {task.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {task.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {task.ready ? (
                  <button
                    onClick={() => navigate("/maker-document-validation")}
                    className={`text-white px-4 py-2 rounded-lg text-xs ${palette.button} flex items-center gap-2`}
                  >
                    Start Review
                  </button>
                ) : (
                  <button
                    onClick={() => console.log(`Viewing more info for ${task.id}`)}
                    className="text-gray-700 bg-gray-200 border border-gray-300 px-4 py-2 rounded-lg text-xs shadow-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    More Info
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

const navigate = useNavigate();

  return (
    <motion.div
      className={`min-h-screen font-sans transition-colors duration-500 ${palette.bg} p-8`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0">
              {/* Profile picture placeholder */}
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Hello, John Doe
              </h1>
              <p className="text-sm text-gray-500">Maker Dashboard - Review new applications</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-4 py-2 bg-sc-blue-600 text-white rounded-full text-sm font-medium shadow-sm">
              Maker
            </div>
          </div>
        </header>

        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setView("card")}
              className={`p-2 rounded-full transition-colors duration-200 ${
                view === "card"
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-400 hover:bg-gray-100"
              }`}
            >
              <Grip className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView("table")}
              className={`p-2 rounded-full transition-colors duration-200 ${
                view === "table"
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-400 hover:bg-gray-100"
              }`}
            >
              <LayoutList className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <h2 className={`text-xl font-bold ${palette.accent}`}>
            Maker Tasks: New Applications
          </h2>
          {makerTasks.length > 0 ? (
            view === "card" ? (
              renderCardView(sortedTasks)
            ) : (
              renderTableView(sortedTasks)
            )
          ) : (
            <p className="text-gray-500 text-center py-8">
              No new applications to review.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MakerDashboard;
