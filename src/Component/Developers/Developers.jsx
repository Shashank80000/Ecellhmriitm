import './Developers.css';

const developer = {
  img: 'https://media.licdn.com/dms/image/v2/D5635AQEyJ-NLm-8-RQ/profile-framedphoto-shrink_400_400/B56ZfD0A31G0Ac-/0/1751336882038?e=1771743600&v=beta&t=sVLR4CSi7mlSxvqNYwoGHGZqau5g17xhq49GFfDkX9s',
  name: 'Shashank Pandey',
  title: 'Full Stack Developer',
  github: '#',
  linkedin: '#',
  twitter: '#',
};

const Developers = () => {
  return (
    <section className="developers">
      <div className="developers__inner">
        <div className="developers__header">
          <p className="developers__eyebrow">Developer</p>
          <h1 className="developers__title">Meet the Developer Behind E-Cell Website</h1>
          <p className="developers__lead">
            The technical mind who brought this platform to life, building seamless experiences
            and innovative solutions for the E-Cell community.
          </p>
        </div>
        
        <div className="developers__card-wrapper">
          <article className="developer-card">
            <div className="developer-card__avatar">
              <img src={developer.img} alt={developer.name} loading="lazy" />
            </div>
            <h3 className="developer-card__name">{developer.name}</h3>
            <p className="developer-card__title">{developer.title}</p>
            <div className="developer-card__social">
              <a className="developer-card__icon" href={developer.twitter} aria-label="Twitter">
                X
              </a>
              <a className="developer-card__icon" href={developer.linkedin} aria-label="LinkedIn">
                in
              </a>
              <a className="developer-card__icon" href={developer.github} aria-label="GitHub">
                gh
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Developers;
