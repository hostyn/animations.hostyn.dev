import { css } from "@styled-system/css";

interface ConfigElementProps {
  name: string;
  children: React.ReactNode;
}

export default function ConfigElement({ name, children }: ConfigElementProps) {
  return (
    <label
      className={css({
        display: "flex",
        flexDir: "column",
        gap: "0.25rem",
        color: "text",
        fontSize: "sm",
        fontWeight: 700,
        lineHeight: "1.25rem",
        letterSpacing: "-0.025rem",
        textTransform: "uppercase",
      })}
    >
      {name}
      {children}
    </label>
  );
}
