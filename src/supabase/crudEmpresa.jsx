import Swal from "sweetalert2";
import { ObtenerIdAuthSupabase, supabase } from "../index";

export const MostrarEmpresa = async (p) => {
  const { error, data } = await supabase
    .from("asignarempresa")
    .select(`empresa(id, nombre, simbolomoneda)`)
    .eq("id_usuario", p.idusuario)
    .maybeSingle();

  // if (error) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "Ha ocurrido un error al mostrar empresa" + error.message,
  //   });
  // }
  if (data) {
    return data;
  }
};

export const ContarUsuarioXEmpresa = async (p) => {
  console.log(p);
  const { error, data } = await supabase.rpc("contar_usuarios_por_empresa", {
    _id_empresa: p.id_empresa,
  });
  // if (error) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "Ha ocurrido un error al contar usuarios por empresa" + error.message,
  //   });
  // }
  if (data) {
    return data;
  }
};