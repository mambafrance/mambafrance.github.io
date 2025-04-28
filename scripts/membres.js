const memberList = document.getElementById("membres-list");

function addMember(member) {
    /*
    <article class="membres-membre">
        <h2><a href="/membre/Nom">Nom — Grade</a></h2>
        <p>Description</p>
    </article>
    */
    const article = document.createElement("article");
    article.classList.add("membres-membre");
    const a = document.createElement("a");
    a.textContent = `${member.name} — ${member.grade}`;
    a.href = `/membre/${member.name}`;
    const h2 = document.createElement("h2");
    h2.appendChild(a); 
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