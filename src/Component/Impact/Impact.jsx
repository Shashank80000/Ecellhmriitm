import './Impact.css';

const Impact = () => {
  const stats = [
    { value: '40+', label: 'Events' },
    { value: '80+', label: 'Awards' },
    { value: '25+', label: 'Internships' },
    { value: '10000+', label: 'Students Impacted' },
    { value: '100+', label: 'Ideas Pitched' }
  ];

  return (
    <section className="impact">
      <div className="impact__inner">
        <h2 className="impact__title">
          Our <span>Impact</span>
        </h2>
        <p className="impact__subtitle">
          Numbers that define our journey of fostering innovation
        </p>

        <div className="impact__grid">
          {stats.map((stat, index) => (
            <div key={index} className="impact__card">
              <div className="impact__value">{stat.value}</div>
              <div className="impact__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
