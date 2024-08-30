// import React from "react";
// import styles from "./Ribbon.module.css";

// const Ribbon: React.FC = () => {
// 	return (
// 		<div className={styles.ribbonContainer}>
// 			<div className={styles.ribbonContent}>
// 				<span>Exciting Offers!</span>
// 				<span>New Arrivals!</span>
// 				<span>Big Discounts!</span>
// 				<span>Limited Time Sale!</span>
// 			</div>
// 		</div>
// 	);
// };

// export default Ribbon;
const scrollConfigs = [
	{
		scrollClass: "bg-gradient-ribbon-1",
		messageClass: "animate-g-scroll-left",
		rotationClass: "rotate-2",
		mtClass: "",
	},
	{
		scrollClass: "bg-gradient-ribbon-2",
		messageClass: "animate-g-scroll-right",
		rotationClass: "-rotate-2",
		mtClass: "-mt-16",
	},
];

const Ribbon = (): JSX.Element => {
	const text =
		"Roll Into Savings: Up to 30% Off on Premium Tyres! ||  Drive Smooth, Pay Less – Exclusive Tyre Deals Inside! || Grip the Road, Not Your Wallet – Unbeatable Discounts! || Ride Safe, Save Big – Limited-Time Tyre Offers! || Don't Miss the Spin-Tastic Tyre Sale – Shop & Save!".repeat(
			10000
		);

	return (
		<section className="w-full mb-16 py-10">
			<div className="w-full relative flex flex-col items-center justify-center py-3 md:py-20 cursor-default">
				{scrollConfigs.map(
					(
						{ scrollClass, messageClass, rotationClass, mtClass },
						index
					) => (
						<div
							key={index}
							className={`w-full relative flex flex-col ${mtClass}`}
						>
							<div
								className={`${scrollClass} w-full flex overflow-hidden p-6 pr-0 relative text-white transform ${rotationClass}`}
							>
								<div
									className={`${messageClass} font-sans flex items-center pl-0 pr-0 text-3xl md:text-5xl leading-50 font-normal whitespace-nowrap font-sora`}
								>
									{text}
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
};

export default Ribbon;
