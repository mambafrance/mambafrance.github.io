const memberList = document.getElementById("membres-list");

function addMember(member) {
    /*
    <article class="membres-membre">
        <h2>Nom — Grade</h2>
        <p>Description</p>
    </article>
    */
    const article = document.createElement("article");
    article.classList.add("membres-membre");
    const h2 = document.createElement("h2");
    h2.textContent = `${member.name} — ${member.grade}`;
    const p = document.createElement("p");
    p.textContent = member.description;
    article.appendChild(h2);
    article.appendChild(p);
    memberList.appendChild(article);
}

fetch("/data/membres.json")
.then(response => response.json())
.then(data => {
    for (const member of data) {
        addMember(member);
    }
});