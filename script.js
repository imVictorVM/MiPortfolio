const toggleBtn = document.getElementById("lang-toggle");
let currentLang = "es";

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  updateLanguageVisibility();
});

function updateLanguageVisibility() {
  const esElements = document.querySelectorAll(".lang-es");
  const enElements = document.querySelectorAll(".lang-en");

  if (currentLang === "es") {
    esElements.forEach((el) => el.classList.remove("hidden"));
    enElements.forEach((el) => el.classList.add("hidden"));
    document.documentElement.lang = "es";
  } else {
    esElements.forEach((el) => el.classList.add("hidden"));
    enElements.forEach((el) => el.classList.remove("hidden"));
    document.documentElement.lang = "en";
  }
}

document.getElementById("year").textContent = new Date().getFullYear();

const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalRole = document.getElementById("modal-role");
const modalTech = document.getElementById("modal-tech");
const modalLink = document.getElementById("modal-link");

function openModal(btnElement) {
  const cardContent = btnElement.closest(".game-content");
  const title = cardContent.querySelector(".game-title").textContent;

  const hiddenData = cardContent.querySelector(".hidden-data");
  const descES = hiddenData.querySelector(".data-desc-es").innerHTML;
  const descEN = hiddenData.querySelector(".data-desc-en").innerHTML;
  const roleES = hiddenData.querySelector(".data-role-es").innerHTML;
  const roleEN = hiddenData.querySelector(".data-role-en").innerHTML;
  const tech = hiddenData.querySelector(".data-tech").textContent;
  const link = hiddenData.querySelector(".data-link").textContent;
  const img = hiddenData.querySelector(".data-img").textContent;

  modalTitle.textContent = title;
  modalImg.src = img;
  modalTech.textContent = tech;
  modalLink.href = link;

  modalDesc.setAttribute("data-es", descES);
  modalDesc.setAttribute("data-en", descEN);
  modalRole.setAttribute("data-es", roleES);
  modalRole.setAttribute("data-en", roleEN);

  if (currentLang === "es") {
    modalDesc.innerHTML = descES;
    modalRole.innerHTML = roleES;
  } else {
    modalDesc.innerHTML = descEN;
    modalRole.innerHTML = roleEN;
  }

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeModal(event) {
  if (
    event.target === modal ||
    event.target.classList.contains("close-modal")
  ) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

toggleBtn.addEventListener("click", () => {
  if (modal.classList.contains("active")) {
    if (currentLang === "es") {
      modalDesc.innerHTML = modalDesc.getAttribute("data-es");
      modalRole.innerHTML = modalRole.getAttribute("data-es");
    } else {
      modalDesc.innerHTML = modalDesc.getAttribute("data-en");
      modalRole.innerHTML = modalRole.getAttribute("data-en");
    }
  }
});
