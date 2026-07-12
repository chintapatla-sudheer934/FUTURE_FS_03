export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  { id: 1, question: 'What are your opening hours?', answer: 'We are open Monday through Friday from 7:00 AM to 8:00 PM, and weekends from 8:00 AM to 6:00 PM. We are closed on major holidays.' },
  { id: 2, question: 'Do you offer vegan and gluten-free options?', answer: 'Yes! We have a dedicated vegan menu featuring plant-based milks, vegan pastries, and gluten-free options. Just ask our staff and they will be happy to help.' },
  { id: 3, question: 'Can I book a table in advance?', answer: 'Absolutely. You can book a table through our website by clicking the "Book a Table" button, or call us directly. We recommend booking for weekend visits.' },
  { id: 4, question: 'Do you have Wi-Fi and charging points?', answer: 'Yes, we offer complimentary high-speed Wi-Fi throughout the café. Every seating area has accessible charging points for laptops and phones.' },
  { id: 5, question: 'Do you cater for events and corporate meetings?', answer: 'We do! We offer catering services for corporate events, birthdays, and private gatherings. Contact us at least 48 hours in advance for catering orders.' },
  { id: 6, question: 'Is parking available nearby?', answer: 'There is street parking available on the block, and a public parking garage just two minutes walk from the café. Bike racks are also available outside.' },
];
