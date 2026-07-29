document.getElementById("year").textContent = new Date().getFullYear();


const signatureLockup = document.querySelector(".signature-lockup");

function replaySignature() {
  if (!signatureLockup) return;
  const reveal = signatureLockup.querySelector(".signature-reveal");
  const pen = signatureLockup.querySelector(".signature-pen");
  [reveal, pen].forEach((element) => {
    if (!element) return;
    element.style.animation = "none";
    void element.offsetWidth;
    element.style.animation = "";
  });
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && window.scrollY < 80) replaySignature();
});
