import { PropertyType } from "@components/App";

export default function getDefaultValues(properties: PropertyType[]) {
  return properties.reduce((result: { [key: string]: any }, item) => {
    result[item.name] = item.default;
    return result;
  }, {});
}
