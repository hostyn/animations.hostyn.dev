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
  const colorValue =
    parseInt(value.replaceAll("#", "").slice(0, 2), 16) +
    parseInt(value.replaceAll("#", "").slice(2, 4), 16) +
    parseInt(value.replaceAll("#", "").slice(4, 6), 16);

  console.log(colorValue);

  return (
    <label
      style={style}
      className={css({
        color: colorValue > 382 ? "black" : "white",
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
