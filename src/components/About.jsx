import './About.css'

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about-grid">

        <div className="about-content reveal">
          <span className="label-text">Our Story</span>
          <div className="gold-line left" />

          <h2 id="about-heading" className="about-title">
            A Chef's Devotion,<br />
            <em>A Nation's Soul</em>
          </h2>

          <p className="about-body">
            SVARNARA was born from one profound belief: that Indian cuisine, in all its magnificent 
            complexity, deserves a stage as grand as the finest restaurants in the world. Chef Arjun 
            Mehta spent fifteen years training under masters in Mumbai, Lucknow, and Paris before 
            returning home to build something extraordinary.
          </p>

          <div className="pull-quote">
            <p>
              "India has thirty-six distinct culinary traditions — each a universe unto itself. 
              I do not cook food. I translate memory. Every spice on that plate carries a story 
              older than any restaurant in the world."
            </p>
            <cite>— Chef Arjun Mehta, Executive Chef & Founder</cite>
          </div>

          <p className="about-body">
            Located in the heart of New Delhi's Lutyens' Bungalow Zone, SVARNARA sources directly from 
            artisan spice farmers in Kerala, heirloom grain growers in Punjab, and saffron cultivators 
            in Kashmir. Our tasting menu changes with the Indian seasons — always rooted in tradition, 
            always daring in execution.
          </p>

          <div className="chef-sig">
            <div className="chef-sig-line" />
            <span className="chef-sig-name">Chef Arjun Mehta</span>
          </div>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-label">Years of Craft</span>
            </div>
            <div className="stat-div" />
            <div className="stat-item">
              <span className="stat-num">36</span>
              <span className="stat-label">Regional Cuisines</span>
            </div>
            <div className="stat-div" />
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-label">Artisan Sourced</span>
            </div>
          </div>
        </div>

        <div className="about-image reveal d2">
          <div className="about-image-frame">
            <img src="/images/chef.png" alt="Executive Chef Arjun Mehta" loading="lazy" />
          </div>
          <div className="about-image-badge">
            <span className="badge-label">Chef of the Year</span>
            <span className="badge-year">India Food Awards 2024</span>
          </div>
        </div>

      </div>
    </section>
  )
}

