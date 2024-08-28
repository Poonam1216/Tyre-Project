"use client";
import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import NavLink from "@/Atoms/NavLink";

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

const Hamburger: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeCategory, setActiveCategory] = useState<
		keyof Categories | null
	>(null);
	const [activeBrand, setActiveBrand] = useState<string | null>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		setActiveCategory(null); // Close submenus
		setActiveBrand(null);
	};

	const handleCategoryClick = (category: keyof Categories) => {
		setActiveCategory(category === activeCategory ? null : category);
		setActiveBrand(null);
	};

	const handleBrandClick = (brand: string) => {
		setActiveBrand(brand === activeBrand ? null : brand);
	};

	const getBrandsForCategory = (category: keyof Categories) =>
		categories[category].map((brand) => (
			<div
				key={brand.name}
				className="pl-4 flex justify-between items-center py-2 cursor-pointer hover:text-amber-400"
				onClick={() => handleBrandClick(brand.name)}
			>
				<span>{brand.name}</span>
				<ChevronRight className="h-4 w-4" />
			</div>
		));

	const getModelsForBrand = (category: keyof Categories, brand: string) =>
		categories[category]
			.find((b) => b.name === brand)
			?.models.map((model) => (
				<div key={model} className="pl-8 py-1 text-sm">
					<h4 className="font-bold">{model}</h4>
					<a href="#" className="text-orange-500 hover:underline">
						VIEW TYRES &gt;
					</a>
				</div>
			));

	return (
		<div className="md:hidden h-full w-full">
			<button
				className="p-2  text-gray-600 hover:text-gray-900"
				onClick={toggleMenu}
			>
				{isOpen ? (
					<X className="h-6 w-6" />
				) : (
					<Menu className="h-6 w-6" />
				)}
			</button>

			{isOpen && (
				<div className="bg-white shadow-md w-full">
					<nav className="flex flex-col space-y-2 p-4">
						<NavLink href="/" label="Home" />
						<NavLink href="/about" label="About" />

						<div className="flex flex-col space-y-2">
							{Object.keys(categories).map((category) => (
								<div key={category}>
									<div
										className="flex justify-between items-center py-2 cursor-pointer hover:text-amber-400"
										onClick={() =>
											handleCategoryClick(
												category as keyof Categories
											)
										}
									>
										<span>{category}</span>
										<ChevronRight className="h-4 w-4" />
									</div>

									{activeCategory === category && (
										<div className="pl-4 transition-height duration-300 ease-in-out">
											{getBrandsForCategory(
												category as keyof Categories
											)}
											{activeCategory &&
												activeBrand &&
												getModelsForBrand(
													activeCategory,
													activeBrand
												)}
										</div>
									)}
								</div>
							))}
						</div>

						<NavLink href="/services" label="Services" />
						<NavLink href="/contact" label="Contact" />
					</nav>
				</div>
			)}
		</div>
	);
};

export default Hamburger;
