const siteContent = {
  brandName: "Sonia Tillot",
  role: "Infirmiere coordinatrice",
  intro:
    "Sonia Tillot vous accompagne au nom d'Adam Sante pour le suivi des patients diabetiques sous pompe a insuline, avec une approche humaine, claire et accessible.",
  phoneNumber: "+33633626933",
  phoneLabel: "Appeler",
  address: "6 chemin du pavillon, 95100 Argenteuil",
  specialty: "Prestataire diabete pompe a insuline",
  supportLine: "24H/24 7J/7 - 01.46.49.80.62",
  supportPhoneNumber: "+33146498062",
  heroImage: "assets/logo.png",
  heroAlt: "Logo Adam Sante",
  vcfFile: "assets/adam-sante-contact.vcf",
};

const brandName = document.querySelector("#brand-name");
const roleText = document.querySelector("#role-text");
const introText = document.querySelector("#intro-text");
const addressText = document.querySelector("#address-text");
const specialtyText = document.querySelector("#specialty-text");
const supportText = document.querySelector("#support-text");
const supportLink = document.querySelector("#support-link");
const callButton = document.querySelector("#call-button");
const downloadButton = document.querySelector("#download-button");
const heroImage = document.querySelector("#hero-image");

if (brandName) {
  brandName.textContent = siteContent.brandName;
}

if (introText) {
  introText.textContent = siteContent.intro;
}

if (roleText) {
  roleText.textContent = siteContent.role;
}

if (addressText) {
  addressText.textContent = siteContent.address;
}

if (specialtyText) {
  specialtyText.textContent = siteContent.specialty;
}

if (supportText) {
  supportText.textContent = siteContent.supportLine;
}

if (supportLink) {
  supportLink.href = `tel:${siteContent.supportPhoneNumber}`;
  supportLink.setAttribute("aria-label", `Appeler l'astreinte ${siteContent.supportLine}`);
}

if (callButton) {
  callButton.href = `tel:${siteContent.phoneNumber}`;
  callButton.textContent = siteContent.phoneLabel;
  callButton.setAttribute("aria-label", `${siteContent.phoneLabel} ${siteContent.brandName}`);
}

if (downloadButton) {
  downloadButton.href = siteContent.vcfFile;
}

if (heroImage) {
  heroImage.src = siteContent.heroImage;
  heroImage.alt = siteContent.heroAlt;
}
