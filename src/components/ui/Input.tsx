import { css } from "@styled-system/css";

export default function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      className={css({
        bg: "bg",
        color: "white",
        borderRadius: "sm",
        padding: "token(sizes.1) token(sizes.2)",
        border: "1px solid token(colors.text)",
        transition: "all 0.3s ease",

        _focus: {
          outline: "1px solid token(colors.white)",
          bg: "menu",
        },

        _hover: {
          bg: "menu",
        },
      })}
      {...props}
    />
  );
}
