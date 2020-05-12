viewingModalId = "";

$(".details").click(function () {
  viewingModalId = "#" + this.id + "Modal";
  $(viewingModalId).fadeIn("slow");
});

$(".close-modal").click(() => {
  $(viewingModalId).fadeOut("slow");
  viewingModalId = "";
});

window.onclick = (event) => {
  if (viewingModalId) {
    if ($(event.target).attr("class") == "modal-frame") {
      $(viewingModalId).fadeOut("slow");
      viewingModalId = "";
    }
  }
};
