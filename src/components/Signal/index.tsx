import { component$, useSignal } from "@builder.io/qwik";

export const Signal = component$(() => {
  const signal = useSignal(0);
  return <button onClick$={() => signal.value++}>signal count: {signal}</button>;
});
