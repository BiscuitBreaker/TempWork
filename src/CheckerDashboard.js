import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  LayoutList,
  Grip,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const checkerPalette = {
  bg: "bg-sc-green-50",
  accent: "text-sc-green-600",
  button: "bg-sc-green-600 hover:bg-sc-green-700 focus:ring-sc-green-500",
  card: "bg-sc-green-100",
  borderColor: "border-sc-green-200",
};

// Mock data for checker tasks
const checkerTasks = [
  {
    id: "APP004",
    date: "2024-08-10",
    maker: "Jane Doe",
    status: "Ready for Verification",
    ready: true,
    loanType: "Personal Loan",
  },
  {
    id: "APP005",
    date: "2024-08-08",
    maker: "John Smith",
    status: "Ready for Verification",
    ready: true,
    loanType: "Home Loan",
  },
  {
    id: "APP006",
    date: "2024-08-07",
    maker: "Alice Johnson",
    status: "Ready for Verification",
    ready: true,
    loanType: "Vehicle Loan",
  },
];

const CheckerDashboard = () => {
  const [view, setView] = useState("card"); // 'card' or 'table'
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const palette = checkerPalette;

  const sortedTasks = React.useMemo(() => {
    const tasks = [...checkerTasks];
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
              Last updated: {task.date}
            </span>
            <span className="text-xs text-gray-500">Status: {task.status}</span>
            <span className="text-xs text-gray-500">Type: {task.loanType}</span>
            <span className="text-xs text-gray-500">Maker: {task.maker}</span>
          </div>
          <Link 
            to="/checker-document-validation" 
            className={`mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 ${palette.button} flex items-center gap-2`}
          >
            Start Verification <ArrowRight className="w-4 h-4"/>
          </Link>
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
              onClick={() => requestSort("maker")}
            >
              <div className="flex items-center">
                Maker {getSortIcon("maker")}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => requestSort("date")}
            >
              <div className="flex items-center">
                Last Updated {getSortIcon("date")}
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
                {task.maker}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {task.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {task.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => navigate("/checker-document-validation")}
                  className={`text-white px-4 py-2 rounded-lg text-xs ${palette.button} flex items-center gap-2`}
                >
                  Start Verification
                </button>
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
              <p className="text-sm text-gray-500">Checker Dashboard - Verify reviewed applications</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-4 py-2 bg-sc-green-600 text-white rounded-full text-sm font-medium shadow-sm">
              Checker
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
            Checker Tasks: Ready for Verification
          </h2>
          {checkerTasks.length > 0 ? (
            view === "card" ? (
              renderCardView(sortedTasks)
            ) : (
              renderTableView(sortedTasks)
            )
          ) : (
            <p className="text-gray-500 text-center py-8">
              No applications awaiting verification.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CheckerDashboard;
