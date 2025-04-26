const headerLayer = document.getElementById("header-layer");

window.onscroll = (event) => {
    if (window.scrollY == 0) {
        headerLayer.classList.remove("header-layer-gradient");
        return;
    }
    if (headerLayer.classList.contains("header-layer-gradient")) return;
    headerLayer.classList.add("header-layer-gradient");
}