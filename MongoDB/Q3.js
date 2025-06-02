// MongoDB Lab Practical Examination Solutions
// ===== PART A =====
// Q1. Create and populate the categories collection
db.categories.insertMany([
  {
    category_id: 1,
    name: "Phones",
    parent_category: null,
    products: []
  },
  {
    category_id: 2,
    name: "Laptops",
    parent_category: null,
    products: [
      {
        product_id: 2,
        name: "MacBook Pro",
        price: 1999.99,
        quantity: 5
      }
    ]
  },
  {
    category_id: 3,
    name: "Consoles",
    parent_category: null,
    products: [
      {
        product_id: 4,
        name: "Sony PlayStation 5",
        price: 499.99,
        quantity: 20
      },
      {
        product_id: 5,
        name: "Nintendo",
        price: 149.99,
        quantity: 12
      }
    ]
  },
  {
    category_id: 4,
    name: "iPhone",
    parent_category: 1,
    products: [
      {
        product_id: 1,
        name: "iPhone 12",
        price: 999.99,
        quantity: 10
      }
    ]
  },
  {
    category_id: 5,
    name: "Windows",
    parent_category: 2,
    products: [
      {
        product_id: 3,
        name: "Dell XPS 15",
        price: 1599.99,
        quantity: 8
      }
    ]
  },
  {
    category_id: 6,
    name: "Xbox",
    parent_category: 3,
    products: [
      {
        product_id: 6,
        name: "Xbox Series X",
        price: 499.99,
        quantity: 25
      }
    ]
  }
]);

// Q2. Update products of category_id=1 to empty array
db.categories.updateOne(
  { category_id: 1 },
  { $set: { products: [] } }
);

// ===== PART B =====

// Q3.1 List all products and their names
db.categories.aggregate([
  { $unwind: "$products" },
  { $project: { 
      _id: 0,
      product_id: "$products.product_id",
      name: "$products.name"
    } 
  }
]);

// Q3.2 List all categories without a parent category
db.categories.find(
  { parent_category: null },
  { _id: 0, category_id: 1, name: 1, parent_category: 1 }
);

// Q3.3 List products with 'o' in their name
db.categories.aggregate([
  { $unwind: "$products" },
  { $match: { "products.name": /o/i } },
  { $project: { 
      _id: 0,
      product_id: "$products.product_id",
      name: "$products.name"
    } 
  }
]);

// Q3.4 Retrieve all products with their categories
db.categories.aggregate([
  { $unwind: "$products" },
  { $project: { 
      _id: 0,
      product_id: "$products.product_id",
      product_name: "$products.name",
      category_name: "$name"
    } 
  }
]);

// Q3.5 Products in 'Consoles' category ordered by name
db.categories.aggregate([
  { $match: { name: "Consoles" } },
  { $unwind: "$products" },
  { $project: { 
      _id: 0,
      name: "$products.name"
    } 
  },
  { $sort: { name: 1 } }
]);

// Q3.6 Product with most quantities
db.categories.aggregate([
  { $unwind: "$products" },
  { $sort: { "products.quantity": -1 } },
  { $limit: 1 },
  { $project: { 
      _id: 0,
      product_id: "$products.product_id",
      name: "$products.name"
    } 
  }
]);

// Q3.7 Products priced > 1000 ordered by name descending
db.categories.aggregate([
  { $unwind: "$products" },
  { $match: { "products.price": { $gt: 1000 } } },
  { $project: { 
      _id: 0,
      product_id: "$products.product_id",
      name: "$products.name",
      price: "$products.price"
    } 
  },
  { $sort: { name: -1 } }
]);

// Q3.8 Count of products in each category (aggregation)
db.categories.aggregate([
  {
    $project: {
      _id: 0,
      category_id: 1,
      name: 1,
      totalProducts: { $size: "$products" }
    }
  }
]);
