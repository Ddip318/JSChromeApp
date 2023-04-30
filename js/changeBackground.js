const imageSrc = [
  "https://cdn.pixabay.com/photo/2023/03/28/19/55/lake-7884049_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/03/31/06/41/winter-7889299_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/03/30/11/58/norway-7887613_960_720.jpg",
];

function changeBackGroundImage() {
  const page = Math.floor(Math.random() * 3);
  document.body.style.backgroundImage = `url(${imageSrc[page]})`;
}

changeBackGroundImage();
setInterval(changeBackGroundImage, 1000 * 20);
