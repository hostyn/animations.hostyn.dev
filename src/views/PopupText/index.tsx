import App, { PropertyType } from "@components/App";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { css } from "@styled-system/css";
import { useState } from "react";
import { SystemStyleObject } from "@styled-system/types";
import getDefaultValues from "@utils/getDefaultValues";

const properties: PropertyType[] = [
  {
    type: "text",
    label: "Content",
    name: "content",
    default: "Popup Text",
  },
  {
    type: "slider",
    label: "Translation",
    name: "translate",
    default: 50,
    max: 100,
  },
  {
    type: "slider",
    label: "Shadow Size",
    name: "textShadowSize",
    default: 8,
    max: 15,
  },
  {
    type: "slider",
    label: "Blur Radius",
    name: "blurRadius",
    default: 30,
    max: 75,
  },
  {
    type: "color",
    label: "Text Color",
    name: "fontColor",
    default: "#dcdcdc",
  },
  {
    type: "color",
    label: "Shadow Color",
    name: "shadowColor",
    default: "#969696",
  },
  {
    type: "color",
    label: "Blur Color",
    name: "blurColor",
    default: "#969696",
  },
];

export default function PopupText() {
  const [state, setState] = useState(getDefaultValues(properties));

  const code = `.popup-container {
  display: flex;
}
  
.popup-text {
  font-family: monospace;
  fontSize: 6rem;
  fontWeight: bold;
  color: ${state.fontColor};
  lineHeight: 100%;
  transition: all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

.popup-text:hover, .popup-container:hover .popup-text {
  transform: translateY(${state.translate}px);
  textShadow: 0 ${state.translate * -1}px ${state.blurRadius}px ${
    state.blurColor
  }${
    state.textShadowSize > 0
      ? `, ${[...Array(state.textShadowSize)]
          .map((_, index) => `0 ${index + 1}px 0 ${state.shadowColor}`)
          .join(", ")}`
      : ""
  }};
}`;

  return (
    <App state={state} setState={setState} properties={properties}>
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

            "&:hover span": hoverStyles,
          })}
        >
          <span
            className={css({
              fontSize: "6rem",
              fontWeight: "bold",
              color: "var(--popup-font-color)",
              lineHeight: "100%",

              transition: "all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              _hover: hoverStyles,
            })}
          >
            {state.content}
          </span>
        </div>
      </div>
      <div
        className={css({
          "& pre::-webkit-scrollbar": {
            height: "10px",
          },

          "& pre::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "& pre::-webkit-scrollbar-thumb": {
            background: "#282a36",
            borderRadius: "3px",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDir: "column",
            bg: "menu",
            padding: "1rem",
            gap: "1rem",
            borderRadius: "lg",
          })}
        >
          <div
            className={css({
              display: "flex",
              gap: "2",
            })}
          >
            <button
              className={css({
                color: "text",
                bg: "bg",
                padding: "2",
                borderRadius: "md",
                transition: "all 0.2s ease-in-out",

                _hover: {
                  bg: "hover",
                },
              })}
            >
              index.html
            </button>
            <button
              className={css({
                color: "text",
                padding: "2",
                borderRadius: "md",
                transition: "all 0.2s ease-in-out",

                _hover: {
                  bg: "hover",
                },
              })}
            >
              styles.css
            </button>
          </div>
          <SyntaxHighlighter
            style={{
              'code[class*="language-"]': {
                color: "#f8f8f2",
                background: "none",
                textShadow: "0 1px rgba(0, 0, 0, 0.3)",
                fontFamily:
                  "'Ubuntu Mono', Consolas, Monaco, 'Andale Mono', monospace",
                textAlign: "left",
                whiteSpace: "pre",
                wordSpacing: "normal",
                wordBreak: "normal",
                wordWrap: "normal",
                lineHeight: "1.5",
                MozTabSize: "4",
                OTabSize: "4",
                tabSize: "4",
                WebkitHyphens: "none",
                MozHyphens: "none",
                msHyphens: "none",
                hyphens: "none",
              },
              'pre[class*="language-"]': {
                color: "#f8f8f2",
                background: "#1C1C1C",
                textShadow: "0 1px rgba(0, 0, 0, 0.3)",
                fontFamily:
                  "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                textAlign: "left",
                whiteSpace: "pre",
                wordSpacing: "normal",
                wordBreak: "normal",
                wordWrap: "normal",
                lineHeight: "1.5",
                MozTabSize: "4",
                OTabSize: "4",
                tabSize: "4",
                WebkitHyphens: "none",
                MozHyphens: "none",
                msHyphens: "none",
                hyphens: "none",
                overflow: "auto",
                borderRadius: "0.3em",
              },
              ':not(pre) > code[class*="language-"]': {
                background: "#1C1C1C",
                padding: ".1em",
                borderRadius: ".3em",
                whiteSpace: "normal",
              },
              comment: {
                color: "#6272a4",
              },
              prolog: {
                color: "#6272a4",
              },
              doctype: {
                color: "#6272a4",
              },
              cdata: {
                color: "#6272a4",
              },
              punctuation: {
                color: "#f8f8f2",
              },
              ".namespace": {
                opacity: ".7",
              },
              property: {
                color: "#ff79c6",
              },
              tag: {
                color: "#ff79c6",
              },
              constant: {
                color: "#ff79c6",
              },
              symbol: {
                color: "#ff79c6",
              },
              deleted: {
                color: "#ff79c6",
              },
              boolean: {
                color: "#bd93f9",
              },
              number: {
                color: "#bd93f9",
              },
              selector: {
                color: "#50fa7b",
              },
              "attr-name": {
                color: "#50fa7b",
              },
              string: {
                color: "#50fa7b",
              },
              char: {
                color: "#50fa7b",
              },
              builtin: {
                color: "#50fa7b",
              },
              inserted: {
                color: "#50fa7b",
              },
              operator: {
                color: "#f8f8f2",
              },
              entity: {
                color: "#f8f8f2",
                cursor: "help",
              },
              url: {
                color: "#f8f8f2",
              },
              ".language-css .token.string": {
                color: "#f8f8f2",
              },
              ".style .token.string": {
                color: "#f8f8f2",
              },
              variable: {
                color: "#f8f8f2",
              },
              atrule: {
                color: "#f1fa8c",
              },
              "attr-value": {
                color: "#f1fa8c",
              },
              function: {
                color: "#f1fa8c",
              },
              "class-name": {
                color: "#f1fa8c",
              },
              keyword: {
                color: "#8be9fd",
              },
              regex: {
                color: "#ffb86c",
              },
              important: {
                color: "#ffb86c",
                fontWeight: "bold",
              },
              bold: {
                fontWeight: "bold",
              },
              italic: {
                fontStyle: "italic",
              },
            }}
            language="css"
            showLineNumbers
            lineNumberStyle={{ minWidth: "2.5rem" }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </App>
  );
}

const hoverStyles: SystemStyleObject = {
  transform: "translateY(var(--popup-translate))",
  textShadow:
    "0 calc(var(--popup-translate) * -1) var(--popup-blur-radius) var(--popup-blur-color), var(--popup-text-shadow-size)",
};
