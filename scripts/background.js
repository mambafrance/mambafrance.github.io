const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

const style = `
main {
    background: url(/images/wallpaper/${Math.floor(Math.random() * 4 + 1)}.webp`;

addCSS(style);
