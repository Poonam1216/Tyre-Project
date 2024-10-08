import Link from "next/link";
import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavLinkProps {
	href: string;
	label: string;
	children?: React.ReactNode;
	subChildren?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
	href,
	label,
	children,
	subChildren,
}) => {
	return (
		<div className="relative group cursor-pointer">
			<Link
				href={href}
				className="hover:text-amber-400 transition-all duration-300 ease-in-out flex items-center"
			>
				{label}
				{children && (
					<ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
				)}
			</Link>

			{children && (
				<div className="md:w-[45vw] sm:w-full sm:relative md:absolute left-0 top-full hidden group-hover:flex flex-col bg-white text-black rounded-md shadow-lg z-10">
					{children}
				</div>
			)}

			{subChildren && (
				<div className="sm:absolute relative  left-full top-0 hidden group-hover:flex flex-col bg-white text-black rounded-md shadow-lg z-20">
					{subChildren}
				</div>
			)}
		</div>
	);
};

export default NavLink;
