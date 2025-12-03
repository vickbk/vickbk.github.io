import { descElement, main } from "./elements.mjs";
import { default as routes } from "./routes.json" with { type: "json" };

export const locationHandler = () => {
  const { pathname } = window.location;
  const route = routes[pathname || "/"] || routes[404];
  fetch(route.template)
    .then((response) => response.text())
    .then((content) => setContent(content, route))
    .catch((e) => console.log("an error occured", e));
};

export const setContent = (content, { title, description }) => {
  if (!main) return;
    main.innerHTML = content;
  document.title = title;
  descElement?.setAttribute("content", description);
};
