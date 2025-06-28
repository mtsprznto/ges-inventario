import { useQuery } from "@tanstack/react-query";
import { HomeTemplate, useEmpresaStore } from "../index";

export function Home() {
  const { contarUsuarioXEmpresa, dataEmpresa } = useEmpresaStore();
  const { data } = useQuery({
    queryKey: ["Contar usuarios por empresa", { idempresa: dataEmpresa.empresa?.id }],
    queryFn: () => contarUsuarioXEmpresa({ id_empresa: dataEmpresa.empresa?.id }),
    enabled: !!dataEmpresa,
  });
  return <HomeTemplate />;
}
