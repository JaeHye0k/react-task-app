import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const wrapper = style({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
});

export const modalWindow = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "800px",
    height: "max-content",
    maxHeight: "500px",
    overflowY: "auto",
    backgroundColor: vars.color.main6,
    opacity: 0.95,
    borderRadius: 14,
    padding: 20,
    boxShadow: vars.shadow.basic,
    color: vars.color.main0,
});

export const header = style({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "40px",
});

export const closeButton = style({
    fontSize: vars.fontSizing.T2,
    marginTop: "-20px",
    cursor: "pointer",
    ":hover": {
        opacity: "0.8",
    },
});

export const title = style({
    fontSize: vars.fontSizing.T2,
    color: vars.color.main1,
    marginRight: "auto",
    marginBottom: vars.spacing.medium,
});

export const buttons = style({
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 50,
});

export const updateButton = style({
    border: "none",
    borderRadius: 5,
    fontSize: vars.fontSizing.T4,
    padding: vars.spacing.big2,
    marginRight: vars.spacing.big1,
    backgroundColor: vars.color.main4,
    cursor: "pointer",
    ":hover": {
        opacity: 0.8,
    },
});

export const deleteButton = style({
    border: "none",
    borderRadius: 5,
    fontSize: vars.fontSizing.T4,
    padding: vars.spacing.big2,
    marginRight: vars.spacing.big1,
    backgroundColor: vars.color.main4,
    cursor: "pointer",
    ":hover": {
        opacity: 0.8,
    },
});

export const input = style({
    width: "100%",
    minHeight: "30px",
    border: "none",
    borderRadius: 5,
    marginBottom: vars.spacing.big2,
    padding: vars.spacing.medium,
    fontSize: vars.fontSizing.T4,
    boxShadow: vars.shadow.basic,
});