import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLAyout';
import { Screen } from './pages/Screen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Screen />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
