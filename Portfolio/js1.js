// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle click event for "DOWNLOAD CV" button
document.querySelector('.intro a.download-cv').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Downloading CV...');
    const downloadLink = document.createElement('a');
    downloadLink.href = 'RESUME.pdf'; 
    downloadLink.download = 'RESUME.pdf'; 
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});

// Handle click event for "View CV" link
document.querySelector('.intro a.view-cv').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Opening CV...');
    window.open('RESUME.pdf', '_blank');
   
});
