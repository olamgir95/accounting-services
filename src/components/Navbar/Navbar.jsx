import React, { useEffect, useState } from "react";
import NavRoutes from "../../constants/nav-links";
import useWindowSize from "../../constants/useWindowResize";
import Container from "../Container";
import NavbarLink from "./NavBarLink";
// import closeMenu from "./../../assets/icons/close.svg";
import logo from "./../../assets/imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [width] = useWindowSize();
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else setScroll(false);
  };
  window.addEventListener("scroll", ChangeBackground);

  console.log(scroll, "test");
  const NavLinks = ({ className }) => {
    return (
      <ul className={className}>
        {NavRoutes.map(({ name, link }) => (
          <NavbarLink key={link} link={link} name={name} />
        ))}
      </ul>
    );
  };
  return (
    <div
      className={
        scroll
          ? "-top-10"
          : "absolute w-full md:py-10 z-10 duration-1000  md:bg-transparent bg-bgNavbar top-0"
      }
    >
      <Container className="   ">
        <div className="w-full flex md:justify-between items-center md:px-10  px-2.5 font-maven ">
          <div
            className="md:ml-0 ml-4 flex max-h-[60px] py-1 max-w-[126px] lg:max-w-[159px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img className="" src={logo} alt="Logo" />
          </div>
          <NavLinks
            className={"lg:flex gap-14 list-none text-white   pr-12 hidden"}
          />
          <div
            className="lg:hidden md:w-12 sm:w-6 w-8 md:mr-7 text-xl absolute right-[10px] cursor-pointer z-10 text-buttonColor"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <FontAwesomeIcon className="fa-lg" icon={faBars} />
          </div>
          <div
            className={
              "top-0 bg-black p-7 sm:w-80 w-60 z-50 h-screen   flex-col duration-500 z-1000 ease-in-out fixed transition-all " +
              (width < 1024 && menuIsOpen
                ? "right-0 "
                : " -right-[250px] hidden")
            }
          >
            <div
              className=" text-closeBtn absolute top-2 right-2   "
              onClick={() => setMenuIsOpen(false)}
            >
              <FontAwesomeIcon className="fa-2x" icon={faTimes} />
            </div>
            <NavLinks
              className={
                "list-none flex flex-col gap-14 text-white text-navLink pr-16 pt-8"
              }
              setMenuIsOpen={setMenuIsOpen}
            />
          </div>
        </div>
      </Container>
      {
        <div
          className='bg-transparent'
        >
          <Container className={
            scroll
              ? "top-0 fixed  w-full z-50 bg-bgNavbar bg-opacity-95  duration-1000 "
              : "-top-16 hidden"
          }>
            <div className="w-full flex md:justify-between items-center md:px-10  px-2.5 font-maven ">
              <div
                className="md:ml-0 ml-4 flex max-h-[60px] py-1 max-w-[126px] lg:max-w-[159px] cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img className="" src={logo} alt="Logo" />
              </div>
              <NavLinks
                className={"lg:flex gap-14 list-none text-white   pr-12 hidden"}
              />
              <div
                className="lg:hidden md:w-12 sm:w-6 w-8 md:mr-7 text-xl absolute right-[10px] cursor-pointer z-10 text-buttonColor"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                <FontAwesomeIcon className="fa-lg" icon={faBars} />
              </div>
            </div>
          </Container>
        </div>
      }
    </div>
  );
}

export default Navbar;
