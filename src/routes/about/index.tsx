import { component$, useStore } from "@builder.io/qwik";
import { Button } from "~/components/Button/Button";
import { Signal } from "~/components/Signal";
import { Store } from "~/components/Store";

export default component$(() => {
  const counter = useStore({ count: 0 });
  return (
    <div>
      <div>
        <Button counter={counter} />
      </div>
      <div>
        <Signal />
      </div>
      <div>
        <Store />
      </div>
    </div>
  );
});
