document.addEventListener("DOMContentLoaded", function () {
  // ---- Demo data ---------------------------------------------------------
  const MENUSTARS = [
    {
      name: "Pavé de boeuf (tende de tranche)",
      desc: "Grâtin dauphinois, salade, sauce bordelaise",
      from: "",
      price: 22,
      tag: "signature",
      img: "./img/planche-canaillerie-scaled.jpg",
    },
    {
      name: "Le poireau vinaigrette à la noisette",
      desc: "Un poireau vinaigrette à la noisette tout simplement",
      from: "",
      price: 7,
      tag: "signature",
      img: "./img/entree-poireau-canaillerie.jpg",
    },
    {
      name: "Tapas",
      desc: "Pâté basque, Houmous, Croquetas, Fuet, ...",
      from: "À partir de",
      price: 7,
      tag: "signature",
      img: "./img/tapas-canaillerie.jpg",
    },
  ];
  const MENUS = [
    {
      name: "Tapas & Entrées",
      desc: "",
      //   price: 29,
      //   tag: "seafood",
      img: "./img/menu-1.jpg",
    },
    {
      name: "Plats & Desserts",
      desc: "",
      //   price: 32,
      //   tag: "spicy",
      img: "./img/menu-2.jpg",
    },
    {
      name: "Boissons Sans Alcool",
      desc: "",
      //   price: 21,
      //   tag: "popular",
      img: "./img/menu-3.jpg",
    },
    {
      name: "Boissons Alcoolisées",
      desc: "",
      //   price: 26,
      //   tag: "gluten-free",
      img: "./img/menu-4.jpg",
    },
  ];
  const GALLERY = [
    "https://images.unsplash.com/photo-1504549380528-d0ab2b0f789c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YyVDMyVCNHRlJTIwZGUlMjBib2V1ZnxlbnwwfHwwfHx8Mg%3D%3D",

    "https://images.unsplash.com/photo-1595173853421-2b410fa57f43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5nbGV0fGVufDB8fDB8fHwy",

    "https://images.unsplash.com/photo-1616631124348-c63521eb484c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmNoZSUyMGNoYXJjdXRlcmllfGVufDB8fDB8fHwy",

    "https://images.unsplash.com/photo-1630257574313-9bacc3c521d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZHVlJTIwc2F2b3lhcmRlfGVufDB8fDB8fHwy",

    "https://www.lacanaillerie-anglet.fr/wp-content/uploads/2025/10/pexels-rdne-12169252.jpg",

    "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmklQzMlQThyZXxlbnwwfHwwfHx8Mg%3D%3D",

    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRqJTIwc2V0fGVufDB8fDB8fHwy3D",

    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaXF1ZXxlbnwwfHwwfHx8Mg%3D%3D",
    
    "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFyfGVufDB8fDB8fHwy",

    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8Mg%3D%3D",

    "./img/Logo-blanc-fond-transparent-La-Canaillerie-2048x879.png",
  ];
  const EVENTS = [
    {
      title: "DJ Sunset Session",
      date: "12 sept · 19:00",
      desc: "Cocktails signature & vibes chill sur la terrasse.",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGp8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Lancement produit",
      date: "21 sept · 18:30",
      desc: "Food pairing grillades/mer · cocktails brandés.",
      img: "https://images.unsplash.com/photo-1554177255-61502b352de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHIlQzMlQTlzZWF1eCUyMHNvY2lhdXh8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Brunch Marée Basse",
      date: "21 sept · 11:30",
      desc: "Buffet fruits de mer & grillades minute.",
      img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // ---- Helpers -----------------------------------------------------------
  const euros = (n) => n.toFixed(2).replace(".", ",") + " €";
  const $ = (s) => document.querySelector(s);

  // Menu Stars cards
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

  // Menu cards
  const mgrid = $("#menu-grid");
  mgrid.innerHTML = MENUS.map(
    (m) => `
      <article class="card overflow-hidden">
        <div class="h-44 w-full bg-cover bg-center" style="background-image:url('${m.img}')"></div>
        <div class="p-4">
              <h3 class="font-semibold">${m.name}</h3>
              <p class="text-slate-400 text-sm">${m.desc}</p>
        </div>
      </article> `
  ).join("");

  // Gallery
  const gal = $("#gal");
  gal.innerHTML = GALLERY.map(
    (u) =>
      `<div class= "aspect-square rounded-xl overflow-hidden border border-slate-800 bg-cover bg-center" style = "background-image:url('${u}')"></div>`
  ).join("");

  // Events
  const eg = $("#event-grid");
  eg.innerHTML = EVENTS.map(
    (e) => `
<article class= "card overflow-hidden">
        <div class="h-40 bg-cover bg-center" style="background-image:url('${e.img}')"></div>
        <div class="p-4">
          <div class="text-sm text-slate-400">${e.date}</div>
          <h3 class="font-semibold">${e.title}</h3>
          <p class="text-slate-400 text-sm">${e.desc}</p>
        </div>
      </article> `
  ).join("");

  // Forms (demo)
  $("#resa").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#resa-msg").textContent = "Réservation envoyée ✔️ (démo)";
    e.target.reset();
  });
  $("#b2b").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#b2b-msg").textContent = "Demande envoyée ✔️ (démo)";
    e.target.reset();
  });
  $("#nl").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#nl-msg").textContent = "Inscription confirmée ✔️ (démo)";
    e.target.reset();
  });

  // Mobile nav
  //   document.getElementById("burger").addEventListener("click", () => {
  //     const m = document.getElementById("mobile");
  //     m.classList.toggle("hidden");
  //   });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Burger Menu : Animation
  const burger = document.getElementById("burger");
  const mobile = document.getElementById("mobile");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobile.classList.toggle("hidden");
  });
});
