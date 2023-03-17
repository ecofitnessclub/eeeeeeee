const mass = [
  {
    name: "",
    photo: `<img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-1-2.png"
                    alt=""
                  />`,
    price: "378",
    dollar: "83.16",
  },
  {
    name: "",
    photo: `<img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-1-2.png"
                    alt=""
                  />`,
    price: "339",
    dollar: "74.58",
  },
  {
    name: "",
    photo: `<img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-13.png"
                    alt=""
                  />`,
    price: "390",
    dollar: "85.8",
  },
  {
    name: "",
    photo: `<img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-14.png"
                    alt=""
                  />`,
    price: "364",
    dollar: "80.08",
  },
  {
    name: "",
    photo: `<img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-15.png"
                    alt=""
                  />`,
    price: "388",
    dollar: "85.36",
  },
  {
    name: "",
    photo: `<img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-16.png"
                    alt=""
                  />`,
    price: "378",
    dollar: "83.16",
  },
  {
    name: "",
    photo: `<img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-17.png"
                    alt=""
                  />`,
    price: "339",
    dollar: "74.58",
  },
  {
    name: "",
    photo: `<img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-18.png"
                    alt=""
                  />`,
    price: "390",
    dollar: "85.8",
  },
  {
    name: "",
    photo: ` <img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-19.png"
                    alt=""
                  />`,
    price: "364",
    dollar: "80.08",
  },
  {
    name: "",
    photo: `<img
                    src="https://cryptohasbullanft.com/wp-content/uploads/2022/05/Untitled_Artwork-20.png"
                    alt=""
                  />`,
    price: "388",
    dollar: "85.36",
  },
];

let butt = document.querySelector(".btn-get");
let u8 = document.querySelector(".u-8");
const audio = new Audio("./imagess/krutitsya-koleso-s-ukazatelem-38057.mp3");
const boom = new Audio("./imagess/zvuk-hlopushki.mp3");

document.querySelector(".splideSpeed1").style.display = "none";
document.querySelector(".splideSpeed2").style.display = "none";

butt.addEventListener("click", () => {
  function getRandomInRange(min, max) {
    audio.play();
    setTimeout(() => {
      let numm = Math.floor(Math.random() * (max - min + 1)) + min;
      audio.pause();
      audio.currentTime = 0;
      boom.play();

      boom.currentTime = 0;

      function getRandomInRange1(mn, mx) {
        let numb = Math.floor(Math.random() * (mx - mn + 1)) + mn;
        return numb;
      }

      for (i = 0; i <= mass.length; i++) {
        if (mass.indexOf(mass[i]) == numm) {
          document.querySelector(".container-block").style.opacity = "0.2";

          u8.classList.add("u-8-1");
          u8.style.zIndex = "300";
          u8.innerHTML = `<div class="result"><div class="congratulation"><h2></h2><h3>CONGRATULATION</h3><button class="close-beck" data-action="delete"><img src="imagess/button.svg" alt="" class="close"></button></div><div class="card"> <div class="card-photo">${mass[i].photo}</div><div class="namem">${mass[i].name}</div><div class="price">${mass[i].price} $IGU <br>  ≈ <br> <div class="dollar">${mass[i].dollar} $</div> </div></div> 
            <div class="wallet"> <button class="btn-go">Connect wallet</button> </div></div> `;
        }
      }

      return numm;
    }, 8000);
  }
  getRandomInRange(0, 4);
});

u8.addEventListener("click", closeAll);
let qest = document.querySelector(".question");
function closeAll(event) {
  if (event.target.dataset.action === "delete") {
    u8.style.opacity = "0.4";

    qest.classList.add("quest");
    qest.innerHTML = ` <div class="shure"><h1>Are you shure?</h1> <div class="buttonss"><button class="yes" data-action="yes">Yes</button> <button class="no" data-action="no">No</button></div> </div> `;

    //
  }
}

qest.addEventListener("click", closePhoto);

function closePhoto(event) {
  if (event.target.dataset.action === "yes") {
    console.log("yes");
    document.querySelector(".container-block").style.opacity = "1";
    u8.classList.remove("u-8-1");
    u8.innerHTML = "";

    u8.style.opacity = "1";
    qest.classList.remove("quest");
    qest.innerHTML = "";
  } else if (event.target.dataset.action === "no") {
    u8.style.opacity = "1";
    qest.classList.remove("quest");
    qest.innerHTML = "";
  }
}
