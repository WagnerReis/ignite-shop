import { styled } from "@/styles";

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "$gray800",
    borderRadius: 8,

    "&:hover": {
      opacity: 0.7
    },

    svg: {
      border: "none",
    },

    button: {
      border: "none",
      background: "transparent",
      padding: "0.75rem",
      cursor: "pointer",
      position: "relative",

      span: {
        position: "absolute",
        width: "1.5rem",
        height: "1.5rem",
        borderRadius: "50%",
        top: "-0.5rem",
        right: "-0.5rem",
        background: "$green500",
        color: "$white",
        fontSize: "0.875rem",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
    }
  }
});
