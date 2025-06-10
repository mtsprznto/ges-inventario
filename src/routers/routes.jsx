import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, ProtectedRoute, UserAuth } from "../index";

export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route
        element={
          <ProtectedRoute user={user} redirectTo={"/login"}></ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}
