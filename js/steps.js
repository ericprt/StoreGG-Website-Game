const steps = [
  {
    icon: "./assets/icons/icon-start.svg",
    title: "1. Start",
    caption: "Pilih salah satu game yang ingin kamu top up",
  },
  {
    icon: "./assets/icons/icon-fillup.svg",
    title: "2. Fill Up",
    caption: "Top up sesuai dengan nominal yang sudah tersedia",
  },
  {
    icon: "./assets/icons/icon-winner.svg",
    title: "3. Be a Winner",
    caption: "Siap digunakan untuk improve permainan kamu",
  },
];

const stepsContainer = document.getElementById("steps");

const dataSteps = steps.map(
  (step) => /*html*/ `
      <div class="card-step" data-aos="fade-up">
          <img src="${step.icon}" alt="Icon Start" />
          <h4 class="heading fw-semibold mt-4">${step.title}</h4>
          <p class="caption mt-2 mb-0">
              ${step.caption}
          </p>
      </div>`
);

stepsContainer.innerHTML = dataSteps.join("");
