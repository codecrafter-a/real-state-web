import { Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Layout from "./Componant/Common/Layout/Layout";
import Customers from "./Pages/Customers/Customers";
<<<<<<< HEAD
import Property from "./Pages/Property/Property";
=======
import LanguageHandler from "./Componant/language-selector";

>>>>>>> dd2fd02320a4c2e0949a17813ea356051a62a4a7
function App() {
  const { i18n } = useTranslation(); // Listen for language changes

  return (
<<<<<<< HEAD
    <div className="App">
      <>
        <Layout>
          <Routes>
              <Route path="/" element={<Property/>}/>
              <Route path="/customers" element={< Customers/>}/>  
          </Routes>
        </Layout>
      </>
=======
    <div className="App" key={i18n.language}> {/* Force re-render on language change */}
      <LanguageHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/he" />} />
          <Route path="/:lang/customers" element={<Customers />} />
          <Route path="/:lang" element={<AddCustomer />} />
        </Routes>
      </Layout>
>>>>>>> dd2fd02320a4c2e0949a17813ea356051a62a4a7
    </div>
  );
}

export default App;
