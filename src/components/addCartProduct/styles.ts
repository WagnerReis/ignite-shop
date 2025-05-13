import { styled } from "@/styles";

export const Button = styled('button', {
  marginTop: "auto",
  backgroundColor: "$green500",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "1.25rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "$md",

  "&:not(:disabled):hover": {
    backgroundColor: "$green300",
  },

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  }
})