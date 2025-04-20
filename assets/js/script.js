const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions');
const documents = [
    "Republic Act No. 12134", "Republic Act No. 4645", "Republic Act No. 45454",
    "Republic Act No. 44", "Republic Act No. 4489", "Republic Act No. 89636",
    "Executive Order No. 84, s. 2025", "Memorandum Circular No. 78 s. 2025",
    "Memorandum Order No. 31 s. 2024", "Administrative Order No. 29, s. 2025"
];

// MODAL FUNCTIONS (INDIVIDUAL OPEN/CLOSE)
const pageNotAvailableModal = () => {
    document.getElementById('loginModal').classList.remove('active', 'show');
    document.getElementById('signupModal').classList.remove('active', 'show');
    document.getElementById('forgotPasswordModal').classList.remove('active', 'show');
    document.getElementById('changePasswordModal').classList.remove('active', 'show');
    document.getElementById('successModal').classList.remove('active', 'show');
    document.getElementById('accountsuccessModal').classList.remove('active', 'show');
    document.getElementById('pageNotAvailableModal').classList.add('active', 'show');

};


const openLoginModal = () => {
    document.getElementById('loginModal').classList.add('active', 'show');
    document.getElementById('signupModal').classList.remove('active', 'show');
    document.getElementById('forgotPasswordModal').classList.remove('active', 'show');
    document.getElementById('changePasswordModal').classList.remove('active', 'show');
    document.getElementById('successModal').classList.remove('active', 'show');
    document.getElementById('accountsuccessModal').classList.remove('active', 'show');
    document.getElementById('pageNotAvailableModal').classList.remove('active', 'show');

};


const openSignupModal = () => {
    document.getElementById('loginModal').classList.remove('active', 'show');
    document.getElementById('signupModal').classList.add('active', 'show');
    document.getElementById('forgotPasswordModal').classList.remove('active', 'show');
    document.getElementById('changePasswordModal').classList.remove('active', 'show');
    document.getElementById('successModal').classList.remove('active', 'show');
    document.getElementById('accountsuccessModal').classList.remove('active', 'show');
    document.getElementById('pageNotAvailableModal').classList.remove('active', 'show');

};

const openForgotPasswordModal = () => {
    document.getElementById('loginModal').classList.remove('active', 'show');
    document.getElementById('signupModal').classList.remove('active', 'show');
    document.getElementById('forgotPasswordModal').classList.add('active', 'show');
    document.getElementById('changePasswordModal').classList.remove('active', 'show');
    document.getElementById('successModal').classList.remove('active', 'show');
    document.getElementById('accountsuccessModal').classList.remove('active', 'show');
    document.getElementById('pageNotAvailableModal').classList.remove('active', 'show');

};


const openSuccessModal = () => {
    document.getElementById('loginModal').classList.remove('active', 'show');
    document.getElementById('signupModal').classList.remove('active', 'show');
    document.getElementById('forgotPasswordModal').classList.remove('active', 'show');
    document.getElementById('changePasswordModal').classList.remove('active', 'show');
    document.getElementById('successModal').classList.add('active', 'show');
    document.getElementById('accountsuccessModal').classList.remove('active', 'show');
    document.getElementById('pageNotAvailableModal').classList.remove('active', 'show');

};



const openAccountSuccessModal = () => {
    document.getElementById('accountsuccessModal').classList.add('active', 'show');
    document.getElementById('successModal').classList.remove('active', 'show');
    closeLoginModal();
    closeSignupModal();
    closeForgotPasswordModal();
};

const openPageNotAvailableModal = () => {
    document.getElementById('pageNotAvailableModal').classList.add('active', 'show');
    closeAccountSuccessModal();
    closeSuccessModal();
    closeLoginModal();
    closeSignupModal();
    closeForgotPasswordModal();
};

const closeModal = () => {
    document.getElementById('loginModal').classList.remove('active', 'show');
    document.getElementById('signupModal').classList.remove('active', 'show');
    document.getElementById('forgotPasswordModal').classList.remove('active', 'show');
    document.getElementById('changePasswordModal').classList.remove('active', 'show');
    document.getElementById('successModal').classList.remove('active', 'show');
    document.getElementById('accountsuccessModal').classList.remove('active', 'show');
    document.getElementById('pageNotAvailableModal').classList.remove('active', 'show');
};

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  });






// HANDLE SEARCH
const handleSearchInput = () => {
    const inputVal = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = "";

    if (inputVal) {
        const filtered = documents.filter(doc => doc.toLowerCase().includes(inputVal));
        if (filtered.length) {
            filtered.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                li.addEventListener('click', () => {
                    searchInput.value = item;
                    suggestionsList.innerHTML = "";
                });
                suggestionsList.appendChild(li);
            });
        } else {
            const noResultsMessage = document.createElement('li');
            noResultsMessage.textContent = `No documents found for ‘${searchInput.value}’.`;
            noResultsMessage.style.color = "black";
            suggestionsList.appendChild(noResultsMessage);
        }
    }
};

// PASSWORD VISIBILITY TOGGLE
const togglePasswordVisibility = (inputId) => {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling;
    input.type = input.type === 'password' ? 'text' : 'password';
    icon.classList.toggle('fa-eye', input.type === 'password');
    icon.classList.toggle('fa-eye-slash', input.type === 'text');
};


document.getElementById('confirmPassword').addEventListener('input', function () {
    const errorMsg = document.getElementById('passwordMismatchMessage');
    errorMsg.style.display = this.value === document.getElementById('signupPassword').value ? 'none' : 'block';
});

// EVENT LISTENERS
searchInput.addEventListener('input', handleSearchInput);
document.getElementById("openModalBtn").addEventListener("click", openLoginModal);

window.addEventListener("click", (e) => {
    const modals = [
        'loginModal', 'signupModal', 'forgotPasswordModal', 'changePasswordModal',
        'successModal', 'accountsuccessModal', 'pageNotAvailableModal'
    ];
    if (modals.some(modalId => e.target === document.getElementById(modalId))) {
        closeAllModals();
    }
});

document.querySelectorAll('[data-toggle="password-visibility"]').forEach(el =>
    el.addEventListener('click', () => togglePasswordVisibility(el.dataset.target))
);


const validateForgotPasswordForm = (event) => {
    event.preventDefault();
    closeAllModals();
    openSuccessModal();
};
