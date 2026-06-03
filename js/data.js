// js/data.js

const rooms = [
    {
        id: 1,
        title: "Vardagsrum som känns lite tråkigt",
        image: "images/img_livingroom.jpg",
        description: "Vi har precis flyttat in i radhus och vill ha tips på hur vi kan göra det mysigare och mer personligt. Behöver hjälp med färg, möblering och dekoration.",
        comments: 14,
        likes: 89
    },
    {
        id: 2,
        title: "Vitt kök som saknar värme",
        image: "images/img_kitchen.jpg",
        description: "Nyrenoverat kök men det känns kalt. Behöver hjälp med färg, belysning och dekoration för att skapa en varm och inbjudande känsla.",
        comments: 21,
        likes: 112
    },
    {
        id: 3,
        title: "Barnrum till 5-åringen",
        image: "images/img_bedroom.jpg",
        description: "Vill skapa ett rum som är både lekfullt och lugnt. Tips på färger, smart förvaring och hur man kombinerar lek och vila.",
        comments: 18,
        likes: 76
    },
    {
        id: 4,
        title: "Tråkigt badrum från 90-talet",
        image: "images/img_bathroom.jpg",
        description: "Vill göra om badrummet till en SPA-känsla på budget. Tips på färg, material och detaljer som gör stor skillnad.",
        comments: 27,
        likes: 94
    },
    {
        id: 5,
        title: "Första egna sovrummet",
        image: "images/img_bedroom2.jpg",
        description: "Precis flyttat hemifrån. Hur gör man ett litet sovrum mysigt och vuxet utan att det blir plottrigt?",
        comments: 31,
        likes: 128
    },
    {
        id: 6,
        title: "Matplats som känns tom",
        image: "images/img_dining.jpg",
        description: "Vill skapa en trevlig matplats där man verkligen vill sitta länge och umgås. Tips på belysning, textilier och dekoration.",
        comments: 15,
        likes: 67
    },
    {
        id: 7,
        title: "Kök i gammal lägenhet",
        image: "images/img_kitchen2.jpg",
        description: "Hög takhöjd men känns mörkt. Tips på hur man kan lysa upp, modernisera och skapa en varm känsla.",
        comments: 24,
        likes: 105
    },
    {
        id: 8,
        title: "Vardagsrum med högt i tak",
        image: "images/img_livingroom2.jpg",
        description: "Vill skapa mer mys och personlighet i det stora rummet. Tips på hur man utnyttjar höjden och skapar flera zoner.",
        comments: 19,
        likes: 88
    }
];

// Gör rooms tillgänglig globalt
window.rooms = rooms;