import { styled } from "@/styles";

export const ModalContainer = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: "1000",

  width: "30rem",
  height: "100%",
  background: "$gray800",
  padding: "1.5rem 3rem 4rem",

  h1: {
    fontSize: "$lg",
    marginTop: "1.5rem",
  },

  svg: {
    paddingLeft: "auto",
    cursor: "pointer",

    "&:hover": {
      opacity: "0.7"
    }
  },
})

export const Overlay = styled("div", {
  position: "fixed",
  inset: 0,
  background: "black",
  opacity: "0.5",
  zIndex: "999",
})

export const CartContent = styled("div", {
  height: "100%",

  display: "flex",
  flexDirection: "column",
  // alignItems: "space-between",
  // justifyContent: "space-between",

  button: {
    cursor: "pointer",
    padding: "1rem",
    background: "$green500",
    border: "none",
    borderRadius: 8,
    marginTop: "3.5625rem",
    color: "$white",
    fontSize: "$md",
    fontWeight: "bold"
  }
})

export const Summary = styled("div", {
  display: "flex",
  flexDirection: "column",

  width: "100%",
  lineHeight: "1.6",
  marginTop: "auto",

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    widht: "100%",

    span: {
      color: "$gray300",
      fontSize: "1rem"
    },

    strong: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "$gray100"
    },

    "strong:last-child": {
      fontSize: "$xl"
    }
  }
})

export const CartItemsContainer = styled("div", {
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  maxHeight: "600px",
  overflow: "auto"
})
