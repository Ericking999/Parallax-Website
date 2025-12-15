// Select the class bubble
const time = document.getElementsByClassName('bubbles')[0];
const text = document.getElementById('text');
const cloud = document.getElementById('cloud');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const explore = document.getElementById('林碩俊');
const rocks = document.getElementById('rocks');
const forest = document.getElementById('forest');
const sky = document.getElementById('sky');
const mountains = document.getElementById('mountains');
const header = document.getElementById('header');
const sun = document.getElementById('sun');
const splash = document.getElementById('splash');

if (screen.width < 400) {
    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s');
    time.style.setProperty('--transform-y', '-700vh');
}

function startFishSwim() {
    const swimArea = document.querySelector('.sec');
    if (!swimArea) return;

    const seaBounds = swimArea.getBoundingClientRect();
    const fishElements = [
        document.getElementById('fish1'),
        document.getElementById('fish2'),
        document.getElementById('fish3'),
        document.getElementById('fish4')
    ].filter(Boolean);

    const fishSettings = fishElements.map((element, index) => {
        const rect = element.getBoundingClientRect();
        const direction = Math.random() < 0.5 ? -1 : 1;

        element.style.right = 'auto';
        element.style.willChange = 'transform, left, top';
        element.style.top = `${rect.top - seaBounds.top}px`;

        return {
            element,
            x: rect.left - seaBounds.left,
            speed: 0.4 + index * 0.05,
            amplitude: 12 + index * 3,
            frequency: 0.0018 + index * 0.0003,
            direction,
            offset: Math.random() * Math.PI * 2
        };
    });

    function animateFish(timestamp) {
        const boundsWidth = swimArea.clientWidth;

        fishSettings.forEach((fish) => {
            fish.x += fish.speed * fish.direction;

            // Wrap fish to the opposite side when they swim out of view
            if (fish.direction === 1 && fish.x > boundsWidth + 120) {
                fish.x = -120;
            }

            if (fish.direction === -1 && fish.x < -120) {
                fish.x = boundsWidth + 120;
            }

            const wave = Math.sin(timestamp * fish.frequency + fish.offset) * fish.amplitude;
            fish.element.style.left = `${fish.x}px`;
            fish.element.style.transform = `translateY(${wave}px) scaleX(${fish.direction})`;
        });

        requestAnimationFrame(animateFish);
    }

    requestAnimationFrame(animateFish);
}

startFishSwim();

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

