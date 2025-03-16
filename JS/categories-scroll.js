document.addEventListener('DOMContentLoaded', function() {
  const categoriesGrid = document.querySelector('.categories-grid');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (!categoriesGrid || !prevBtn || !nextBtn) return;

  // Configuration
  const scrollAmount = 300; // Pixels to scroll each time
  const scrollDuration = 500; // Duration of scroll animation in ms
  let isScrolling = false;

  // Function to animate scrolling
  function smoothScroll(element, target, duration) {
      if (isScrolling) return;
      isScrolling = true;
      
      const start = element.scrollLeft;
      const change = target - start;
      const startTime = performance.now();

      function animateScroll(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function
          const easeInOutCubic = progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          element.scrollLeft = start + (change * easeInOutCubic);

          if (progress < 1) {
              requestAnimationFrame(animateScroll);
          } else {
              isScrolling = false;
              updateButtonVisibility();
          }
      }

      requestAnimationFrame(animateScroll);
  }

  // Update button visibility
  function updateButtonVisibility() {
      const { scrollLeft, scrollWidth, clientWidth } = categoriesGrid;
      
      // Show/hide prev button with fade effect
      prevBtn.style.opacity = scrollLeft > 20 ? "1" : "0.3";
      prevBtn.style.pointerEvents = scrollLeft > 20 ? "auto" : "none";
      
      // Show/hide next button with fade effect
      nextBtn.style.opacity = 
          scrollLeft < (scrollWidth - clientWidth - 20) ? "1" : "0.3";
      nextBtn.style.pointerEvents = 
          scrollLeft < (scrollWidth - clientWidth - 20) ? "auto" : "none";
  }

  // Scroll left
  prevBtn.addEventListener('click', () => {
      const target = categoriesGrid.scrollLeft - scrollAmount;
      smoothScroll(categoriesGrid, target, scrollDuration);
  });

  // Scroll right
  nextBtn.addEventListener('click', () => {
      const target = categoriesGrid.scrollLeft + scrollAmount;
      smoothScroll(categoriesGrid, target, scrollDuration);
  });

  // Touch scroll handling
  let touchStartX = 0;
  let touchEndX = 0;

  categoriesGrid.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
  });

  categoriesGrid.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
  });

  function handleSwipe() {
      const swipeDistance = touchStartX - touchEndX;
      if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
          if (swipeDistance > 0) {
              // Swipe left
              const target = categoriesGrid.scrollLeft + scrollAmount;
              smoothScroll(categoriesGrid, target, scrollDuration);
          } else {
              // Swipe right
              const target = categoriesGrid.scrollLeft - scrollAmount;
              smoothScroll(categoriesGrid, target, scrollDuration);
          }
      }
  }

  // Update button visibility on scroll
  categoriesGrid.addEventListener('scroll', () => {
      requestAnimationFrame(updateButtonVisibility);
  });

  // Initial button visibility check
  updateButtonVisibility();

  // Window resize handler
  let resizeTimer;
  window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
          updateButtonVisibility();
      }, 250);
  });
});