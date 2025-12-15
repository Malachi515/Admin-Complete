//==============================================================
//  MAIN AUDIO + PAGE LOAD SEQUENCES
//==============================================================
window.onload = () => {
  const ambient = document.getElementById("Ambient");
  ambient.volume = 0.4;
  ambient.loop = true;
  ambient.play().catch(() => {
    document.addEventListener("click", () => ambient.play());
  });

  const adminRoomImg = document.getElementById("uploadbox");
  adminRoomImg.style.display = "none"; // Show admin-room(1) when CardSearchText pops up

  // Only show CardInsertText after page loads
  setTimeout(() => {
    document.getElementById("CardInsertText").style.display = "flex";
    const amongtyping = document.getElementById("Typing");
    amongtyping.currentTime = 0;
    amongtyping.play();
  }, 1250);

  setTimeout(() => {
    document.getElementById("CardInsertText").style.display = "none";
  }, 4500);
};

//==============================================================
//  GLOBAL ELEMENTS
//==============================================================
const amongcard = document.getElementById("card-id");
const amongelectrical = document.getElementById("electric");
let spin = [0, 0, 0];
let cardFound = false; // ✅ Track if card has been found

//==============================================================
//  OPEN ADMIN CARD MODAL
//==============================================================
function showModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "flex";

  card.style.left = "10px";
  card.style.backgroundImage = 'url("images/Among-card.JPG")';

  const amongopen = document.getElementById("Open");
  amongopen.currentTime = 0;
  amongopen.play();

  // Only show CardSearchText if card hasn't been found
  if (!cardFound) {
    setTimeout(() => {
      document.getElementById("CardSearchText").style.display = "flex";

      const amongtyping = document.getElementById("Typing");
      amongtyping.currentTime = 0;
      amongtyping.play();
    }, 4000);

    setTimeout(() => {
      document.getElementById("CardSearchText").style.display = "none";
      document.getElementById("uploadbox").style.display = "flex"; // hide again after
    }, 6000);
  }
}

//==============================================================
//  CLOSE MODAL
//==============================================================
function hideModal() {
  document.getElementById("myModal").style.display = "none";
  const amongclose = document.getElementById("Close");
  amongclose.currentTime = 0;
  amongclose.play();
}

//==============================================================
//  CARD SWIPE MECHANIC
//==============================================================
const card = document.getElementById("card-id");
const swipeArea = document.querySelector(".swipe-area");
let isDragging = false;
let offsetX = 0;

card.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - card.offsetLeft;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let newX = e.clientX - offsetX;
  const maxX = swipeArea.clientWidth - card.clientWidth - 10;

  newX = Math.max(10, Math.min(newX, maxX));
  card.style.left = newX + "px";
});

document.addEventListener("mouseup", () => {
  if (!isDragging) return;
  isDragging = false;

  const currentX = parseInt(card.style.left);
  const maxX = swipeArea.clientWidth - card.clientWidth - 10;

  if (currentX < maxX - 130) {
    // Reset if swipe failed
    card.style.left = "10px";
  } else {
    // Successful swipe
    card.style.left = maxX + "px";
    card.style.backgroundImage = 'url("images/among-card-error.png")';
    document.querySelector(".modal-row-top").style.backgroundImage =
      'url("images/among-top-error.png")';

    const amongerror = document.getElementById("Eroar");
    amongerror.currentTime = 0;
    amongerror.play();
    document.getElementById("SwipeCardz").removeAttribute("onclick");

    setTimeout(hideModal, 1000);
    setTimeout(imCompletingIt, 2000);
  }
});

//==============================================================
//  HOVER SOUND
//==============================================================
const selectSound = document.getElementById("Select");
let audioUnlocked = false;

document.querySelectorAll("img").forEach((img) => {
  if (
    img.id === "rotateMachine1" ||
    img.id === "rotateMachine2" ||
    img.id === "rotateMachine3"
  ) {
    img.style.cursor = "default"; // ✅ Remove pointer for wheels
    return; // Skip attaching hover sound to wheel images
  }
  img.addEventListener("mouseenter", () => {
    if (!audioUnlocked) return;
    selectSound.currentTime = 0.3;
    selectSound.play();
  });
});

//==============================================================
//  TASK COMPLETE SEQUENCE
//==============================================================
function imCompletingIt() {
  cardFound = true; // ✅ Mark card as found

  const adminBox = document.querySelector(".admin-box-img");
  adminBox.onclick = null;

  document.getElementById("mapPicture").style.backgroundImage =
    'url("images/Admin-complete.png")';

  setTimeout(() => {
    document.getElementById("darkness").style.display = "flex";
    const amonglights = document.getElementById("Lights-off");
    amonglights.currentTime = 0;
    amonglights.play();
  }, 200);

  setTimeout(() => {
    document.getElementById("ImposterText").style.display = "flex";
    const amongalarm = document.getElementById("Alarm");
    amongalarm.currentTime = 0;
    amongalarm.play();
  }, 3000);

  setTimeout(() => {
    document.getElementById("ImposterText").style.display = "none";
  }, 7000);

  setTimeout(() => {
    document.getElementById("myOtherModal").style.display = "flex";
    const amongreveal = document.getElementById("Reveal");
    amongreveal.currentTime = 0;
    amongreveal.play();
  }, 3000);

  setTimeout(() => {
    document.getElementById("myOtherModal").style.display = "none";
    amongelectrical.classList.add("electrical");
  }, 7000);

  setTimeout(() => {
    document.getElementById("MapText").style.display = "flex";
    const amongtyping = document.getElementById("Typing");
    amongtyping.currentTime = 0;
    amongtyping.play();
  }, 10000);

  setTimeout(() => {
    document.getElementById("MapText").style.display = "none";
  }, 13000);
}

//==============================================================
//  AUDIO UNLOCK
//==============================================================
function unlockAudio() {
  audioUnlocked = true;
  document.removeEventListener("click", unlockAudio);
  document.removeEventListener("keydown", unlockAudio);
}
document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);

//==============================================================
//  MAP OPEN/CLOSE
//==============================================================
function showMap() {
  const mapModal = document.getElementById("myMap");
  const mapBody = document.querySelector(".modal-body-map");

  if (mapModal.style.display === "flex") {
    mapModal.style.display = "none";
    mapBody.style.display = "none";

    const amongclose = document.getElementById("Close");
    amongclose.currentTime = 0;
    amongclose.play();
  } else {
    mapModal.style.display = "flex";
    mapBody.style.display = "flex";

    const amongopen = document.getElementById("Open");
    amongopen.currentTime = 0;
    amongopen.play();
  }
}

//==============================================================
//  SPINNING WHEELS SYSTEM
//==============================================================
let r = [0, 0, 0];
let spinTimer = [null, null, null];
let wheelActive = [true, true, true];
let intervalTime = 12;

function startRotation(num) {
  wheelActive = [false, false, false];
  wheelActive[num] = true;

  if (spinTimer[num]) return;

  spinTimer[num] = setInterval(() => {
    r[num] += 5;
    if (r[num] >= 360) r[num] = 0;
    document.getElementById(
      `rotateMachine${num + 1}`
    ).style.transform = `rotate(${r[num]}deg)`;
  }, intervalTime);
}

function stopWheel(num) {
  if (!wheelActive[num]) return;

  const clickSound = document.getElementById("Click");
  clickSound.currentTime = 0;
  clickSound.play();

  clearInterval(spinTimer[num]);
  spinTimer[num] = null;

  const box = document.getElementById(`rightwrong${num + 1}`);

  if (r[num] >= 85 && r[num] <= 105) {
    box.style.background = "green";
    wheelActive[num] = false;
    intervalTime = Math.max(6, intervalTime - 3);

    if (num < 2) setTimeout(() => startRotation(num + 1), 600);
    else {
      setTimeout(() => {
        document.getElementById("mySpinModal").style.display = "none";
        document.getElementById("uploadbox").onclick = null;
        document.getElementById("Close").currentTime = 0;
        document.getElementById("Close").play();
      }, 2500);

      setTimeout(() => {
        document.getElementById("CardFoundText").style.display = "flex";
        amongcard.classList.add("card");
        document.getElementById("CardSearchText").classList.remove("modal2");
        document.getElementById("CardSearchText").removeAttribute("id");
        document.getElementById("Correct").currentTime = 0;
        document.getElementById("Correct").play();
        document.getElementById("Typing").currentTime = 0;
        document.getElementById("Typing").play();
      }, 2000);

      setTimeout(
        () => (document.getElementById("CardFoundText").style.display = "none"),
        5000
      );
    }
    return;
  }

  // Wrong → restart same wheel
  box.style.background = "red";
  setTimeout(() => {
    r[num] = 0;
    document.getElementById(`rotateMachine${num + 1}`).style.transform =
      "rotate(0deg)";
    box.style.background = "grey";
    startRotation(num);
  }, 1000);
}

function rotateModal() {
  const modal = document.getElementById("mySpinModal");
  modal.style.display = "flex";
  document.getElementById("Open").currentTime = 0;
  document.getElementById("Open").play();

  wheelActive = [true, true, true];
  r = [0, 0, 0];
  intervalTime = 12;
  startRotation(0);
}

function hideSpinModal() {
  const modal = document.getElementById("mySpinModal");
  modal.style.display = "none";
  document.getElementById("Close").currentTime = 0;
  document.getElementById("Close").play();

  spinTimer.forEach((timer, i) => {
    if (timer) {
      clearInterval(timer);
      spinTimer[i] = null;
    }
  });
}

function goElectrical() {
  window.location.href = "https://9kgsk3.csb.app/";
}

function goCafeteria() {
  window.location.href = "https://xql8vv.csb.app/";
}
