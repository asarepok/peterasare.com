document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#intro", {
    speed: 100,
    startDelay: 900,
  })
    .type("Peter", { delay: 100 })
    .pause(80)
    .type(" Adare")
    .pause(120)
    .move(-3)
    .delete(1)
    .type("s")
    .move(3, { instant: false })
    .type(" :(", { delay: 100 })
    .pause(300)
    .delete(1)
    .type(")")
    .go();
});

function copy() {
  let npub = document.getElementById("npub");
  let copy_icon = document.getElementById("copy-icon");

  npub.select();
  npub.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(npub.value);
  if (copy_icon.classList.contains("bxs-copy")) {
    copy_icon.classList.remove("bxs-copy");
    copy_icon.classList.add("bx-check");

    setTimeout(() => {
      copy_icon.classList.remove("bx-check");
      copy_icon.classList.add("bxs-copy");
    }, 5000);
  }
}
