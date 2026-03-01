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

document.getElementById("reviewForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for your review ❤️");
  e.target.reset();
});
const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dot");

let index = 0;

setInterval(() => {
  index = (index + 1) % dots.length;
  updateCarousel();
}, 3500);

function updateCarousel(){
  track.style.transform = `translateX(-${index * 300}px)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const ans = item.querySelector(".faq-answer");
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});