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
        <a href="/membre/Nom" title="Voir le profile" class="membres-a">
            <img src="/images/avatar/ID.image" alt="Nom icône" width="50" id="ID" />
            <h2>
                <span itemprop="callSign">Nom</span>
                <span> — <span>Grade</span></span>
            </h2>
        </a>
        <p itemprop="description">Description</p>
    </article>
    */
    const article = document.createElement("article");
    article.classList.add("membres-membre");
    article.setAttribute("itemscope", "");
    article.setAttribute("itemtype", "https://schema.org/Person");
    const image = document.createElement("img");
    image.src = `/images/avatar/${member.uid}.webp`;
    fetch(`/images/avatar/${member.uid}.webp`)
    .then(response => {
        if (response.status != 404) { return; }
        image.src = "/images/avatar/default.avif";
    });
    image.alt = `${member.name} icône`;
    const name = document.createElement("span");
    name.textContent = member.name;
    name.setAttribute("itemprop", "callSign");
    const grade = document.createElement("span");
    grade.textContent = member.grade;
    grade.className = `${GRADE[member.grade]} shadow`;
    const grade2 = document.createElement("span");
    grade2.textContent = " — ";
    grade2.appendChild(grade);
    const h2 = document.createElement("h2");
    h2.appendChild(name);
    h2.appendChild(grade2);
    const a = document.createElement("a");
    a.href = `/membre/${member.name}`;
    a.setAttribute("title", "Voir le profile");
    a.classList.add("membres-a");
    a.appendChild(image);
    a.appendChild(h2); 
    article.appendChild(a);
    if (member.description) {
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
