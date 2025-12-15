console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload("images/admin.avif", "images/star.avif");

preload(
  "images/admin-click-box.png ",
  "images/admin-room.png",
  "images/admin.avif",
  "images/among-bottom-error.png",
  "images/among-card-error.png",
  "images/Among-card.JPG",
  "images/among-middle-error.png",
  "images/among-top-error.png",
  "images/arrow.avif",
  "images/button.png",
  "images/Map-Button.png",
  "images/map.png",
  "images/rarrow.png",
  "images/Screenshot 2025-11-06 140153.png",
  "images/star.avif images/swipe_middle.png",
  "images/swipe_top.png",
  "images/swipe-bottom.png",
  "images/swipe-middle.png",
  "images/swipe-top.png"
);
