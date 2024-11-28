// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000, // Animation duration
    offset: 50, // Offset for triggering animations
  });
  
  // Back-to-Top Button
  const backToTopButton = document.getElementById('btn-back-to-top');
  window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  };
  
  backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Portfolio Filter
  const filterButtons = document.querySelectorAll('.filter-item');
  const portfolioItems = document.querySelectorAll('.post');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const filterValue = this.getAttribute('data-filter');
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  