const features = [
  {
    name: "Mass Effect",
    image: "./assets/images/mass-effect.png",
    platform: "Mobile",
  },
  {
    name: "Call of Duty: Modern",
    image: "./assets/images/call-of-duty.png",
    platform: "Mobile",
  },
  {
    name: "Mobile Legend",
    image: "./assets/images/the-royale.png",
    platform: "Mobile",
  },
  {
    name: "Clash of Clans",
    image: "./assets/images/clash-of-clans.png",
    platform: "Mobile",
  },
  {
    name: "The Royale",
    image: "./assets/images/mobile-legend.png",
    platform: "Desktop",
  },
];

const featuresContainer = document.getElementById("features");

const dataFeatures = features.map(
  (feature) => /*html*/ `
    <div class="carousel-cell my-2 mx-3" data-aos="fade-up">
      <div class="card-feature mx-2">
        <img src="${feature.image}" alt=${feature.name} class="img-feature" />
        <div class="transbox">
          <img
            src="./assets/icons/icon-play.svg"
            alt="Icon Play"
            class="icon"
          />
          <p class="text fs-5 fw-semibold">${feature.name}</p>
          <p class="text fs-6 fw-light">${feature.platform}</p>
        </div>
      </div>
    </div>`
);

featuresContainer.innerHTML = dataFeatures.join("");
