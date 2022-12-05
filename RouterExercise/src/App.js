import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AllQuote from "./Pages/AllQuote";
import NewQuote from "./Pages/NewQuote";
import QuoteDetails from "./Pages/QuoteDetails";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/NotFouond";

function App() {
  return (  <Layout>

    
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuote />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetails />} />
        <Route path="/new-quotes" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   
      </Layout>
  );
}

export default App;
