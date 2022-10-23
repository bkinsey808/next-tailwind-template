import { styled } from "classname-variants/react";

export const Button = styled("button", {
	base: "rounded-md text-white",
	variants: {
		color: {
			brand: "bg-sky-500",
			accent: "bg-teal-500",
		},
		size: {
			small: "px-5 py-3 text-xs",
			large: "px-6 py-4 text-base",
		},
		rounded: {
			true: "rounded-full",
		},
	},
	defaultVariants: {
		color: "brand",
	},
});
