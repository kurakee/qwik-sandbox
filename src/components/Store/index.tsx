import { component$, useStore } from "@builder.io/qwik";

export const Store = component$(() => {
  const store = useStore({ count: 0 });
  const nestedStore = useStore({ nest: { count: 0 } });
  const listStore = useStore({ list: ["list0", "list1"] });
  return (
    <>
      <button onClick$={() => store.count++}>store count: {store.count}</button>
      <button onClick$={() => nestedStore.nest.count++}>nested store count: {nestedStore.nest.count}</button>
      <button onClick$={() => listStore.list.push(`list${listStore.list.length}`)}>push!</button>
      <ul>
        {listStore.list.map((i, k) => (
          <li key={k}>{i}</li>
        ))}
      </ul>
    </>
  );
});
