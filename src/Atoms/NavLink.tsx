"use client";
import React from "react";
import Link from "next/link";

type NavLinkProps = {
	href: string;
	label: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
	return (
		<Link
			href={href}
			className="text-gray-700 hover:text-amber-500 px-3 py-2"
		>
			{label}
		</Link>
	);
};

export default NavLink;
