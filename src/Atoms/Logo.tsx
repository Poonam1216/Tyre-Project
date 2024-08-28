"use client";
import Link from "next/link";
import React from "react";

type LogoProps = {
	imageSrc?: string;
	altText: string;
};

const Logo: React.FC<LogoProps> = ({ imageSrc, altText }) => {
	return (
		<Link href={"/"}>
			<div className="text-lg font-bold cursor-pointer">
				{imageSrc ? (
					<img
						src={imageSrc}
						alt={altText}
						className="h-full w-full object-cover cursor-pointer"
					/>
				) : (
					altText
				)}
			</div>
		</Link>
	);
};

export default Logo;
