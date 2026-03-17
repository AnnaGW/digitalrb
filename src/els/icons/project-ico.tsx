import type { IconProps } from './icon-type';

export function ProjectIco({ width, height }: IconProps) {
	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 128 128"
		>
			<title>Спроектируем</title>
			<g>
				<path
					fill="currentColor"
					d="M2,106h47.5v16H24v4h80v-4H78.5v-16H126V2H2V106z M74.5,122h-21v-16h21V122z M6,102V91h116v11H6z M122,6v81   H6V6H122z"
				/>
				<polygon
					fill="currentColor"
					points="96,33 70.5,33 70.5,32 66.5,32 66.5,37 92,37 92,72 70.5,72 70.5,45.5 66.5,45.5 66.5,72 38.2,72    38.2,37 55.5,37 55.5,31.2 51.5,31.2 51.5,33 38.2,33 38.2,22 66.5,22 66.5,23 70.5,23 70.5,18 34.2,18 34.2,76 96,76  "
				/>
			</g>
		</svg>
	);
}
