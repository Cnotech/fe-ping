import { createMemo, createSignal, type Component } from "solid-js";

interface Props {
  name: string;
  url: string;
  logo: string;
}

const Card: Component<Props> = (props) => {
  const [status, setStatus] = createSignal<
    "none" | "running" | "success" | "error"
  >("none");
  const [ping, setPing] = createSignal(0);
  const displayStatus = createMemo(() => {
    switch (status()) {
      case "running":
        return "Running...";
      case "success":
        return `${ping().toFixed(2)}ms`;
      case "error":
        return "Error!";
      default:
        return "点击测速";
    }
  });
  const displayColor = createMemo(() => {
    if (status() === "success") {
      if (ping() < 200) {
        return "text-green-500";
      }
      if (ping() < 1000) {
        return "text-yellow-500";
      }
      return "text-red-500";
    }
    switch (status()) {
      case "running":
        return "text-blue-500";
      case "error":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  });

  async function onClick() {
    const abortController = new AbortController();
    setTimeout(() => {
      abortController.abort();
    }, 5000);
    try {
      const start = performance.now();
      setStatus("running");
      await fetch(props.url, {
        mode: "no-cors",
        signal: abortController.signal,
      });
      setPing(performance.now() - start);
      setStatus("success");
    } catch (e) {
      setStatus("error");
      return;
    }
  }

  return (
    <div
      class="flex items-center justify-around w-[200px] p-4 border border-gray-200 rounded-lg shadow-sm cursor-pointer"
      onClick={onClick}
      onKeyUp={onClick}
    >
      <img class="w-8 h-8" src={props.logo} alt={props.name} />
      <div class="flex flex-col items-center">
        <div class="font-bold">{props.name}</div>
        <div class={displayColor()}>{displayStatus()}</div>
      </div>
    </div>
  );
};

export default Card;
