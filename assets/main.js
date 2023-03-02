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
