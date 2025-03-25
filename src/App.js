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
import AddCustomer from "./Pages/Customers/add-customer-en/Addcustomeren.jsx";

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App" key={i18n.language}>
      <LanguageHandler />
      <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={'/he/signin'} />} />
        <Route path="/:lang/*" element={
          <Routes>
            <Route path="customers" element={<Customers />} />
            <Route path="customers/add-customers" element={<AddCustomer />} />
            <Route path="signin" element={<Signin />} />
            <Route path="property" element={<Property />} />
            <Route path="agents" element={<Agents />} />
            <Route path="agent-management" element={<AgentManagement />} />
            <Route path="agents/add-agents" element={<AddAgents />} />
            <Route path="agents/edit-agents" element={<EditAgents />} />
            <Route path="home" element={<Home />} />
            <Route path="setting" element={<Setting />} />
            <Route path="invoices" element={<Invocies/>} />
            <Route path="agreements" element={<Agreementes/>} />
            <Route path="data" element={<Data />} />
            <Route path="personal-area" element={<PersonalArea />} />
            <Route path="report" element={<Report />} />
            <Route path="personal-area/change-password" element={<ChangePassword />} />
            <Route path="personal-area/change-email" element={<ChangeEmail />} />
            <Route path="personal-area/signature-invoice" element={<SignatureInvoice />} />
            <Route path="*" element={<Navigate to={`/${i18n.language}/signin`} />} />
          </Routes>
        } />
      </Routes>
      </Layout>
    </div>
  );
}
export default App;

