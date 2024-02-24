import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes";

import { Provider } from "react-redux";
import store from "./application/store";

import Header from "./ui/components/organisms/Header";
import Sidebar from "./ui/components/organisms/Sidebar";

import { AppLayout, MainContent } from "./ui/assets/appStyles";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppLayout>
          <Sidebar />
          <MainContent>
            <Header />
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
    </Provider>
  );
};

export default App;
