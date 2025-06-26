import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  ProtectedRoute,
  SpinnerLoader,
  ErrorMolecula,
  UserAuth,
  useUsuariosStore,
  useEmpresaStore,
} from "../index";
import { useQuery } from "@tanstack/react-query";

export function MyRoutes() {
  const { user } = UserAuth();
  const { mostrarUsuario, idusuario } = useUsuariosStore();
  const { mostrarEmpresa } = useEmpresaStore();

  const {
    data: datausuarios,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Mostrar usuarios"],
    queryFn: mostrarUsuario,
  });
  const { data: dataempresa } = useQuery({
    queryKey: ["Mostrar empresa"],
    queryFn: () => mostrarEmpresa({ idusuario: idusuario }),
    enabled: !!datausuarios,
  });

  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <ErrorMolecula error={error.message} />;
  }
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
