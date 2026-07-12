export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
}

export const menuCategories = ['All', 'Coffee', 'Tea', 'Cold Drinks', 'Desserts', 'Snacks', 'Breakfast'] as const;

export const menuItems: MenuItem[] = [
  { id: 1, name: 'Classic Espresso', description: 'Rich, bold double shot of our house blend with caramel notes.', price: 3.50, category: 'Coffee', image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600', popular: true },
  { id: 2, name: 'Caramel Latte', description: 'Smooth espresso with steamed milk and house-made caramel syrup.', price: 5.25, category: 'Coffee', image: 'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=600', popular: true },
  { id: 3, name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and velvety microfoam.', price: 4.50, category: 'Coffee', image: 'https://images.pexels.com/photos/1571730/pexels-photo-1571730.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Cold Brew', description: '18-hour steeped cold brew, smooth and low-acid over ice.', price: 4.75, category: 'Coffee', image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Mocha', description: 'Espresso, steamed milk, and dark Belgian chocolate.', price: 5.50, category: 'Coffee', image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Matcha Latte', description: 'Stone-ground ceremonial matcha whisked with steamed milk.', price: 5.75, category: 'Tea', image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600', popular: true },
  { id: 7, name: 'Chai Latte', description: 'Spiced black tea with cardamom, cinnamon, and steamed milk.', price: 4.75, category: 'Tea', image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 8, name: 'Earl Grey', description: 'Classic bergamot-infused black tea, served with honey.', price: 3.25, category: 'Tea', image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 9, name: 'Iced Caramel Macchiato', description: 'Chilled espresso, milk, and caramel drizzle over ice.', price: 5.50, category: 'Cold Drinks', image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600', popular: true },
  { id: 10, name: 'Strawberry Lemonade', description: 'Fresh-squeezed lemonade with muddled strawberries.', price: 4.25, category: 'Cold Drinks', image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 11, name: 'Cold Brew Tonic', description: 'Cold brew, tonic water, and a twist of orange peel.', price: 5.00, category: 'Cold Drinks', image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 12, name: 'Tiramisu', description: 'Espresso-soaked ladyfingers, mascarpone, and cocoa dust.', price: 6.50, category: 'Desserts', image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600', popular: true },
  { id: 13, name: 'Chocolate Lava Cake', description: 'Warm molten chocolate cake with vanilla bean ice cream.', price: 7.00, category: 'Desserts', image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 14, name: 'Cheesecake', description: 'New York-style cheesecake with berry compote.', price: 5.75, category: 'Desserts', image: 'https://images.pexels.com/photos/4040692/pexels-photo-4040692.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 15, name: 'Avocado Toast', description: 'Smashed avocado, chili flakes, and lime on sourdough.', price: 8.50, category: 'Snacks', image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600', popular: true },
  { id: 16, name: 'Bagel & Cream Cheese', description: 'Toasted bagel with whipped cream cheese and chives.', price: 5.50, category: 'Snacks', image: 'https://images.pexels.com/photos/1408314/pexels-photo-1408314.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 17, name: 'Croissant', description: 'Buttery, flaky French-style croissant, baked fresh daily.', price: 3.75, category: 'Snacks', image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=600' },
  { id: 18, name: 'Eggs Benedict', description: 'Poached eggs, Canadian bacon, and hollandaise on an English muffin.', price: 11.50, category: 'Breakfast', image: 'https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=600', popular: true },
  { id: 19, name: 'Pancake Stack', description: 'Fluffy buttermilk pancakes with maple syrup and berries.', price: 9.50, category: 'Breakfast', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 20, name: 'Granola Bowl', description: 'House granola, Greek yogurt, seasonal fruit, and honey.', price: 7.50, category: 'Breakfast', image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600' },
];
