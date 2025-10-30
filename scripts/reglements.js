function terms(reglement, term) {
    document.getElementById(`${reglement}${term}`)
    .scrollIntoView({
        block: "center",
        inline: "center"
    });
    return;
}