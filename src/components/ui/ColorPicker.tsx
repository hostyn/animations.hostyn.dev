import { css } from "@styled-system/css";

interface ColorPickerProps {
  value: string;
  style?: React.CSSProperties;
  onChange: (value: string) => void;
}

export default function ColorPicker({
  value,
  style,
  onChange,
}: ColorPickerProps) {
  return (
    <label
      style={style}
      className={css({
        color: "black",
        fontWeight: 600,
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "0.5rem",
        lineHeight: "100%",
        borderRadius: "md",

        _focusWithin: {
          outline: "2px solid token(colors.text)",
          outlineOffset: "1px",
        },
      })}
    >
      {value}
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={css({
          position: "absolute",
          height: "0",
          opacity: "0",
        })}
      />
    </label>
  );
}
