import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import RootLayout from "./Component/Layout/RootLayout";
import DashboardOverview from "./Component/Dashboard/DashboardOverview/DashboardOverview";
// import Dashboard from "./Component/Dashboard/Dashboard";
import NewLeads from "./Component/Dashboard/NewLeads/NewLeads";
import Onboarding from "./Component/Dashboard/Onboarding/Onboarding";
// import SignOut from "./Component/Dashboard/SignOut/SignOut";
import FollowUP from "./Component/Dashboard/FollowUP/FollowUp";
// import InProgress from "./Component/Dashboard/InProgress/InProgress";
import NewLeadsform from "./Component/Dashboard/NewLeads/NewLeadsform";
import Login from "./Component/Login/Login"; // Import your Login component
import ProtectedRoute from "./Component/Protected/ProtectedRoute";
import ViewForm from "./Component/Dashboard/NewLeads/ViewForm";
import AddEmployee from "./Component/Dashboard/Employee/AddEmployee";
import NewEmployee from "./Component/Dashboard/Employee/NewEmployee";
import EmpViewForm from "./Component/Dashboard/Employee/EmpViewForm";

//import AddProduct from "./Component/Dashboard/Product/AddProduct";
//import NewProduct from "./Component/Dashboard/Product/NewProduct";

import TodaysLeads from "./Component/Dashboard/DashboardOverview/TodaysLeads";
import WorkOrder from "./Component/Dashboard/WorkOrder/WorkOrder";
import WorkOrderLanding from "./Component/Dashboard/WorkOrder/WorkOrderLanding";
import WorkOrderView from "./Component/Dashboard/WorkOrder/WorkOrderView";
import LostLeads from "./Component/Dashboard/LostLeads/LostLeads";
//import EmpViewProduct from "./Component/Dashboard/EmpProducte/EmpViewForm";

// Transfer Leads
import TransferLeads from "./Component/Dashboard/TransferedLeads/TransferedLeads";

// Assigned Leads
import AssignedLeads from "./Component/Dashboard/AssignedLeads/AssignedLeadsTable";
import Customers from "./Component/Dashboard/Customers/Customers";
import NextDay from "./Component/Dashboard/NextDay/NextDay";
import Upcoming from "./Component/Dashboard/Upcoming/Upcoming";
import Missed from "./Component/Dashboard/Missed/Missed";
import CandidateForm from "./Component/Dashboard/Candidate/CandidateForm";
import CandidateTable from "./Component/Dashboard/Candidate/CandidateTable";
import CandidateView from "./Component/Dashboard/Candidate/CandidateView";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RootLayout />}>
        {/* Use the "index" attribute to specify the default child route */}
        <Route
          index
          element={<ProtectedRoute Component={DashboardOverview} />}
        />
        
       
        <Route
          path="totalAds"
          element={<ProtectedRoute Component={NewLeads} />}
        />
        <Route
          path="adds/form"
          element={<ProtectedRoute Component={NewLeadsform} />}
        />
        <Route
          path="totalAds/viewForm"
          element={<ProtectedRoute Component={ViewForm} />}
        />
       
        <Route
          path="newEmpoyee"
          element={<ProtectedRoute Component={NewEmployee} />}
        />
        <Route
          path="newEmpoyee/addEmployee"
          element={<ProtectedRoute Component={AddEmployee} />}
        />
        <Route
          path="newEmpoyee/empViewForm"
          element={<ProtectedRoute Component={EmpViewForm} />}
        />
        <Route
          path="todayAds"
          element={<ProtectedRoute Component={TodaysLeads} />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
