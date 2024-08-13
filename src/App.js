import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Home, Moon, Settings } from "lucide-react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Layout from "./components/layout";
import { useState } from "react";
import Videos from "./components/Videos";

function App() {
  const handleSearch = (query) => {
    console.log(query);
  };
  return (
    <div>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <div className="heroWrapper">
                <Hero />
              </div>
                <Videos/>
              </>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
