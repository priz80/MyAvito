const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main_list");

const cardArray = [
  {
    id: 0,
    title: "Первый товар",
    prise: "170 ₽",
    adress: "Казань, р-н Вахитовский",
    data: "10 июля 11:39",
    img: "./img/card-img.jpg",
  },
  {
    id: 1,
    title: "Второй товар",
    prise: "171 ₽",
    adress: "Казань, р-н Вахитовский",
    data: "10 июля 11:39",
    img: "./img/card-img.jpg",
  },
  {
    id: 2,
    title: "Третий товар",
    prise: "172 ₽",
    adress: "Казань, р-н Вахитовский",
    data: "10 июля 11:39",
    img: "./img/card-img.jpg",
  },
  {
    id: 3,
    title: "Четвертый товар",
    prise: "173 ₽",
    adress: "Казань, р-н Вахитовский",
    data: "10 июля 11:39",
    img: "./img/card-img.jpg",
  },
  {
    id: 4,
    title: "Пятый товар",
    prise: "174 ₽",
    adress: "Казань, р-н Вахитовский",
    data: "10 июля 11:39",
    img: "./img/card-img.jpg",
  },
  {
    id: 5,
    title: "Шестой товар",
    prise: "175 ₽",
    adress: "Казань, р-н Вахитовский",
    data: "10 июля 11:39",
    img: "./img/card-img.jpg",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";

  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
            <a href="/MyAvito/product.html" class="content-main_list-item">
                                <div class="content-main_list-item--img">
                                    <img src="${item.img}" alt="${item.title}">
                                </div>
                                <h5 class="content-main_list-item--title">
                                    ${item.title}
                                </h5>

                                <strong class="content-main_list-item--prise">${item.prise}</strong>

                                <div class="content-main_list-item--desc-box">
                                    <span class="content-main_list-item--desc">${item.adress}</span>
                                    <span class="content-main_list-item--desc">${item.data}</span>
                                </div>
                            </a>
            `,
    );
  });
};

const filteredCardArray = (array, value) => {
  const searchValue = value.toLowerCase();
  return array.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchValue) ||
      item.prise.toLowerCase().includes(searchValue)
    );
  });
};

cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.gap = "30px";

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filteredCardArray(cardArray, searchInput.value));
});
