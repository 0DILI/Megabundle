document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animated-box[data-animate]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.animate; // Get animation type
          entry.target.classList.add(animationType); // Add the animation class

          // Remove the animation class after it completes
          const animationDuration =
            getComputedStyle(entry.target).animationDuration || "1s";
          setTimeout(() => {
            entry.target.classList.remove(animationType);
          }, parseFloat(animationDuration) * 1000); // Convert seconds to milliseconds

          // Optional: Stop observing the element after animation
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Trigger animation when 50% of the element is visible
    }
  );

  elements.forEach((el) => observer.observe(el));
});
