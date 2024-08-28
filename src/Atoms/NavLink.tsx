import Link from "next/link";
import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavLinkProps {
	href: string;
	label: string;
	children?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, children }) => {
	return (
		<div className="relative group">
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
				<div className="w-[45vw] absolute left-0 top-full hidden group-hover:flex flex-col bg-white text-black rounded-md shadow-lg z-10 ">
					{children}
				</div>
			)}
		</div>
	);
};

export default NavLink;
