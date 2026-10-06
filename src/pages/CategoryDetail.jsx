import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const categoryData = {
  // ...keep your existing categoryData exactly as is...
   "hot-drinks": [
    { name: "Cappuccino", price: 4.25, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop" },
    { name: "Caramel Macchiato", price: 5.1, img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=300&fit=crop" },
    { name: "Espresso Shot", price: 2.75, img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=300&fit=crop" },
    { name: "Hot Chocolate", price: 3.95, img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300&h=300&fit=crop" },
    { name: "Classic Latte", price: 4.5, img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&h=300&fit=crop" },
    { name: "Black Coffee", price: 3.0, img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=300&fit=crop" },
    { name: "Chai Latte", price: 4.35, img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=300&fit=crop" },
    { name: "Green Tea", price: 3.2, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop" },
    { name: "Hot Mocha", price: 4.6, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop" },
    { name: "Americano", price: 3.5, img: "https://images.unsplash.com/photo-1520516472218-72dc3a1a4b8a?w=300&h=300&fit=crop" },
    { name: "Flat White", price: 4.4, img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=300&h=300&fit=crop" },
    { name: "Masala Chai", price: 3.75, img: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=300&h=300&fit=crop" },
    { name: "Vanilla Latte", price: 4.7, img: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=300&h=300&fit=crop" },
    { name: "Peppermint Tea", price: 3.1, img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300&h=300&fit=crop" },
    { name: "Turkish Coffee", price: 3.85, img: "https://images.unsplash.com/photo-1519082274554-b6b6e0a44b2b?w=300&h=300&fit=crop" },
    { name: "Golden Milk Latte", price: 4.9, img: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?w=300&h=300&fit=crop" },
  ],

  "cold-drinks": [
    { name: "Iced Coffee", price: 4.5, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop" },
    { name: "Fresh Orange Juice", price: 3.75, img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop" },
    { name: "Iced Latte", price: 4.5, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop" },
    { name: "Strawberry Smoothie", price: 5.25, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=300&fit=crop" },
    { name: "Classic Lemonade", price: 3.25, img: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=300&h=300&fit=crop" },
    { name: "Mango Milkshake", price: 5.5, img: "https://images.unsplash.com/photo-1568644396922-5c3bfae12cee?w=300&h=300&fit=crop" },
    { name: "Iced Mocha", price: 4.75, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop" },
    { name: "Watermelon Cooler", price: 4.0, img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=300&h=300&fit=crop" },
    { name: "Green Detox Juice", price: 4.95, img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=300&fit=crop" },
    { name: "Iced Chai Tea", price: 4.25, img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=300&fit=crop" },
    { name: "Classic Cola", price: 2.5, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=300&fit=crop" },
    { name: "Pineapple Juice", price: 3.95, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300&h=300&fit=crop" },
    { name: "Chocolate Milkshake", price: 5.5, img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=300&h=300&fit=crop" },
    { name: "Sparkling Water", price: 2.25, img: "https://images.unsplash.com/photo-1560508180-03f285f67ded?w=300&h=300&fit=crop" },
    { name: "Berry Blast Smoothie", price: 5.75, img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=300&h=300&fit=crop" },
    { name: "Iced Green Tea", price: 3.5, img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=300&h=300&fit=crop" },
  ],

  bakery: [
    { name: "Butter Croissant", price: 3.5, img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=300&fit=crop" },
    { name: "Chocolate Muffin", price: 3.25, img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=300&fit=crop" },
    { name: "Cinnamon Roll", price: 3.95, img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=300&h=300&fit=crop" },
    { name: "Blueberry Scone", price: 3.4, img: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=300&h=300&fit=crop" },
    { name: "Banana Bread Slice", price: 3.1, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop" },
    { name: "Cheese Danish", price: 3.75, img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=300&h=300&fit=crop" },
    { name: "Baguette", price: 2.95, img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=300&h=300&fit=crop" },
    { name: "Chocolate Chip Cookie", price: 2.5, img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=300&fit=crop" },
    { name: "Apple Turnover", price: 3.6, img: "https://images.unsplash.com/photo-1601000938259-9fea25c8ba7a?w=300&h=300&fit=crop" },
    { name: "Red Velvet Cupcake", price: 3.8, img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=300&h=300&fit=crop" },
    { name: "Sourdough Loaf", price: 4.5, img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=300&fit=crop" },
    { name: "Almond Croissant", price: 3.9, img: "https://images.unsplash.com/photo-1623334044303-241021148842?w=300&h=300&fit=crop" },
    { name: "Carrot Cake Slice", price: 4.1, img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=300&h=300&fit=crop" },
    { name: "Pretzel", price: 2.75, img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&h=300&fit=crop" },
    { name: "Lemon Tart", price: 3.85, img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=300&h=300&fit=crop" },
    { name: "Whole Wheat Bread", price: 3.0, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop" },
  ],

  donuts: [
    { name: "Glazed Donut", price: 2.25, img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop" },
    { name: "Chocolate Sprinkle Donut", price: 2.5, img: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?w=300&h=300&fit=crop" },
    { name: "Strawberry Frosted Donut", price: 2.6, img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=300&h=300&fit=crop" },
    { name: "Boston Cream Donut", price: 2.95, img: "https://images.unsplash.com/photo-1566640269062-8148d7ba6b09?w=300&h=300&fit=crop" },
    { name: "Powdered Sugar Donut", price: 2.2, img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=300&h=300&fit=crop" },
    { name: "Maple Bacon Donut", price: 3.1, img: "https://images.unsplash.com/photo-1583527976967-06bcaf3adcf4?w=300&h=300&fit=crop" },
    { name: "Jelly Filled Donut", price: 2.7, img: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=300&h=300&fit=crop" },
    { name: "Cinnamon Sugar Donut", price: 2.4, img: "https://images.unsplash.com/photo-1583527976967-06bcaf3adcf4?w=300&h=300&fit=crop" },
    { name: "Vanilla Frosted Donut", price: 2.55, img: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?w=300&h=300&fit=crop" },
    { name: "Mini Donut Box", price: 4.5, img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9a?w=300&h=300&fit=crop" },
    { name: "Oreo Donut", price: 3.0, img: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=300&h=300&fit=crop" },
    { name: "Peanut Butter Donut", price: 2.85, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop" },
    { name: "Coconut Donut", price: 2.65, img: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?w=300&h=300&fit=crop" },
    { name: "Blueberry Donut", price: 2.75, img: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=300&h=300&fit=crop" },
    { name: "Old Fashioned Donut", price: 2.3, img: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=300&h=300&fit=crop" },
    { name: "Cake Batter Donut", price: 2.9, img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300&h=300&fit=crop" },
  ],

  sandwiches: [
    { name: "Club Sandwich", price: 6.5, img: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=300&fit=crop" },
    { name: "Grilled Cheese", price: 4.75, img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=300&h=300&fit=crop" },
    { name: "Turkey & Swiss", price: 6.9, img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300&h=300&fit=crop" },
    { name: "BLT Sandwich", price: 6.25, img: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=300&h=300&fit=crop" },
    { name: "Chicken Sandwich", price: 7.1, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop" },
    { name: "Veggie Sandwich", price: 5.5, img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300&h=300&fit=crop" },
    { name: "Philly Cheesesteak Sub", price: 8.25, img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=300&h=300&fit=crop" },
    { name: "Tuna Salad Sandwich", price: 6.0, img: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=300&fit=crop" },
    { name: "Egg & Mayo Sandwich", price: 4.5, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=300&fit=crop" },
    { name: "Ham & Cheese", price: 5.75, img: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=300&h=300&fit=crop" },
    { name: "Italian Sub", price: 7.5, img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300&h=300&fit=crop" },
    { name: "Meatball Sub", price: 7.9, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop" },
    { name: "Falafel Wrap", price: 6.4, img: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?w=300&h=300&fit=crop" },
    { name: "Chicken Caesar Wrap", price: 7.0, img: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=300&h=300&fit=crop" },
    { name: "Roast Beef Sandwich", price: 7.75, img: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=300&fit=crop" },
    { name: "Pesto Mozzarella Sandwich", price: 6.85, img: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=300&h=300&fit=crop" },
  ],

  burgers: [
    { name: "Classic Cheeseburger", price: 8.99, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop" },
    { name: "Double Beef Burger", price: 11.5, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=300&fit=crop" },
    { name: "Chicken Burger", price: 9.25, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop" },
    { name: "Bacon Burger", price: 10.5, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=300&fit=crop" },
    { name: "Veggie Burger", price: 8.25, img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=300&h=300&fit=crop" },
    { name: "BBQ Burger", price: 10.75, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=300&fit=crop" },
    { name: "Mushroom Swiss Burger", price: 10.95, img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=300&h=300&fit=crop" },
    { name: "Spicy Jalapeno Burger", price: 10.25, img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=300&fit=crop" },
    { name: "Turkey Burger", price: 9.5, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop" },
    { name: "Mini Sliders (3pc)", price: 9.0, img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=300&h=300&fit=crop" },
    { name: "Triple Stack Burger", price: 13.5, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=300&fit=crop" },
    { name: "Fish Burger", price: 9.75, img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=300&h=300&fit=crop" },
    { name: "Egg Burger", price: 9.9, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop" },
    { name: "Pepper Jack Burger", price: 10.6, img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=300&fit=crop" },
    { name: "Avocado Burger", price: 10.9, img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=300&h=300&fit=crop" },
    { name: "Classic Hamburger", price: 7.99, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop" },
  ],

  fries: [
    { name: "Classic Fries", price: 3.5, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop" },
    { name: "Curly Fries", price: 3.95, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=300&fit=crop" },
    { name: "Sweet Potato Fries", price: 4.25, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop" },
    { name: "Cheese Fries", price: 4.75, img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=300&h=300&fit=crop" },
    { name: "Loaded Fries", price: 5.5, img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=300&h=300&fit=crop" },
    { name: "Waffle Fries", price: 4.1, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop" },
    { name: "Garlic Parmesan Fries", price: 4.6, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=300&fit=crop" },
    { name: "Chili Cheese Fries", price: 5.25, img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=300&h=300&fit=crop" },
    { name: "Spicy Fries", price: 3.95, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop" },
    { name: "Truffle Fries", price: 6.0, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=300&fit=crop" },
    { name: "Crinkle Cut Fries", price: 3.75, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop" },
    { name: "Poutine", price: 6.25, img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=300&h=300&fit=crop" },
    { name: "BBQ Fries", price: 4.5, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=300&fit=crop" },
    { name: "Ranch Fries", price: 4.4, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop" },
    { name: "Onion Rings", price: 4.2, img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=300&fit=crop" },
    { name: "Cajun Fries", price: 4.3, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=300&fit=crop" },
  ],

  crackers: [
    { name: "Cheese Crackers", price: 2.5, img: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=300&h=300&fit=crop" },
    { name: "Wheat Crackers", price: 2.25, img: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=300&h=300&fit=crop" },
    { name: "Potato Chips", price: 2.75, img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop" },
    { name: "Pretzel Crackers", price: 2.6, img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&h=300&fit=crop" },
    { name: "Trail Mix", price: 3.5, img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop" },
    { name: "Popcorn", price: 2.95, img: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=300&h=300&fit=crop" },
    { name: "Rice Crackers", price: 2.4, img: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=300&h=300&fit=crop" },
    { name: "Tortilla Chips", price: 3.1, img: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=300&h=300&fit=crop" },
    { name: "Pita Chips", price: 2.85, img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&h=300&fit=crop" },
    { name: "Cheese Puffs", price: 2.65, img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop" },
    { name: "Veggie Chips", price: 3.2, img: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=300&h=300&fit=crop" },
    { name: "Nut Mix", price: 3.75, img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop" },
    { name: "Sesame Crackers", price: 2.45, img: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=300&h=300&fit=crop" },
    { name: "Corn Chips", price: 2.9, img: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=300&h=300&fit=crop" },
    { name: "Graham Crackers", price: 2.35, img: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=300&h=300&fit=crop" },
    { name: "Kettle Chips", price: 3.0, img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop" },
  ],

  boxes: [
    { name: "Chicken Lunch Box", price: 9.5, img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=300&h=300&fit=crop" },
    { name: "Beef Bento Box", price: 10.25, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" },
    { name: "Veggie Meal Box", price: 8.5, img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=300&h=300&fit=crop" },
    { name: "Sushi Box", price: 11.0, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop" },
    { name: "Family Meal Box", price: 24.99, img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=300&h=300&fit=crop" },
    { name: "Grilled Fish Box", price: 10.75, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=300&fit=crop" },
    { name: "Kids Meal Box", price: 6.5, img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=300&h=300&fit=crop" },
    { name: "Rice & Curry Box", price: 9.9, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" },
    { name: "Noodle Box", price: 9.25, img: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=300&h=300&fit=crop" },
    { name: "Breakfast Box", price: 8.0, img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=300&fit=crop" },
    { name: "Salad Box", price: 7.75, img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=300&h=300&fit=crop" },
    { name: "BBQ Combo Box", price: 12.5, img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=300&h=300&fit=crop" },
    { name: "Vegan Lunch Box", price: 9.0, img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=300&h=300&fit=crop" },
    { name: "Pasta Box", price: 8.75, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=300&fit=crop" },
    { name: "Seafood Box", price: 13.25, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop" },
    { name: "Snack Box", price: 6.95, img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop" },
  ],
};

function CategoryDetail() {
  const { categoryId } = useParams();
  const [search, setSearch] = useState("");
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const items = categoryData[categoryId] || [];
  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 capitalize mb-4">
          {categoryId.replace("-", " ")}
        </h1>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search in this category"
          className="w-full max-w-md bg-white border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-orange-400 mb-6"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((item, i) => {
            const key = `${categoryId}-${i}`;
            const quantity = cart[key]?.quantity;

            return (
              <div
                key={key}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.name}</h3>
                  <p className="text-orange-500 font-bold text-sm mb-2">
                    ${item.price.toFixed(2)}
                  </p>

                  {!quantity ? (
                    <button
                      onClick={() => addToCart(key, item)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-1.5 rounded-full transition-colors"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-orange-500 rounded-full px-1 py-1">
                      <button
                        onClick={() => decreaseQty(key)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="w-7 h-7 flex items-center justify-center text-white font-bold text-sm hover:bg-orange-600 rounded-full transition-colors"
                      >
                        −
                      </button>
                      <span className="text-white text-sm font-semibold">{quantity}</span>
                      <button
                        onClick={() => increaseQty(key)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="w-7 h-7 flex items-center justify-center text-white font-bold text-sm hover:bg-orange-600 rounded-full transition-colors"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-500 mt-6">No items match your search.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryDetail;