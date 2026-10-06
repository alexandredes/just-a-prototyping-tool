import type { ComponentType } from "react";
import ExampleSignup from "./example-signup/ExampleSignup";
import SpinningPizza from "./spinning-pizza/SpinningPizza";

export type Prototype = {
  /** URL segment: the prototype lives at /#/p/<slug> */
  slug: string;
  title: string;
  description: string;
  /** YYYY-MM-DD */
  added: string;
  Component: ComponentType;
};

// Every prototype MUST be registered here — this list drives the root index and the routes.
// Newest first.
export const prototypes: Prototype[] = [
  {
    slug: "spinning-pizza",
    title: "Spin a pizza",
    description: "Tests a playful button interaction where a lo-fi pizza orbits in a circle.",
    added: "2026-10-06",
    Component: SpinningPizza,
  },
  {
    slug: "example-signup",
    title: "Example: sign-up flow",
    description: "Two-step sign-up wireframe showing the lo-fi primitives.",
    added: "2026-10-06",
    Component: ExampleSignup,
  },
];
