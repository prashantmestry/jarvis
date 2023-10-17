import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navigation from "./component/Navigation";
//import { Provider } from "react-redux";
//import { store } from './Redux/store';

const Products = lazy(() => import("./component/Products"));
//import Products from './component/Products';

function App() {
  return (
    <>
      
        <div className="p-4">
          <Navigation />
          <div className="my-4 border-slate-200">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/products"
                element={
                  <Suspense fallback="loading...">
                    <Products />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </div>
      
    </>
  );
}

export default App;
