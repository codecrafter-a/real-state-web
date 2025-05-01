import { Routes, Route, Navigate, useNavigate , useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import Layout from "./Componant/Common/Layout/Layout";
import LanguageHandler from "./Componant/language-selector";
import Signin from "./Pages/Signin/Signin.jsx";
import Property from "./Pages/Property/Property.jsx";
import Setting from "./Pages/Setting/Setting.jsx";
import PersonalArea from "./Pages/PersonalArea/PersonalArea.jsx";
import Report from "./Pages/Report/Report.jsx";
import ChangePassword from "./Pages/PersonalArea/ChangePassword.jsx";
import ChangeEmail from "./Pages/PersonalArea/ChangeEmail.jsx";
import Agents from "./Pages/Agents/Agents.jsx";
import AddAgents from "./Pages/Agents/AddAgents.jsx";
import EditAgents from "./Pages/Agents/EditAgents.jsx";
import AddCustomer from "./Pages/Customers/add-customer-en/Addcustomeren.jsx";
import AuthenticationService from "./Services/AuthenticationService.jsx";
import { useEffect, useState} from 'react';
import Agreementsen from "./Pages/Agreementes/Agreementsen.jsx";
import Customeren from "./Pages/Customers/Customeren.jsx";
import Brokersen from "./Pages/Brokers/Brokersen.jsx";
import PropertyOwneren from "./Pages/Brokers/PropertyOwneren.jsx";
import DataEn from "./Pages/Data/DataEn.jsx";
import BrokersBetweenen from "./Pages/Brokers/Brokers_betweenen.jsx";
import Invoicesen from "./Pages/Invocies/Invoicesen.jsx";
import Landregistryen from "./Pages/LandRegistry/Landregistryen.jsx";
import Allpropertyen from "./Pages/Property/Allpropertyen.jsx";
import HomeEn from "./Pages/Home/HomeEn.jsx";
import AgentMangementEn from "./Pages/Agents/AgentMangementEn.jsx";
import SignatureInvoiceEn from "./Pages/PersonalArea/SignatureInvoiceEn.jsx";



function App() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  console.log("🚀 ~ App ~ show:", show)
  const [isPadding, setIsPadding] = useState(false)  
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
      <Layout show={show}>
        <Routes>
          <Route path="/" element={<Navigate to={`/${i18n.language}/signin`} />} />
          <Route path="/:lang/*" element={
            <Routes>
              <Route path="signin" element={isAuthenticated() ? <Navigate to={`/${i18n.language}/home`} /> : <Signin setIsPadding={setIsPadding} isPadding={isPadding}/>} />
              <Route path="home" element={<ProtectedRoute><HomeEn /></ProtectedRoute>} />
              <Route path="customers" element={<ProtectedRoute><Customeren /></ProtectedRoute>} />
              <Route path="customers/add-customers" element={<ProtectedRoute><AddCustomer /></ProtectedRoute>} />
              <Route path="property" element={<ProtectedRoute><Allpropertyen/></ProtectedRoute>} />
              <Route path="agents" element={<ProtectedRoute><Agents /></ProtectedRoute>} />
              <Route path="agent-management" element={<ProtectedRoute><AgentMangementEn /></ProtectedRoute>} />
              <Route path="agents/add-agents" element={<ProtectedRoute><AddAgents /></ProtectedRoute>} />
              <Route path="agents/edit-agents" element={<ProtectedRoute><EditAgents /></ProtectedRoute>} />
              <Route path="setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
              <Route path="invoices" element={<ProtectedRoute><Invoicesen/></ProtectedRoute>} />
              <Route path="agreements" element={<ProtectedRoute><Agreementsen show={show} setShow={setShow} /></ProtectedRoute>} />
              <Route path="data" element={<ProtectedRoute><DataEn /></ProtectedRoute>} />
              <Route path="personal-area" element={<ProtectedRoute><PersonalArea /></ProtectedRoute>} />
              <Route path="report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
              <Route path="personal-area/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
              <Route path="personal-area/change-email" element={<ProtectedRoute><ChangeEmail /></ProtectedRoute>} />
              <Route path="personal-area/signature-invoice" element={<ProtectedRoute><SignatureInvoiceEn /></ProtectedRoute>} />
              <Route path="broker" element={<ProtectedRoute><Brokersen /></ProtectedRoute>} />
              <Route path="landregistry" element={<ProtectedRoute><Landregistryen/></ProtectedRoute>} />
              <Route path="property_owner" element={<ProtectedRoute><PropertyOwneren/></ProtectedRoute>}/>
              <Route path="broker_between" element={<ProtectedRoute><BrokersBetweenen/></ProtectedRoute>}/>
              <Route path="property/add_property" element={<ProtectedRoute><Property /></ProtectedRoute>}/>
              <Route path="*" element={<Navigate to={`/${i18n.language}/signin`}/>} />
            </Routes>
          } />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;

