var React = require("react");
var ReactDom = require("react-dom");

// ReactDom.render(WHAT TO SHOW, WHERE TO SHOW)
ReactDom.render(
  <div>
    <h1>Hello</h1>
    <p>How's the weather?</p>
    <ul>
      <li>Sunny</li>
      {/* li是用来加一个点的 */}
      <li>Rainy</li>
      <li>Snowy</li>
    </ul>
  </div>,
  document.getElementById("root")
);
