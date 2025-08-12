import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle,
  User,
  Award,
  ArrowRight,
  ArrowLeft,
  Info,
  LayoutList,
  Grip,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const makerPalette = {
  bg: "bg-blue-50",
  accent: "text-blue-600",
  button: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  card: "bg-blue-100",
  borderColor: "border-blue-200",
};

const checkerPalette = {
  bg: "bg-teal-50",
  accent: "text-teal-600",
  button: "bg-teal-600 hover:bg-teal-700 focus:ring-teal-500",
  card: "bg-teal-100",
  borderColor: "border-teal-200",
};

// Mock data for the dashboards
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
];

const MemberDashboard = () => {
  const [activeRole, setActiveRole] = useState("maker"); // 'maker' or 'checker'
  const [view, setView] = useState("card"); // 'card' or 'table'
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const palette = activeRole === "maker" ? makerPalette : checkerPalette;

  const handleRoleToggle = (role) => {
    setActiveRole(role);
  };

  const sortedTasks = React.useMemo(() => {
    const tasks = activeRole === "maker" ? [...makerTasks] : [...checkerTasks];
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
  }, [activeRole, sortConfig]);

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

  const renderCardView = (tasks, isMaker) => (
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
          </div>
          {isMaker ? (
            task.ready ? (
              // <button
              //   onClick={() => console.log(`Starting review for ${task.id}`)}
              //   className={`mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 ${palette.button} flex items-center gap-2`}
              // >
              //   Start Review <ArrowRight className="w-4 h-4" />
              // </button>
              <Link to="/maker-document-validation" className={`mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 ${palette.button} flex items-center gap-2`}>Start Review <ArrowRight className="w-r h-4"/></Link>
            ) : (
              <button
                onClick={() => console.log(`Viewing more info for ${task.id}`)}
                className="mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
              >
                More Info <Info className="w-4 h-4" />
              </button>
            )
          ) : (
            // <button
            //   onClick={() =>
            //     console.log(`Starting verification for ${task.id}`)
            //   }
            //   className={`mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 ${palette.button} flex items-center gap-2`}
            // >
            //   Start Verification <ArrowRight className="w-4 h-4" />
            // </button>
            <Link to="/checker-document-validation" className={`mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 ${palette.button} flex items-center gap-2`}>Start Verification <ArrowRight className="w-r h-4"/></Link>
          )}
        </div>
      ))}
    </div>
  );

  const renderTableView = (tasks, isMaker) => (
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
                {isMaker ? "Applied On" : "Last Updated"} {getSortIcon("date")}
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
                {isMaker ? (
                  task.ready ? (
                    <button
                      // onClick={() => console.log(`Starting review for ${task.id}`)}
                      className={`text-white px-4 py-2 rounded-lg text-xs ${palette.button} flex items-center gap-2`}
                    >
                      Start Review
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        console.log(`Viewing more info for ${task.id}`)
                      }
                      className="text-gray-700 bg-gray-200 border border-gray-300 px-4 py-2 rounded-lg text-xs shadow-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                    >
                      More Info
                    </button>
                  )
                ) : (
                  <button
                    onClick={() =>
                      console.log(`Starting verification for ${task.id}`)
                    }
                    className={`text-white px-4 py-2 rounded-lg text-xs ${palette.button} flex items-center gap-2`}
                  >
                    Start Verification
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
              <p className="text-sm text-gray-500">Welcome to the dashboard.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => handleRoleToggle("maker")}
              className={`flex-1 px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${
                activeRole === "maker"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Maker
            </button>
            <button
              onClick={() => handleRoleToggle("checker")}
              className={`flex-1 px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${
                activeRole === "checker"
                  ? "bg-teal-600 text-white shadow-lg"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Checker
            </button>
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole + view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeRole === "maker" ? (
              <div className="mt-8 space-y-6">
                <h2 className={`text-xl font-bold ${palette.accent}`}>
                  Maker Tasks: New Applications
                </h2>
                {makerTasks.length > 0 ? (
                  view === "card" ? (
                    renderCardView(sortedTasks, true)
                  ) : (
                    renderTableView(sortedTasks, true)
                  )
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No new applications to review.
                  </p>
                )}
              </div>
            ) : (
              <div className="mt-8 space-y-6">
                <h2 className={`text-xl font-bold ${palette.accent}`}>
                  Checker Tasks: Ready for Verification
                </h2>
                {checkerTasks.length > 0 ? (
                  view === "card" ? (
                    renderCardView(sortedTasks, false)
                  ) : (
                    renderTableView(sortedTasks, false)
                  )
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No applications awaiting verification.
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MemberDashboard;
