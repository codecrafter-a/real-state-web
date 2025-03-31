import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Layout from "./Componant/Common/Layout/Layout";
import Customers from "./Pages/Customers/Customers";
import LanguageHandler from "./Componant/language-selector";
// import Brokers from "./Pages/Brokers/Brokers";
import Signin from "./Pages/Signin/Signin.jsx";
import Home from "./Pages/Home/Home.jsx";
import Data from "./Pages/Data/Data.jsx";
import Agreementes from "./Pages/Agreementes/Agreementes.jsx";
import Property from "./Pages/Property/Property.jsx";
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
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const isAuthenticated = () => {
    return AuthenticationService.getAuthenticated() !== null;
  };

  useEffect(() => {
    const defaultLang = i18n.language || "he"; 

    if (isAuthenticated()) {
      navigate(`/${defaultLang}/home`);
    } else {
      navigate(`/${defaultLang}/signin`);
    }
  }, []);

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
              <Route path="signin" element={isAuthenticated() ? <Navigate to={`/${i18n.language}/home`} /> : <Signin />} />
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
              <Route path="*" element={<Navigate to={`/${i18n.language}/signin`}/>} />
            </Routes>
          } />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;

