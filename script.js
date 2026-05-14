const siteContent = {
  brandName: "Sonia Tillot",
  role: "Infirmière coordinatrice",
  intro:
    "L'équipe vous accompagne pour le suivi des patients diabétiques sous pompe à insuline, avec une approche humaine et accessible.",
  phoneNumber: "+33633626933",
  phoneLabel: "Appeler",
  email: "sonia.tillot@adamsante.fr",
  address: "6 chemin du pavillon, 95100 Argenteuil",
  specialty: "Prestataire diabète pompe à insuline",
  supportLine: "24H/24 7J/7 - 01.46.49.80.62",
  supportPhoneNumber: "+33146498062",
  linkedinUrl: "https://www.linkedin.com/in/sonia-tillot-026b56409",
  heroImage: "assets/logo.webp",
  heroAlt: "Logo Adam Santé",
  vcfFile: "assets/adam-sante-contact.vcf",
};

const brandName = document.querySelector("#brand-name");
const roleText = document.querySelector("#role-text");
const introText = document.querySelector("#intro-text");
const emailText = document.querySelector("#email-text");
const emailLink = document.querySelector("#email-detail-link");
const headerEmailLink = document.querySelector("#email-link");
const addressText = document.querySelector("#address-text");
const specialtyText = document.querySelector("#specialty-text");
const supportText = document.querySelector("#support-text");
const supportLink = document.querySelector("#support-link");
const callButton = document.querySelector("#call-button");
const downloadButton = document.querySelector("#download-button");
const linkedinButton = document.querySelector("#linkedin-button");
const heroImage = document.querySelector("#hero-image");

if (brandName) {
  brandName.textContent = siteContent.brandName;
}

if (roleText) {
  roleText.textContent = siteContent.role;
}

if (introText) {
  introText.textContent = siteContent.intro;
}

if (emailText) {
  emailText.textContent = siteContent.email;
}

if (emailLink) {
  emailLink.href = `mailto:${siteContent.email}`;
  emailLink.setAttribute("aria-label", `Envoyer un e-mail à ${siteContent.email}`);
}

if (headerEmailLink) {
  headerEmailLink.href = `mailto:${siteContent.email}`;
  headerEmailLink.setAttribute("aria-label", `Envoyer un e-mail à ${siteContent.email}`);
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

if (linkedinButton) {
  linkedinButton.href = siteContent.linkedinUrl;
  linkedinButton.setAttribute("aria-label", `Voir le profil LinkedIn de ${siteContent.brandName}`);
}

if (heroImage) {
  heroImage.src = siteContent.heroImage;
  heroImage.alt = siteContent.heroAlt;
}
