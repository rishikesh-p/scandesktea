export const restaurant = {
  name: "TEALOGY", // TODO: Update this
  description: "Delicious Food & Beverages", // TODO: Update this
  logo: "/images/logo.png", // TODO: Add new client's logo
  heroImage: "/images/hero.png", // TODO: Add new client's hero image
};

export const categories = [
  { id: "sandwich", name: "Sandwich" },
  { id: "pasta", name: "Pasta" },
  { id: "desserts", name: "Dessert" },
  { id: "cold-coffee", name: "Cold Coffee" },
  { id: "hot-coffee", name: "Hot Coffee" },
];

export const items = [
    // ─── SANDWICH ──────────────────────────────────────────────────────
  { id: "sd1", categoryId: "sandwich", name: "Masala Sandwich", description: "", price: 89, image: "/images/Sandwich/masala_sandwich.jpg", tags: [] },
  { id: "sd2", categoryId: "sandwich", name: "Masala Cheese Sandwich", description: "", price: 99, image: "/images/Sandwich/masala_cheese_sandwich.jpeg", tags: [] },
  { id: "sd3", categoryId: "sandwich", name: "Paneer Kheema Cheese", description: "", price: 109, image: "/images/Sandwich/paneer_kheema_cheese_sandwich.jpg", tags: [] },
  { id: "sd4", categoryId: "sandwich", name: "Veg Mayo Sandwich", description: "", price: 109, image: "/images/Sandwich/veg_mayo_sandwich.jpg", tags: [] },
  { id: "sd5", categoryId: "sandwich", name: "Vegetable Club Sandwich", description: "", price: 119, image: "/images/Sandwich/vegetable_club_sandwich.jpg", tags: [] },
  { id: "sd6", categoryId: "sandwich", name: "Paneer Taka Tak Sandwich", description: "", price: 129, image: "/images/Sandwich/paneer_taka_tak_sandwich.jpg", tags: [] },
  

  // ─── PASTA ─────────────────────────────────────────────────────────
  { id: "ps1", categoryId: "pasta", name: "White Sauce Pasta", description: "", price: 169, image: "/images/Pasta/white_sauce_pasta.jpg", tags: [] },
  { id: "ps2", categoryId: "pasta", name: "Red Sauce Pasta", description: "", price: 169, image: "/images/Pasta/red_sauce_pasta.jpg", tags: [] },
  { id: "ps3", categoryId: "pasta", name: "Coconut Alfredo", description: "", price: 189, image: "/images/Pasta/coconut_alfredo_pasta.jpg", tags: [] },

  // ─── DESSERTS ──────────────────────────────────────────────────────
  { id: "ds1", categoryId: "desserts", name: "Chocolate Brownie", description: "", price: 109, image: "/images/Dessert/chocolate_brownie.jpg", tags: [] },
  { id: "ds2", categoryId: "desserts", name: "Brownie With Ice Cream", description: "", price: 129, image: "/images/Dessert/brownie_with_ice_cream.png", tags: [] },
  { id: "ds3", categoryId: "desserts", name: "Brownie With Hot Fudge", description: "", price: 129, image: "/images/Dessert/brownie_with_hot_fudge.png", tags: [] },

  // ─── COLD COFFEE ───────────────────────────────────────────────────
  { id: "cc1", categoryId: "cold-coffee", name: "Cold Coffee", description: "", price: 119, image: "/images/Cold_Coffee/cold_coffee.jpg", tags: [] },
  { id: "cc2", categoryId: "cold-coffee", name: "Tender Coconut Cold Coffee", description: "", price: 139, image: "/images/Cold_Coffee/tender_coconut_cold_coffee.webp", tags: [] },
  { id: "cc3", categoryId: "cold-coffee", name: "Filter Coffee Frappe", description: "", price: 139, image: "/images/Cold_Coffee/filter_coffee_frappe.jpg", tags: [] },
  { id: "cc4", categoryId: "cold-coffee", name: "Brownie Frappe", description: "", price: 149, image: "/images/Cold_Coffee/brownie_frappe_coffee.jpg", tags: [] },

  // ─── HOT COFFEE ────────────────────────────────────────────────────
  { id: "hc1", categoryId: "hot-coffee", name: "Black Coffee", description: "", price: 45, image: "/images/Hot_Coffee/black_coffee.jpg", tags: [] },
  { id: "hc2", categoryId: "hot-coffee", name: "Filter Coffee", description: "", price: 45, image: "/images/Hot_Coffee/filter_coffee.jpg", tags: [] },
  { id: "hc3", categoryId: "hot-coffee", name: "Hot Coffee", description: "", price: 50, image: "/images/Hot_Coffee/hot_coffee_latte.jpg", tags: [] },
  { id: "hc4", categoryId: "hot-coffee", name: "Filter Coffee Coconut Latte", description: "", price: 55, image: "/images/Hot_Coffee/coconut_latte_filter_coffee.jpg", tags: [] }
];
