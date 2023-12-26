import { component$, useStore, $, type QRL } from "@builder.io/qwik";

type ListWithPush = { list: Array<string>; push: QRL<(this: ListWithPush) => void> };

export const Store = component$(() => {
  const store = useStore({ count: 0 });
  const nestedStore = useStore({ nest: { count: 0 } });
  const listStore = useStore({ list: ["list0", "list1"] });
  const listWithMethod = useStore({
    list: [],
    push: $(function (this: ListWithPush) {
      return this.list.push("test");
    }),
  });
  const first = $(() => console.log("first"));
  const second = $(() => console.log("second"));
  const third = $(() => console.log("third"));
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
      <button onClick$={() => listWithMethod.push()}>push?</button>
      <ul>
        {listWithMethod.list.map((i, k) => (
          <li key={k}>{i}</li>
        ))}
      </ul>
      <button onClick$={first}>test1</button>
      <button onClick$={[first, second, third, $(() => console.log("add!"))]}>test2</button>
    </>
  );
});
