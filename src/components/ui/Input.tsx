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
        outline: "0px solid black",
        transition: "background-color 0.2s ease",

        _focus: {
          outline: "2px solid token(colors.text)",
          bg: "menu",
        },

        _hover: {
          bg: "menu",
          outline: "1px solid token(colors.text)",
        },
      })}
      {...props}
    />
  );
}
