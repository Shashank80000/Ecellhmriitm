import './Marquee.css';

const Marquee = () => {
  const items = [
    'E-Cell SRMIST',
    'Innovate',
    'Build',
    'Scale',
    'Transform Ideas',
    'Launch Startups'
  ];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="marquee__group">
            {items.map((item, index) => (
              <span key={index} className="marquee__item">
                {item}
                <span className="marquee__separator">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
