import { Resource, component$, useResource$ } from "@builder.io/qwik";

interface YesNo {
  answer: string;
  forced: boolean;
  image: string;
}

export const Resources = component$(() => {
  const yesOrNo = useResource$<YesNo>(async () => {
    const response = await fetch("https://yesno.wtf/api");
    const result = await response.json();
    return result;
  });
  return (
    <>
      <Resource
        value={yesOrNo}
        onPending={() => <>Loading</>}
        onRejected={() => <>Error</>}
        onResolved={(yesOrNo: YesNo) => <>Result: {yesOrNo.answer}</>}
      ></Resource>
    </>
  );
});
