import './About.css';

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__text">
            <p className="about-eyebrow">About E-Cell SRMIST</p>
            <h1 className="about-hero__title">Revolutionize student entrepreneurship</h1>
            <p className="about-hero__lead">
              We are a student-run entrepreneurial organization that nurtures founders, builds community,
              and turns ideas into ventures at SRM Institute of Science and Technology.
            </p>
            <div className="about-hero__actions">
              <button className="about-btn about-btn--secondary" type="button">
                Join us
              </button>
              <button className="about-btn about-btn--primary" type="button">
                View events
              </button>
            </div>
          </div>
          <div className="about-hero__media">
            <img
              className="about-hero__image"
              src="https://res.cloudinary.com/subframe/image/upload/v1724705711/uploads/302/txrjvclpsjkgrwkdaz6x.png"
              alt="E-Cell community session"
            />
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__inner">
          <h2 className="about-section__title">
            Pioneering the future of campus innovation and startup culture
          </h2>
          <p className="about-section__text">
            The promise of student entrepreneurship has always inspired us, but its true potential is realized
            when ideas meet mentorship, resources, and a committed community. We create that environment.
          </p>
          <p className="about-section__text">
            Our programs include founder circles, startup incubations, expert talks, and build weeks that help
            students move from insight to execution. We are not just running events; we are shaping the next
            generation of builders.
          </p>
        </div>
      </section>

      <section className="about-team">
        <div className="about-team__inner">
          <div className="about-team__copy">
            <p className="about-eyebrow">Our community</p>
            <h2 className="about-section__title">Pushing the boundaries of student-led innovation</h2>
            <p className="about-section__text">
              Our core team brings together organizers, creators, and mentors who care deeply about turning
              ambitious ideas into real outcomes. We build inclusive pathways for every stage of the journey.
            </p>
            <button className="about-btn about-btn--secondary" type="button">
              Join the team
            </button>
          </div>
          <div className="about-team__card">
            <img
              className="about-team__image"
              src="https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fbkapcq4o1zsq98df0t6.png"
              alt="E-Cell team collaboration"
            />
            <p className="about-team__caption">
              Our teams collaborate with founders, mentors, and alumni to bring the ecosystem together.
            </p>
          </div>
        </div>
      </section>

      <section className="about-supporters">
        <div className="about-supporters__inner">
          <div className="about-supporters__head">
            <p className="about-eyebrow">Mentors and backers</p>
          </div>
          <div className="about-supporters__content">
            <div className="about-supporters__copy">
              <h2 className="about-section__title">Started by students, backed by visionaries</h2>
              <p className="about-section__text">
                We are supported by faculty leaders, alumni founders, and industry experts who invest in the
                student startup ecosystem at SRMIST.
              </p>
            </div>
            <div className="about-supporters__grid">
              <div className="about-supporter">
                <img
                  className="about-supporter__image"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724690099/uploads/302/zxrsheptnqfesqupssbb.png"
                  alt="Alicia Chen"
                />
                <div>
                  <p className="about-supporter__name">Alicia Chen</p>
                  <p className="about-supporter__role">Innovation Mentor</p>
                </div>
              </div>
              <div className="about-supporter">
                <img
                  className="about-supporter__image"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724705524/uploads/302/l5oq75rpdkq2kowa2xkj.png"
                  alt="Prof. Marcus Turing"
                />
                <div>
                  <p className="about-supporter__name">Prof. Marcus Turing</p>
                  <p className="about-supporter__role">Research Advisor</p>
                </div>
              </div>
              <div className="about-supporter about-supporter--compact">
                <p className="about-supporter__name">Dr. Sarah Liang</p>
                <p className="about-supporter__role">Faculty Advisor</p>
              </div>
              <div className="about-supporter about-supporter--compact">
                <p className="about-supporter__name">Raj Patel</p>
                <p className="about-supporter__role">Alumni Founder</p>
              </div>
              <div className="about-supporter about-supporter--compact">
                <p className="about-supporter__name">Dr. Elena Volkov</p>
                <p className="about-supporter__role">Startup Mentor</p>
              </div>
              <div className="about-supporter about-supporter--compact">
                <p className="about-supporter__name">Priya Narayan</p>
                <p className="about-supporter__role">Ecosystem Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-links">
        <div className="about-links__inner">
          <div className="about-links__brand">
            <div className="about-links__logo">E-Cell SRMIST</div>
            <div className="about-links__social">
              <a className="about-links__social-link" href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
              <a className="about-links__social-link" href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="about-links__social-link" href="https://youtube.com" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>
          <div className="about-links__columns">
            <div className="about-links__column">
              <p className="about-links__title">Programs</p>
              <a className="about-links__item" href="/events">Events</a>
              <a className="about-links__item" href="/startups">Startups</a>
              <a className="about-links__item" href="/contact">Mentorship</a>
            </div>
            <div className="about-links__column">
              <p className="about-links__title">Community</p>
              <a className="about-links__item" href="/team">Team</a>
              <a className="about-links__item" href="/about">About us</a>
              <a className="about-links__item" href="/contact">Contact</a>
            </div>
            <div className="about-links__column">
              <p className="about-links__title">Resources</p>
              <a className="about-links__item" href="/developers">Developers</a>
              <a className="about-links__item" href="/events">Updates</a>
              <a className="about-links__item" href="/contact">Privacy</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
