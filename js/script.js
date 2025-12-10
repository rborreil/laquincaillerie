document.addEventListener("DOMContentLoaded", function () {
  // ---- Demo data ---------------------------------------------------------
  const MENUSTARS = [
    {
      name: "Pavé de boeuf (tende de tranche)",
      desc: "Grâtin dauphinois, salade, sauce bordelaise",
      from: "",
      price: 22,
      tag: "signature",
      img: "./img/planche-quincaillerie-scaled.jpg",
    },
    {
      name: "Le poireau vinaigrette à la noisette",
      desc: "Un poireau vinaigrette à la noisette tout simplement",
      from: "",
      price: 7,
      tag: "signature",
      img: "./img/entree-poireau-quincaillerie.jpg",
    },
    {
      name: "Tapas",
      desc: "Pâté basque, Houmous, Croquetas, Fuet, ...",
      from: "À partir de",
      price: 7,
      tag: "signature",
      img: "./img/tapas-quincaillerie.jpg",
    },
  ];
  const MENUS = [
    {
      name: "Tapas & Entrées",
      desc: "",
      img: "./img/menu-1.jpg",
    },
    {
      name: "Plats & Desserts",
      desc: "",
      img: "./img/menu-2.jpg",
    },
    {
      name: "Boissons Sans Alcool",
      desc: "",
      img: "./img/menu-3.jpg",
    },
    {
      name: "Boissons Alcoolisées",
      desc: "",
      img: "./img/menu-4.jpg",
    },
  ];
  const GALLERY = [
    "https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1cmZ8ZW58MHx8MHx8fDI%3D",

    "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YyVDMyVCNHRlJTIwZGUlMjBib2V1ZnxlbnwwfHwwfHx8Mg%3D%3D",

    "./img/sunset-phare.jpg",

    "https://images.unsplash.com/photo-1616631124348-c63521eb484c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmNoZSUyMGNoYXJjdXRlcmllfGVufDB8fDB8fHwy",

    "https://images.unsplash.com/photo-1630257574313-9bacc3c521d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZHVlJTIwc2F2b3lhcmRlfGVufDB8fDB8fHwy",

    "./img/Logo-blanc-fond-transparent-La-Quincaillerie-2048x879.png",

    "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmklQzMlQThyZXxlbnwwfHwwfHx8Mg%3D%3D",

    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRqJTIwc2V0fGVufDB8fDB8fHwy3D",

    "./img/sunset-surfeurs.jpg",

    "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzJTIwZGUlMjBtZXIlMjBmcmFpc3xlbnwwfHwwfHx8Mg%3D%3D",

    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8Mg%3D%3D",

    "https://images.unsplash.com/photo-1754685630685-fd0539d63543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwc3BvcnR8ZW58MHx8MHx8fDI%3D",
  ];
  const NOSEVENTS = [
    {
      title: "One Human Show",
      date: "10 janvier · 18:30",
      desc: "Amateurs de la blague & des franches rigolades",
      img: "https://images.unsplash.com/photo-1607805074620-5802aee47bdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tJUMzJUE5ZGllbnxlbnwwfHwwfHx8Mg%3D%3D",
    },
    {
      title: "DJ Sunset Session",
      date: "12 février · 19:00",
      desc: "Cocktails signature & vibes chill sur la terrasse.",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGp8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Brunch Marée Basse",
      date: "21 mai · 11:30",
      desc: "Buffet fruits de mer & grillades minute.",
      img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  const VOSEVENTS = [
    {
      title: "Privatisation",
      // date: "12 sept · 19:00",
      desc: "Jusqu'à 120 pers · DJ set · Bar signature · Scénographie · One Human Show.",
      img: "https://images.unsplash.com/photo-1635548166842-bf67bacbefaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ciVDMyVBOXNlcnZhdGlvbnxlbnwwfHwwfHx8Mg%3D%3D",
    },
    {
      title: "Anniversaires, EVG / EVJF, Afterworks",
      // date: "21 sept · 18:30",
      desc: "Formules spéciales & services spéciaux, discutons-en !",
      img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5uaXZlcnNhaXJlfGVufDB8fDB8fHwy",
    },
    {
      // title: "B2B -- Off-sites, séminaires, lancements produits",
      title: "Animations sur-mesure",
      // date: "21 sept · 11:30",
      // desc: "Ateliers, chef table, afterwork avec musique.",
      desc: "Tournoi de beach volley, initiation surf, jeux basques en plein air.",
      // img: "https://images.unsplash.com/photo-1531380096452-2c5fa9bb9589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2FrbGV5fGVufDB8fDB8fHwy",
      img: "https://images.unsplash.com/photo-1631493657014-9d26a046d89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwc3BvcnR8ZW58MHx8MHx8fDI%3D",
    },
  ];

  // ---- Helpers -----------------------------------------------------------
  const euros = (n) => n.toFixed(2).replace(".", ",") + " €";
  const $ = (s) => document.querySelector(s);

  // GRILLES
  // Menu Stars
  const msgrid = $("#menu-stars-grid");
  msgrid.innerHTML = MENUSTARS.map(
    (m) => `
      <article class="card overflow-hidden">
        <div class="h-44 w-full bg-cover bg-center" style="background-image:url('${
          m.img
        }')"></div>
        <div class="p-4">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="font-semibold">${m.name}</h3>
              <p class="text-slate-400 text-sm">${m.desc}</p>
            </div>
            <div>
              <p class="text-slate-400 text-sm italic">${m.from}</p>
              <div class="brand text-xl">${euros(m.price)}</div>
            </div>
          </div>
        <div class="mt-2"><span class="chip">${m.tag}</span></div>
        </div>
      </article> `
  ).join("");

  // Menu Regular
  const mgrid = $("#menu-grid");
  mgrid.innerHTML = MENUS.map(
    (m) => `
      <article class="menu-item card overflow-hidden cursor-pointer" data-image="${m.img}">
        <div class="thumb h-44 w-full bg-cover bg-top" style="background-image:url('${m.img}')"></div>
        <div class="p-4 info text-center py-10 md:py-20 lg:py-32">
              <h3 class="font-semibold">${m.name}</h3>
              <p class="text-slate-400 text-sm">${m.desc}</p>
        </div>
      </article> `
  ).join("");

  // JS pour afficher l’image au clic
  // const mgrid = document.getElementById("menu-grid");

  mgrid.addEventListener("click", (e) => {
    const item = e.target.closest(".menu-item");
    if (!item) return;

    // Si déjà ouverte → toggle off (replier)
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      item.querySelector("img")?.remove();
      return;
    }

    // Ferme les autres
    document.querySelectorAll(".menu-item.open").forEach((el) => {
      el.classList.remove("open");
      el.querySelector("img")?.remove();
    });

    // Ouvre celle-ci
    item.classList.add("open");

    const fullImg = document.createElement("img");
    fullImg.src = item.dataset.image;
    fullImg.className = "w-full h-auto rounded-xl";

    item.appendChild(fullImg);
  });

  // Gallery
  const gal = $("#gal");
  gal.innerHTML = GALLERY.map(
    (u) =>
      `<div class= "aspect-square rounded-xl overflow-hidden border border-slate-800 bg-cover bg-center" style = "background-image:url('${u}')"></div>`
  ).join("");

  // Nos Events
  const oeg = $("#nos-events-grid");
  oeg.innerHTML = NOSEVENTS.map(
    (e) => `
<article class= "card overflow-hidden">
        <div class="h-40 bg-cover bg-[50%_50%]" style="background-image:url('${e.img}');"></div>
        <div class="p-4">
          <div class="text-sm text-slate-400">${e.date}</div>
          <h3 class="font-semibold">${e.title}</h3>
          <p class="text-slate-400 text-sm">${e.desc}</p>
        </div>
      </article> `
  ).join("");

  // Vos Events
  const yeg = $("#vos-events-grid");
  yeg.innerHTML = VOSEVENTS.map(
    (e) => `
<article class= "card overflow-hidden">
        <div class="h-40 bg-cover bg-[0%_58%]" style="background-image:url('${e.img}');"></div>
        <div class="p-4">
          <h3 class="font-semibold">${e.title}</h3>
          <p class="text-slate-400 text-sm">${e.desc}</p>
        </div>
      </article> `
  ).join("");

  // Forms (demo)

  // RESA
  const resa = $("#resa");
  if (resa) {
    resa.addEventListener("submit", (e) => {
      e.preventDefault();
      $("#resa-msg").textContent = "Réservation envoyée ✔️ (démo)";
      e.target.reset();
    });
  }

  // B2B
  const b2b = $("#b2b");
  if (b2b) {
    b2b.addEventListener("submit", (e) => {
      e.preventDefault();
      $("#b2b-msg").textContent = "Demande envoyée ✔️ (démo)";
      e.target.reset();
    });
  }

  // Newsletter
  const nl = $("#nl");
  if (nl) {
    nl.addEventListener("submit", (e) => {
      e.preventDefault();
      $("#nl-msg").textContent = "Inscription confirmée ✔️ (démo)";
      e.target.reset();
    });
  }

  // Mobile nav
  //   document.getElementById("burger").addEventListener("click", () => {
  //     const m = document.getElementById("mobile");
  //     m.classList.toggle("hidden");
  //   });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Burger Menu : Animation
  const burger = document.getElementById("burger");
  const mobile = document.getElementById("mobile");

  // Toggle menu
  burger.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpening = !mobile.classList.contains("hidden");

    if (mobile.classList.contains("hidden")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Fermeture extérieure
  document.addEventListener("click", (e) => {
    if (!mobile.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });

  function openMenu() {
    mobile.classList.remove("hidden");
    burger.classList.add("open");
    requestAnimationFrame(() => {
      mobile.classList.remove("opacity-0", "scale-95");
      mobile.classList.add("opacity-100", "scale-100");
    });
  }

  function closeMenu() {
    mobile.classList.add("opacity-0", "scale-95");
    mobile.classList.remove("opacity-100", "scale-100");
    burger.classList.remove("open");

    setTimeout(() => {
      mobile.classList.add("hidden");
    }, 300); // doit correspondre à duration-300
  }
});
