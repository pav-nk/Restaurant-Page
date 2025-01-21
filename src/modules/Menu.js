import menuImg from "../assets/img/menu.jpg";

const dataItems = [
  {
    name: "Colorato",
    description: "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil",
    price: "10$",
  },
  {
    name: "Carne",
    description:
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli",
    price: "12$",
  },
  {
    name: "Gamberi",
    description: "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
    price: "11$",
  },
  {
    name: "Salsiccia",
    description:
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
    price: "12$",
  },
  {
    name: "Pomodoro",
    description: "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli",
    price: "10$",
  },
];

function createMenuItem(dataItem) {
  const { name, description, price } = dataItem;

  const item = document.createElement("div");
  item.classList.add("item");

  const subTitle = document.createElement("h2");
  subTitle.classList.add("sub-title");
  subTitle.textContent = name;

  const descNode = document.createElement("p");
  descNode.classList.add("item-desc");
  descNode.textContent = description;

  const priceNode = document.createElement("strong");
  priceNode.textContent = ` - ${price}`;

  item.append(subTitle);
  subTitle.append(priceNode);
  item.append(descNode);

  return item;
}

function renderMenuPage(content) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const contentMain = document.createElement("div");
  contentMain.classList.add("content__main");

  const contentImg = document.createElement("div");
  contentImg.classList.add("content__img");

  const img = document.createElement("img");
  img.src = menuImg;
  img.setAttribute("alt", "menu pizza");

  dataItems.forEach((item) => {
    const nodeItem = createMenuItem(item);
    contentMain.append(nodeItem);
  });

  contentImg.append(img);
  wrapper.append(contentMain);
  wrapper.append(contentImg);

  content.append(wrapper);

  setTimeout(() => {
    wrapper.style.opacity = "1";
  }, 0);
}

export { renderMenuPage };
