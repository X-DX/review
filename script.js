const reviews = [
    {
        id: 1,
        name: "John Doe",
        job: "Web Developer",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Amazing experience! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        name: "Jane Smith",
        job: "Graphic Designer",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        text: "Great service! Consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 3,
        name: "Alex Johnson",
        job: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "Excellent team! Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 4,
        name: "Emily Davis",
        job: "UX Designer",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        text: "Outstanding results! Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});
// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.image;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});
// show random person
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});
