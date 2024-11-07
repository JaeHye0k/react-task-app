import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const listContainer = style({
    height: "max-content",
    display: "flex",
    flexWrap: "wrap",
    rowGap: vars.spacing.list,
    margin: vars.spacing.list,
});
