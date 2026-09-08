export type AueType =
  | "text"
  | "richtext"
  | "media"
  | "container"
  | "component"
  | "reference";

export interface AuePropsInput {
  resource?: string;
  prop?: string;
  type: AueType;
  label?: string;
  filter?: string;
  model?: string;
}

export function aueProps(input: AuePropsInput): Record<string, string> {
  const result: Record<string, string> = {
    "data-aue-type": input.type,
  };

  if (input.resource) result["data-aue-resource"] = input.resource;
  if (input.prop) result["data-aue-prop"] = input.prop;
  if (input.label) result["data-aue-label"] = input.label;
  if (input.filter) result["data-aue-filter"] = input.filter;
  if (input.model) result["data-aue-model"] = input.model;

  return result;
}
