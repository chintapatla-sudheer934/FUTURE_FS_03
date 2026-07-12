export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  { id: 1, name: 'Emma Thompson', role: 'Regular Customer', rating: 5, text: 'Brew Haven is my daily ritual. The caramel latte is the best in town, and the staff always greet me by name. It feels like a second home.', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { id: 2, name: 'James Mitchell', role: 'Food Blogger', rating: 5, text: 'I have reviewed dozens of cafés, and Brew Haven stands out. The avocado toast is Instagram-worthy and the coffee is consistently excellent.', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { id: 3, name: 'Sofia Ramirez', role: 'Local Artist', rating: 5, text: 'The atmosphere here is pure magic. I come to paint, and the natural light and cozy corners make it the perfect creative escape.', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { id: 4, name: 'David Chen', role: 'Remote Worker', rating: 5, text: 'Best workspace café in the neighborhood. Fast Wi-Fi, plenty of outlets, and the cold brew keeps me going all afternoon.', image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { id: 5, name: 'Olivia Parker', role: 'Coffee Enthusiast', rating: 5, text: 'Their matcha latte is the real deal — ceremonial grade matcha, perfectly whisked. I drive 20 minutes just for this.', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { id: 6, name: 'Marcus Johnson', role: 'Weekend Visitor', rating: 4, text: 'The eggs benedict is a weekend tradition for our family. The kids love the pancakes, and the service is always warm and welcoming.', image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200' },
];
