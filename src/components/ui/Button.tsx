import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

export const buttonStyle = cva({
  base: {
    cursor: "pointer",
    transition: "all 0.1s ease-in-out",
    borderRadius: "sm",
    lineHeight: "100%",
    padding: "token(sizes.2) token(sizes.8)",
    width: "fit-content",

    _focusVisible: {
      outline: "2px solid token(colors.text)",
    },
  },
  variants: {
    visual: {
      regular: {},
      error: {
        bg: "error",
        color: "bg",

        _hover: {
          bg: "errorHover",
        },
      },
    },
  },
  defaultVariants: {
    visual: "regular",
  },
});

export const Button = styled("button", buttonStyle);
