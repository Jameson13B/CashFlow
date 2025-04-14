import { globalStyle, style } from "@vanilla-extract/css"
import tokens from "./theme.css.ts"

// Reset and base styles
globalStyle("*", {
  boxSizing: "border-box",
})
globalStyle("body", {
  margin: 0,
  display: "flex",
  placeItems: "center",
  minWidth: "375px",
  minHeight: "100vh",
})
globalStyle("#root", {
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "375px",
  minHeight: "100vh",
  width: "100%",
  maxWidth: "768px",
})

// Layout Styles
export const layoutStyle = style({
  overflow: "hidden",
  width: "100%",
})
export const headerStyle = style({
  backgroundColor: tokens.colors.palette5,
  textAlign: "center",
  height: "initial",
})
export const contentStyle = style({
  backgroundColor: tokens.colors.background,
  textAlign: "center",
  padding: 16,
})
