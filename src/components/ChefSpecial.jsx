import './ChefSpecial.css'

// 7 specials — one rotates in each day of the week
const SPECIALS = [
  {
    day: 'Sunday',
    name: 'Nihari Gosht',
    description: 'Slow-braised lamb shanks in a 12-spice bone broth, simmered overnight in a sealed handi. Garnished with crisp ginger julienne, fresh coriander, and a squeeze of mountain lime.',
    pairing: 'Pairs with: Warqi Paratha',
    price: '₹2,100',
    tag: 'Slow-Cooked · 12 hrs',
    badge: 'Sunday Indulgence',
    emoji: '🥩',
  },
  {
    day: 'Monday',
    name: 'Malabar Prawn Moilee',
    description: 'Tiger prawns from the Kerala coast poached in a delicate coconut milk curry with turmeric, green chilli, and fresh curry leaves. Light, fragrant, coastal.',
    pairing: 'Pairs with: Appam',
    price: '₹1,950',
    tag: 'Coastal · Light',
    badge: 'Chef\'s Signature',
    emoji: '🦐',
  },
  {
    day: 'Tuesday',
    name: 'Dum Ka Murgh',
    description: 'Whole spring chicken marinated in saffron yoghurt and sealed in a copper vessel with kewra water, slow-cooked over charcoal for four hours. The aroma alone is an experience.',
    pairing: 'Pairs with: Sheermal',
    price: '₹1,750',
    tag: 'Dum Cooked · 4 hrs',
    badge: 'Heritage Recipe',
    emoji: '🍗',
  },
  {
    day: 'Wednesday',
    name: 'Sabz Bahar Kofta',
    description: 'Hand-rolled vegetable koftas stuffed with dried fruits and saffron, nestled in a silky cashew-tomato gravy with rose water and cardamom. A vegetarian jewel.',
    pairing: 'Pairs with: Garlic Naan',
    price: '₹1,450',
    tag: 'Vegetarian · Royal',
    badge: 'Vegetarian Gem',
    emoji: '🌿',
  },
  {
    day: 'Thursday',
    name: 'Raan-e-Awadh',
    description: 'A full leg of lamb marinated for 48 hours in Awadhi spices, slow-roasted in the tandoor until the meat falls effortlessly from the bone. Carved tableside.',
    pairing: 'Pairs with: Rumali Roti',
    price: '₹3,400',
    tag: 'Tableside Carved',
    badge: 'Large Format',
    emoji: '🍖',
  },
  {
    day: 'Friday',
    name: 'Zafrani Lobster Biryani',
    description: 'Wild-caught Bay of Bengal lobster layered with aged basmati, saffron-infused dum and crispy caramelised onions. A royal feast encased in a sealed clay pot.',
    pairing: 'Pairs with: Pomegranate Raita',
    price: '₹4,200',
    tag: 'Weekend Special',
    badge: 'Most Sought After',
    emoji: '🦞',
  },
  {
    day: 'Saturday',
    name: 'Kakori Seekh Platter',
    description: 'A ceremonial platter of five seekh kebabs hand-pounded with 27 Awadhi spices, grilled on sigri charcoal and served on a banana leaf with four house chutneys.',
    pairing: 'Pairs with: Mint Chutney & Ulte Tawa Paratha',
    price: '₹1,800',
    tag: 'Charcoal Grilled',
    badge: 'Weekend Favourite',
    emoji: '🍢',
  },
]

export default function ChefSpecial() {
  const today = new Date().getDay() // 0 = Sunday
  const special = SPECIALS[today]

  return (
    <section id="chef-special" className="chef-special" aria-labelledby="cs-heading">
      <div className="cs-bg" aria-hidden="true" />

      <div className="section-wrap">
        <div className="cs-inner reveal">
          {/* Left: Text */}
          <div className="cs-text">
            <div className="cs-meta">
              <span className="label-text">Chef's Table</span>
              <span className="cs-badge">{special.badge}</span>
            </div>

            <div className="gold-line left" />

            <h2 id="cs-heading" className="cs-title">
              Today's Special
            </h2>

            <p className="cs-day-tag">
              {special.day}'s curated creation by Executive Chef Ranveer Brar
            </p>

            <h3 className="cs-dish-name">{special.name}</h3>

            <p className="cs-description">{special.description}</p>

            <div className="cs-details">
              <span className="cs-tag">{special.tag}</span>
              <span className="cs-pairing">{special.pairing}</span>
            </div>

            <div className="cs-footer">
              <span className="cs-price">{special.price}</span>
              <a href="#reservations" className="btn btn-gold cs-cta"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Reserve for Tonight
              </a>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="cs-card reveal d2">
            <div className="cs-card-inner">
              <div className="cs-emoji-wrap" aria-hidden="true">
                <span className="cs-emoji">{special.emoji}</span>
              </div>
              <div className="cs-card-glow" aria-hidden="true" />

              <div className="cs-card-label">
                <span className="cs-card-today">Today</span>
                <span className="cs-card-name">{special.name}</span>
              </div>

              <div className="cs-card-price-tag">{special.price}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
