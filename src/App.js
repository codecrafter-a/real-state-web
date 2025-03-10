import { Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Layout from "./Componant/Common/Layout/Layout";
import Customers from "./Pages/Customers/Customers";
import LanguageHandler from "./Componant/language-selector";
import Property from "./Pages/property/Property.jsx";
import Brokers from "./Pages/Brokers/Brokers";
import Signin from "./Pages/Signin/Signin.jsx";
import Home from "./Pages/Home/Home.jsx";
import Data from "./Pages/Data/Data.jsx";
import Agreementes from "./Pages/Agreementes/Agreementes.jsx";


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
          <Route path="/:lang/broker" element={<Brokers />} />
          <Route path="/:lang/home" element={<Home/>}/>
          <Route path="/:lang/agreements" element={<Agreementes/>} />
          <Route path="/:lang/data" element={<Data/>} />  
          <Route path="*" element={<Navigate to="/he/signin" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

