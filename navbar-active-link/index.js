// currentLoc = window.location.href;
// menuItems = document.querySelectorAll(" nav ul  a")


// menuItems.forEach(item => {
// 	if (item.href === currentLoc) {
// 		item.className = 'active';

// 	}
// });

document.addEventListener("DOMContentLoaded", function () {
	// Get all navigation links
	var navLinks = document.querySelectorAll('.nav-link');

	// Add click event listener to each link
	navLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			// Remove "active" class from all links
			navLinks.forEach((otherLink) => {
				otherLink.classList.remove('active');
			});

			// Add "active" class to the clicked link
			link.classList.add('active');
		});
	});
});
