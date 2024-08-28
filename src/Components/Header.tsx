"use client";
import Logo from "@/Atoms/Logo";
import NavMenu from "@/Molecules/NavMenu";
import SearchBar from "@/Molecules/SearchBar";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for Hamburger and Close

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="flex sticky items-center justify-between border-b-gray-200 shadow-md w-full h-24">
			<div className="w-full flex justify-between items-center bg-red p-10">
				<div className="w-[20%] rounded-lg ">
					<div className="w-24 h-24">
						<Logo
							imageSrc="/assets/png/tyrelogo.png"
							altText="Shree Hemkunt Tyres"
						/>
					</div>
				</div>

				{/* Regular Navigation (Hidden on small screens) */}
				<div className="hidden md:block w-[50%]">
					<NavMenu />
				</div>

				{/* SearchBar (Hidden on small screens) */}
				<div className="hidden md:block w-[20%] ">
					<SearchBar />
				</div>

				{/* Hamburger Icon for small screens */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="text-gray-700 focus:outline-none"
					>
						{isMenuOpen ? (
							<X className="w-8 h-8" /> // Close icon
						) : (
							<Menu className="w-8 h-8" /> // Hamburger icon
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<div className="absolute top-24 left-0 w-full bg-white shadow-md z-20 md:hidden">
					<NavMenu />
				</div>
			)}
		</header>
	);
};

export default Header;
