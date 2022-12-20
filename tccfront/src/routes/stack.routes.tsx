import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../views/login';
import { Horizontal } from '../layouts/horizontal';
import { Dashboard } from '../views/dashboard';
import { Rooms } from '../views/rooms';
import { Devices } from '../views/devices';

export function StackRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Horizontal />}>
          <Route index element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/devices" element={<Devices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}