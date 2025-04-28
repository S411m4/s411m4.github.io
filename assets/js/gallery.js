const events = [ 
  {
  name: "Ana Masry NGO",
  date: "Feburary 2025",
  folder: "Ana-Masry-NGO",
  images: [
    { filename: "1.jpg", caption: "Having fun with the headset" },
    { filename: "2.jpg", caption: "Exploring VR for the first time" },
    { filename: "3.jpg", caption: "Enjoying my time with the wonderful people I met" },
    { filename: "4.jpg", caption: "Final Session Day ❤️" },
    { filename: "5.jpg", caption: "In Session" },
    { filename: "6.jpg", caption: "Testing Artistic VR Experiences" },
    { filename: "7.jpg", caption: "Zombie Shooooting" },
    { filename: "8.jpg", caption: "Applying concepts I explained during the session" },
    { filename: "9.jpg", caption: "Welcome to the Matrix 🤖" },
    { filename: "10.jpg", caption: "New Experiences" },
  ],
},
{
  name: "VR Workshops @ Medrar",
  date: "November 2024",
  folder: "Workshop-Medrar",
  images: [
    { filename: "6.jpg", caption: "Providing technical support for their projects" },
    { filename: "2.jpg", caption: "Explaining new VR Concepts" },
    { filename: "3.jpg", caption: "Simulating VR by the Device Simulator" },
    { filename: "4.jpg", caption: "Working on their own VR Experiences" },
    { filename: "5.jpg", caption: "Applying in session" },
    { filename: "8.jpg", caption: "Dahab 3d Scan in VR" },
    { filename: "9.jpg", caption: "Getting others opinions" },
    { filename: "10.jpg", caption: "Brainstorming ideas together" },
    { filename: "11.jpg", caption: "Unique Chess in VR" },
    { filename: "12.jpg", caption: "Applying in-session tasks" },
    { filename: "7.jpg", caption: "Working on unique projects" },
    { filename: "13.jpg", caption: "Building their own VR World" },
  ],
},
  {
    name: "Mentorship @ AUC",
    date: "November 2024",
    folder: "AUC",
    images: [
      { filename: "1.jpg", caption: "Helping students apply their own projects" },
      { filename: "2.jpg", caption: "Following Custom Guides I supplied to apply" },
      { filename: "3.jpg", caption: "Playing with Hand tracking in VR" },
      { filename: "4.jpg", caption: "VR exhibit" },
      { filename: "5.jpg", caption: "Uploading their own VR experience to test" },
      { filename: "6.jpg", caption: "Exploring Uinty & VR" },
      { filename: "7.jpg", caption: "Exploring Sample Projects I provided" },
      { filename: "8.jpg", caption: "Preparing for the session" },
      { filename: "9.jpg", caption: "Exploring VR Possibilities" },
      // { filename: "10.jpg", caption: "Mentorship session at AUC, 2023" },
    ],
  },
  {
    name: "Fantamos",
    date: "October 2022",
    folder: "Fantomas",
    images: [
      { filename: "1.jpg", caption: "Live sessions with the contestantss" },
      { filename: "2.jpg", caption: "Explaining new Unity Concepts" },
      { filename: "4.jpg", caption: "Exhibit Day" },
      { filename: "5.jpg", caption: "Trying unique VR experiences" },
      { filename: "6.jpg", caption: "Preview of Contestants Experiences" },
      { filename: "7.jpg", caption: "First Time the artists see its vision come to life in VR" },
      { filename: "8.jpg", caption: "Testing with Oculus Link" },
      { filename: "3.jpg", caption: "Working with 'John Francois' on Custom Unity Packages" },
    ],
  },
 
  
];

const tabsContainer = document.getElementById("eventTabs");
const grid = document.getElementById("galleryGrid");
const title = document.getElementById("galleryTitle");
const date = document.getElementById("eventDate");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeModal");

function populateTabs() {
  events.forEach((event, index) => {
    const btn = document.createElement("button");
    btn.textContent = event.name;
    btn.classList.add("tab-option");
    if (index === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      document.querySelector(".tab-option.active")?.classList.remove("active");
      btn.classList.add("active");
      loadEvent(event);
    });

    tabsContainer.appendChild(btn);
  });
}

function loadEvent(event) {
  title.textContent = event.name;
  date.textContent = event.date;
  grid.innerHTML = "";

  event.images.forEach(img => {
    const imgEl = document.createElement("img");
    imgEl.src = `assets/images/events/${event.folder}/${img.filename}`;
    imgEl.className = "gallery-img";
    imgEl.dataset.caption = img.caption;
    imgEl.alt = img.caption;

    imgEl.addEventListener("click", () => {
      modalImg.src = imgEl.src;
      modalCaption.textContent = img.caption;
      modal.classList.remove("hidden");
    });

    grid.appendChild(imgEl);
  });
}

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});

// Init
populateTabs();
loadEvent(events[0]);
