javascript: (function () {
  let url = window.location.href;
  if (url.includes("youtube.com/shorts/")) {
    let videoId = url.split("youtube.com/shorts/")[1];
    let newUrl = "https://www.youtube.com/watch?v=" + videoId;
    window.location.href = newUrl;
  }
})();