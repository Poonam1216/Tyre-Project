"use client";
import React from "react";

type LogoProps = {
	imageSrc?: string;
	altText: string;
};

const Logo: React.FC<LogoProps> = ({ imageSrc, altText }) => {
	return (
		<div className="text-lg font-bold">
			{imageSrc ? (
				<img
					src={imageSrc}
					alt={altText}
					className="h-full w-full object-cover"
				/>
			) : (
				altText
			)}
		</div>
	);
};

export default Logo;
