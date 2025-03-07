import { Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Layout from "./Componant/Common/Layout/Layout";
import Customers from "./Pages/Customers/Customers";
import LanguageHandler from "./Componant/language-selector";
import Property from "./Pages/property/Property";
import Brokers from "./Pages/Brokers/Brokers";
import Signin from "./Pages/Signin/Signin.jsx";
import Home from "./Pages/Home/Home.jsx";
// import Agreements from "./Pages/Agreements/Agreements";
import Agreements from "./Pages/Agreementes/Agreementes";


function App() {
  const { i18n } = useTranslation(); // Listen for language changes

  return (
    <div className="App" key={i18n.language}> {/* Force re-render on language change */}
      <LanguageHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/he" />} />
          <Route path="/:lang/customers" element={<Customers />} />
          <Route path="/:lang" element={<Signin />} />
          <Route path="/:lang/property" element={<Property/>}/>
          <Route path="/:lang/broker" element={<Brokers />} />
          <Route path="/:lang/home" element={<Home/>}/>
          {/* <Route path="/:lang/agrrement" element={<Agreements />} /> */}
          <Route path="/:lang/agreements" element={<Agreements />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
