export type ImageRef = {
  src: string;
  ratio: string;
  cap?: string;
  span?: number;
};

export type TextBlock = {
  text: string;
  span?: number;
};

export type GalleryItem = ImageRef | TextBlock;

export function isImageRef(item: GalleryItem): item is ImageRef {
  return "src" in item;
}

export type WorkItem = {
  slug: string;
  title: string;
  sub?: string;
  meta: string;
  client: string;
  written?: string;
  mainMaxH?: number;
  heroNote?: string;
  hideClientLine?: boolean;
  heroFull?: boolean;
  hideMetaLabel?: boolean;
  gridZoom?: number;
  captions?: string[];
  link?: { url: string; label: string };
  short: string;
  text: string;
  considerNote?: string;
  home: ImageRef[];
  main: ImageRef | null;
  gallery: GalleryItem[];
  considered: ImageRef[];
};

export const WORK: WorkItem[] = [
  {
    slug: "lost-time",
    title: "In Search of Lost Time",
    sub: "Swann's Way",
    meta: "Book cover design",
    client: "Vaga Publishing House",
    written: "Marcel Proust",
    short: "A cover for Proust's Swann's Way, built around dried, pressed flowers as a stand-in for memory and time.",
    text: "The book's core themes — the elusive nature of voluntary memory, the fluidity of identity, and the fragmented nature of time — guided my visual choices. The flowers used on the cover were picked and dried by me. It took some time, but I found quiet symbolism worth the wait; their petals seem to hold the echo of their look, just as the book invokes the lingering nature of time and recollection.",
    considerNote: "Before landing on the leaf-and-blossom figure, I explored some other scenes. All three kept circling the book's real subject — presence against what's already gone — before the final image said it most simply.",
    home: [{ src: "/images/work/lost_time_cover_png.jpg", ratio: "3750 / 2500" }],
    main: { src: "/images/work/lost_time_cover_png.jpg", ratio: "3750 / 2500", cap: "Book cover" },
    gallery: [],
    considered: [
      { src: "/images/work/lost_time_considered1.jpg", ratio: "1654 / 2480" },
      { src: "/images/work/lost_time_considered2.jpg", ratio: "1654 / 2480" },
    ],
  },
  {
    slug: "king-england",
    title: "I Served the King of England",
    meta: "Book cover design",
    client: "Vaga Publishing House",
    written: "Bohumil Hrabal",
    short: "A second cover for Vaga Publishing House: a bold, vintage illustration style for Hrabal's tragicomic novel.",
    text: "A second cover for “Vaga Publishing House” — this time for Hrabal's picaresque, tragicomic novel about a small, endlessly ambitious hotel waiter and the absurd fortunes and disasters that follow him. Where Proust asked for stillness, Hrabal asked for wit. To properly reflect this narrative complexity and the specific historical setting, I chose a bold, vintage illustration style paired with vibrant colours. This combination aims to capture the novel's subversive spirit and satirical look at ambition and status.",
    considerNote: "Earlier directions leaned on other images from the book; however, all three kept the theme of appetite and spectacle. The final cover pushed it the furthest.",
    home: [{ src: "/images/work/king_england_cover_png.jpg", ratio: "3000 / 2500" }],
    main: { src: "/images/work/king_england_cover_png.jpg", ratio: "3000 / 2500", cap: "Book cover" },
    gallery: [],
    considered: [
      { src: "/images/work/king_england_considered1.jpg", ratio: "397 / 595" },
      { src: "/images/work/king_england_considered2.jpg", ratio: "1654 / 2480" },
      { src: "/images/work/king_england_considered3.jpg", ratio: "1654 / 2480" },
    ],
  },
  {
    slug: "kukutis",
    title: "The Ballads of Kukutis",
    meta: "Book cover design",
    client: "Vaga Publishing House",
    written: "Marcelijus Martinaitis",
    mainMaxH: 860,
    short: "A cover and interior illustrations for Martinaitis's classic, built around the bond between the folk character Kukutis and the bird that shares his name.",
    text: "I was invited to create the cover design and a series of illustrations for “The Ballads of Kukutis”, written by Marcelijus Martinaitis, one of the most prominent Lithuanian poets of the late twentieth century. The book, centred around the legendary and multilayered Lithuanian folk character Kukutis, carries a tone that is simultaneously playful, deeply melancholic, and profoundly contemplative. It is an exploration of the common human experience — its struggles, joys, and essential connection to nature and history.\n\nMy visual concept focuses on Kukutis as a person with the “spirit of a bird”, connecting him to a sense of boundless freedom and nature, which in my opinion always remains closest to truth. I chose to illustrate this as a fundamental bond between the bird (the species known as _kukutis_ — eng. _hoopoe_ — in Lithuanian) and the character: Kukutis, symbolizing humanity's bond with the natural world.\n\n",
    home: [{ src: "/images/work/kukutis_crop_home2_png.jpg", ratio: "3000 / 4500" }],
    main: { src: "/images/work/kukutis_crop_home2_png.jpg", ratio: "3000 / 4500", cap: "Book cover" },
    gallery: [
      { src: "/images/work/kukutis_g1.jpg", ratio: "1560 / 898", span: 12 },
      { src: "/images/work/kukutis_g2.jpg", ratio: "1536 / 882", span: 12 },
      { src: "/images/work/kukutis_g3.jpg", ratio: "1533 / 923", span: 12 },
      { src: "/images/work/kukutis_g4.jpg", ratio: "3 / 2", span: 12 },
      {
        text: "I used the opening and closing illustrations to symbolize the essential connection between body and spirit found in creative engagement, such as reading these sensitive ballads. By depicting Kukutis himself reading, I intended to create a visual mirror for the reader, inviting them to consciously acknowledge and reflect upon their own moment of immersion.",
        span: 12,
      },
      { src: "/images/work/kukutis_pradzia.jpg", ratio: "1 / 1", span: 6, cap: "Opening illustration" },
      { src: "/images/work/kukutis_pabaiga.jpg", ratio: "1 / 1", span: 6, cap: "Closing illustration" },
    ],
    considered: [],
  },
  {
    slug: "wedding",
    title: "Wedding illustration",
    meta: "Wedding illustration",
    client: "Private commission",
    short: "Custom wedding invitations designed as an illustrated keepsake, built around the image of a river.",
    text: "I had the pleasure of becoming a small part of one love story by creating custom wedding invitations designed as an illustrated keepsake. Created to unfold like a story, every detail was made to capture the couple's atmosphere and give guests a first glimpse into their celebration.\n\nI had total freedom and trust with this project, so I came up with an idea: to make this invitation like a fairytale. The front depicts the joyful moment when they meet to take the stage for their big moment, bound together by love, inside the invitation. There is a river, as in Lithuanian the verb for a woman getting married, tekėti, comes from tekėti — “to flow,” as a river does. It evokes the metaphor of a woman flowing into another life, like a river flowing into another body of water.",
    home: [{ src: "/images/work/wedding_home_png.jpg", ratio: "2000 / 1414" }],
    main: { src: "/images/work/wedding_main_jpeg.jpg", ratio: "5712 / 4284", cap: "Illustrated invitation" },
    gallery: [
      { src: "/images/work/wedding_g1_png.jpg", ratio: "1 / 2", span: 6 },
      { src: "/images/work/wedding_g2_png.jpg", ratio: "1 / 2", span: 6 },
      { src: "/images/work/wedding_home_png.jpg", ratio: "4 / 3", span: 6 },
      { src: "/images/work/wedding_photo1_png.jpg", ratio: "4 / 3", span: 6, cap: "Printed and in hand" },
    ],
    considered: [],
  },
  {
    slug: "pins",
    title: "Anniversary pins",
    meta: "Illustrations into products",
    client: "“Vyno klubas”",
    mainMaxH: 359,
    short: "Anniversary enamel pins for the Vyno dienos wine exhibition, the largest wine and beverage exhibition in the Baltic States.",
    text: "In 2023, I had an exciting task: to create anniversary pins for the “Vyno dienos” wine exhibition, the largest wine and beverage exhibition in the Baltic States. My visual concept focused on depicting the essential process of wine tasting, as it is the perfect place to explore different aromas, flavours, and discover personal favourites. I deliberately chose a playful and celebratory tone for the design to emphasize that the event is, above all, a grand festival. The pins serve as a colourful, lasting commemoration of the event's joyful spirit.",
    home: [{ src: "/images/work/pins_cover_png.jpg", ratio: "4000 / 3000" }],
    main: { src: "/images/work/pins_cover_png.jpg", ratio: "4000 / 3000", cap: "The pins" },
    gallery: [
      { src: "/images/work/pins_g1_png.jpg", ratio: "1 / 1", span: 6 },
      { src: "/images/work/pins_g2_png.jpg", ratio: "1 / 1", span: 6 },
      { src: "/images/work/pins_owl12_png.jpg", ratio: "1 / 1", span: 6 },
      { src: "/images/work/pins_owl6_png.jpg", ratio: "1 / 1", span: 6 },
    ],
    considered: [],
  },
  {
    slug: "spring",
    title: "Spring",
    meta: "T-shirt design",
    client: "Private commission",
    short: "A small, embroidered celebration of spring, drawn while waiting out a long Lithuanian winter.",
    text: "It is a small, embroidered celebration of spring. This drawing was created while impatiently waiting for the end of a long Lithuanian winter — a reminder that the most delicate beauty always follows the longest wait.",
    home: [{ src: "/images/work/spring_cover_png.jpg", ratio: "3 / 2" }],
    main: { src: "/images/work/spring_cover_png.jpg", ratio: "3 / 2" },
    gallery: [{ src: "/images/work/spring_g1_png.jpg", ratio: "1 / 1", span: 8 }],
    considered: [],
  },
  {
    slug: "recovery",
    title: "Recovery Spot",
    meta: "Logo design",
    client: "Recovery Spot massage studio",
    mainMaxH: 456,
    short: "A lizard mark and earthy identity for a massage studio, built around safety, warmth and grounding.",
    text: "The studio's chosen symbol was the lizard. The goal was to emphasize a safe and cozy atmosphere of the studio while reflecting a simple, realistic style. The design incorporates earthy tones and clean lines to convey a sense of natural healing, tranquility, and grounding.",
    home: [{ src: "/images/work/recovery_cover.jpg", ratio: "4 / 3" }],
    main: { src: "/images/work/recovery_cover.jpg", ratio: "4 / 3", cap: "Logo" },
    gallery: [
      { src: "/images/work/recovery_cards.jpg", ratio: "3 / 2", span: 6, cap: "Cards" },
      { src: "/images/work/recovery_g2.jpg", ratio: "3 / 2", span: 6 },
    ],
    considered: [
      { src: "/images/work/recovery_considered1_png.jpg", ratio: "3508 / 2481" },
      { src: "/images/work/recovery_considered2_png.jpg", ratio: "3508 / 2481" },
    ],
  },
  {
    slug: "linkiu",
    title: "I wish you…",
    meta: "Personal work",
    client: "Self-initiated",
    heroNote: "I wish you to...",
    hideClientLine: true,
    short: "An illustrated series of wishes, made in place of greeting cards.",
    text: "It happened that those closest to me would give me children's picture books in place of greeting cards. Within that gesture, each book felt like an expanded wish I was meant to decipher. Over time, a distinct idea of an illustrated book as a kind of “postcard” took shape in my mind. This series was my attempt to create such a little book of wishes myself — images that carry the sentiments I would hope to surround myself and others with.\n\n",
    home: [{ src: "/images/work/linkiu_cover.jpg", ratio: "3508 / 4961" }],
    main: null,
    gallery: [
      { src: "/images/work/linkiu_book2_png.jpg", ratio: "3460 / 2121", span: 12 },
      { src: "/images/work/linkiu_cover.jpg", ratio: "3508 / 4961", span: 6, cap: "…embrace with love!" },
      { src: "/images/work/linkiu_g1_jpeg.jpg", ratio: "3508 / 4961", span: 6, cap: "…lean and grow calm" },
      { src: "/images/work/linkiu_g2_jpeg.jpg", ratio: "3508 / 4961", span: 6, cap: "…grow a garden free of weeds" },
      { src: "/images/work/linkiu_g3.jpg", ratio: "3508 / 4961", span: 6, cap: "…breathe in, breathe out (and in again)" },
      { src: "/images/work/linkiu_g5.jpg", ratio: "3508 / 4961", span: 6, cap: "…explore and experience" },
      { src: "/images/work/linkiu_g6.jpg", ratio: "3508 / 4961", span: 6, cap: "…catch it!" },
    ],
    considered: [],
  },
  {
    slug: "personal",
    title: "Personal work",
    meta: "Personal work",
    client: "Self-initiated",
    heroFull: true,
    hideClientLine: true,
    hideMetaLabel: true,
    short: "Drawings made simply because a feeling wanted to get out.",
    text: "These are drawings, driven simply by a strong feeling that wants to get out. Like all human experience, some of these feelings are truly beautiful, while others are less so. In any case, I like the fact that they make me draw.",
    home: [
      { src: "/images/work/personal_g4.jpg", ratio: "1 / 1" },
      { src: "/images/work/personal_sister_png.jpg", ratio: "1800 / 1273" },
      { src: "/images/work/personal_plants_png.jpg", ratio: "1 / 1" },
    ],
    main: null,
    gallery: [
      { src: "/images/work/personal_sister_png.jpg", ratio: "3 / 2", span: 12, cap: "My older sister is the reason I know something about the stars." },
      { src: "/images/work/personal_summer_happy.jpg", ratio: "1 / 1", span: 6, cap: "It was summer and I was happy." },
      { src: "/images/work/personal_small.jpg", ratio: "1 / 1", span: 6, cap: "Some days just ask you to be small for a while." },
      { src: "/images/work/personal_dark.jpg", ratio: "1 / 1", span: 6, cap: "Through the dark, on the way home." },
      { src: "/images/work/personal_plants_png.jpg", ratio: "1 / 1", span: 6, cap: "I like to take care of plants. And this is how I imagine myself doing that." },
      { src: "/images/work/personal_g4.jpg", ratio: "1 / 1", span: 6, cap: "This is the prince of my heart. He is a bit shy and avoids looking into the eyes." },
    ],
    considered: [],
  },
  {
    slug: "chip-critics",
    title: "The Chip Critics Club",
    meta: "Brand identity & Web design",
    client: "Self-initiated",
    hideClientLine: true,
    short: "A rating platform for people who take snacking very seriously.",
    text: "Chip Critics Club is a passion project born from the belief that not all chips are created equal - and someone needs to say so, loudly, with a rust-and-terracotta color palette.\n\nI designed the full brand identity from the ground up (logo, typography, critic-silhouette motif, the works) and took it all the way to a live, working website - figuring things out as I went, well outside my usual design comfort zone.\nThe result is a real website where users can rate, review, and settle the eternal debate over which bag deserves a spot in the pantry.\n\nPart branding exercise, part snack activism, part crash course in building something from scratch.",
    link: { url: "https://www.chipcritics.com/", label: "See it in action" },
    home: [{ src: "/images/work/chip_critics_cover.jpg", ratio: "5 / 4" }],
    main: { src: "/images/work/chip_critics_cover.jpg", ratio: "5 / 4" },
    gallery: [
      { src: "/images/work/chip_critics_rating_png.jpg", ratio: "1307 / 1656", span: 5, cap: "Rating form" },
      { src: "/images/work/chip_critics_feed_png.jpg", ratio: "2247 / 1572", span: 7, cap: "Feed" },
    ],
    considered: [],
  },
];

export const HOMEITEMS: (ImageRef & { project: WorkItem; isCover?: boolean })[] = (() => {
  const personal = WORK.find((w) => w.slug === "personal")!;
  const linkiu = WORK.find((w) => w.slug === "linkiu")!;
  const wedding = WORK.find((w) => w.slug === "wedding")!;
  const others = WORK.filter((w) => !["personal", "linkiu", "wedding"].includes(w.slug));
  return [
    ...personal.gallery.filter(isImageRef).map((g) => ({ ...g, project: personal })),
    ...linkiu.gallery.filter((g): g is ImageRef => isImageRef(g) && !!g.cap).map((g) => ({ ...g, project: linkiu })),
    { ...wedding.home[0], project: wedding, isCover: true },
    ...others.map((w) => ({ ...w.home[0], project: w, isCover: true })),
  ];
})();
