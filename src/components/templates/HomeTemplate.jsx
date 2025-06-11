import styled from "styled-components";
import { Btnsave, useAuthStore } from "../../index";

export function HomeTemplate() {
  const { signOut } = useAuthStore();
  return (
    <Container>
      <h1>HomeTemplate</h1>
      <Btnsave
        titulo={"Cerrar Session"}
        bgcolor={"#fff"}
        funcion={signOut}
      ></Btnsave>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
