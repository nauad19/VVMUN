const loader = document.getElementById("loader");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navLogo = document.getElementById("navLogo");
const achievement = document.getElementById("achievement");

window.addEventListener("load", () => {
  if (loader) {
    setTimeout(() => loader.classList.add("hidden"), 650);
  }
});

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

let logoClicks = 0;
if (navLogo && achievement) {
  navLogo.addEventListener("click", (event) => {
    logoClicks += 1;
    if (logoClicks === 10) {
      event.preventDefault();
      achievement.classList.add("show");
      setTimeout(() => achievement.classList.remove("show"), 4200);
      logoClicks = 0;
    }
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal, .committee-card, .eb-card").forEach((element) => {
  revealObserver.observe(element);
});

function buildCommitteeCard(committee) {
  const card = document.createElement("article");
  card.className = "committee-card committee-card-simple reveal";
  card.innerHTML = `
    <h3>${committee.name}</h3>
    <a class="btn ghost" href="committee.html?id=${committee.id}">View Committee</a>
  `;
  revealObserver.observe(card);
  return card;
}

function renderCommitteeCards(list) {
  const container = document.getElementById("committeeCards");
  if (!container) return;

  container.innerHTML = "";
  if (!list.length) {
    container.innerHTML = `<p class="empty-state">No committees match your search.</p>`;
    return;
  }

  list.forEach((committee) => container.appendChild(buildCommitteeCard(committee)));
}

const searchInput = document.getElementById("committeeSearch");
if (searchInput) {
  renderCommitteeCards(committees);
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const filtered = committees.filter((committee) => {
      return [committee.name, committee.shortName, committee.agenda, committee.description, committee.difficulty]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
    renderCommitteeCards(filtered);
  });
}

function renderCommitteePage() {
  const detail = document.getElementById("committeeDetail");
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const committee = getCommitteeById(params.get("id") || "unsc");

  if (!committee) {
    detail.innerHTML = `
      <section class="section detail-section">
        <div class="empty-state">
          <h1>Committee not found</h1>
          <p>The committee link appears to be incorrect.</p>
          <a class="btn primary" href="index.html#committees">Return to Committees</a>
        </div>
      </section>
    `;
    return;
  }

  const members = getMembersByCommittee(committee.id);
  detail.innerHTML = `
    <section class="committee-hero">
      <img src="${committee.banner}" alt="${committee.name} banner">
      <div>
        <p class="eyebrow">${committee.shortName}</p>
        <h1>${committee.name}</h1>
      </div>
    </section>

    <section class="section detail-section">
      <div class="section-heading reveal compact">
        <p class="section-kicker">Executive Board</p>
        <h2>${committee.name}</h2>
      </div>
      <div class="eb-grid">
        ${members.length ? members.map((member) => `
  <article class="eb-card reveal">
    <img src="${member.photo}" alt="${member.name}">
    <h3>${member.name}</h3>
    <p>${member.position}</p>
    <a class="btn ghost" href="eb.html?id=${member.id}">View Profile</a>
  </article>
`).join("") : ``}
      </div>
    </section>
  `;

  detail.querySelectorAll(".reveal, .eb-card").forEach((element) => revealObserver.observe(element));
}

renderCommitteePage();
