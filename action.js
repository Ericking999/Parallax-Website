// Select the class bubble
const time = document.getElementsByClassName('bubbles')[0];

if (screen.width < 400) {
    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s');
    time.style.setProperty('--transform-y', '-700vh');
}

const swimArea = document.querySelector('.sec');
const fishSettings = [
    { element: document.getElementById('fish1'), speed: 0.35, amplitude: 12, frequency: 0.0025, direction: -1 },
    { element: document.getElementById('fish2'), speed: 0.45, amplitude: 16, frequency: 0.0021, direction: 1 },
    { element: document.getElementById('fish3'), speed: 0.4, amplitude: 14, frequency: 0.0018, direction: -1 },
    { element: document.getElementById('fish4'), speed: 0.32, amplitude: 18, frequency: 0.0023, direction: 1 }
];

const seaBounds = swimArea.getBoundingClientRect();

fishSettings.forEach((fish) => {
    const rect = fish.element.getBoundingClientRect();
    fish.x = rect.left - seaBounds.left;
    fish.baseY = rect.top - seaBounds.top;
    fish.offset = Math.random() * Math.PI * 2;
    fish.element.style.left = `${fish.x}px`;
    fish.element.style.top = `${fish.baseY}px`;
    fish.element.style.right = 'auto';
    fish.element.style.willChange = 'transform, left, top';
});

function animateFish(timestamp) {
    const boundsWidth = swimArea.clientWidth;

    fishSettings.forEach((fish) => {
        fish.x += fish.speed * fish.direction;

        if (fish.x > boundsWidth + 150) {
            fish.direction = -1;
        }

        if (fish.x < -150) {
            fish.direction = 1;
        }

        const wave = Math.sin(timestamp * fish.frequency + fish.offset) * fish.amplitude;
        fish.element.style.left = `${fish.x}px`;
        fish.element.style.top = `${fish.baseY + wave}px`;
        fish.element.style.transform = `scaleX(${fish.direction === 1 ? 1 : -1})`;
    });

    requestAnimationFrame(animateFish);
}

requestAnimationFrame(animateFish);

window.addEventListener('scroll', function () {

    let value = window.scrollY;   //Get Scroll Value (Mobile - High)

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    //To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }
})


// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}

