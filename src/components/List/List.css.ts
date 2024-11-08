import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const listWrapper = style({
    display: "flex",
    flexDirection: "column",
    marginRight: vars.spacing.list,
    padding: vars.spacing.list,
    width: "max-content",
    height: "max-content",
    backgroundColor: vars.color.main3,
    borderRadius: 10,
});

export const name = style({
    fontSize: vars.fontSizing.T3,
    marginBottom: vars.spacing.big2,
});

export const header = style({
    display: "flex",
    alignItems: "center",
});

export const deleteButton = style({
    padding: vars.spacing.small,
    borderRadius: 20,
    fontSize: vars.fontSizing.T2,
    marginLeft: "auto",
    marginTop: "-15px",
    marginRight: "5px",
    cursor: "pointer",
    ":hover": {
        backgroundColor: vars.color.main4,
        boxShadow: vars.shadow.basic,
        opacity: 0.8,
    },
});
