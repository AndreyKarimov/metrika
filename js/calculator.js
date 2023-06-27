import * as data from "../js/data.js";
import Order from "../js/odrer.js";

const buildingTypeNode = document.getElementById("buildingType");
const spaceAreaValueNode = document.getElementById("spaceAreaValue");
const spaceAreaNode = document.getElementById("spaceArea");
const planningSolutionsNode = document.getElementById("planningSolutions");
const draftOptionsNode = document.getElementById("draftOptions");
const visualizationOptionsNode = document.getElementById(
  "visualizationOptions"
);
const planningSolutionsValueNode = document.getElementById(
  "planningSolutionsValue"
);
const draftOptionsValueNode = document.getElementById("draftOptionsValue");
const visualizationOptionsValueNode = document.getElementById(
  "visualizationOptionsValue"
);
const optionResultPriceNode = document.getElementById("optionResultPrice");
const plus1Node = document.getElementById("plus1");
const minus1Node = document.getElementById("minus1");
const plus2Node = document.getElementById("plus2");
const minus2Node = document.getElementById("minus2");
const plus3Node = document.getElementById("plus3");
const minus3Node = document.getElementById("minus3");

function init() {
  const order = new Order();

  render(order);
  return order;
}

// reder functions
function render(order) {
  renderBuildingTypeList();
  renderOrder(order);
}

function renderOrder(order) {
  buildingTypeNode.value = order.buldingType;
  spaceAreaValueNode.innerText = order.spaceArea;
  spaceAreaNode.value = order.spaceArea;
  planningSolutionsValueNode.innerText = order.planingSolutions;
  draftOptionsValueNode.innerText = order.draftOptions;
  visualizationOptionsValueNode.innerText = order.visualizationOptions;
  renderTotal(order);
}

function renderBuildingTypeList() {
  data.buldingType.forEach((elem) => {
    let type = document.createElement("option");
    type.innerText = elem.type;
    type.value = elem.type;
    buildingTypeNode.appendChild(type);
  });
}

function renderTotal(order) {
  renderPrice(order);
}

function renderPrice(order) {
  optionResultPriceNode.innerText = `${order.price} ₽/м2`;
}

// Handlers
function spaceAreaNodeHandler() {
  spaceAreaValueNode.innerText = spaceAreaNode.value;
}

// main programme
init();
spaceAreaNode.addEventListener("input", spaceAreaNodeHandler);
buildingTypeNode.addEventListener("input", (order) => {
  order.buldingType = buildingTypeNode.value;
  console.log(order.buldingType, buildingTypeNode.value, order.price);
});
// console.log(order.price);
