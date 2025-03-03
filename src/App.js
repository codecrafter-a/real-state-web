import { Routes, Route } from "react-router-dom";
import Layout from "./Componant/Common/Layout/Layout";
import AddCustomer from "./Pages/Customers/add-customer-en/Addcustomeren";
import Customers from "./Pages/Customers/Customers";
function App() {
  return (
    <div className="App">
      <>
        <Layout>
          <Routes>
              <Route path="/" element={<AddCustomer/>}/>
              <Route path="/customers" element={< Customers/>}/>  
          </Routes>
        </Layout>
      </>
    </div>
  );
}

export default App;
