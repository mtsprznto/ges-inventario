import styled from "styled-components";
import { BannerEmpresa, Header, Title } from "../../index";
import { useState } from "react";

export function HomeTemplate() {
  const [state, setState] = useState(false);
  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        ></Header>
      </header>
      <section className="area1">
        <Title>Tu empresa</Title>
      </section>
      <section className="main">
        <BannerEmpresa></BannerEmpresa>
      </section>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 15px;
  grid-template:
    "header" 100px
    "area1" 100px
    "main" auto;
  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    display: flex;
    align-items: center;
    justify-content:end;
  }
  .main {
    grid-area: main;
    background-color: transparent;
  }
`;
