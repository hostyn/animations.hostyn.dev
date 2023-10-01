import { css } from "@styled-system/css";

interface ConfigElementProps {
  name: string;
  children: React.ReactNode;
}

export default function ConfigElement({ name, children }: ConfigElementProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        gap: "0.25rem",
      })}
    >
      <span
        className={css({
          color: "text",
          fontSize: "sm",
          fontWeight: 700,
          lineHeight: "1.25rem",
          letterSpacing: "-0.025rem",
          textTransform: "uppercase",
        })}
      >
        {name}
      </span>
      {children}
    </div>
  );
}
