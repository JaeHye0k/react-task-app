import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const listButton = style({
    display: "flex",
    alignItems: "center",
    height: "max-content",
    borderRadius: 4,
    minWidth: vars.minWidth.list,
    marginTop: vars.spacing.small,
    color: vars.color.main0,
    fontSize: vars.fontSizing.T3,
    backgroundColor: vars.color.main3,
    paddingTop: vars.spacing.small,
    paddingBottom: vars.spacing.small,
    paddingRight: vars.spacing.big2,
    paddingLeft: vars.spacing.big2,
    cursor: "pointer",
    ":hover": {
        backgroundColor: vars.color.main4,
    },
});

export const taskButton = style({
    display: "flex",
    alignItems: "center",
    height: "max-content",
    borderRadius: 4,
    marginTop: vars.spacing.small,
    fontSize: vars.fontSizing.T3,
    padding: vars.spacing.medium,
    ":hover": {
        backgroundColor: vars.color.main5,
    },
});