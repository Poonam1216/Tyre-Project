"use client";
import Button from "@/Atoms/Button";
import React from "react";

const SearchBar: React.FC = () => {
	return (
		<div className="flex space-x-2">
			<input
				type="text"
				placeholder="Search..."
				className="border border-gray-300 rounded p-2 w-full"
			/>
			<Button
				label="Search"
				onClick={() => console.log("Search clicked")}
			/>
		</div>
	);
};

export default SearchBar;
