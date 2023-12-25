import { component$ } from "@builder.io/qwik";

export interface ButtonProps {
  counter: { count: number };
}

export const Button = component$<ButtonProps>(({ counter }) => {
  return <button onClick$={() => counter.count++}>Button: {counter.count}</button>;
});
