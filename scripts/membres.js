const memberList = document.getElementById("membres-list");

GRADE = {
    "Commandant": "commandant",
    "Député": "depute",
    "Officier": "officier",
    "Sous-Officier": "sous-officier",
    "Créateur de contenu": "createurdecontenu",
    "Membre": "membre"
}

function addMember(member) {
    /*
    <article class="membres-membre" itemscope itemtype="https://schema.org/Person">
        <h2>
            <a href="/membre/Nom" title="Voir le profile">
                <span itemprop="callSign">Nom</span>
                <span> — <span>Grade</span></span>
            </a>
        </h2>
        <p itemprop="description">Description</p>
    </article>
    */
    const article = document.createElement("article");
    article.classList.add("membres-membre");
    article.setAttribute("itemscope", "");
    article.setAttribute("itemtype", "https://schema.org/Person");
    const name = document.createElement("span");
    name.textContent = member.name;
    name.setAttribute("itemprop", "callSign");
    const grade = document.createElement("span");
    grade.textContent = member.grade;
    grade.className = `${GRADE[member.grade]} shadow`;
    const grade2 = document.createElement("span");
    grade2.textContent = " — ";
    grade2.appendChild(grade);
    const a = document.createElement("a");
    a.appendChild(name);
    a.appendChild(grade2);
    a.href = `/membre/${member.name}`;
    a.setAttribute("title", "Voir le profile");
    const h2 = document.createElement("h2");
    h2.appendChild(a); 
    article.appendChild(h2);
    if (member.description != "Description \u00e0 ajouter.") {
        const p = document.createElement("p");
        p.textContent = member.description;
        p.setAttribute("itemprop", "description");
        article.appendChild(p);
    }
    memberList.appendChild(article);
    return;
}

fetch("/data/membres.json")
.then(response => response.json())
.then(data => {
    for (const member of data) {
        addMember(member);
    }
});