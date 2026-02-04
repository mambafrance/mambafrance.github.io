function terms(reglement, term) {
    let details = document.getElementById(`${reglement}`);
    details.open = true;
    document.getElementById(`${reglement}${term}`)
    .scrollIntoView({
        block: "center",
        inline: "center"
    });
    return;
}
