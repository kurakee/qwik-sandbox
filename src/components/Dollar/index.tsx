import { component$, $ } from "@builder.io/qwik";

export default component$(() => {
  const first = $(async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("first");
  });
  const second = $(() => console.log("second"));
  const third = $(() => console.log("third"));
  return (
    <>
      <button onClick$={$(() => console.log("inline"))}>test0</button>
      <button onClick$={first}>test1</button>
      {/* first */}
      <button onClick$={[first, second, third, $(() => console.log("additional!"))]}>test2</button>
      {/* first */}
      {/* second */}
      {/* third */}
      {/* additional! */}
      {/* 順番通り実行される */}
    </>
  );
});
