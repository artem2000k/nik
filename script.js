document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("hide"); 
        document.querySelector(".content").classList.add("show");

        document.body.style.overflow = "auto";
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Если прокрутка больше 50px
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

// Дата начала отсчета (31 декабря 2023 года, 00:00:00)
const startDate = new Date("2023-12-31T18:00:00Z");

function updateTimer() {
    const now = new Date(); // Текущее время
    const diff = now - startDate; // Разница во времени (в мс)

    // Переводим миллисекунды в разные единицы
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
    const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12);
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    // Форматируем числа (добавляем нули перед однозначными числами)
    const format = (num, length = 2) => String(num).padStart(length, "0");

    // Обновляем HTML-контент
    document.querySelector(".timer").innerHTML =
        `|| ${format(years, 3)} || ${format(months)} || ${format(days)} || ` +
        `${format(hours)} || ${format(minutes)} || ${format(seconds)} ||`;
}

// Запускаем таймер сразу
updateTimer();

// Обновляем каждую секунду
setInterval(updateTimer, 1000);

document.querySelector(".arrows").addEventListener("click", () => {
    document.querySelector(".reasons").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    // Функция для проверки, является ли устройство мобильным
    function isMobile() {
        return window.innerWidth <= 768; // Например, если ширина экрана меньше 768px
    }

    if (isMobile()) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        }, {
            threshold: 0.8 // Карточка должна быть хотя бы на 60% в центре экрана
        });

        cards.forEach((card) => observer.observe(card));
    }
});