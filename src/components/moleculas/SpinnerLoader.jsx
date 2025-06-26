import { RingLoader } from "react-spinners";
import styled from "styled-components";

export function SpinnerLoader() {
  return (
    <Container>
      <RingLoader color={({ theme }) => theme.text} size={150} />
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
  z-index: 1000;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.3s;
`;
