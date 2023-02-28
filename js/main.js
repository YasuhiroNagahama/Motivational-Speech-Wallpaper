const cardWrap = document.getElementById("cardWrap");

class CardInfo {
  constructor(text, color, img, vertical, horizontal) {
    this.text = text;
    this.color = color;
    this.img = img;
    this.vertical = vertical;
    this.horizontal = horizontal;
  }

  createCard() {
    const contents = document.createElement("div");
    const positionY =
      this.vertical == "上"
        ? "align-items-start"
        : this.vertical == "下"
        ? "align-items-end"
        : "align-items-center";
    const positionX =
      this.horizontal == "左"
        ? "justify-content-start"
        : this.horizontal == "右"
        ? "justify-content-end"
        : "justify-content-center";

    contents.style.backgroundImage = `url(${this.img})`;
    contents.classList.add("contents", "p-3", "d-flex", positionX, positionY);

    const text = document.createElement("p");
    text.style.color = "#" + this.color;
    text.classList.add("text", "fw-bold", "h3");
    text.innerHTML = this.text;

    contents.append(text);

    cardWrap.append(contents);
  }
}

const cardInfoList = [
  new CardInfo(
    "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
    "1B4F72",
    "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg",
    "上",
    "右"
  ),
  new CardInfo(
    "The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
    "007bff",
    "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
    "真ん中",
    "左"
  ),
  new CardInfo(
    "Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman",
    "ecf0f1",
    "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
    "真ん中",
    "真ん中"
  ),
];

for (let i = 0; i < cardInfoList.length; i++) {
  cardInfoList[i].createCard();
}
