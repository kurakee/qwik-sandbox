import type { Signal } from "@builder.io/qwik";
import { component$, createContextId, useContext, useContextProvider, useSignal, useStore } from "@builder.io/qwik";

export const StoreContext = createContextId<{ count: number }>("context.sameId");
export const SignalContext = createContextId<Signal<string>>("context.sameId");

export default component$(() => {
  const storeData = useStore({ count: 0 });
  const signalData = useSignal("TEST");

  useContextProvider(StoreContext, storeData);
  useContextProvider(SignalContext, signalData);

  return <Child />;
});

export const Child = component$(() => {
  console.log(StoreContext); // { id: 'context.same-id' }
  console.log(SignalContext); // { id: 'context.same-id' }
  const store = useContext(StoreContext);
  const signal = useContext(SignalContext);
  return (
    <>
      <button onClick$={() => store.count++}>Increment</button>
      {/* Count:  */}
      <p>Count: {store.count}</p>
      {/* Signal: TEST */}
      <p>Signal: {signal}</p>
    </>
  );
});
