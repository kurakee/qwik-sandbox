import { component$, useComputed$, useSignal } from "@builder.io/qwik";

export const Computed = component$(() => {
  const input = useSignal("TEST");
  const computed = useComputed$(() => {
    return input.value.split("").join(" ");
  });
  return (
    <>
      <input type="text" bind:value={input} />
      <p>Input: {input.value}</p>
      <p>Computed: {computed}</p>
    </>
  );
});
