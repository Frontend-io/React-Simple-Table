// People
import user2 from "./assets/user.png";
import user3 from "./assets/user2.png";
import user4 from "./assets/user3.png";
import user5 from "./assets/user4.png";

function randomImage() {
  const images = [user2, user3, user4, user5];
  const cover = images[Math.round(Math.random() * (images.length - 1))];

  return cover;
}

export default randomImage;
