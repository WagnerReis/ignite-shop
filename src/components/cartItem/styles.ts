import { styled } from "@/styles";

export const Container = styled("div", {
  width: "100%",
  height: "5.875rem",

  display: "flex",

  "div:first-child": {
    background: "linear-gradient(180deg, #1EA483 0, #7465D4 100%)",
    borderRadius: 10,
  },

  gap: "1rem",

  div: {
    display: "flex",
    flexDirection: "column",

    lineHeight: "1.6",

    span: {
      fontSize: "$md",
      color: "$gray300"
    },

    strong: {
      fontSize: "$md",
      color: "$gray100",
      fontWeight: "bold"
    },

    a: {
      background: "transparent",
      fontSize: 16,
      fontWeight: "bold",

      color: "$green300",
      width: "90px",

      padding: "0.25rem 0",
      cursor: "pointer",
    }
  }
})