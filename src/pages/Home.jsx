import { useQuery } from "@tanstack/react-query";
import { HomeTemplate, useEmpresaStore } from "../index";

export function Home() {
  const { contarUsuarioXEmpresa, dataEmpresa } = useEmpresaStore();
  const { data } = useQuery({
    queryKey: ["Contar usuarios por empresa", { idempresa: dataEmpresa.id }],
    queryFn: () => contarUsuarioXEmpresa({ id_empresa: dataEmpresa.id }),
  });
  return <HomeTemplate />;
}
