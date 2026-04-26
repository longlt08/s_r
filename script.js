function moveElmRand(elm) {
  elm.style.top = Math.floor(Math.random() * 85 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 85 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");
const mainText = document.querySelector("#main-text");
const gifContainer = document.querySelector("#gif-container");

const messages = [
  "Anh sai rồi, anh không tái phạm nữa ạ 🥺❤",
  "Anh không có ý đi tìm thêm ai khác nữa đâu, anh chỉ trêu em một chút thôi ... 😭",
  "Em ơi, Anh sẽ không trêu em như thế nữa đâu ạ 💔",
  "Tha thứ cho anh nhaaaaa 🥰",
  "Anh thề không tái phạm nữa, hứaaaaa 🤐",
  "Em bớt giận anh nhaaaa 😢",
  "Bỏ qua cho anh lần này nha em 🙏",
  "Chỉ sai một lần thôi, đừng giận anh 🥺",
  "Em hãy tha thứ cho anh đi 💕",
  "Anh hứa sẽ tốt hơn, tin anh đi 😔"
];

const gifIds = [
  "24483566",
  "1201031831950113064",
  "17984395268378765673",
  "2466033883104360851",
  "3781547026491401654",
  "9431944348187876211",
  "16505838",
  "8848002158545754303",
  "16134463",
  "106011066590941818",
  "9951420843019202001",
  "16951519388759254801",
  "14986140427544477225",
  "18654266"
];

let hoverCount = 0;

moveRandom.addEventListener("mouseenter", function (e) {
  moveElmRand(e.target);

  hoverCount++;

  if (hoverCount > 10) {
    mainText.textContent = "Em không thể click vào No được đâu 😜! Hãy tha thứ cho anh và click Yes đi nha 💕";
  } else {
    const messageIndex = (hoverCount - 1) % messages.length;
    mainText.textContent = messages[messageIndex];
  }

  const allGifs = gifContainer.querySelectorAll(".tenor-gif-embed");
  allGifs.forEach(gif => gif.classList.remove("active-gif"));

  const randomGifIndex = Math.floor(Math.random() * (allGifs.length - 1)) + 1;
  allGifs[randomGifIndex].classList.add("active-gif");

  if (window.twttr) {
    window.twttr.widgets.load();
  }
  if (window.tenor) {
    window.tenor.parse(document.body);
  }
});