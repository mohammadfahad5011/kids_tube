// 🔹 Add your YouTube Shorts IDs here
const videos = [
  "8jM4XT-5CUA",
  "71_8w7volNY",
  "NsMKvVdEPkw"
];

const container = document.getElementById("videoContainer");

// 🔹 Create video sections
videos.forEach(id => {
  const div = document.createElement("div");
  div.className = "video";

  div.innerHTML = `
    <iframe 
      src="https://www.youtube.com/embed/${id}?playsinline=1&rel=0&modestbranding=1"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
  `;

  container.appendChild(div);
});


// 🔹 Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}