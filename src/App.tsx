import type { Component } from "solid-js";
import Google from "./assets/google.ico";
import Baidu from "./assets/baidu.ico";
import Card from "./components/Card";

const App: Component = () => {
  const sites = [
    {
      name: "Google",
      url: "https://www.google.com",
      logo: Google,
    },
    {
      name: "Baidu",
      url: "https://www.baidu.com",
      logo: Baidu,
    },
  ];

  return (
    <div class="flex gap-4 p-4">
      {sites.map((site) => (
        <Card name={site.name} url={site.url} logo={site.logo} />
      ))}
    </div>
  );
};

export default App;
