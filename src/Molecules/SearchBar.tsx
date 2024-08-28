"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Button from "@/Atoms/Button";

const SearchBar: React.FC = () => {
	const [isInputVisible, setIsInputVisible] = useState(false);

	const toggleSearchInput = () => {
		setIsInputVisible(!isInputVisible);
	};

	return (
		<div className="flex items-center space-x-2">
			<button
				onClick={toggleSearchInput}
				className="p-2 text-gray-600 hover:text-gray-900"
			>
				<Search className="h-6 w-6" />
			</button>

			<div
				className={`${
					isInputVisible
						? "w-full opacity-100 translate-x-0"
						: "w-0 opacity-0 translate-x-full"
				} transition-all duration-3000 ease-in-out forwards`}
			>
				<input
					type="text"
					placeholder="Search..."
					className="border border-gray-300 rounded p-2 w-full outline-none"
				/>
			</div>

			{isInputVisible && (
				<div className="transition-opacity duration-3000 ease-in-out opacity-100">
					<Button
						label="Search"
						onClick={() => console.log("Search clicked")}
					/>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
