import { Suspense } from "react";
import { cn } from "./cn";

export type CustomSuspenseProps = Omit<React.SuspenseProps, "fallback"> &
	Pick<React.CSSProperties, "height" | "width"> & { className?: string };

export function CustomSuspense({
	width,
	height,
	className,
	...rest
}: CustomSuspenseProps) {
	return (
		<Suspense
			fallback={
				<div
					style={{ width, height }}
					className={cn("inline-block animate-pulse bg-gray-200", className)}
				/>
			}
			{...rest}
		/>
	);
}
