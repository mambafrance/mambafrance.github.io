const sleep = ms => new Promise(res => setTimeout(res, ms));

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let title = null;

async function terms(reglement, term) {
    if (term == undefined) {
        term = "";
    }
    let details = document.getElementById(`${reglement}`);
    details.open = true;
    let rule = document.getElementById(`${reglement}${term}`);
    title = rule.getElementsByTagName("h2")[0];
    if ((`${term}`.includes(".") && term != 0.1) || term == 0) {
        title = rule;
    }
    title.scrollIntoView({
        block: "center",
        inline: "center"
    });
    return;
}

setInterval(async () => {
    if (!title) { return; };
    if (!isElementInViewport(title)) { return; };
    if (!title) { return; };
    title.classList.add("mark");
    await sleep(2000);
    if (!title) { return; };
    title.classList.remove("mark");
    title = null;
}, 100);

const search = document.getElementById("search");

search.addEventListener("keyup", (event) => {
    if (event.key == "Escape") {
        const marks = document.querySelectorAll("mark");
        marks.forEach(mark => {
            mark.replaceWith(mark.textContent);
        });
        search.blur();
        return;
    }
    if (event.key != "Enter") { return; }
    search.blur();
    const marks = document.querySelectorAll("mark");
    marks.forEach(mark => {
        mark.replaceWith(mark.textContent);
    });
    const input = search.value.toLowerCase();
    if (input) {
        for (let i = 1; i < 3; i++) {
            let details = document.getElementById(`${i}`);
            details.open = true;
        }
        
    }
    const nodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    while (n = walker.nextNode()) nodes.push(n);
    for (let node of nodes) {
        const text = node.nodeValue.toLowerCase();
        if (text.includes(input)) {
            const span = document.createElement("span");
            const regex = new RegExp(`(${input})`, "gi");
            span.innerHTML = node.nodeValue.replace(regex, "<mark>$1</mark>");
            node.replaceWith(span);
        }
    }
});

document.addEventListener("keyup", (event) => {
    if (event.ctrlKey && event.key == ":") {
        search.focus();
        search.scrollIntoView({
            block: "center",
            inline: "center"
        });
    }
});
