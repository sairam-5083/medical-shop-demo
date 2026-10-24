// ======================================
// MEDICAL SHOP DEMO WEBSITE
// ======================================


// 1. AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. PRODUCT SEARCH

const searchInput = document.getElementById("search");
const productCards = document.querySelectorAll(".product-card");
const noResults = document.getElementById("noResults");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const searchTerm = this.value.toLowerCase().trim();
        let visibleCount = 0;

        productCards.forEach(function (card) {

            const productName = (card.dataset.name || "").toLowerCase();
            const productText = card.textContent.toLowerCase();

            const matches =
                productName.includes(searchTerm) ||
                productText.includes(searchTerm);

            card.style.display = matches ? "" : "none";

            if (matches) {
                visibleCount++;
            }
        });

        if (noResults) {
            noResults.hidden = visibleCount !== 0;
        }

    });
}


// 3. WHATSAPP CONFIGURATION

// DEMO: Replace the empty string with the shop owner's
// WhatsApp number after obtaining permission.
//
// Format: country code + phone number.
// Example format for India: 919876543210
//
// Do not include +, spaces, or hyphens.

const SHOP_WHATSAPP_NUMBER = "";


// 4. OPEN WHATSAPP ENQUIRY

function openWhatsApp(productName) {

    const validNumber = /^\d{10,15}$/.test(SHOP_WHATSAPP_NUMBER);

    if (!validNumber) {

        alert(
            "This is a demo website! The actual medical shop owner must " +
            "provide and approve a WhatsApp number before enquiries can be sent."
        );

        return;
    }

    const message =
        "Hello! I would like to enquire about " +
        productName +
        ". Please confirm availability and price.";

    const whatsappURL =
        "https://wa.me/" +
        SHOP_WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

}


// 5. PRODUCT ENQUIRY BUTTONS

const enquiryButtons = document.querySelectorAll(".enquire-button");

enquiryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = this.dataset.product || "healthcare products";

        openWhatsApp(productName);

    });

});


// 6. MAIN WHATSAPP BUTTON

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {

    whatsappButton.addEventListener("click", function () {

        openWhatsApp("healthcare products");

    });

}


// 7. BASIC NAVIGATION FEEDBACK

const navigationLinks = document.querySelectorAll('.header nav a');

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {
            item.removeAttribute("aria-current");
        });

        this.setAttribute("aria-current", "location");

    });

});