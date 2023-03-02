type CategoryType = {
  toys: string;
  clothes: string;
  books: string;
  jewelries: string;
};
export const Categories: CategoryType = {
  toys: 'toys',
  jewelries: 'jewelries',
  clothes: 'clothes',
  books: 'books',
};

export const CategoryTitle = {
  [Categories.clothes]: 'Clothes',
  [Categories.jewelries]: 'Jewels',
  [Categories.toys]: 'Toys',
  [Categories.books]: 'Books',
};

export const DatabaseOfItems = {
  1: {
    category: Categories.toys,
    id: 1,
    name: 'Rubber Ducky',
    price: 12,
    description: "It's an ordinary duck.",
  },
  2: {
    category: Categories.toys,
    id: 2,
    name: 'Big Ball',
    price: 13,
    description: "It's a ball.",
  },
  3: {
    category: Categories.toys,
    id: 3,
    name: 'Lady Mary',
    price: 15,
    description: "It's a doll.",
  },
  4: {
    category: Categories.jewelries,
    id: 4,
    name: 'Martian Rock',
    price: 500,
    description: "It's an ordinary rock.",
  },
  5: {
    id: 5,
    name: 'Red Ruby',
    price: 700,
    description: "It's a nice gem.",
    category: Categories.jewelries,
  },
  6: {
    id: 6,
    name: 'Pristine Diamond',
    price: 1000,
    description: "It's a diamond.",
    category: Categories.jewelries,
  },
  7: {
    id: 7,
    name: 'Shirt',
    price: 150,
    description: "It's a shirt.",
    category: Categories.clothes,
  },
  8: {
    id: 8,
    name: 'Pants',
    price: 200,
    description: "It's a pair of pants.",
    category: Categories.clothes,
  },
  9: {
    id: 9,
    name: 'Top hat',
    price: 100,
    description: "It's a hat.",
    category: Categories.clothes,
  },
  romance: {
    id: 10,
    name: "Neighbor's wife",
    price: 150,
    description: "It's a romance novel.",
    category: Categories.books,
  },
  suspense: {
    id: 11,
    name: 'This Is Almost Scary, But a Different Genre',
    price: 200,
    description: "It's a suspense novel.",
    category: Categories.books,
  },
  selfHelp: {
    id: 12,
    name: 'Your Mini Therapist',
    price: 100,
    description: "It's a self-help book.",
    category: Categories.books,
  },
};

export default DatabaseOfItems;
