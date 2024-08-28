"use client";
import NavLink from "@/Atoms/NavLink";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface Brand {
	name: string;
	models: string[];
}

interface Categories {
	Bikes: Brand[];
	Cars: Brand[];
	Scooter: Brand[];
}

const categories: Categories = {
	Bikes: [
		{
			name: "Royal Enfield",
			models: ["Thunderbird", "Classic", "Himalayan"],
		},
		{ name: "Honda", models: ["CBR", "Activa", "Shine"] },
		{ name: "Hero", models: ["Splendor", "Xtreme", "Passion"] },
		{ name: "Bajaj", models: ["Pulsar", "Avenger", "Dominar"] },
		{ name: "Kawasaki", models: ["Ninja", "Z1000"] },
		{ name: "Yamaha", models: ["FZ", "R15", "MT-15"] },
		{ name: "Mahindra", models: ["Mojo"] },
		{ name: "Suzuki", models: ["Gixxer", "Access"] },
		{ name: "TVS", models: ["Apache", "Jupiter"] },
		{ name: "Aprilia", models: ["RSV4"] },
	],
	Cars: [
		{ name: "Toyota", models: ["Camry", "Corolla", "Highlander"] },
		{ name: "Ford", models: ["Mustang", "F-150", "Escape"] },
		{ name: "Chevrolet", models: ["Malibu", "Impala", "Cruze"] },
	],
	Scooter: [
		{ name: "Vespa", models: ["GTS", "Primavera"] },
		{ name: "Scooty", models: ["Pep+", "Zest"] },
		{ name: "Honda", models: ["Activa", "Dio"] },
	],
};

const NavMenu: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<
		keyof Categories | null
	>(null);
	const [activeBrand, setActiveBrand] = useState<string | null>(null);

	const handleCategoryHover = (category: keyof Categories) => {
		setActiveCategory(category);
		setActiveBrand(null);
	};

	const handleBrandHover = (brand: string) => {
		setActiveBrand(brand);
	};

	const getBrandsForCategory = (category: keyof Categories) =>
		categories[category].map((brand) => (
			<div
				key={brand.name}
				className={`flex items-center justify-between p-2 cursor-pointer ${
					activeBrand === brand.name
						? "text-amber-400"
						: "hover:text-amber-400"
				}`}
				onMouseEnter={() => handleBrandHover(brand.name)}
			>
				<span>{brand.name}</span>
				<ChevronRight className="h-4 w-4" />
			</div>
		));

	const getModelsForBrand = (category: keyof Categories, brand: string) =>
		categories[category]
			.find((b) => b.name === brand)
			?.models.map((model) => (
				<div key={model}>
					<h4 className="font-bold">{model}</h4>
					<a href="#" className="text-orange-500 hover:underline">
						VIEW TYRES &gt;
					</a>
				</div>
			));

	return (
		<nav className="flex flex-col md:flex-row text-xl justify-between w-full transition-all duration-300 ease-in-out">
			<NavLink href="/" label="Home" />
			<NavLink href="/about" label="About">
				<div className="flex flex-col gap-5">
					<NavLink href="/about/team" label="Team" />
					<NavLink href="/about/company" label="Company" />
				</div>
			</NavLink>
			<NavLink href="/services" label="Services">
				<div className="flex w-full">
					<div className="w-[30%] text-black-500">
						{Object.keys(categories).map((category) => (
							<div
								key={category}
								className={`flex w-full justify-between items-start py-3 px-5 cursor-pointer gap-10 ${
									activeCategory === category
										? "text-amber-400"
										: "hover:text-amber-400"
								}`}
								onMouseEnter={() =>
									handleCategoryHover(
										category as keyof Categories
									)
								}
							>
								<span>{category}</span>
								<ChevronRight className="h-4 w-4" />
							</div>
						))}
					</div>

					<div className="w-[90%] p-10">
						<h3 className="text-lg font-bold mb-3">
							{activeCategory || "Select a category"}
						</h3>
						<div className="grid grid-cols-2 gap-10">
							{activeCategory &&
								getBrandsForCategory(activeCategory)}
							{activeCategory &&
								activeBrand &&
								getModelsForBrand(activeCategory, activeBrand)}
						</div>
					</div>
				</div>
			</NavLink>
			<NavLink href="/contact" label="Contact" />
		</nav>
	);
};

export default NavMenu;
