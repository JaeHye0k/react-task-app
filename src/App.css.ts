// https://vanilla-extract.style/documentation/global-api/create-global-theme/
import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
    color: {
        main0: "#EAF2F8",
        main1: "#D4E6F1",
        main2: "#A9CCE3",
        main3: "#7FB3D5",
        main4: "#5499C7",
        main5: "#2980B9",
        main6: "#2471A3",
        main7: "#1F618D",
        main8: "#1A5276",
        main9: "#154360",
    },
    fontSizing: {
        T1: "32px",
        T2: "24px",
        T3: "18px",
        T4: "14px",
        P1: "12px",
    },
    spacing: {
        small: "5px",
        medium: "10px",
        big1: "20px",
        big2: "15px",
        list: "30px",
    },
    font: {
        body: "arial",
    },
    shadow: {
        basic: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
    },
    minWidth: {
        list: "250px",
    },
});

export const appContainer = style({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "max-content",
    width: "100vw",
});

export const board = style({
    display: "flex",
    flexDirection: "row",
    height: "100%",
});

export const buttons = style({
    marginTop: "auto",
    paddingLeft: vars.spacing.big2,
});

export const deleteBoardButton = style({
    border: "none",
    borderRadius: 5,
    width: "max-content",
    marginTop: "auto",
    marginLeft: "auto",
    marginBottom: 30,
    fontSize: vars.fontSizing.T4,
    padding: vars.spacing.big2,
    backgroundColor: vars.color.main1,
    cursor: "pointer",
    opacity: 0.6,
    minWidth: 150,
    ":hover": {
        opacity: 0.8,
    },
});

export const loggerButton = style({
    border: "none",
    borderRadius: 5,
    width: "max-content",
    marginTop: "auto",
    marginLeft: 15,
    // marginRight: 30,
    marginBottom: 30,
    fontSize: vars.fontSizing.T4,
    padding: vars.spacing.big2,
    backgroundColor: vars.color.main1,
    cursor: "pointer",
    opacity: 0.6,
    minWidth: 150,
    ":hover": {
        opacity: 0.8,
    },
});
