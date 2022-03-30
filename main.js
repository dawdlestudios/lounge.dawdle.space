import { html, render } from "./lib/index.js";
import App from "./components/app.js";

// import butterchurn from 'butterchurn';
// import butterchurnPresets from 'butterchurn-presets';

// const visualizer = butterchurn.createVisualizer(audioContext, canvas, {
//     width: 800,
//     height: 600
//   });
  

render(html`<${App}/>`, document.querySelector("#irc"));
