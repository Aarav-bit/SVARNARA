import { useState, useCallback, memo } from 'react'
import './Menu.css'

/* ── Category cover images (one hero per tab) ── */
const categoryMeta = {
  starters: {
    cover: '/images/menu_kebab.png',
    coverAlt: 'Gilafi Seekh Kebab — AURUM signature starter',
    coverLabel: 'Starters',
    coverDesc: 'Small plates that speak volumes — each a prelude to the evening ahead.',
  },
  mains: {
    cover: '/images/menu_dum.png',
    coverAlt: 'Dum Pukht — slow-cooked perfection',
    coverLabel: 'Main Course',
    coverDesc: 'The heart of the meal. Bold, slow-cooked, unapologetically Indian.',
  },
  desserts: {
    cover: '/images/gal3.png',
    coverAlt: 'AURUM signature dessert',
    coverLabel: 'Desserts',
    coverDesc: 'A sweet finale — where ancient mithai meets modern artistry.',
  },
  drinks: {
    cover: '/images/menu_prawn.png',
    coverAlt: 'Drinks & cocktails',
    coverLabel: 'Drinks & Pairings',
    coverDesc: 'From Kashmiri sharbat to craft cocktails — a sip for every mood.',
  },
}

const menuData = {
  starters: [
    {
      name: 'Gilafi Seekh Kebab',
      price: '₹ 895',
      desc: 'Minced lamb and smoked chicken on skewers, chargrilled in tandoor, wrapped in caramelised onion, served with saffron chutney and mint raita.',
      tags: ['Tandoor', 'Signature'],
      img: '/images/menu_kebab.png',
      featured: true,
    },
    {
      name: 'Dahi Ke Sholay',
      price: '₹ 750',
      desc: 'Hung curd and paneer stuffed in a crisp wheat shell, achari masala, tamarind reduction, pomegranate molasses, micro herbs.',
      tags: ['Vegetarian', 'House Specialty'],
      img: '/images/gal1.png',
    },
    {
      name: 'Bhatti Ka Jhinga',
      price: '₹ 1,295',
      desc: 'King prawns marinated in carom seed, chilli and mustard oil, slow-cooked in the clay oven, served with raw mango gel.',
      tags: ['Seafood', 'Seasonal'],
      img: '/images/menu_prawn.png',
    },
    {
      name: 'Burrah Chops',
      price: '₹ 1,450',
      desc: 'Lamb chops marinated 24 hours in raw papaya, garam masala and saffron, cooked over live coals. A Mughal court classic.',
      tags: ['Mughal', "Chef's Choice"],
      img: '/images/gal2.png',
    },
    {
      name: 'Hara Bhara Galawat',
      price: '₹ 695',
      desc: 'Spinach and pea melt-in-mouth kebab with 27 spices, served on roomali roti with white butter and rose petal chutney.',
      tags: ['Vegetarian', 'Lucknowi'],
      img: '/images/gal1.png',
    },
    {
      name: 'Amritsari Macchi',
      price: '₹ 980',
      desc: 'Sole fish marinated in ajwain batter, deep-fried golden, served with chickpea chutney, lemon butter and fresh coriander.',
      tags: ['Punjab', 'Crispy'],
      img: '/images/menu_prawn.png',
    },
  ],
  mains: [
    {
      name: 'Dum Pukht Gosht',
      price: '₹ 1,850',
      desc: 'Slow-braised lamb shoulder sealed under dough, cooked over coals for 6 hours. Fragrant with whole spices, served with warqi paratha.',
      tags: ['Signature', 'Awadhi'],
      img: '/images/menu_dum.png',
      featured: true,
    },
    {
      name: 'Malabar Prawn Curry',
      price: '₹ 2,100',
      desc: 'Tiger prawns in a coconut, kodampuli and green chilli gravy. Finished with curry leaf and mustard oil temper. Served with appam.',
      tags: ['Coastal', 'Gluten-Free'],
      img: '/images/menu_prawn.png',
    },
    {
      name: 'Paneer Lababdar',
      price: '₹ 1,150',
      desc: 'Handmade cottage cheese in a rich tomato, cashew and kasoori methi gravy, finished with cream and silver leaf. With laccha paratha.',
      tags: ['Vegetarian', 'Mughal'],
      img: '/images/gal4.png',
    },
    {
      name: 'Dal Makhani AURUM',
      price: '₹ 945',
      desc: 'Black lentils and kidney beans simmered for 18 hours, butter, cream, house-made spice blend. Our most requested dish since 2009.',
      tags: ['Legend', 'Vegetarian'],
      img: '/images/gal1.png',
    },
    {
      name: 'Raan-e-Aurum',
      price: '₹ 3,400',
      desc: 'Whole leg of lamb, Rajasthani spice rub, slow-cooked 12 hours, finished on coal grill. Serves 2. 24-hour advance notice required.',
      tags: ['For Two', 'Royal'],
      img: '/images/menu_dum.png',
    },
    {
      name: 'Chettinad Chicken',
      price: '₹ 1,490',
      desc: "Free-range chicken in black pepper, kalpasi and marathi mokku masala — one of India's most complex spice profiles. With rice puttu.",
      tags: ['Tamil Nadu', "Chef's Choice"],
      img: '/images/gal4.png',
    },
  ],
  desserts: [
    {
      name: 'Gulab Jamun Soufflé',
      price: '₹ 695',
      desc: 'Hot rose syrup soufflé, saffron-scented centre, pistachio crumble, gold leaf, hand-churned malai ice cream.',
      tags: ['Signature', 'Hot & Cold'],
      img: '/images/gal3.png',
      featured: true,
    },
    {
      name: 'Shahi Tukda',
      price: '₹ 545',
      desc: "Double-fried bread, rose-infused rabri, silver vark, saffron strands, Irani kesar. A Mughal emperor's midnight craving.",
      tags: ['Classic', 'Mughal'],
      img: '/images/gal3.png',
    },
    {
      name: 'Kulfi Brûlée',
      price: '₹ 550',
      desc: 'Malai kulfi set in a ramekin, caramelised jaggery crust, compressed rose petals, roasted almond crumble.',
      tags: ['Fusion', 'Vegetarian'],
      img: '/images/gal3.png',
    },
    {
      name: 'Mango Phirni',
      price: '₹ 480',
      desc: 'Alphonso mango set rice pudding in traditional clay pot, cardamom, silver leaf, dried rose petals, mango coulis.',
      tags: ['Seasonal', 'Vegetarian'],
      img: '/images/gal3.png',
    },
    {
      name: 'Rasmalai Cheesecake',
      price: '₹ 625',
      desc: 'Baked saffron cheesecake, rasmalai disc, cardamom biscuit base, candied pistachio, rose water jelly.',
      tags: ['Fusion', 'Contemporary'],
      img: '/images/gal3.png',
    },
    {
      name: 'Meetha Paan Shot',
      price: '₹ 350',
      desc: "Betel leaf, gulkand, fennel and coconut palate cleanser — AURUM's signature end to every meal.",
      tags: ['Palate Cleanser', 'Signature'],
      img: '/images/gal3.png',
    },
  ],
  drinks: [
    {
      name: 'Saffron & Rose Sharbat',
      price: '₹ 480',
      desc: 'House-made Kashmiri saffron syrup, rose water, sparkling water, dried rose petals. A royal thirst quencher.',
      tags: ['Signature', 'Non-Alcoholic'],
      img: '/images/gallery_wine.png',
      featured: true,
    },
    {
      name: 'Masala Chai Old Fashioned',
      price: '₹ 720',
      desc: 'Single malt whisky, masala chai reduction, cardamom bitters, orange peel. East meets West.',
      tags: ['Cocktail', 'Spirits'],
      img: '/images/gallery_wine.png',
    },
    {
      name: 'AURUM Mango Lassi',
      price: '₹ 420',
      desc: 'Alphonso mango, thick yogurt, cardamom, kesar, topped with malai. The finest lassi in Delhi.',
      tags: ['Non-Alcoholic', 'Seasonal'],
      img: '/images/gallery_wine.png',
    },
    {
      name: 'Thandai Collins',
      price: '₹ 650',
      desc: 'Gin, house thandai syrup (almonds, rose, fennel), lime, sparkling water. Inspired by Holi festivities.',
      tags: ['Cocktail', 'Festive'],
      img: '/images/gallery_wine.png',
    },
    {
      name: 'Kokum Cooler',
      price: '₹ 380',
      desc: 'Goan kokum, fresh mint, black salt, cumin water, served over hand-cut ice. A digestive masterpiece.',
      tags: ['Non-Alcoholic', 'Digestive'],
      img: '/images/gallery_wine.png',
    },
    {
      name: "Sommelier's Pairing",
      price: '₹ 2,800',
      desc: 'Five glasses curated by our sommelier to complement your meal — Indian craft beer, wines and spirits paired by course.',
      tags: ['Pairing', 'Full Meal'],
      img: '/images/gallery_wine.png',
    },
  ],
}

const tabs = [
  { key: 'starters', label: 'Starters' },
  { key: 'mains',    label: 'Mains'    },
  { key: 'desserts', label: 'Desserts' },
  { key: 'drinks',   label: 'Drinks'   },
]

/* ─────────────────────────────────────────────
   DishCard — memo'd so it never re-renders
   unless its own dish prop changes.
   Hover is handled purely in CSS via :hover —
   no JS useState, no React re-renders.
───────────────────────────────────────────── */
const DishCard = memo(function DishCard({ dish, index, featured }) {
  const delay = `${index * 0.06}s`

  if (featured) {
    return (
      <article className="menu-card menu-card--featured" style={{ animationDelay: delay }}>
        <div className="featured-img-wrap">
          <img src={dish.img} alt={dish.name} loading="lazy" decoding="async" />
          <div className="featured-img-overlay" />
          <div className="featured-badge"><span>✦</span> Chef's Selection</div>
        </div>
        <div className="featured-body">
          <div className="dish-header">
            <h3 className="dish-name dish-name--lg">{dish.name}</h3>
            <span className="dish-price dish-price--lg">{dish.price}</span>
          </div>
          <p className="dish-desc">{dish.desc}</p>
          <div className="dish-tags">
            {dish.tags.map(t => <span className="dish-tag" key={t}>{t}</span>)}
          </div>
        </div>
        <div className="card-shimmer" aria-hidden="true" />
      </article>
    )
  }

  return (
    <article className="menu-card" style={{ animationDelay: delay }}>
      <div className="card-img-wrap">
        <img src={dish.img} alt={dish.name} loading="lazy" decoding="async" />
        <div className="card-img-overlay" />
      </div>
      <div className="card-body">
        <div className="dish-header">
          <h3 className="dish-name">{dish.name}</h3>
          <span className="dish-price">{dish.price}</span>
        </div>
        <p className="dish-desc">{dish.desc}</p>
        <div className="dish-tags">
          {dish.tags.map(t => <span className="dish-tag" key={t}>{t}</span>)}
        </div>
      </div>
      <div className="card-border-anim" aria-hidden="true" />
    </article>
  )
})

export default function Menu() {
  const [active, setActive] = useState('starters')

  // useCallback so the fn ref is stable → tabs never re-render unnecessarily
  const handleTabChange = useCallback((key) => setActive(key), [])

  const meta   = categoryMeta[active]
  const dishes = menuData[active]

  return (
    <section id="menu" className="menu" aria-labelledby="menu-heading">

      <div className="menu-ambient" aria-hidden="true" />

      <div className="section-wrap">
        <div className="menu-section-header">
          <span className="label-text">Culinary Journey</span>
          <div className="gold-line" />
          <h2 id="menu-heading" className="menu-heading">The Menu</h2>
          <p className="menu-subheading">Each dish is a verse. Together, they compose a poem of India.</p>
        </div>

        <div className="menu-tabbar" role="tablist" aria-label="Menu categories">
          {tabs.map(t => (
            <button
              key={t.key}
              className={`menu-tab${active === t.key ? ' active' : ''}`}
              onClick={() => handleTabChange(t.key)}
              role="tab"
              aria-selected={active === t.key}
              id={`tab-${t.key}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category hero banner — keyed to active so React replaces it cleanly */}
      <div className="menu-category-banner" key={active}>
        <div className="banner-img-wrap">
          <img src={meta.cover} alt={meta.coverAlt} loading="lazy" decoding="async" />
          <div className="banner-gradient" />
        </div>
        <div className="banner-text">
          <span className="label-text banner-label">{meta.coverLabel}</span>
          <h3 className="banner-title">{meta.coverLabel}</h3>
          <p className="banner-desc">{meta.coverDesc}</p>
          <div className="banner-ornament" aria-hidden="true">
            <div className="ornament-line" />
            <span className="ornament-diamond">◆</span>
            <div className="ornament-line" />
          </div>
        </div>
      </div>

      <div className="section-wrap">
        {/* Grid keyed to active — lets React efficiently diff only changed items */}
        <div className="menu-grid" key={active}>
          {dishes.map((dish, i) => (
            <DishCard
              key={dish.name}
              dish={dish}
              index={i}
              featured={!!dish.featured}
            />
          ))}
        </div>

        <div className="menu-footer-note">
          <div className="menu-ornament" aria-hidden="true">
            <div className="ornament-line" />
            <span>◆</span>
            <div className="ornament-line" />
          </div>
          <p>All dishes prepared à la minute · Prices exclusive of taxes · Please inform us of any allergies</p>
          <p className="menu-footer-sub">A discretionary service charge of 10% will be added to your bill</p>
        </div>
      </div>

    </section>
  )
}
