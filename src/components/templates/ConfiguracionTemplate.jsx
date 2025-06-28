import styled from "styled-components";
import fondocuadros from "../../assets/fondocuadros.svg";
import { Link } from "react-router-dom";
import { DataModulosConfiguracion } from "../../utils/dataEstatica";
export function ConfiguracionTemplate() {
  console.log(DataModulosConfiguracion);
  return (
    <Container>
      <div id="cards" style={{ height: "100vh" }}>
        {DataModulosConfiguracion.map((item, index) => {
          return (
            <Link
              to={item.state ? item.link : ""}
              className={item.state ? "card" : "card false"}
              key={index}
            >
              <div className="card-content">
                <div className="card-image">
                  <img src={item.icono} />
                </div>

                <div className="card-info-wrapper">
                  <div className="card-info">
                    <i className="fa-duotone fa-unicorn"></i>
                    <div className="card-info-title">
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  /* 🎨 Fondo y layout principal */
  --bg-color: rgb(20, 20, 20);
  --card-color: rgb(23, 23, 23);
  background-image: url(${fondocuadros});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-color: ${({ theme }) => theme.bgtotal};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  /* 🎚 Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #484848;
    border-radius: 10px;
  }

  /* 🗃 Grid contenedor de cards */
  #cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    padding: 2rem 1rem;
    height: 100vh;
  }

  /* 💳 Tarjeta principal */
  .card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 260px;
    width: 300px;
    border: 0.5px solid transparent;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      border: 1px solid ${({ theme }) => theme.bg5};

      .card-image img {
        filter: grayscale(0%);
      }
    }

    &.false:hover {
      border: 1px solid red;

      .card-image img {
        filter: grayscale(0%);
      }
    }

    &::before,
    &::after {
      border-radius: inherit;
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 500ms;
    }

    &::after {
      background: radial-gradient(
        600px circle at var(--mouse-x) var(--mouse-y),
        rgba(255, 255, 255, 0.4),
        transparent 40%
      );
      z-index: 1;
    }

    &::before {
      z-index: 3;
    }
  }

  .card-content {
    background-color: ${({ theme }) => theme.bgcards};
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.5rem 1rem;
    flex-grow: 1;
    position: relative;
    z-index: 2;
  }

  /* 🖼 Imagen del ícono */
  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;

    img {
      height: 64px;
      object-fit: contain;
      transition: 0.3s;
      filter: grayscale(100%);
    }
  }

  /* 📝 Información de la tarjeta */
  .card-info-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    flex-grow: 1;
    text-align: center;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .card-info > i {
    font-size: 1em;
    line-height: 20px;
  }

  .card-info-title h3 {
    font-size: 1.1em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorsubtitlecard};
  }

  .card-info-title h4 {
    font-size: 0.9em;
    font-weight: 400;
    color: ${({ theme }) => theme.colortitlecard};
  }

  /* 📚 Tipografía global */
  h1,
  h2,
  h3,
  h4,
  span,
  i {
    font-family: "Rubik", sans-serif;
    font-weight: 600;
    color: ${({ theme }) => theme.colorsubtitlecard};
    margin: 0;
  }

  /* 📱 Media Queries */
  @media (max-width: 1000px) {
    #cards {
      max-width: 1000px;
      padding: 10px 0;
    }

    .card {
      width: calc(50% - 4px);
    }
  }

  @media (max-width: 500px) {
    .card {
      height: 180px;
    }

    .card-image {
      height: 80px;
    }

    .card-info-wrapper {
      padding: 0 10px;
    }

    .card-info > i {
      font-size: 0.8em;
    }

    .card-info-title h3 {
      font-size: 0.9em;
    }

    .card-info-title h4 {
      font-size: 0.8em;
      margin-top: 4px;
    }
  }

  @media (max-width: 320px) {
    .card {
      width: 100%;
    }
  }
`;
