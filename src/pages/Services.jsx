import "../App.css";

const services = [
  {
    icon: "🎒",
    title: "Bags",
    description: "Zips, straps, handles and bag repairs",
    items: ["Zip repair", "Strap repair", "Handle repair"],
  },
  {
    icon: "📱",
    title: "Electronics",
    description: "Common electronic and device repairs",
    items: ["Screen repair", "Battery", "Charging issues"],
  },
  {
    icon: "👕",
    title: "Clothing",
    description: "Alterations and everyday clothing repairs",
    items: ["Stitching", "Zip replacement", "Alterations"],
  },
  {
    icon: "🪑",
    title: "Furniture",
    description: "Furniture fixes and restoration",
    items: ["Chair repair", "Wood repair", "Furniture fixing"],
  },
  {
    icon: "🚲",
    title: "Cycles",
    description: "Cycle maintenance and repairs",
    items: ["Brake repair", "Tyre repair", "Chain repair"],
  },
  {
    icon: "🔧",
    title: "Other",
    description: "Something unusual? Tell us what needs fixing",
    items: ["Custom repair", "Small appliances", "Other problems"],
  },
];

function Services() {
  return (
    <div className="page services-page">

      <div className="page-header">
        <p className="eyebrow">REPAIRCIRCLE SERVICES</p>

        <h1>
          Find someone who can
          <span> fix it.</span>
        </h1>

        <p>
          From everyday repairs to unusual problems, find a local
          service provider who can help.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h2>{service.title}</h2>

            <p className="service-description">
              {service.description}
            </p>

            <div className="service-items">
              {service.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <button className="service-button">
              Find a provider →
            </button>

          </div>
        ))}
      </div>

      <div className="service-bottom">
        <h2>Can't find your problem?</h2>

        <p>
          Post your repair problem and let RepairCircle find
          the right local person for you.
        </p>

        <button className="primary-button">
          Post a repair <span>→</span>
        </button>
      </div>

    </div>
  );
}

export default Services;