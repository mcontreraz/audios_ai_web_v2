import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./ui/components/organisms/Sidebar";

import { AppLayout, MainContent } from "./ui/assets/appStyles";
import HeaderTemplate from "./ui/components/organisms/Header";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Sidebar />
        <MainContent>
          <HeaderTemplate />
          <Routes>
            {/* Rutas públicas */}
            {publicRoutes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}

            {/* Rutas protegidas (que por ahora no requieren autenticación) */}
            {authProtectedRoutes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}
          </Routes>
        </MainContent>
      </AppLayout>
    </Router>
  );
};

export default App;
