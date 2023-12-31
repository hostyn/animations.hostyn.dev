import Head from "next/head";
import { css } from "@styled-system/css";
import { useState } from "react";
import { SystemStyleObject } from "@pandacss/dev";
import Slider from "@components/ui/Slider";
import App from "@components/App";
import Input from "@components/ui/Input";
import ConfigElement from "@components/ConfigElement";
import ColorPicker from "@components/ui/ColorPicker";
import { Button } from "@components/ui/Button";

const defaultValues = {
  content: "Popup",
  translate: 50,
  textShadowSize: 8,
  blurRadius: 30,
  fontColor: "#dcdcdc",
  shadowColor: "#969696",
  blurColor: "#969696",
};

export default function Home() {
  const [state, setState] = useState(defaultValues);

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
          style={
            {
              "--popup-font-color": state.fontColor,
              "--popup-blur-color": state.blurColor,
              "--popup-shadow-color": state.shadowColor,
              "--popup-translate": `-${state.translate}px`,
              "--popup-blur-radius": `${state.blurRadius}px`,
              "--popup-text-shadow-size":
                state.textShadowSize > 0
                  ? [...Array(state.textShadowSize)]
                      .map(
                        (_, index) =>
                          `0 ${index + 1}px 0 var(--popup-shadow-color)`
                      )
                      .join(", ")
                  : "0 0 0 #000",
            } as any
          }
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
            <ConfigElement name="Content">
              <Input
                value={state.content}
                onChange={(e) =>
                  setState((state) => ({ ...state, content: e.target.value }))
                }
              />
            </ConfigElement>

            <ConfigElement name="Translation">
              <Slider
                value={state.translate}
                onChange={(value) =>
                  setState((state) => ({ ...state, translate: value }))
                }
              />
            </ConfigElement>

            <ConfigElement name="Shadow Size">
              <Slider
                value={state.textShadowSize}
                max={15}
                onChange={(value) =>
                  setState((state) => ({ ...state, textShadowSize: value }))
                }
              />
            </ConfigElement>

            <ConfigElement name="Blur Radius">
              <Slider
                value={state.blurRadius}
                onChange={(value) =>
                  setState((state) => ({ ...state, blurRadius: value }))
                }
              />
            </ConfigElement>

            <ConfigElement name="Text Color">
              <ColorPicker
                style={{ background: "var(--popup-font-color)" }}
                value={state.fontColor}
                onChange={(value) =>
                  setState((state) => ({ ...state, fontColor: value }))
                }
              />
            </ConfigElement>

            <ConfigElement name="Shadow Color">
              <ColorPicker
                style={{ background: "var(--popup-shadow-color)" }}
                value={state.shadowColor}
                onChange={(value) =>
                  setState((state) => ({ ...state, shadowColor: value }))
                }
              />
            </ConfigElement>

            <ConfigElement name="Blur Color">
              <ColorPicker
                style={{ background: "var(--popup-blur-color)" }}
                value={state.blurColor}
                onChange={(value) =>
                  setState((state) => ({ ...state, blurColor: value }))
                }
              />
            </ConfigElement>

            <Button visual="error" onClick={() => setState(defaultValues)}>
              Reset
            </Button>
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
    "0 calc(var(--popup-translate) * -1) var(--popup-blur-radius) var(--popup-blur-color), var(--popup-text-shadow-size)",
};
