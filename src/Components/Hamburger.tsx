"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "@/Atoms/NavLink";

const Hamburger: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="md:hidden">
			<button
				className="p-2 text-gray-600 hover:text-gray-900"
				onClick={toggleMenu}
			>
				{isOpen ? (
					<X className="h-6 w-6" />
				) : (
					<Menu className="h-6 w-6" />
				)}
			</button>

			{isOpen && (
				<div className="absolute top-16 left-0 w-full bg-white shadow-md">
					<nav className="flex flex-col space-y-2 p-4">
						<NavLink href="/" label="Home" />
						<NavLink href="/about" label="About" />
						<NavLink href="/services" label="Services" />
						<NavLink href="/contact" label="Contact" />
					</nav>
				</div>
			)}
		</div>
	);
};

export default Hamburger;
