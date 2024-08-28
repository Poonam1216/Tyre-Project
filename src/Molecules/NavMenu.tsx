"use client";
import NavLink from "@/Atoms/NavLink";
import React from "react";

const NavMenu: React.FC = () => {
	return (
		<nav className="flex flex-col md:flex-row text-xl justify-between w-full hover:text-amber-400 transition-all duration-300 ease-in-out">
			<NavLink href="/" label="Home" />
			<NavLink href="/about" label="About" />
			<NavLink href="/services" label="Services" />
			<NavLink href="/contact" label="Contact" />
		</nav>
	);
};

export default NavMenu;
