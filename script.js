console.log("Site loaded");

// =============================
// DOM CONTENT LOADED
// =============================
document.addEventListener("DOMContentLoaded", function () {

  // =============================
  // EMAILJS INITIALIZATION
  // =============================
  if (typeof emailjs !== "undefined") {
    emailjs.init("BrQ5-jaAzRl0OrP-B"); // Your EmailJS Public Key
  }

  const appointmentForm = document.getElementById("appointmentForm");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById("name")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        email: document.getElementById("email")?.value || "",
        date: document.getElementById("date")?.value || "",
        time: document.getElementById("time")?.value || "",
        department: document.getElementById("department")?.value || "",
        doctor: document.getElementById("doctor")?.value || "",
        message: document.getElementById("message")?.value || ""
      };

      emailjs
        .send("service_e2jroob", "template_he2jcjm", formData)
        .then(() => {
          const popup = document.getElementById("successPopup");
          if (popup) {
            popup.classList.add("show");
            setTimeout(() => popup.classList.remove("show"), 3000);
          }
          appointmentForm.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Something went wrong. Please try again.");
        });
    });
  }

  // =============================
  // NAVBAR MOBILE TOGGLE
  // =============================
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("show");
    });
  }

  // =============================
  // ACTIVE NAV LINK HIGHLIGHT
  // =============================
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // =============================
  // DATE PICKER (MIN TODAY)
  // =============================
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  // =============================
  // BUTTON CLICK ANIMATION
  // =============================
  const buttons = document.querySelectorAll(".btn, .btns");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

});
