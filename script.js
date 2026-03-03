const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "1s";
  observer.observe(sec);
});

const reviewForm = document.getElementById("reviewForm");
// review still not working to be changed and adjusted
if (reviewForm) {
  reviewForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks for your review ❤️");
    e.target.reset();
  });
}

const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dot");

let index = 0;

if (track && dots.length > 0) {
  setInterval(() => {
    index = (index + 1) % dots.length;
    updateCarousel();
  }, 3500);
}

// updated the why chiti and why trust chitti block to move horizontally in given direction
function updateCarousel(){
  if (!track || dots.length === 0) {
    return;
  }

  track.style.transform = `translateX(-${index * 300}px)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

function initMarquee(gridSelector){
  const grid = document.querySelector(gridSelector);

  if (!grid || grid.dataset.marqueeReady === "true") {
    return;
  }

  const items = Array.from(grid.children);

  if (items.length === 0) {
    return;
  }

  items.forEach(item => {
    grid.appendChild(item.cloneNode(true));
  });

  grid.dataset.marqueeReady = "true";
}

initMarquee(".feature-grid");
initMarquee(".trust-grid");




// Problems
// reviews not comin to us #review form is not working which stops js execution
// the nhkss on navigation bar when pressed shld reach out to above i.e beginning of page