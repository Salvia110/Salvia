export const categories = [
  "SWEEPERS",
  "SCRUBBERS",
  "COMMERCIAL VACUUM CLEANERS",
  "INDUSTRIAL VACUUM CLEANERS",
  "HIGH LEVEL CLEANER",
  "HIGH PRESSURE JETS",
  "CARPET CLEANER",
  "ESCALATOR CLEANER",
  "STEAM CLEANERS",
];

type Product = {
  title: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    title: "WALK BEHIND SWEEPER",
    image: "/products/walk_behind.png",
    category: "SWEEPERS",
  },
  {
    title: "RIDE ON SWEEPER",
    image: "/products/ride_on.png",
    category: "SWEEPERS",
  },
  {
    title: "TRUCK SWEEPER",
    image: "/products/truck_sweeper.png",
    category: "SWEEPERS",
  },
  {
    title: "M60 SWEEPER",
    image: "/products/m60.png",
    category: "SWEEPERS",
  },
];
