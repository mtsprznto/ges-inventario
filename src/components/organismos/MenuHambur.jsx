import styled from "styled-components";
import { LinksArray, SecondarylinksArray, ToggleTema } from "../../index";
import { NavLink } from "react-router-dom";
import { v } from "../../styles/variables";
import { useState } from "react";

export function MenuHambur() {
  const [click, setClick] = useState(false);
  return (
    <Container>
      <NavBar>
        <section>
          <HamburgerMenu onClick={() => setClick(!click)}>
            <label className={click ? "hamburger active svg" : "hamburger"}>
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </HamburgerMenu>
        </section>
        <Menu $click={click.toString()}>
          {LinksArray.map(({ icon, label, to }) => (
            <div
              onClick={() => setClick(!click)}
              className="LinkContainer"
              key={label}
            >
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <Divider />
          {SecondarylinksArray.map(({ icon, label, to }) => (
            <div
              className="LinkContainer"
              key={label}
              onClick={() => setClick(!click)}
            >
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <ToggleTema />
          <Divider />
        </Menu>
      </NavBar>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const HamburgerMenu = styled.span`
  position: fixed;
  top: 1rem;
  left: 10px;
  z-index: 100;

  .hamburger {
    cursor: pointer;
    color: red;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 2.5em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
  .hamburger.active svg {
    transform: rotate(-45deg);
  }

  .hamburger.active .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
  .hamburger svg path {
    stroke: ${(props) => props.theme.text};
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  list-style: none;
  z-index: 10;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
  backdrop-filter: blur(3px);
  transform: ${(props) =>
    props.$click == "true" ? "translateY(0)" : "translateY(1000%)"};
  transition: all 0.3s ease;
  
  .LinkContainer {
    
    &:hover{
      background:${(props) => props.theme.bgAlpha}
    }

    .Links {
      width: 100vw;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${(props) => props.theme.text};
      height:80px;
      .Linkicon {
        padding: 20px 20px;
        display: flex;
        svg{
          font-size: 25px;
        }
      }
    }

  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
