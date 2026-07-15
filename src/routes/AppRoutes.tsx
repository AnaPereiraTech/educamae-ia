import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Form from "../pages/Form";
import Result from "../pages/Result";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/resultado" element={<Result />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

<Route path="*" element={<NotFound />} />;
