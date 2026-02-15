import './Initiatives.css';

const Initiatives = () => {
  const initiatives = [
    {
      number: '01.',
      title: 'Mentorship',
      description: 'Connect with industry leaders and alumni who guide you through your entrepreneurial journey.',
      icon: '🎯'
    },
    {
      number: '02.',
      title: 'Startup Incubation',
      description: 'Access resources, workspace, and funding opportunities to turn your ideas into reality.',
      icon: '🚀'
    },
    {
      number: '03.',
      title: 'Workshops & Events',
      description: 'Participate in hands-on workshops, hackathons, and networking events throughout the year.',
      icon: '💡'
    },
    {
      number: '04.',
      title: 'Funding Support',
      description: 'Get connected with investors and learn how to pitch your startup for funding.',
      icon: '💰'
    },
    {
      number: '05.',
      title: 'Community Network',
      description: 'Join a thriving community of entrepreneurs, innovators, and change-makers.',
      icon: '🤝'
    }
  ];

  return (
    <section className="initiatives">
      <div className="initiatives__header">
        <h2 className="initiatives__title">
          Our <span>Initiatives</span>
        </h2>
        <p className="initiatives__subtitle">
          Pioneering the future through technology and innovation
        </p>
      </div>

      <div className="initiatives__scroll-container">
        <div className="initiatives__scroll-track">
          {initiatives.map((initiative, index) => (
            <div key={index} className="initiatives__card">
              <div className="initiatives__card-header">
                <span className="initiatives__icon">{initiative.icon}</span>
                <span className="initiatives__number">{initiative.number}</span>
              </div>
              <h3 className="initiatives__card-title">{initiative.title}</h3>
              <p className="initiatives__card-description">{initiative.description}</p>
              <button className="initiatives__card-button">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
