const images = [
  "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/04/20/08/42/genoa-4141143_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/10/01/23/43/casablanca-2807439_1280.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = chosenImage;
document.body.querySelector("#img").appendChild(bgImage);
