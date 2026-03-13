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
    let details = document.getElementById(`${reglement}`);
    details.open = true;
    let rule = document.getElementById(`${reglement}${term}`);
    title = rule.getElementsByTagName("h2")[0];
    if (`${term}`.includes(".")) {
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
