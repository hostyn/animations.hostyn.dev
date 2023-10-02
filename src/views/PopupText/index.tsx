import App, { CodeType, PropertyType } from "@components/App";
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

  const code: CodeType[] = [
    {
      language: "css",
      fileName: "styles.css",
      code: `.popup-container {
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
    }`,
    },
  ];

  return (
    <App state={state} setState={setState} properties={properties} code={code}>
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
    </App>
  );
}

const hoverStyles: SystemStyleObject = {
  transform: "translateY(var(--popup-translate))",
  textShadow:
    "0 calc(var(--popup-translate) * -1) var(--popup-blur-radius) var(--popup-blur-color), var(--popup-text-shadow-size)",
};
