import { ArrayFeatures } from "@/utils";
import Folder from "./folder";
import { ScrollArea, createStyles } from "@mantine/core";

export const Folders = () => {
	const fake = new ArrayFeatures().createFakeArray;
	const { classes } = useStyles();

	return (
		<ScrollArea classNames={classes} h={"100%"} scrollbarSize={8}>
			<ul>
				{fake(20).map((f) => (
					<Folder key={f} />
				))}
			</ul>
		</ScrollArea>
	);
};

const useStyles = createStyles(() => ({
	scrollbar: {
		"&, &:hover": {
			background: "transparent",
		},

		'&[data-orientation="vertical"] .mantine-ScrollArea-thumb': {
			backgroundColor: "#fff",
		},
	},
}));
