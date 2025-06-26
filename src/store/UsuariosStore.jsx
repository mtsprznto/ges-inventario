import { create } from "zustand";
import { InsertarUsuarios, MostrarUsuarios, supabase } from "../index";

/*
Session para crear usuario para el sistema
*/

export const useUsuariosStore = create((set, get) => ({
  insertarUsuarioAdmin: async (p) => {
    const { data, error } = await supabase.auth.signUp({
      email: p.correo,
      password: p.pass,
    });
    console.log("DATA DEL USER: ", data);

    if (error) return null;
    const dataUser = await InsertarUsuarios({
      idauth: data.user.id,
      fecharegistro: new Date(),
      tipouser: "admin",
    });
    return dataUser;
  },
  idusuario: 0,
  mostrarUsuario: async () => {
    const response = await MostrarUsuarios();
    set({ idusuario: response.id });

    return response;
  },
}));
