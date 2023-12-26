import type { PropFunction } from "@builder.io/qwik";
import { Slot, component$, useSignal } from "@builder.io/qwik";

export default component$(() => <Button evenEvent$={() => console.log("Something")}>CLICK!</Button>);

type ButtonProps = { evenEvent$: PropFunction<() => void> };

export const Button = component$<ButtonProps>(({ evenEvent$ }) => {
  const state = useSignal(0);
  return (
    <button
      onClick$={() => {
        state.value++;
        if (state.value % 2 === 0) evenEvent$();
      }}
    >
      <Slot />
    </button>
  );
});
