// People
import user2 from "./assets/images/user.png";
import user3 from "./assets/images/user2.png";
import user4 from "./assets/images/user3.png";
import user5 from "./assets/images/user4.png";

function randomImage(people) {
  const images = [user2, user3, user4, user5];
  const cover = images[Math.round(Math.random() * (images.length - 1))];

  return cover;
}

export default randomImage;
