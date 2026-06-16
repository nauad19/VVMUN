function renderEbProfile() {
  const profile = document.getElementById("ebProfile");
  if (!profile) return;

  const params = new URLSearchParams(window.location.search);
  const member = getMemberById(params.get("id") || "ananya-rao");

  if (!member) {
    profile.innerHTML = `
      <section class="section detail-section">
        <div class="empty-state">
          <h1>Profile not found</h1>
          <p>The executive board profile link appears to be incorrect.</p>
          <a class="btn primary" href="index.html#committees">Return to Committees</a>
        </div>
      </section>
    `;
    return;
  }

  const committee = getCommitteeById(member.committee);
  profile.innerHTML = `
    <section class="profile-hero">
      <div class="profile-photo-wrap reveal">
        <img src="${member.photo}" alt="${member.name}">
      </div>
      <div class="profile-copy reveal">
        <p class="eyebrow">${committee ? committee.shortName : "VVMUN"} Executive Board</p>
        <h1>${member.name}</h1>
        <p class="profile-position">${member.position}</p>
        <p>${member.experience}</p>
        <a class="btn ghost light" href="committee.html?id=${member.committee}">Back to Committee</a>
      </div>
    </section>

    <section class="section profile-section">
      <div class="profile-grid">
        <article class="profile-panel reveal">
          <p class="section-kicker">Previous MUN Achievements</p>
          <h2>Record of distinction</h2>
          <p>${member.achievements}</p>
        </article>
        <article class="profile-panel wit reveal">
          <p class="section-kicker">A Diplomatic Aside</p>
          <h2>Elegantly accurate, mildly incriminating.</h2>
          <p>${member.funBio}</p>
        </article>
      </div>
    </section>
  `;

  profile.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

renderEbProfile();
