import styled from "styled-components";

export function ErrorMolecula({ error }) {
  return (
    <Container>
      <h1>Ups! Algo salio mal {error}</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.3s;
`;
