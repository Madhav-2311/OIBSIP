// Simple smooth scroll (future-ready)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        alert("Navigation coming soon 🚀");
    });
});

// Array of technical images (free Unsplash images)
const images = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1581090700227-4c4f50c5b3c3",
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769"
];

// Pick random image
const randomIndex = Math.floor(Math.random() * images.length);
const selectedImage = images[randomIndex];

// Apply to image tag
document.getElementById("dynamicImage").src = selectedImage + "?auto=format&fit=crop&w=800&q=80";