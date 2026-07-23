import { useState, useCallback, memo } from 'react'
import './Menu.css'

const menuData = {
  starters: [
    {
      name: 'Gilafi Seekh Kebab',
      price: '₹895',
      desc: 'Minced lamb and smoked chicken on skewers, chargrilled in tandoor, wrapped in caramelised onion, served with saffron chutney.',
      tags: ['Tandoor', 'Signature']
    },
    {
      name: 'Dahi Ke Sholay',
      price: '₹750',
      desc: 'Hung curd and paneer stuffed in a crisp wheat shell, achari masala, tamarind reduction, pomegranate molasses.',
      tags: ['Vegetarian', 'House Specialty']
    },
    {
      name: 'Bhatti Ka Jhinga',
      price: '₹1,295',
      desc: 'King prawns marinated in carom seed, chilli and mustard oil, slow-cooked in the clay oven, served with raw mango gel.',
      tags: ['Seafood']
    },
    {
      name: 'Burrah Chops',
      price: '₹1,450',
      desc: 'Lamb chops marinated 24 hours in raw papaya, garam masala and saffron, cooked over live coals.',
      tags: ['Mughal', "Chef's Choice"]
    },
    {
      name: 'Hara Bhara Galawat',
      price: '₹695',
      desc: 'Spinach and pea melt-in-mouth kebab with 27 spices, served on roomali roti with white butter.',
      tags: ['Vegetarian', 'Lucknowi']
    },
    {
      name: 'Amritsari Macchi',
      price: '₹980',
      desc: 'Sole fish marinated in ajwain batter, deep-fried golden, served with chickpea chutney and lemon butter.',
      tags: ['Punjab', 'Crispy']
    }
  ],
  mains: [
    {
      name: 'Dum Pukht Gosht',
      price: '₹1,850',
      desc: 'Slow-braised lamb shoulder sealed under dough, cooked over coals for 6 hours, served with warqi paratha.',
      tags: ['Signature', 'Awadhi']
    },
    {
      name: 'Malabar Prawn Curry',
      price: '₹2,100',
      desc: 'Tiger prawns in a coconut, kodampuli and green chilli gravy, finished with curry leaf. Served with appam.',
      tags: ['Coastal']
    },
    {
      name: 'Paneer Lababdar',
      price: '₹1,150',
      desc: 'Handmade cottage cheese in a rich tomato, cashew and kasoori methi gravy, finished with silver leaf.',
      tags: ['Vegetarian', 'Mughal']
    },
    {
      name: 'Dal Makhani AURUM',
      price: '₹945',
      desc: 'Black lentils and kidney beans simmered for 18 hours, finished with churned butter and house spices.',
      tags: ['Legend', 'Vegetarian']
    },
    {
      name: 'Raan-e-Aurum',
      price: '₹3,400',
      desc: 'Whole leg of lamb, Rajasthani spice rub, slow-cooked 12 hours, finished on coal grill. Serves two.',
      tags: ['For Two']
    },
    {
      name: 'Chettinad Chicken',
      price: '₹1,490',
      desc: "Free-range chicken in black pepper, kalpasi and marathi mokku masala, served with rice puttu.",
      tags: ['Tamil Nadu']
    }
  ],
  desserts: [
    {
      name: 'Gulab Jamun Soufflé',
      price: '₹695',
      desc: 'Hot rose syrup soufflé, saffron-scented centre, pistachio crumble, gold leaf, hand-churned malai ice cream.',
      tags: ['Signature']
    },
    {
      name: 'Shahi Tukda',
      price: '₹545',
      desc: "Double-fried bread, rose-infused rabri, silver vark, saffron strands, Irani kesar.",
      tags: ['Classic']
    },
    {
      name: 'Kulfi Brûlée',
      price: '₹550',
      desc: 'Malai kulfi set in a ramekin, caramelised jaggery crust, roasted almond crumble.',
      tags: ['Fusion', 'Vegetarian']
    },
    {
      name: 'Mango Phirni',
      price: '₹480',
      desc: 'Alphonso mango set rice pudding in traditional clay pot, cardamom, silver leaf.',
      tags: ['Seasonal', 'Vegetarian']
    },
    {
      name: 'Rasmalai Cheesecake',
      price: '₹625',
      desc: 'Baked saffron cheesecake, rasmalai disc, cardamom biscuit base, candied pistachio.',
      tags: ['Fusion']
    },
    {
      name: 'Meetha Paan Shot',
      price: '₹350',
      desc: "Betel leaf, gulkand, fennel and coconut palate cleanser.",
      tags: ['Palate Cleanser', 'Signature']
    }
  ],
  drinks: [
    {
      name: 'Saffron & Rose Sharbat',
      price: '₹480',
      desc: 'House-made Kashmiri saffron syrup, rose water, sparkling water, dried rose petals.',
      tags: ['Signature', 'Non-Alcoholic']
    },
    {
      name: 'Masala Chai Old Fashioned',
      price: '₹720',
      desc: 'Single malt whisky, masala chai reduction, cardamom bitters, orange peel.',
      tags: ['Cocktail']
    },
    {
      name: 'AURUM Mango Lassi',
      price: '₹420',
      desc: 'Alphonso mango, thick yogurt, cardamom, kesar, topped with fresh malai.',
      tags: ['Non-Alcoholic', 'Seasonal']
    },
    {
      name: 'Thandai Collins',
      price: '₹650',
      desc: 'Gin, house thandai syrup (almonds, rose, fennel), lime, sparkling water.',
      tags: ['Cocktail']
    },
    {
      name: 'Kokum Cooler',
      price: '₹380',
      desc: 'Goan kokum, fresh mint, black salt, cumin water, served over hand-cut ice.',
      tags: ['Non-Alcoholic', 'Digestive']
    },
    {
      name: "Sommelier's Pairing",
      price: '₹2,800',
      desc: 'Five glasses curated by our sommelier to complement your meal.',
      tags: ['Pairing']
    }
  ]
}

const tabs = [
  { key: 'starters', label: 'Starters' },
  { key: 'mains',    label: 'Mains'    },
  { key: 'desserts', label: 'Desserts' },
  { key: 'drinks',   label: 'Drinks'   }
]

const DishItem = memo(function DishItem({ dish }) {
  return (
    <article className="menu-item-classic">
      <div className="menu-item-header">
        <h3 className="menu-item-name">{dish.name}</h3>
        <span className="menu-item-dots" aria-hidden="true" />
        <span className="menu-item-price">{dish.price}</span>
      </div>
      <p className="menu-item-desc">{dish.desc}</p>
      {dish.tags && (
        <div className="menu-item-tags">
          {dish.tags.map(t => (
            <span className="menu-item-tag" key={t}>{t}</span>
          ))}
        </div>
      )}
    </article>
  )
})

export default function Menu() {
  const [active, setActive] = useState('starters')

  const handleTabChange = useCallback((key) => setActive(key), [])
  const dishes = menuData[active]

  const handleKeyDown = (e, index) => {
    let newIndex
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % tabs.length
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + tabs.length) % tabs.length
    } else {
      return // Not an arrow key
    }
    const newTab = tabs[newIndex]
    handleTabChange(newTab.key)
    document.getElementById(`tab-${newTab.key}`)?.focus()
  }

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
          {tabs.map((t, index) => (
            <button
              key={t.key}
              className={`menu-tab${active === t.key ? ' active' : ''}`}
              onClick={() => handleTabChange(t.key)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="tab"
              aria-selected={active === t.key}
              aria-controls={`panel-${t.key}`}
              id={`tab-${t.key}`}
              tabIndex={active === t.key ? 0 : -1}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="menu-classic-grid"
          key={active}
          tabIndex={0}
        >
          {dishes.map(dish => (
            <DishItem key={dish.name} dish={dish} />
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
