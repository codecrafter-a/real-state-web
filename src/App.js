import { Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Layout from "./Componant/Common/Layout/Layout";
import Customers from "./Pages/Customers/Customers";
import LanguageHandler from "./Componant/language-selector";
import AddCustomer from "../src/Pages/Customers/add-customer-en/Addcustomeren";
import Property from "./Pages/Property/Property";
import Brokers from "./Pages/Brokers/Brokers";

function App() {
  const { i18n } = useTranslation(); // Listen for language changes

  return (
    <div className="App" key={i18n.language}> {/* Force re-render on language change */}
      <LanguageHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/he" />} />
          <Route path="/:lang/customers" element={<Customers />} />
          <Route path="/:lang" element={<AddCustomer />} />
          <Route path="/property" element={<Property/>}/>
          <Route path="/broker" element={<Brokers/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
