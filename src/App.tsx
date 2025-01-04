import type { Component } from "solid-js";
import Google from "./assets/google.ico";
import Baidu from "./assets/baidu.ico";
import GitHub from "./assets/github.ico";
import Card from "./components/Card";

const ByteDance =
  "data:image/vnd.microsoft.icon;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAACFlBMVEUAAACp3f8yW7U8jf8zW7U/3vJA5P8AydMzW7VPlP955908jP8AydM8jf8yWrV5590yWrV45908jf8yW7UyW7UyW7V55909jf88jf8yW7UzW7V56N49jf80XLY+j/80XbY/lf8zZr5Ilf9GXbkA2+RCY70zZsx459x5590AydI8jP8AydN4590AydM8jf8AydM8jf88jf94590AyNM8jf8AydN5590AydM8jf8AyNIAytR5594zW7V56N09jf955948jf8AydMAytN65948jf956N56594AytMAy9Q9jv976d8AytYAy9Z66N566uE/jv8AztUAy9cAytV56OSD798A0NYAydM8jP95590yW7R45twAydN45909jP8yWrU8jf945t0AydIyWrV5590AydIyW7UzWrU8jf8AydIzW7UzWrV459145908jf8yW7UAydM8jP8AydM8jf9459155909jf8zW7UAydQAytMAydN56N0AydMzXLYAydM0W7UAydQ8jv8+jv8Ay9QzW7Y9jf965t176N80W7YAydN56N156d4yW7U0XLc+jv8+kP8Ay9VAj/81XbgAzNQ1XbY5XbZAkf9+7eQ7Yrp96+FDlv+F6emI/+4AydN55t15594AydM+jf8+jf8+jv8AydQ1W7QzW7UAydR75942XbUyWrR86OCA8uYAztqA8eN45twyWrQAyNI8jP8bed+KAAAArnRSTlMAAfb9+wUD8HMJ/fr59+jb1dTLt6eamY+Jg3xXTkhHOhIRDQsJBwX59vbr4+Dc1tXRxcC7ubSqoJuak5CKiIN+enlyb21lXVFEQj09NzAnJiQdGBUPDvzx8O/s6Obl397OzsvIyMXEwcG/vbiysbGuqqeknZSTkI2Gf3ZraGViX15YWFVTUk9OS0pEQUA8MzAtLSomHx4bGhkXCwfApKCAdGdjXlxaWTY0MyEUFBKNTPVmAAAFHElEQVR42uzX105UYRSG4YUyiCgqKvbeK3ZFsaCCXUHE3kvU2FvU2EussfcSY2KiiSUDc4fuTcl/xr8/ZuZk7/e9g/UcfcuIiIiIiIiIiIiIiMhf7wFDPxlFKx1UdunBX6NoWGEHqp40GnmwXCWHlzz9YuTBck2cvWzdVyMPlmtSAJYy8mE5sJPXNhYYebBcO06tBMyP5do1v3aTkcPytedb7R8jh+Vr2sVVHyzxpaMXfEZbLNGltcqqHjba8LGWzNJyJdZUeHTws/GWvNJ61hTW5cSQkRMsWXUWqxWsX/HvJC2xTmK5dp4pfp0UsCywXL3633hrCShrLAd2653FvBxgufaV//xoMS5HWK4+5fdHW0zLJZYDu/wolmC5xXIVHlocv6GfcyxX/IZ+HrHiN/TziuWGvsWiLLCULBaBBVZLYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYAmBJQSWEFhCYOW1erCitfn2gqnNYPlruLdwenMQWJ7+rV40I3QCy9PWx1cOhkZgeRq35uqRbYEPWD6o9d+P9wxxwOq41IblcyaHMGB1XNHLFfO6hShgeXpz/WwLFFie6m+e3x1igBVlmgeB5anhV+s0B8tX2zQHK0rB8WCBZQYWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIGVZKyKgcNGmYEVCSuTyXTtO2jEGLCiYYX1mLV0bXewfFiu0mPVz1NgebEc2NzqF0Vg+bBc20/XvCoAy4flmnKupg4sL5Zr74UfdWB5sVz7K++8B8theauovPsZLIflbWYw9MGKiNU+9MGKlBv6YEWvFCwhsMACCyywwAILLLDAAgsssMACCyywwAILLLDAAgsssMACCyywwAILLLDAAgsssMACCyywwAILLLDAAgsssMACCyywwAILLLDAAgsssMD6325d7cQVhWEY/ocWn9JSoO5GhTqlSo2Wurt72qbu3lRwgruEQCCBE+6RHQ7YR7DWP8OeWSHvewnPwZcPLLDAAgsssMACCyywwAILLLDAAgsssMACCyywwAILLLCmGtbhHclg+Vimkk4f2r4OLLEu8dS3Z2Gw7Ft1/OvjMFj2Xan48uAqWAqwY3s2g6Xo4r/dG8FSdKF/5wawFJ3/9e4WWIoaf7xJBsu+UJ139MHyszr6YKmOfncYLM3RB0sRWGDZBBZYYIEFFlhggQUWWGBFgpWQBZYd1PMFS9cIWMamP5lfvVq8wDJAPdy3eKV4gWVo1ufy5eIFlhigcv6PQoFlwLqbM9AmXmAZsDKyfzeLX6BY6U/FJjexMrJ/NolfoFjTZs9bkipWuYd143VKQ0iiyh5qy9xFK8Q6t7ASslKGfKiAsTZ9KlkmqtzB8q95DLDu7frbIXEvIiz/mscC6877Py3iRJFg+dc8cKz1b/vOiTPprdJk0hsH6tWRenEqpVTmx9JhkeCxruX31obEtRRQM+csvCTq9Fgz8g/WJImLWULl9RS3ijo9VvrW/SdSxdUsoG4XHD0rgRb3az45WDcLitRQ+uJ+zaPHuv6y6ExsRjbu1zw6rLUvvg+6ObKqgsfK3XbgZKKQESv3UWFVl5ARK+1+YWWnkBkrc2/ZZaGJG7vmZC7vQ3G7EBERERERERERERER0dRtBK5Q857p1uutAAAAAElFTkSuQmCC";

const App: Component = () => {
  const sites = [
    {
      name: "Baidu",
      url: "https://www.baidu.com",
      logo: Baidu,
    },
    {
      name: "ByteDance",
      url: "https://www.douyin.com",
      logo: ByteDance,
    },
    {
      name: "GitHub",
      url: "https://github.com",
      logo: GitHub,
    },
    {
      name: "Google",
      url: "https://www.google.com",
      logo: Google,
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
