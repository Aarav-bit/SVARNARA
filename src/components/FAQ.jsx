import './FAQ.css'

const faqs = [
  {
    question: 'Where is SVARNARA Fine Dining located?',
    answer: 'SVARNARA Fine Dining is located at 14 Prithviraj Road, Lutyens Bungalow Zone, New Delhi 110011, India.',
  },
  {
    question: 'What cuisine does SVARNARA serve?',
    answer: 'SVARNARA serves luxury Indian fine dining with seasonal tasting menus, regional classics, vegetarian dishes, seafood, kebabs, desserts, and curated drink pairings.',
  },
  {
    question: 'What are the opening hours?',
    answer: 'SVARNARA is open Tuesday to Friday from 7:00 PM to 11:00 PM, Saturday and Sunday from 6:30 PM to 11:30 PM, and remains closed on Monday.',
  },
  {
    question: 'How can I reserve a table?',
    answer: 'Guests can reserve through the reservation form on this website, call +91 11 4000 1234, or email reservations@svarnara.in.',
  },
  {
    question: 'Does SVARNARA offer vegetarian options?',
    answer: 'Yes. The menu includes vegetarian dishes such as Dahi Ke Sholay, Hara Bhara Galawat, Paneer Lababdar, Dal Makhani SVARNARA, and seasonal desserts.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <div className="section-wrap">
        <div className="section-header reveal">
          <span className="label-text">Guest Notes</span>
          <div className="gold-line" />
          <h2 id="faq-heading" className="faq-heading">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list reveal d1">
          {faqs.map(item => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

