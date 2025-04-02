import { Routes, Route, Navigate, useNavigate , useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import Layout from "./Componant/Common/Layout/Layout";
import Customers from "./Pages/Customers/Customers";
import LanguageHandler from "./Componant/language-selector";
import Brokers from "./Pages/Brokers/Brokers";
import Signin from "./Pages/Signin/Signin.jsx";
import Home from "./Pages/Home/Home.jsx";
import Data from "./Pages/Data/Data.jsx";
import Agreementes from "./Pages/Agreementes/Agreementes.jsx";
import Property from "./Pages/property/Property.jsx";
import Invocies from "./Pages/Invocies/Invocies.jsx";
import Setting from "./Pages/Setting/Setting.jsx";
import PersonalArea from "./Pages/PersonalArea/PersonalArea.jsx";
import Report from "./Pages/Report/Report.jsx";
import ChangePassword from "./Pages/PersonalArea/ChangePassword.jsx";
import ChangeEmail from "./Pages/PersonalArea/ChangeEmail.jsx";
import SignatureInvoice from "./Pages/PersonalArea/SignatureInvoice.jsx";
import Agents from "./Pages/Agents/Agents.jsx";
import AddAgents from "./Pages/Agents/AddAgents.jsx";
import AgentManagement from "./Pages/Agents/AgentManagement.jsx";
import EditAgents from "./Pages/Agents/EditAgents.jsx";
import AddCustomer from "./Pages/Customers/add-customer-en/Addcustomeren.jsx";
import AuthenticationService from "./Services/AuthenticationService.jsx";
import { useEffect, useState} from 'react';
import Property_owner from "./Pages/Brokers/Property_owner.jsx";
import Brokers_between from "./Pages/Brokers/Brokers_between.jsx";

function App() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isPadding, setIsPadding] = useState(false)
  console.log(isPadding, "isPadding")
  
  const lastPath = location.pathname.split("/").filter(Boolean).pop();
  const isAuthenticated = () => {
    return AuthenticationService.getAuthenticated() !== null;
  };
  useEffect (() => {
    if (lastPath === "signin") {
     setIsPadding(true)
    } else {
     setIsPadding(false)
    }
   },[lastPath])

  useEffect(() => {
    const defaultLang = i18n.language || "he"; 
    if (isAuthenticated && (location.pathname === `/${defaultLang}/signin` || location.pathname === "/")) {
      navigate(`/${defaultLang}/home`, { replace: true });
    } 
    else if (!isAuthenticated && !location.pathname.includes("/signin")) {
      navigate(`/${defaultLang}/signin`, { replace: true });
    }
  }, [i18n.language]);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to={`/${i18n.language}/signin`} replace />;
  };

  return (
    <div className="App" key={i18n.language}>
      <LanguageHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={`/${i18n.language}/signin`} />} />
          <Route path="/:lang/*" element={
            <Routes>
              <Route path="signin" element={isAuthenticated() ? <Navigate to={`/${i18n.language}/home`} /> : <Signin setIsPadding={setIsPadding} isPadding={isPadding}/>} />
              <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
              <Route path="customers/add-customers" element={<ProtectedRoute><AddCustomer /></ProtectedRoute>} />
              <Route path="property" element={<ProtectedRoute><Property /></ProtectedRoute>} />
              <Route path="agents" element={<ProtectedRoute><Agents /></ProtectedRoute>} />
              <Route path="agent-management" element={<ProtectedRoute><AgentManagement /></ProtectedRoute>} />
              <Route path="agents/add-agents" element={<ProtectedRoute><AddAgents /></ProtectedRoute>} />
              <Route path="agents/edit-agents" element={<ProtectedRoute><EditAgents /></ProtectedRoute>} />
              <Route path="setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
              <Route path="invoices" element={<ProtectedRoute><Invocies /></ProtectedRoute>} />
              <Route path="agreements" element={<ProtectedRoute><Agreementes /></ProtectedRoute>} />
              <Route path="data" element={<ProtectedRoute><Data /></ProtectedRoute>} />
              <Route path="personal-area" element={<ProtectedRoute><PersonalArea /></ProtectedRoute>} />
              <Route path="report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
              <Route path="personal-area/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
              <Route path="personal-area/change-email" element={<ProtectedRoute><ChangeEmail /></ProtectedRoute>} />
              <Route path="personal-area/signature-invoice" element={<ProtectedRoute><SignatureInvoice /></ProtectedRoute>} />
              <Route path="broker" element={<ProtectedRoute><Brokers /></ProtectedRoute>} />
              <Route path="property_owner" element={<ProtectedRoute><Property_owner/></ProtectedRoute>}/>
              <Route path="broker_between" element={<ProtectedRoute><Brokers_between/></ProtectedRoute>}/>
              <Route path="*" element={<Navigate to={`/${i18n.language}/signin`}/>} />
            </Routes>
          } />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;

