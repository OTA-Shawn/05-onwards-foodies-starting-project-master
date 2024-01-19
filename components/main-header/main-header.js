import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import classes from "./main-header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

const MainHeader = () => {
  // const path = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} alt="NextLevel Food" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
