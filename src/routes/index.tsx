import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bone,
  Cat,
  Check,
  ChevronDown,
  Dog,
  House,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Scissors,
  ShieldPlus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDog from "@/assets/hero-dog.jpg";
import aboutDogs from "@/assets/about-dogs.jpg";
import salePuppy from "@/assets/sale-puppy.jpg";
import testimonialCorgi from "@/assets/testimonial-corgi.jpg";
import petFood from "@/assets/pet-food-products.jpg";
import teamGrid from "@/assets/team-grid.jpg";
import blogDogs from "@/assets/blog-dogs.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pet Shop | Happy pets, happy lives" },
      {
        name: "description",
        content: "Pet care, grooming, boarding and quality products for your best friend.",
      },
      { property: "og:title", content: "Pet Shop | Happy pets, happy lives" },
      {
        property: "og:description",
        content: "Pet care, grooming, boarding and quality products for your best friend.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: House, title: "PET BOARDING", text: "A safe and comfortable stay while you're away." },
  { icon: Bone, title: "PET FEEDING", text: "Healthy meals made just right for your companion." },
  {
    icon: Scissors,
    title: "PET GROOMING",
    text: "A little pampering to keep them looking their best.",
  },
  { icon: Cat, title: "PET TRAINING", text: "Positive guidance for happier days together." },
  { icon: Dog, title: "PET EXERCISE", text: "Playtime and movement for every energy level." },
  {
    icon: ShieldPlus,
    title: "PET TREATMENT",
    text: "Thoughtful care when your friend needs it most.",
  },
];
const products = [
  { name: "QUALITY PET FOODS", price: "$19.00", position: "0%" },
  { name: "QUALITY PET FOODS", price: "$25.00", position: "33.33%" },
  { name: "QUALITY PET FOODS", price: "$29.00", position: "66.66%" },
  { name: "QUALITY PET FOODS", price: "$19.00", position: "100%" },
  { name: "NATURAL DOG FOOD", price: "$24.00", position: "33.33%" },
  { name: "PREMIUM PET FOOD", price: "$32.00", position: "66.66%" },
];
const plans = [
  { name: "BASIC", price: "49", features: [true, true, false, false] },
  { name: "STANDARD", price: "99", features: [true, true, true, false] },
  { name: "EXTENDED", price: "149", features: [true, true, true, true] },
];
const featureNames = [
  "Feeding & care",
  "Daily exercise",
  "Responsive support",
  "Veterinary consultation",
];

function SectionHeading({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span>{label}</span>
      <h2>{children}</h2>
    </div>
  );
}

function Index() {
  const [aboutTab, setAboutTab] = useState<"mission" | "vision">("mission");
  const [productStart, setProductStart] = useState(0);
  const [teamStart, setTeamStart] = useState(0);
  const [testimonial, setTestimonial] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [email, setEmail] = useState("");
  const visibleProducts = Array.from(
    { length: 4 },
    (_, i) => products[(productStart + i) % products.length],
  ).filter((product): product is (typeof products)[number] => product !== undefined);
  const team = ["SOPHIE", "EMILY", "OLIVIA", "CHARLOTTE"];
  const testimonials = [
    {
      quote:
        "Our dogs adore coming here. The team is so caring and attentive, and we always know our best friends are in wonderful hands.",
      name: "CLIENT NAME",
    },
    {
      quote:
        "Friendly people, happy pets, and genuine care every time. It really feels like a second home for our little one.",
      name: "HAPPY CLIENT",
    },
  ];
  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };
  return (
    <div id="top" className="site-shell">
      <div className="topbar">
        <div className="wide-container topbar-inner">
          <div>
            <MapPin aria-hidden="true" />
            <span>
              <strong>OUR OFFICE</strong>
              <small>123 Street, New York, USA</small>
            </span>
          </div>
          <div>
            <Mail aria-hidden="true" />
            <span>
              <strong>EMAIL US</strong>
              <small>info@example.com</small>
            </span>
          </div>
          <div>
            <Phone aria-hidden="true" />
            <span>
              <strong>CALL US</strong>
              <small>+012 345 6789</small>
            </span>
          </div>
        </div>
      </div>
      <header className="main-header">
        <div className="wide-container header-inner">
          <a className="brand" href="#top" aria-label="Pet Shop home">
            <span className="brand-icon">
              <House size={26} />
              <span>🐾</span>
            </span>{" "}
            CARINHA DE PET
          </a>
          <Button
            variant="iconPlain"
            size="icon"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
          >
            {mobileMenu ? <X /> : <Menu />}
          </Button>
          <nav className={mobileMenu ? "nav-links open" : "nav-links"} aria-label="Main navigation">
            <a className="active" href="#top" onClick={() => setMobileMenu(false)}>
              HOME
            </a>
            <a href="#about" onClick={() => setMobileMenu(false)}>
              ABOUT
            </a>
            <a href="#services" onClick={() => setMobileMenu(false)}>
              SERVICE
            </a>
            <a href="#products" onClick={() => setMobileMenu(false)}>
              PRODUCT
            </a>
            <a href="#pricing" onClick={() => setMobileMenu(false)}>
              PAGES <ChevronDown size={12} />
            </a>
            <a className="nav-contact" href="#contact" onClick={() => setMobileMenu(false)}>
              CONTACT <ArrowRight size={13} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-label="Pet Shop">
          <img src={heroDog} alt="Happy Bernese Mountain Dog outdoors" width={1920} height={720} />
          <div className="hero-shade" />
          <div className="content-container hero-content">
            <h1>CARINHA DE PET</h1>
            <h2>FAÇA SEUS PETS FELIZES</h2>
            <p>
              Dedicado a cuidar dos companheiros que tornam a vida mais luminosa. Tudo o que seu pet
              precisa, tudo em um lugar feliz..
            </p>
            <div className="hero-actions">
              <Button
                variant="heroOutline"
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                READ MORE
              </Button>
              <Button
                variant="play"
                size="icon"
                onClick={() => setVideoOpen(true)}
                aria-label="Play video"
              >
                <Play fill="currentColor" />
              </Button>
              <span>Play Video</span>
            </div>
          </div>
        </section>

        <section id="about" className="content-container about-section">
          <img
            className="about-photo"
            src={aboutDogs}
            alt="Two happy dogs running together"
            width={768}
            height={944}
            loading="lazy"
          />
          <div className="about-copy">
            <SectionHeading label="ABOUT US">
              WE KEEP YOUR PETS HAPPY
              <br />
              ALL TIME
            </SectionHeading>
            <p className="lead">
              From playful mornings to peaceful nights, we're here to make every moment with your
              pet a little better.
            </p>
            <div className="about-tabs" role="tablist" aria-label="About us">
              <Button
                role="tab"
                aria-selected={aboutTab === "mission"}
                variant={aboutTab === "mission" ? "tabActive" : "tab"}
                onClick={() => setAboutTab("mission")}
              >
                OUR MISSION
              </Button>
              <Button
                role="tab"
                aria-selected={aboutTab === "vision"}
                variant={aboutTab === "vision" ? "tabActive" : "tab"}
                onClick={() => setAboutTab("vision")}
              >
                OUR VISION
              </Button>
            </div>
            <div className="about-tab-copy" role="tabpanel">
              {aboutTab === "mission"
                ? "To give every pet the attention, comfort and care they deserve. From everyday essentials to the little moments that matter, we put their happiness first."
                : "A world where every animal feels loved, healthy and at home. We believe better care makes for brighter lives, for pets and their people alike."}
            </div>
          </div>
        </section>

        <section id="services" className="content-container section-block">
          <SectionHeading label="SERVICES">
            OUR EXCELLENT PET
            <br />
            CARE SERVICES
          </SectionHeading>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <Icon className="service-icon" strokeWidth={1.8} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contact">
                    READ MORE <ArrowRight size={12} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="content-container section-block">
          <SectionHeading label="PRODUCTS">
            PRODUCTS FOR YOUR
            <br />
            BEST FRIENDS
          </SectionHeading>
          <div className="product-grid">
            {visibleProducts.map((product, i) => (
              <article className="product-card" key={`${productStart}-${i}`}>
                <div
                  className="product-photo"
                  style={{
                    backgroundImage: `url(${petFood})`,
                    backgroundPosition: product.position,
                  }}
                  role="img"
                  aria-label="Premium dog food bag"
                />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            ))}
          </div>
          <div className="carousel-controls">
            <Button
              variant="square"
              size="icon"
              aria-label="Previous products"
              onClick={() =>
                setProductStart((productStart - 1 + products.length) % products.length)
              }
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="square"
              size="icon"
              aria-label="Next products"
              onClick={() => setProductStart((productStart + 1) % products.length)}
            >
              <ArrowRight />
            </Button>
          </div>
        </section>

        <section className="sale-banner">
          <img
            src={salePuppy}
            alt="Spaniel puppy playing with a ball"
            width={1920}
            height={640}
            loading="lazy"
          />
          <div className="sale-shade" />
          <div className="content-container sale-content">
            <SectionHeading label="SPECIAL OFFER">
              SAVE 50% ON ALL ITEMS
              <br />
              YOUR FIRST ORDER
            </SectionHeading>
            <p>
              Find something wonderful for your best friend. Explore the little things that make
              tails wag and hearts happy.
            </p>
            <div className="sale-actions">
              <Button
                variant="sale"
                onClick={() =>
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                SHOP NOW
              </Button>
              <Button
                variant="heroOutline"
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                READ MORE
              </Button>
            </div>
          </div>
        </section>

        <section id="pricing" className="content-container section-block">
          <SectionHeading label="PRICING PLAN">
            COMPETITIVE PRICING
            <br />
            FOR PET SERVICES
          </SectionHeading>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`price-card ${plan.name === "STANDARD" ? "featured" : ""}`}
                key={plan.name}
              >
                <div className="price-heading">
                  <h3>{plan.name}</h3>
                  <small>The Best Choice</small>
                </div>
                <div className="price-strip">
                  <sup>$</sup>
                  {plan.price}
                  <span>/ Mo</span>
                </div>
                <ul>
                  {featureNames.map((feature, i) => (
                    <li key={feature}>
                      {feature}
                      {plan.features[i] ? (
                        <Check size={16} className="included" />
                      ) : (
                        <X size={15} className="excluded" />
                      )}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="square"
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  ORDER NOW
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="content-container section-block">
          <SectionHeading label="TEAM MEMBERS">
            QUALIFIED PETS CARE
            <br />
            PROFESSIONALS
          </SectionHeading>
          <div className="team-wrap">
            <div className="team-grid">
              {Array.from({ length: 4 }, (_, i) => {
                const index = (teamStart + i) % 4;
                return (
                  <article className="team-card" key={i}>
                    <div
                      className="team-photo"
                      style={{
                        backgroundImage: `url(${teamGrid})`,
                        backgroundPosition: `${index * 33.333}% center`,
                      }}
                      role="img"
                      aria-label={`${team[index] ?? "Pet care professional"} with a pet`}
                    />
                    <div>
                      <h3>{team[index] ?? "Pet care professional"}</h3>
                      <span>Pet Care Specialist</span>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="team-controls">
              <Button
                variant="square"
                size="icon"
                aria-label="Previous team members"
                onClick={() => setTeamStart((teamStart + 3) % 4)}
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="square"
                size="icon"
                aria-label="Next team members"
                onClick={() => setTeamStart((teamStart + 1) % 4)}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </section>

        <section className="testimonial-banner">
          <img
            src={testimonialCorgi}
            alt="Happy corgi in a sunny garden"
            width={1920}
            height={640}
            loading="lazy"
          />
          <div className="content-container testimonial-inner">
            <div className="quote-card">
              <div className="quote-avatar">🐶</div>
              <div className="quote-row">
                <Button
                  variant="square"
                  size="icon"
                  aria-label="Previous testimonial"
                  onClick={() => setTestimonial((testimonial + 1) % 2)}
                >
                  <ArrowLeft />
                </Button>
                <p>{(testimonials[testimonial] ?? testimonials[0])?.quote}</p>
                <Button
                  variant="square"
                  size="icon"
                  aria-label="Next testimonial"
                  onClick={() => setTestimonial((testimonial + 1) % 2)}
                >
                  <ArrowRight />
                </Button>
              </div>
              <h3>{(testimonials[testimonial] ?? testimonials[0])?.name}</h3>
              <small>Pet Owner</small>
            </div>
          </div>
        </section>

        <section id="blog" className="content-container section-block blog-section">
          <SectionHeading label="LATEST BLOG">
            LATEST ARTICLES FROM
            <br />
            OUR BLOG POST
          </SectionHeading>
          <div className="blog-grid">
            {[0, 1].map((i) => (
              <article className="blog-card" key={i}>
                <div
                  className="blog-photo"
                  style={{
                    backgroundImage: `url(${blogDogs})`,
                    backgroundPosition: `${i * 100}% center`,
                  }}
                  role="img"
                  aria-label={i ? "Border collie outdoors" : "Corgi outdoors"}
                />
                <div className="blog-copy">
                  <div className="blog-meta">◷ &nbsp; Pet care &nbsp; · &nbsp; Oct 02, 2026</div>
                  <h3>
                    {i
                      ? "HOW TO KEEP YOUR PET HAPPY AND HEALTHY"
                      : "GOOD FOOD FOR YOUR BEST FRIEND"}
                  </h3>
                  <p>
                    {i
                      ? "Simple habits and everyday care can make all the difference for your companion."
                      : "The right food gives your pet the energy to enjoy every little adventure."}
                  </p>
                  <a href="#contact">
                    READ MORE <ArrowRight size={12} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-main">
          <div className="content-container footer-grid">
            <div>
              <h3>GET IN TOUCH</h3>
              <p>We'd love to hear from you. Reach out for care, questions or a friendly hello.</p>
              <span>
                <MapPin size={14} /> 123 Street, New York, USA
              </span>
              <span>
                <Mail size={14} /> info@example.com
              </span>
              <span>
                <Phone size={14} /> +012 345 6789
              </span>
              {selectedPlan && (
                <p className="plan-note">
                  Interested in the {selectedPlan.toLowerCase()} plan? Get in touch with us.
                </p>
              )}
            </div>
            <div>
              <h3>QUICK LINKS</h3>
              <a href="#top">› Home</a>
              <a href="#about">› About Us</a>
              <a href="#services">› Our Services</a>
              <a href="#team">› Meet The Team</a>
              <a href="#blog">› Latest Blog</a>
            </div>
            <div>
              <h3>POPULAR LINKS</h3>
              <a href="#top">› Home</a>
              <a href="#about">› About Us</a>
              <a href="#services">› Our Services</a>
              <a href="#products">› Products</a>
              <a href="#pricing">› Pricing Plan</a>
            </div>
            <div>
              <h3>NEWSLETTER</h3>
              <form onSubmit={subscribe}>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  aria-label="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="square" type="submit">
                  SIGN UP
                </Button>
              </form>
              {subscribed && <small className="subscribe-note">Thank you for subscribing!</small>}
              <h3 className="follow-title">FOLLOW US</h3>
              <div className="socials">
                <a href="mailto:info@example.com" aria-label="Email us">
                  ✉
                </a>
                <a href="tel:+0123456789" aria-label="Call us">
                  ☎
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="content-container">
            <span>© Pet Shop. All Rights Reserved.</span>
            <span>Made with care for pets and their people.</span>
          </div>
        </div>
      </footer>
      <a className="back-to-top" href="#top" aria-label="Back to top">
        <ArrowUp size={18} />
      </a>
      {videoOpen && (
        <div className="modal-backdrop" role="presentation" onClick={() => setVideoOpen(false)}>
          <div
            className="video-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Pet Shop video"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="iconPlain"
              size="icon"
              aria-label="Close video"
              onClick={() => setVideoOpen(false)}
            >
              <X />
            </Button>
            <img src={heroDog} alt="A happy dog at Pet Shop" />
            <p>Every pet deserves a happy life.</p>
          </div>
        </div>
      )}
    </div>
  );
}
