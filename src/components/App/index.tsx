import { css } from "@styled-system/css";
import Nav from "./Nav";
import { Inter } from "next/font/google";
import PropertyElement from "@components/PropertyElement";
import Input from "@components/ui/Input";
import Slider from "@components/ui/Slider";
import ColorPicker from "@components/ui/ColorPicker";
import { Button } from "@components/ui/Button";

const inter = Inter({
  subsets: ["latin"],
});

interface TextInputProps {
  type: "text";
  name: string;
  label: string;
  default: string;
}

interface SliderProps {
  type: "slider";
  name: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  default: number;
}

interface ColorPickerProps {
  type: "color";
  name: string;
  label: string;
  default: string;
}

export type PropertyType = TextInputProps | SliderProps | ColorPickerProps;

interface AppProps {
  children: React.ReactNode;
  properties: PropertyType[];
  state: Record<string, any>;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

export default function App({
  children,
  properties,
  state,
  setState,
}: AppProps) {
  return (
    <div
      className={`${inter.className} ${css({
        display: "grid",
        gridTemplateRows: "3rem 1fr",
        minHeight: "100vh",
        width: "100%",
        padding: "4",
        bg: "bg",
        gap: "2",
      })}`}
    >
      <Nav />
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "token(sizes.72) 1fr 32rem",
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
          {properties.map((property) => (
            <PropertyElement key={property.name} name={property.label}>
              {property.type === "text" && (
                <Input
                  value={state[property.name]}
                  onChange={(e) => {
                    setState((state: Record<string, any>) => ({
                      ...state,
                      [property.name]: e.target.value,
                    }));
                  }}
                />
              )}

              {property.type === "slider" && (
                <Slider
                  min={property.min}
                  max={property.max}
                  step={property.step}
                  value={state[property.name]}
                  onChange={(value) => {
                    setState((state: Record<string, any>) => ({
                      ...state,
                      [property.name]: value,
                    }));
                  }}
                />
              )}

              {property.type === "color" && (
                <ColorPicker
                  style={{ background: state[property.name] }}
                  value={state[property.name]}
                  onChange={(value) => {
                    setState((state: Record<string, any>) => ({
                      ...state,
                      [property.name]: value,
                    }));
                  }}
                />
              )}
            </PropertyElement>
          ))}
          <Button visual="error">Reset</Button>
        </div>
        {children}
      </div>
    </div>
  );
}
