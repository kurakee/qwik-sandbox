import { component$, useOnDocument, useStore, $ } from "@builder.io/qwik";
import { Button } from "~/components/Button/Button";
import { Computed } from "~/components/Computed";
import Context from "~/components/Context";
import { Resources } from "~/components/Resources";
import { Signal } from "~/components/Signal";
import { Store } from "~/components/Store";

export default component$(() => {
  const counter = useStore({ count: 0 });
  const position = useStore({ x: 0, y: 0 });
  useOnDocument(
    "mousemove",
    $((event: MouseEvent) => {
      const { x, y } = event as MouseEvent;
      position.x = x;
      position.y = y;
    })
  );
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
      <div>
        <Computed />
      </div>
      <div>
        <Resources />
      </div>
      <div>
        <Context />
      </div>
      <div>
        <button onClick$={() => console.log("click")}>Click</button>
        <button onDblClick$={() => console.log("double click")}>Click</button>
        <input
          type="text"
          onKeyDown$={() => console.log("key down")}
          onKeyPress$={() => console.log("key press")}
          onKeyUp$={() => console.log("key up")}
          onBlur$={() => console.log("on blur")}
        />
        <div onClick$={(event, target) => console.log(event, target)}>TEST</div>
        <a href="/" preventdefault:click>
          link
        </a>
      </div>
      <div>
        {position.x} / {position.y}
      </div>
    </div>
  );
});
