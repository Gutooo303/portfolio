// INIT
AOS.init();

emailjs.init("-DuTXy7UnUfDWoARu");

// FORM
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("mensagem").value;

    if (!name || !email || !message) {
        showToast("Preencha todos os campos");
        return;
    }

    emailjs.send("service_8hfxvyc", "template_828i6bp", {
        name,
        email,
        message
    })
        .then(() => {
            showToast("Mensagem enviada com sucesso!");
            form.reset();
        })
        .catch(() => {
            showToast("Erro ao enviar. Tente novamente.");
        });
});

// TOAST
function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// SCROLL BUTTONS
const floating = document.getElementById("floatingButtons");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        floating.classList.remove("hidden");
    } else {
        floating.classList.add("hidden");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}