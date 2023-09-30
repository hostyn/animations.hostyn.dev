import { css } from "@styled-system/css";
import Nav from "./Nav";

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateRows: "3rem 1fr",
        minHeight: "100vh",
        width: "100%",
        padding: "4",
        bg: "bg",
        gap: "2",
      })}
    >
      <Nav />
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "1fr token(sizes.80)",
        })}
      >
        {children}
      </div>
    </div>
  );
}
