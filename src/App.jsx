import { useState } from "react";
import "./App.css";
import {
  Heart,
  BookOpen,
  Users,
  Sparkles,
  ArrowRight,
  Search,
} from "lucide-react";

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const sections = [
    {
      id: "health",
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive guides on hormone therapy, surgical options, mental health support, and finding affirming healthcare providers.",
      color: "#E8B4B8",
      gradient: "linear-gradient(135deg, #E8B4B8 0%, #D4A5A5 100%)",
    },
    {
      id: "culture",
      icon: Sparkles,
      title: "Culture & Community",
      description:
        "Explore trans history, celebrate queer culture, find community spaces, and connect with stories from around the world.",
      color: "#B8D4E8",
      gradient: "linear-gradient(135deg, #B8D4E8 0%, #A5C4D4 100%)",
    },
    {
      id: "resources",
      icon: BookOpen,
      title: "Resources & Support",
      description:
        "Legal guidance, financial assistance, educational materials, and crisis support resources available in your area.",
      color: "#D4E8B8",
      gradient: "linear-gradient(135deg, #D4E8B8 0%, #C4D4A5 100%)",
    },
    {
      id: "stories",
      icon: Users,
      title: "Stories & Voices",
      description:
        "Real experiences from trans individuals navigating healthcare, coming out, transitioning, and living authentically.",
      color: "#E8D4B8",
      gradient: "linear-gradient(135deg, #E8D4B8 0%, #D4C4A5 100%)",
    },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Heart className="logo-icon" />
            <span>Trans Health Almanac</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#resources">Resources</a>
            <a href="#community">Community</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Guide to
            <span className="highlight"> Trans Health</span>,
            <br />
            <span className="highlight">Culture</span>, and
            <span className="highlight"> Community</span>
          </h1>
          <p className="hero-subtitle">
            A comprehensive almanac providing trusted information, resources,
            and support for transgender individuals and their allies navigating
            healthcare, culture, and life.
          </p>

          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search for health topics, resources, or community guides..."
              className="search-input"
            />
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Articles</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Contributors</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Crisis Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="sections">
        <h2 className="sections-title">Explore the Almanac</h2>
        <div className="sections-grid">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className={`section-card ${hoveredCard === section.id ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredCard(section.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ "--card-color": section.color }}
              >
                <div
                  className="card-icon"
                  style={{ background: section.gradient }}
                >
                  <Icon size={32} />
                </div>
                <h3 className="card-title">{section.title}</h3>
                <p className="card-description">{section.description}</p>
                <button className="card-button">
                  Explore <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Content */}
      <section className="featured">
        <div className="featured-content">
          <div className="featured-text">
            <span className="featured-label">Featured Guide</span>
            <h2 className="featured-title">
              Getting Started with Gender-Affirming Care
            </h2>
            <p className="featured-description">
              A comprehensive guide for individuals beginning their transition
              journey, covering first steps, finding providers, understanding
              options, and navigating the healthcare system with confidence.
            </p>
            <button className="featured-button">
              Read the Guide <ArrowRight size={20} />
            </button>
          </div>
          <div className="featured-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Trans Health Almanac</h4>
            <p>
              Empowering the trans community with knowledge, resources, and
              support.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#health">Health Resources</a>
            <a href="#culture">Culture & Community</a>
            <a href="#support">Support Services</a>
          </div>
          <div className="footer-section">
            <h4>Get Help</h4>
            <a href="#crisis">Crisis Support</a>
            <a href="#providers">Find Providers</a>
            <a href="#legal">Legal Resources</a>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <a href="#newsletter">Newsletter</a>
            <a href="#community">Community Forum</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2024 Trans Health Almanac. Created with care for the community.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
