import { Routes, Route, Navigate } from "react-router-dom";
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

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App" key={i18n.language}>
      <LanguageHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={'/he/signin'} />} />
          <Route path="/:lang/customers" element={<Customers />} />
          <Route path="/:lang/signin" element={<Signin />} />
          <Route path="/:lang/property" element={<Property/>}/>
          <Route path="/:lang/agents" element={<Agents />} />
          <Route path="/:lang/agent-management" element={<AgentManagement />} />
          <Route path="/:lang/agents/add-agents" element={<AddAgents />} />
          <Route path="/:lang/agents/edit-agents" element={<EditAgents />} />
          <Route path="/:lang/home" element={<Home/>}/>
          <Route path="/:lang/setting" element={<Setting/>} />
          <Route path="/:lang/invoices" element={<Invocies/>} />
          <Route path="/:lang/agreements" element={<Agreementes/>} />
          <Route path="/:lang/data" element={<Data/>} /> 
          <Route path="/:lang/personal-area" element={<PersonalArea/>} /> 
          <Route path="/:lang/report" element={<Report/>}/>
          <Route path="/:lang/data" element={<Data/>} />
          <Route path="/:lang/personal-area" element={<PersonalArea/>} />
          <Route path="/:lang/personal-area/change-password" element={<ChangePassword />} />
          <Route path="/:lang/personal-area/change-email" element={<ChangeEmail />} />
          <Route path="/:lang/personal-area/signature-invoice" element={<SignatureInvoice />} />
          <Route path="*" element={<Navigate to="/he/signin" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

