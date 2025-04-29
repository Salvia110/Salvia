import product1 from "../src/assets/product page/6l-colour-coded-buckets-with-a-lip-different-colours-available_2-1050x1050.webp";
import product2 from "../src/assets/product page/Hygiene-Trolley.jpg";
import product3 from "../src/assets/product page/images.jpg";
import product4 from "../src/assets/product page/multi-purpose-trolley.jpg";
import product5 from "../src/assets/product page/tripple-bucket-wringer-trolley-500x500.png";
import product6 from "../src/assets/product page/50-l-double-bucket-mop-wringer-trolley.jpg";
import product7 from "../src/assets/product page/microfiber refill.avif";
import product8 from "../src/assets/product page/almunium handel.webp";
import product9 from "../src/assets/product page/mop holder.jpg";
import product10 from "../src/assets/product page/Dry-damp-Mop-Refill-Frame.webp";
import product11 from "../src/assets/product page/multipurpose microfiber cloth.jpg";
import product12 from "../src/assets/product page/antibacterial face cloth.jpg";
import product13 from "../src/assets/product page/glass cloth.webp";
import product14 from "../src/assets/product page/scrubbing pad.jpg";
import product15 from "../src/assets/product page/hand scrubber.jpg";
import product16 from "../src/assets/product page/floor scrubber.webp";
import product17 from "../src/assets/product page/dust pan with broom.avif";
import product18 from "../src/assets/product page/swepping brush.jpg";
import product19 from "../src/assets/product page/window washer.jpg";
import product20 from "../src/assets/product page/window squeez.jpg";
import product21 from "../src/assets/product page/small scrapper.jpeg";
import product22 from "../src/assets/product page/combo tool.jpg";
import product23 from "../src/assets/product page/scrapper.webp";
import product24 from "../src/assets/product page/spray bottel.jpg";
import product25 from "../src/assets/product page/telescopic pole.webp";
import product26 from "../src/assets/product page/caddy.jpg";
import product27 from "../src/assets/product page/cruve brush.webp";
import product28 from "../src/assets/product page/cobweb brush.webp";
import product29 from "../src/assets/product page/dry mop 60cm.jpg";
import product30 from "../src/assets/product page/wet mop cotton.jpg";
import product31 from "../src/assets/product page/floor squeez.webp";
import product32 from "../src/assets/product page/wet floor board.jpg";
import product33 from "../src/assets/product page/microbrust dispancer.jpg";
import product34 from "../src/assets/product page/foam dispancer.jpg";
import product35 from "../src/assets/product page/auto foam shop dispancer.webp";
import product36 from "../src/assets/product page/single disk.webp";
import product37 from "../src/assets/product page/ride on scrubber drair.webp";
import product38 from "../src/assets/product page/scrubber drair.webp";
import product39 from "../src/assets/product page/manual sweeper.webp";
import product40 from "../src/assets/product page/wet & dry vacum.webp";
import product41 from "../src/assets/product page/high pressure.webp";

export const categories = [
  "BUCKET & TROLLEY",
  "LITO MICROFIBER MOP",
  "DRY & DAMP MOPPING",
  "MICROFIBER",
  "HAND SCRUBBER & FLOOR SCRUBBER",
  "WINDOW CLEANING",
  "OTHER PRODUCT",
  "DISPENSER",
  "CLEANING EQUIPMENT",
];

type Product = {
  title: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    title: "COLOR BUCKET-6LTR",
    image: product1,
    category: "BUCKET & TROLLEY",
  },
  {
    title: "HYGEINE TROLLEY",
    image: product2,
    category: "BUCKET & TROLLEY",
  },
  {
    title: "DOUBLE BUCKET 30LTR",
    image: product3,
    category: "BUCKET & TROLLEY",
  },
  {
    title: "HOUSE KEEPING TROLLEY",
    image: product4,
    category: "BUCKET & TROLLEY",
  },
  {
    title: "TRIPPLE BUCKET TROLLEY",
    image: product5,
    category: "BUCKET & TROLLEY",
  },
  {
    title: "DOUBLE BUCKET 50 LTR",
    image: product6,
    category: "BUCKET & TROLLEY",
  },
  {
    title: "MICROFIBER REFILL",
    image: product7,
    category: "LITO MICROFIBER MOP",
  },
  {
    title: "ALMUNIUM HANDEL",
    image: product8,
    category: "LITO MICROFIBER MOP",
  },
  {
    title: "MOP HOLDER",
    image: product9,
    category: "LITO MICROFIBER MOP",
  },
  {
    title: "DRY & DAMP MOPING",
    image: product10,
    category: "DRY & DAMP MOPPING",
  },
  {
    title: "MULTIPURPOSE MICROFIBER CLOTH",
    image: product11,
    category: "MICROFIBER",
  },
  {
    title: "ANTI BACKTERIAL FACE CLOTH",
    image: product12,
    category: "MICROFIBER",
  },
  {
    title: "GLASS CLEANING CLOTH",
    image: product13,
    category: "MICROFIBER",
  },
  {
    title: "SCRUBBING PAD",
    image: product14,
    category: "HAND SCRUBBER & FLOOR SCRUBBER",
  },
  {
    title: "HAND SCRUBBER",
    image: product15,
    category: "HAND SCRUBBER & FLOOR SCRUBBER",
  },
  {
    title: "FLOOR SCRUBBER",
    image: product16,
    category: "HAND SCRUBBER & FLOOR SCRUBBER",
  },
  {
    title: "DUST PAN WITH BROOM",
    image: product17,
    category: "HAND SCRUBBER & FLOOR SCRUBBER",
  },
  {
    title: "SWEEPING BRUSH",
    image: product18,
    category: "HAND SCRUBBER & FLOOR SCRUBBER",
  },
  {
    title: "WINDOW WASHER",
    image: product19,
    category: "WINDOW CLEANING",
  },
  {
    title: "WINDOW SQUEEZEE",
    image: product20,
    category: "WINDOW CLEANING",
  },
  {
    title: "SMALL SCRAPER",
    image: product21,
    category: "WINDOW CLEANING",
  },
  {
    title: "COMBO TOOLS",
    image: product22,
    category: "WINDOW CLEANING",
  },
  {
    title: "SCRAPER",
    image: product23,
    category: "WINDOW CLEANING",
  },
  {
    title: "SPRAY BOTTLE",
    image: product24,
    category: "WINDOW CLEANING",
  },
  {
    title: "TELESCOPIC POLE",
    image: product25,
    category: "WINDOW CLEANING",
  },
  {
    title: "CADDY",
    image: product26,
    category: "WINDOW CLEANING",
  },
  {
    title: "CURVE BRUSH",
    image: product27,
    category: "WINDOW CLEANING",
  },
  {
    title: "COBWEB BRUSH",
    image: product28,
    category: "WINDOW CLEANING",
  },
  {
    title: "DRY MOP 60CM",
    image: product29,
    category: "OTHER PRODUCT",
  },
  {
    title: "WET MOP COTTON",
    image: product30,
    category: "OTHER PRODUCT",
  },
  {
    title: "FLOOR SQUEEZE",
    image: product31,
    category: "OTHER PRODUCT",
  },
  {
    title: "WET FLOOR",
    image: product32,
    category: "OTHER PRODUCT",
  },
  {
    title: "MICROBURST DISPENSER",
    image: product33,
    category: "DISPENSER",
  },
  {
    title: "FOAM SHOP DISPENSER",
    image: product34,
    category: "DISPENSER",
  },
  {
    title: "AUTO FOAM SHOP DISPANSER",
    image: product35,
    category: "DISPENSER",
  },
  {
    title: "SINGLE DISK",
    image: product36,
    category: "CLEANING EQUIPMENT",
  },
  {
    title: "RIDE ON SCRUBBER DRIER",
    image: product37,
    category: "CLEANING EQUIPMENT",
  },
  {
    title: "SCRUBBER DRIER",
    image: product38,
    category: "CLEANING EQUIPMENT",
  },
  {
    title: "MANUAL SWEEPER",
    image: product39,
    category: "CLEANING EQUIPMENT",
  },
  {
    title: "WET & DRY VACUUM",
    image: product40,
    category: "CLEANING EQUIPMENT",
  },
  {
    title: "HIGH PRESSURE PUMP",
    image: product41,
    category: "CLEANING EQUIPMENT",
  },
];
