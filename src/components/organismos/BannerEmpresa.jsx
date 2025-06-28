import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { v } from "../../styles/variables";
import { CardDatosEmpresa } from "../moleculas/CardDatosEmpresa";
import { useEmpresaStore } from "../../index";

export function BannerEmpresa() {
  const { dataEmpresa, contadorusuarios } = useEmpresaStore();

  console.log(dataEmpresa);
  return (
    <Container>
      <div className="content-wrapper-context">
        <span className="titulo">
          {<v.iconoempresa />}
          {dataEmpresa.empresa?.nombre}
        </span>
        <div className="content-text">GestInventario te mantiene informado</div>
        <ContentCards>
          <CardDatosEmpresa
            titulo={"Moneda"}
            valor={dataEmpresa.empresa?.simbolomoneda}
          ></CardDatosEmpresa>
          <CardDatosEmpresa
            titulo={"Usuarios"}
            valor={contadorusuarios}
          ></CardDatosEmpresa>
        </ContentCards>
      </div>
      <div className="contentsvg"></div>

      <svg
        className="h-full w-full transform-gpu transition-all ease-in-out scale-135 duration-800 will-cahnge-auto md:scale-100 lg:scale-80 group-hover:rotate-45 lg:group-hover:scale-100 cuadros"
        viewBox="0 0 492 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.40"
          d="M526 1L-34 1.00005M526 27.25L-34 27.2501M526 53.5L-34 53.5001M526 79.75L-34 79.7501M526 106L-34 106M526 132.25L-34 132.25M526 158.5L-34 158.5M526 184.75L-34 184.75M526 211L-34 211M526 237.25L-34 237.25M526 263.5L-34 263.5M526 289.75L-34 289.75M526 316L-34 316M-29.625 1V316M-3.375 1V316M22.875 1V316M49.125 1V316M75.375 1V316M101.625 1V316M127.875 1V316M154.125 1V316M180.375 1V316M206.625 1V316M232.875 1V316M259.125 1V316M285.375 1V316M311.625 1V316M337.875 1V316M364.125 1V316M390.375 1V316M416.625 1V316M442.875 1V316M469.125 1V316M495.375 1V316M521.625 1V316"
          stroke="url(#paint0_radial_932_3040)"
          stroke-width="0.5"
        />
        <defs>
          <radialGradient
            id="paint0_radial_932_3040"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(246 158.5) rotate(90) scale(212.625 212.625)"
          >
            <stop offset="0.343728" stop-color="white" />
            <stop offset="1" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 solid #6b6b6b;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat, repeat;
  border-radius: 14px;
  overflow: hidden;
  .cuadros {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .contentsvg {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  &:hover {
    .cuadros {
      transform: rotate(37deg) rotateX(5deg) rotateY(12deg) rotate(3deg)
        skew(2deg) skewY(1deg) scaleX(1.2) scaleY(1.2);
    }
  }
  .content-wrapper-context {
    padding: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    .titulo {
      font-size: 30px;
      font-weight: 700;
      gap: 10px;
      display: flex;
      align-items: center;
    }
    .content-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.7em;
      color: #ebecec;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ContentCards = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 15px;
  cursor: pointer;
`;
