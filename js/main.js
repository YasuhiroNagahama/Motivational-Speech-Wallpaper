// Motivational Speech Wallpaperを作成するクラス
class Card {
  static contentsWrap = document.getElementById("card-wrapper");

  // 垂直方向のbootstrapプロパティをオブジェクトとして保存
  static positionY = {
    top: "align-items-start",
    bottom: "align-items-end",
    center: "align-items-center",
  };

  // 水平方向のbootstrapプロパティをオブジェクトとして保存
  static positionX = {
    left: "justify-content-start",
    right: "justify-content-end",
    center: "justify-content-center",
  };

  constructor(text, color, img, vertical, horizontal) {
    this.text = text;
    this.color = color;
    this.img = img;
    this.vertical = vertical;
    this.horizontal = horizontal;
  }

  // コンストラクタの引数を元にHTML要素を作成
  createCard() {
    const contents = document.createElement("div");

    contents.style.backgroundImage = `url(${this.img})`;
    contents.classList.add(
      "motivation-card",
      "d-flex",
      "p-3",
      Card.positionY[this.vertical],
      Card.positionX[this.horizontal]
    );

    const text = document.createElement("p");
    text.style.color = "#" + this.color;
    text.classList.add("motivation-card-text", "h3", "fw-bold");
    text.innerHTML = this.text;

    contents.append(text);

    Card.contentsWrap.append(contents);
  }
}

// テキスト、カラーコード、壁紙の画像URL、垂直方向の位置（top center bottom）、水平方向の位置（left center right）を配列内に保存
const cardInfoList = [
  new Card(
    "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
    "1B4F72",
    "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg",
    "top",
    "right"
  ),
  new Card(
    "The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
    "007bff",
    "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
    "center",
    "left"
  ),
  new Card(
    "Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman",
    "ecf0f1",
    "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
    "center",
    "center"
  ),
];

// cardInfoList配列内の各要素に対してcreateCard()メソッドを呼び出し、画面に表示する関数
function displayCardInfo() {
  for (let i = 0; i < cardInfoList.length; i++) {
    cardInfoList[i].createCard();
  }
}

displayCardInfo();
