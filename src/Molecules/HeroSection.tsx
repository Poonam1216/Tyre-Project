"use client";
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
	return (
		<section>
			<div className=" w-full h-full ">
				<Image
					src={"/assets/png/hero_image1.png"}
					width={200}
					height={100}
					alt={"car image"}
					className="h-[20%] w-full mt-10"
				/>
			</div>

			<div className="absolute top-64 left-10 md:bottom-10 md:left-40 opacity-80 w-[30%] md:w-[45%] bg-amber-400 h-[10%] md:h-[30%] animate-slide-in-left">
				<span>
					<h1 className="typing-demo flex justify-center items-center font-bold text-black-600 w-full">
						Welcomes you to Tyre Plex
					</h1>
				</span>
			</div>
		</section>
	);
};

export default HeroSection;
