function setupJockey() {
  let contentLHRChangeJockey1 = document.querySelector(".JockeyR-1");
  let contentLHRChangeJockey2 = document.querySelector(".JockeyR-2");
  let contentLHRChangeJockey3 = document.querySelector(".JockeyR-3");
  let changeLHRButtonJockey = document.querySelector(".btnJockey");

  if (
    contentLHRChangeJockey1 &&
    contentLHRChangeJockey2 &&
    contentLHRChangeJockey3 &&
    changeLHRButtonJockey
  ) {
    contentLHRChangeJockey1.style.display = "block";
    contentLHRChangeJockey2.style.display = "none";
    contentLHRChangeJockey3.style.display = "none";

    changeLHRButtonJockey.addEventListener("click", function () {
      if (contentLHRChangeJockey1.style.display === "block") {
        contentLHRChangeJockey1.style.display = "none";
        contentLHRChangeJockey2.style.display = "block";
        contentLHRChangeJockey3.style.display = "none";
        changeLHRButtonJockey.textContent = "3着の騎手は？";
      } else if (contentLHRChangeJockey2.style.display === "block") {
        contentLHRChangeJockey1.style.display = "none";
        contentLHRChangeJockey2.style.display = "none";
        contentLHRChangeJockey3.style.display = "block";
        changeLHRButtonJockey.textContent = "1着の騎手は？";
      } else {
        contentLHRChangeJockey1.style.display = "block";
        contentLHRChangeJockey2.style.display = "none";
        contentLHRChangeJockey3.style.display = "none";
        changeLHRButtonJockey.textContent = "2着の騎手は？";
      }
    });
  }
}

window.onload = function () {
  setupJockey();
};
