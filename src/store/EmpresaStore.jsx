import { create } from "zustand";
import { ContarUsuarioXEmpresa, MostrarEmpresa } from "../index";

/*
Session para crear usuario para el sistema
*/

export const useEmpresaStore = create((set, get) => ({
  contadorusuarios:0,
  dataEmpresa:[],
  mostrarEmpresa: async (p) => {
    const response = await MostrarEmpresa(p);
    set({ dataEmpresa: response });

    return response;
  },
  contarUsuarioXEmpresa: async (p) => {
    const response = await ContarUsuarioXEmpresa(p);
    set({ contadorusuarios: response });

    return response;
  },
}));
