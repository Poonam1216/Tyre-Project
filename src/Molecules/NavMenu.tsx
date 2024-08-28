"use client";
import NavLink from "@/Atoms/NavLink";
import React from "react";

const NavMenu: React.FC = () => {
	return (
		<nav className="flex space-x-4">
			<NavLink href="/" label="Home" />
			<NavLink href="/about" label="About" />
			<NavLink href="/services" label="Services" />
			<NavLink href="/contact" label="Contact" />
		</nav>
	);
};

export default NavMenu;
