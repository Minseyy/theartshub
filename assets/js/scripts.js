let slideIndex = 1;

const slides = document.getElementsByClassName("mySlides");
const dotsContainer = document.querySelector(".dots-container");
const thumbnailRow = document.querySelector(".thumbnail-row");

const eventData = [
  {
    title: "Art Exhibition Night",
    description:
      "Explore student artworks ranging from digital illustration to mixed media installations.",
    date: "12 June 2026",
    venue: "Campus Gallery Hall",
    link: "#",
  },
  {
    title: "Creative Industry Networking",
    description:
      "Meet professionals from design, film, animation, and creative media industries.",
    date: "18 June 2026",
    venue: "Arts Theatre Building",
    link: "#",
  },
  {
    title: "Photography Workshop",
    description:
      "Hands-on workshop exploring cinematic photography and visual storytelling.",
    date: "25 June 2026",
    venue: "Studio Room 2",
    link: "#",
  },
  {
    title: "Film Screening Night",
    description:
      "A curated evening of independent student films followed by discussion panels.",
    date: "2 July 2026",
    venue: "Lecture Theatre A",
    link: "#",
  },
  {
    title: "Creative Careers Panel",
    description:
      "Industry professionals share insights into careers across arts and media sectors.",
    date: "8 July 2026",
    venue: "Arts Building",
    link: "#",
  },
  {
    title: "Digital Illustration Workshop",
    description:
      "Learn modern digital art workflows using industry-standard creative tools.",
    date: "14 July 2026",
    venue: "Design Studio",
    link: "#",
  },
  {
    title: "Open Mic & Poetry Night",
    description:
      "An evening celebrating spoken word, live music, and student creativity.",
    date: "20 July 2026",
    venue: "Student Lounge",
    link: "#",
  },
];

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("span");
  dot.className = "dot";

  dot.onclick = function () {
    currentSlide(i + 1);
  };

  dotsContainer.appendChild(dot);
}

const thumbnailFiles = [
  "arts_exhibition_night.jpg",
  "creative_industry_networking.jpg",
  "photography_workshop.jpg",
  "film_screening_night.jpg",
  "creative_panel_session.jpg",
  "creative_illustration_workshop.jpg",
  "mic.jpg",
];

const thumbnailAlts = [
  "An image of an art gallery with various paintings on display.",
  "Many people sitting on a chair listening to a talk",
  "A person holding a camera.",
  "An image of a retro movie theatre.",
  "People gathering in a room with many paintings having discussions.",
  "Person drawing a prawn digitally with an Ipad.",
  "An electrical microphone with a stand box.",
];

for (let i = 0; i < slides.length; i++) {
  let thumb = document.createElement("img");

  thumb.src = `images/events/thumbnail/${thumbnailFiles[i]}`;
  thumb.alt = thumbnailAlts[i];
  thumb.className = "thumbnail";

  thumb.onclick = function () {
    currentSlide(i + 1);
  };

  thumbnailRow.appendChild(thumb);
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let dots = document.getElementsByClassName("dot");
  let thumbs = document.getElementsByClassName("thumbnail");
  let counts = document.getElementsByClassName("numbertext");

  const total = slides.length;

  if (n > total) slideIndex = 1;
  if (n < 1) slideIndex = total;

  // hide all slides
  for (let i = 0; i < total; i++) {
    slides[i].style.display = "none";
    counts[i].innerHTML = `${i + 1} / ${total}`;
  }

  // reset states
  for (let dot of dots) dot.classList.remove("active");
  for (let thumb of thumbs) thumb.classList.remove("active-thumb");

  // show current slide
  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].classList.add("active");
  thumbs[slideIndex - 1].classList.add("active-thumb");

  // update event info
  const currentEvent = eventData[slideIndex - 1];

  document.getElementById("event-title").textContent = currentEvent.title;
  document.getElementById("event-description").textContent =
    currentEvent.description;
  document.getElementById("event-date").textContent =
    `Date: ${currentEvent.date}`;
  document.getElementById("event-venue").textContent =
    `Venue: ${currentEvent.venue}`;
  document.getElementById("event-link").href = currentEvent.link;
}
