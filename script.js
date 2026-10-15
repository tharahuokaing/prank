document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.getElementById("explore-btn");
    const prankSection = document.getElementById("prank-videos");

    // Scroll trigger for Hero CTA Button
    if (exploreBtn && prankSection) {
        exploreBtn.addEventListener("click", () => {
            prankSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    console.log("UNIVERSE HUOKAING THARA Prank Video Platform initialized successfully.");
});

/**
 * Global function to handle click-to-run auto-play on multiple video wrappers
 * @param {HTMLElement} overlayEl - The video overlay element clicked by the user
 */
function playVideo(overlayEl) {
    if (!overlayEl) return;

    // Fade out overlay
    overlayEl.classList.add("hidden");

    // Find sibling iframe inside the same wrapper container
    const wrapper = overlayEl.closest(".video-wrapper");
    if (wrapper) {
        const iframe = wrapper.querySelector("iframe");
        if (iframe) {
            let currentSrc = iframe.src;
            if (!currentSrc.includes("autoplay=1")) {
                iframe.src = currentSrc + "&autoplay=1";
            }
        }
    }
}
