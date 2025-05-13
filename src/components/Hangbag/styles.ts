import { styled } from "@/styles";

export const HangBagContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$green500",
  borderRadius: 8,

  "&:hover": {
    background: "$green300"
  },

  svg: {

    border: "none",
  },

  button: {
    border: "none",
    background: "transparent",
    padding: "0.75rem",
    cursor: "pointer"
  }
});