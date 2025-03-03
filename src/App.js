import { Routes, Route } from "react-router-dom";
import Layout from "./Componant/Common/Layout/Layout";
import Customers from "./Pages/Customers/Customers";
import Property from "./Pages/Property/Property";
function App() {
  return (
    <div className="App">
      <>
        <Layout>
          <Routes>
              <Route path="/" element={<Property/>}/>
              <Route path="/customers" element={< Customers/>}/>  
          </Routes>
        </Layout>
      </>
    </div>
  );
}

export default App;
