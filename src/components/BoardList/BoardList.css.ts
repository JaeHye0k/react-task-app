import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const container = style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: 15,
    minHeight: "max-content",
    padding: vars.spacing.big2,
    // height: "70px",
    backgroundColor: vars.color.main7,
    // width: "100%",
});

export const title = style({
    color: vars.color.main0,
    fontSize: vars.fontSizing.T2,
    marginRight: vars.spacing.big1,
});

export const addButton = style({
    color: vars.color.main0,
    fontSize: vars.fontSizing.T2,
    marginLeft: vars.spacing.big1,
    cursor: "pointer",
    ":hover": {
        opacity: 0.8,
    },
});

export const boardItem = style({
    color: vars.color.main0,
    fontSize: vars.fontSizing.T3,
    backgroundColor: vars.color.main3,
    padding: vars.spacing.medium,
    borderRadius: 10,
    cursor: "pointer",
    marginRight: vars.spacing.big1,
    ":hover": {
        opacity: 0.8,
        transform: "scale(1.03)",
    },
});

export const boardItemActive = style({
    color: vars.color.main0,
    fontSize: vars.fontSizing.T3,
    backgroundColor: vars.color.main5,
    padding: vars.spacing.medium,
    borderRadius: 10,
    cursor: "pointer",
    marginRight: vars.spacing.big1,
});

export const addSection = style({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
});

export const smallTitle = style({
    color: vars.color.main0,
    fontSize: vars.fontSizing.T3,
});
