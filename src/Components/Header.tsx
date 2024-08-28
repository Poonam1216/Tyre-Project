import Logo from "@/Atoms/Logo";
import NavMenu from "@/Molecules/NavMenu";
import SearchBar from "@/Molecules/SearchBar";
import React from "react";

const Header: React.FC = () => {
	return (
		<header className="flex sticky items-center justify-center bg-red-500 shadow-md w-full h-24">
			<div className="flex justify-between bg-red">
				<div className="w-24 h-24">
					<Logo
						imageSrc="/assets/png/tyrelogo.png"
						altText="Shree Hemkunt Tyres"
					/>
				</div>
				<NavMenu />
				<div className="hidden md:block w-1/3">
					<SearchBar />
				</div>
			</div>
		</header>
	);
};

export default Header;
