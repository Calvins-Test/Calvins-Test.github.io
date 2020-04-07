window.onload = function() {
  let images = [];
  let index = 0;
  for (let i=1;i<4;i++) {
    let img = new Image();
    img.src = "pic" + i + ".png";
    images.push([img, "description " + i]);
  }

  function update(shift) {
    index = (index + shift + images.length) % images.length;
    document.getElementById("slideshow_img").src = images[index][0].src;
    document.getElementById("slideshow_desc").innerHTML = images[index][1];
  }
  update(0);
  document.getElementById("prev").addEventListener("mousedown", evt => update(-1));
  document.getElementById("next").addEventListener("mousedown", evt => update(1));
}
