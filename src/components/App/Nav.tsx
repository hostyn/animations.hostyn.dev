import { css } from "@styled-system/css";

export default function Nav() {
  return (
    <nav
      className={css({
        display: "flex",
        padding: "4",
        bg: "menu",
        borderRadius: "lg",
        height: "12",
        alignItems: "center",
        color: "text",
        width: "72",
      })}
    >
      <h1>Animations</h1>
    </nav>
  );
}
