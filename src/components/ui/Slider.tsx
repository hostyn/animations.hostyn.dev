import * as RadixSlider from "@radix-ui/react-slider";
import { css } from "@styled-system/css";

interface SliderProps {
  value: number;
  onChange: (value: number[]) => void;
}

export default function Slider({ value, onChange }: SliderProps) {
  return (
    <RadixSlider.Root
      className={css({
        position: "relative",
        display: "flex",
        alignItems: "center",
        userSelect: "none",
        touchAction: "none",
        width: "200px",
        height: "20px",
      })}
      max={100}
      step={1}
      value={[value]}
      onValueChange={onChange}
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
        })}
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
}
