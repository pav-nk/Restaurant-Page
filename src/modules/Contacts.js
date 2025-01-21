import mapImg from "../assets/img/map.jpg";

function renderContactsPage(content) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const contentMain = document.createElement("div");
  contentMain.classList.add("content__main");

  const contentImg = document.createElement("div");
  contentImg.classList.add("content__img");

  const img = document.createElement("img");
  img.src = mapImg;
  img.setAttribute("alt", "map image");

  const subTitle = document.createElement("h2");
  subTitle.classList.add("sub-title");
  subTitle.textContent = "Write to us:";

  const tel = document.createElement("p");
  tel.classList.add("tel");
  tel.textContent = "+7-(999)-777-77-77";

  const email = document.createElement("a");
  email.classList.add("email-link");
  email.setAttribute("href", "mailto:pav_nk@vk.com");
  email.setAttribute("target", "_blank");
  email.textContent = "pav_nk@vk.com";

  contentMain.append(subTitle);
  contentMain.append(tel);
  contentMain.append(email);

  contentImg.append(img);

  wrapper.append(contentMain);
  wrapper.append(contentImg);

  content.append(wrapper);

  setTimeout(() => {
    wrapper.style.opacity = "1";
  }, 0);
}

export { renderContactsPage };
