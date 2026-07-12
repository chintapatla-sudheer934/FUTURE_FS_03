export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Freshly brewed coffee in a white cup', category: 'Coffee' },
  { id: 2, src: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cozy café interior with warm lighting', category: 'Interior' },
  { id: 3, src: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=800', alt: 'Fresh croissants on a wooden board', category: 'Food' },
  { id: 4, src: 'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Latte art in a ceramic cup', category: 'Coffee' },
  { id: 5, src: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Café seating area with plants', category: 'Interior' },
  { id: 6, src: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Avocado toast on a ceramic plate', category: 'Food' },
  { id: 7, src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Iced coffee with ice cubes', category: 'Coffee' },
  { id: 8, src: 'https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Eggs benedict breakfast plate', category: 'Food' },
  { id: 9, src: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Matcha latte with green tea powder', category: 'Coffee' },
  { id: 10, src: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tiramisu dessert on a plate', category: 'Food' },
  { id: 11, src: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Fresh strawberry lemonade', category: 'Drinks' },
  { id: 12, src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Pancake stack with maple syrup', category: 'Food' },
];

export const galleryCategories = ['All', 'Coffee', 'Food', 'Interior', 'Drinks'];
