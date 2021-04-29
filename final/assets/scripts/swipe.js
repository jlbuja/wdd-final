setTimeout(finishLoading, 3000);

function finishLoading() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("swipe-screen").style.display = "block";
}