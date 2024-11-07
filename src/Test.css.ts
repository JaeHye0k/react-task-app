import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
    color: {
        brand: "blue",
    },
    font: {
        body: "arial",
    },
});

export const otherThemeClass = createTheme(vars, {
    color: {
        brand: "red",
    },
    font: {
        body: "helvetica",
    },
});

export const title = style({
    color: vars.color.brand,
    font: vars.font.body,
});
