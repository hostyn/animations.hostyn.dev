import * as RadixSlider from "@radix-ui/react-slider";
import { css } from "@styled-system/css";

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

export default function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}: SliderProps) {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "auto 3rem",
        alignItems: "center",
        gap: "1rem",
        width: "100%",
      })}
    >
      <RadixSlider.Root
        className={css({
          position: "relative",
          display: "flex",
          alignItems: "center",
          userSelect: "none",
          touchAction: "none",
        })}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([value]) => onChange(value)}
      >
        <RadixSlider.Track
          className={css({
            backgroundColor: "#111",
            position: "relative",
            flexGrow: 1,
            borderRadius: "9999px",
            height: "3px",
          })}
        >
          <RadixSlider.Range
            className={css({
              position: "absolute",
              backgroundColor: "white",
              borderRadius: "9999px",
              height: "100%",
            })}
          />
        </RadixSlider.Track>
        <RadixSlider.Thumb
          className={css({
            display: "block",
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            boxShadow: "0 2px 10px #333",
            borderRadius: "10px",
            transition: "box-shadow 0.2s ease",

            _hover: {
              boxShadow: "0 0px 15px token(colors.text)",
            },
          })}
          aria-label="Volume"
        />
      </RadixSlider.Root>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          if (isNaN(e.target.valueAsNumber)) return;
          onChange(e.target.valueAsNumber);
        }}
        className={css({
          width: "100%",
          color: "text",
          bg: "menu",
          padding: "5px",
          borderRadius: "sm",
          textAlign: "center",
          fontSize: "md",
          fontWeight: 600,
          transition: "background-color 0.2s ease",

          _focus: {
            bg: "bg",
            outline: "token(colors.text) solid 2px",
            outlineOffset: "2px",
          },

          _hover: {
            bg: "bg",
          },

          "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
          },
        })}
      />
    </div>
  );
}
