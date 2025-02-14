// --- DOM elements ---
const letterContainer = document.querySelector(".letters");
const socialMediaContainer = document.querySelector(".social-media");
const countdownElement = document.getElementById("countdown");
const abouts = document.querySelector(".abouts");

const originalCountdownText = countdownElement.textContent;

const bios = [
    "Born too late to explore the world, too early to explore the universe, but just in time to rice Hyprland.",
    "Failed math, but successfully installed Arch. Balance.",
    "Regret? Not knowing `pacstrap /mnt` at birth.",
    "18 but my terminal uptime is longer than my relationships.",
    "Tech enthusiast, lifelong coder, certified geek. My social skills? Segfaulted.",
    "I don’t touch grass, I touch configs.",
    "Sleep? No. Vim? Yes.",
    "My life is just `git commit -m \"another day survived\"`",
    "They called me a geek. I took it as a compliment.",
    "If it ain't customizable, I don’t want it.",
    "I don’t “use” tech. I **void warranty** on it.",
    "If a laptop ain't been pried open, is it even mine?",
    "Flashing ROMs like it’s a personality trait.",
    "RIP PixelExperience, you will be missed. Unlike Windows 11.",
    "Windows 11 makes me physically ill. Dont ask me about the background 👀",
    "My phone has had more OS changes than my wardrobe.",
    "Some people fix relationships, I fix bootloops.",
    "Custom ROMs over comfort, always.",
    "If my BIOS ain't unlocked, I don’t want it.",
    "My tech? Tweaked. My sleep schedule? Wrecked.",
    "Yaara andha paiyan!? Naandha andha paiyan!",
    "Enga kondu vandhu niruthuruka paathiya!",
    "Yenna koduma sir ithu?",
    "Aaniya Pudunga Venam...🔨",
    "We're in the AI, mukkiyam Bigil-u era!"
];

// --- Name animation ---
const letters = "Lavan.".split("");

letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${(index + 1) * 0.1}s`;
    letterContainer.appendChild(span);
});

// --- Social media icons ---
const socialMediaIcons = [
    { href: "https://github.com/lavan-b", icon: "simple-icons:github", color: "#24292E" },
    { href: "https://t.me/barath0810", icon: "simple-icons:telegram", color: "#24A1DE" },
    { href: "https://www.linkedin.com/in/lavanbarath/", icon: "simple-line-icons:social-linkedin", color: "#0077B5" },
    { href: "mailto:balalavanbarath@gmail.com", icon: "simple-icons:gmail", color: "#EA4335" }
];

socialMediaIcons.forEach((iconData, index) => {
    const a = document.createElement("a");
    a.href = iconData.href;
    a.classList.add("social-icon");
    a.style.animationDelay = `${(index + 1) * 0.5 + 1.7}s`;
    a.style.setProperty("--color", iconData.color);
    a.style.margin = "0 1rem";

    const icon = document.createElement("span");
    icon.classList.add("iconify");
    icon.setAttribute("data-icon", iconData.icon);
    a.appendChild(icon);

    a.addEventListener('mouseenter', () => {
        a.style.backgroundColor = iconData.color;
        a.style.color = "#0d0d0d";
    });

    a.addEventListener('mouseleave', () => {
        a.style.backgroundColor = "transparent";
        a.style.color = "#e5e5e5";
    });

    a.addEventListener('click', (e) => {
        if (iconData.href.startsWith("mailto:")) {
            window.location.href = iconData.href;
        } else {
            e.preventDefault();
            window.open(a.href, '_blank');
        }
    });

    socialMediaContainer.appendChild(a);
});

// --- Countdown timer ---
const startTime = new Date();

function updateCountdown() {
    const currentTime = new Date();
    const elapsed = currentTime - startTime;
    const remainingTime = Math.max(startTime.getTime() - elapsed, 0);

    if (remainingTime <= 0) {
        countdownElement.textContent = "00:00:00";
        return;
    }

    const date = new Date(remainingTime);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const year = startTime.getFullYear();
    const formattedDate = `${startTime.getDate()} ${startTime.toLocaleString('default', { month: 'long' })} ${year} - ${hours}:${minutes}:${seconds}`;


    if (countdownElement.textContent !== "I wish I could do this.") {
        countdownElement.textContent = formattedDate;
    }

    requestAnimationFrame(updateCountdown);
}

// --- Countdown hover effect ---
countdownElement.addEventListener("mouseenter", () => {
    countdownElement.style.transition = "opacity 0.3s ease";
    countdownElement.style.opacity = 0;

    setTimeout(() => {
        countdownElement.textContent = "I wish I could do this.";
        countdownElement.style.opacity = 1;
    }, 300);
});

countdownElement.addEventListener("mouseleave", () => {
    countdownElement.style.opacity = 0;
    setTimeout(() => {
        countdownElement.textContent = originalCountdownText; // Reset to the original date
        countdownElement.style.opacity = 1;
    }, 300);
});

// --- "About me" hover effect ---
const captionContainer = document.createElement("div");
captionContainer.classList.add("caption");
document.body.appendChild(captionContainer);

abouts.addEventListener("mouseenter", () => {
    const randomIndex = Math.floor(Math.random() * bios.length);
    captionContainer.textContent = bios[randomIndex];
    captionContainer.style.opacity = 1;
});

abouts.addEventListener("mouseleave", () => {
    captionContainer.style.opacity = 0;
});

requestAnimationFrame(updateCountdown);