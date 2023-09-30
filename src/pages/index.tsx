import Head from "next/head";
import { css } from "@styled-system/css";
import { useState } from "react";
import { SystemStyleObject } from "@pandacss/dev";
import Slider from "@components/ui/Slider";
import App from "@components/App";
import Input from "@components/ui/Input";

export default function Home() {
  const [state, setState] = useState({
    content: "Hola",
    translate: 50,
    shadowSize: 8,
    blur: 30,
    fontColor: "#dcdcdc",
  });

  return (
    <>
      <Head>
        <title>Hostyn&rsquo;s animation collection</title>
        <meta name="description" content="A collection of CSS animations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "token(sizes.72) 1fr",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <div
            className={css({
              borderRadius: "lg",
              bg: "menu",
              height: "100%",
              padding: "4",
              display: "flex",
              flexDir: "column",
              gap: "4",
            })}
          >
            <Input
              value={state.content}
              onChange={(e) =>
                setState((state) => ({ ...state, content: e.target.value }))
              }
            />

            <input
              type="number"
              value={state.shadowSize}
              onChange={(e) =>
                setState((state) => ({
                  ...state,
                  shadowSize: Number.isNaN(e.target.valueAsNumber)
                    ? 0
                    : e.target.valueAsNumber,
                }))
              }
            />
            <input
              type="number"
              value={state.blur}
              onChange={(e) =>
                setState((state) => ({
                  ...state,
                  blur: Number.isNaN(e.target.valueAsNumber)
                    ? 0
                    : e.target.valueAsNumber,
                }))
              }
            />
            <input
              type="color"
              value={state.fontColor}
              onChange={(e) =>
                setState((state) => ({ ...state, fontColor: e.target.value }))
              }
            />
            <div
              className={css({
                display: "flex",
                gap: "2rem",
              })}
            >
              <Slider
                value={state.translate}
                onChange={([value]) =>
                  setState((state) => ({ ...state, translate: value }))
                }
              />
              <input
                className={css({
                  width: "5rem",
                })}
                type="number"
                value={state.translate}
                onChange={(e) =>
                  setState((state) => ({
                    ...state,
                    translate: e.target.valueAsNumber,
                  }))
                }
              />
            </div>
          </div>
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            })}
          >
            <div
              style={
                {
                  "--popup-font-color": state.fontColor,
                  "--popup-translate": `-${state.translate}px`,
                  "--popup-blur": `${state.blur}px`,
                  "--popup-text-shadow":
                    state.shadowSize > 0
                      ? [...Array(state.shadowSize)]
                          .map(
                            (value, index) =>
                              `0 ${index + 1}px 0 rgb(150, 150, 150)`
                          )
                          .join(", ")
                      : "0 0 0 #000",
                } as any
              }
              className={css({
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                "&:hover h1": hoverStyles,
              })}
            >
              <h1
                className={css({
                  fontSize: "6rem",
                  fontWeight: "bold",
                  color: "var(--popup-font-color)",
                  lineHeight: "100%",

                  transition:
                    "all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                  _hover: hoverStyles,
                })}
              >
                {state.content}
              </h1>
            </div>
          </div>
        </div>
      </App>
    </>
  );
}

const hoverStyles: SystemStyleObject = {
  transform: "translateY(var(--popup-translate))",
  textShadow:
    "0 calc(var(--popup-translate) * -1) var(--popup-blur) rgba(150, 150, 150, 0.3), var(--popup-text-shadow)",
};
