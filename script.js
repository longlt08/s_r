function moveElmRand(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Hàm typewriter effect
function typeWriter(element, text, speed = 50) {
  element.textContent = "";
  element.classList.add("typewriter");
  const chars = Array.from(text);
  let i = 0;

  function type() {
    if (i < chars.length) {
      element.textContent += chars[i];
      i++;
      setTimeout(type, speed);
    } else {
      element.classList.remove("typewriter");
    }
  }

  type();
}

const moveRandom = document.querySelector("#move-random");
const mainText = document.querySelector("#main-text");
const gifContainer = document.querySelector("#gif-container");

// Array các messages khi hover
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

// Array các GIF IDs
const gifIds = [
  "24483566",  // Boba
  "1201031831950113064", // Sad
  "17984395268378765673", // Minion
  "2466033883104360851", // Please
  "3781547026491401654", // Please Please Please
  "9431944348187876211", // Cat Cute
  "16505838", // Ami Fat Cat
  "8848002158545754303", // Jerry Beg
  "16134463", // Meme Mochi
  "106011066590941818", // Cute
  "9951420843019202001", // I Am Sorry
  "16951519388759254801", // Anuragita
  "14986140427544477225", // Gojill The Meow
  "18654266" // Sorry Stitch
];

let hoverCount = 0;

moveRandom.addEventListener("mouseenter", function (e) {
  moveElmRand(e.target);
  
  // Thay đổi text h1
  hoverCount++;
  
  // Nếu hover > 10 lần, hiển thị câu chốt cuối
  if (hoverCount > 10) {
    typeWriter(mainText, "Em không thể click vào No được đâu 😜! Hãy tha thứ cho anh và click Yes đi nha 💕", 40);
  } else {
    const messageIndex = (hoverCount - 1) % messages.length;
    typeWriter(mainText, messages[messageIndex], 50);
  }
  
  // Thay đổi GIF
  const allGifs = gifContainer.querySelectorAll(".tenor-gif-embed");
  allGifs.forEach(gif => gif.classList.remove("active-gif"));
  
  // Chọn GIF ngẫu nhiên (từ index 1 trở đi, bỏ qua Manja ở index 0)
  const randomGifIndex = Math.floor(Math.random() * (allGifs.length - 1)) + 1;
  allGifs[randomGifIndex].classList.add("active-gif");
  
  // Reload Tenor embed script
  if (window.twttr) {
    window.twttr.widgets.load();
  }
  if (window.tenor) {
    window.tenor.parse(document.body);
  }
});
