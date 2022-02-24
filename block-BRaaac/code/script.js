function createElm(tag, attr = {}, ...children) {
  const elm = document.createElement(tag);
  for (attrName in attr) {
    if (attrName.startsWith("data-")) {
      elm.setAttribute(attrName, attr[attrName]);
    } else {
      elm[attrName] = attr[attrName];
    }
  }
  console.log(children);
  children.forEach(function (child) {
      console.log(child);
    if (typeof child === "object") {
      elm.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      elm.append(node);
    }
  });
  return elm;
}

console.log(
  createElm(
    "p",
    { className: "test", "data-id": "custom attri", id: "test" },
    createElm(
      "span",
      { className: "child", "data-child": "children---" },
      "neter"
    ),
    createElm("i", { className: "child-i", "data-child-i": "children---i" })
  )
);
