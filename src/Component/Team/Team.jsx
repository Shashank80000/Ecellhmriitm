import './Team.css';

const members = [
  {
    img: 'https://media.licdn.com/dms/image/v2/D5635AQEyJ-NLm-8-RQ/profile-framedphoto-shrink_400_400/B56ZfD0A31G0Ac-/0/1751336882038?e=1771743600&v=beta&t=sVLR4CSi7mlSxvqNYwoGHGZqau5g17xhq49GFfDkX9s',
    name: 'Shashank Pandey',
    title: 'Co-Founder',
  },
  {
    img: 'https://media.licdn.com/dms/image/v2/D5603AQEu8Z3naZf_Gw/profile-displayphoto-shrink_800_800/B56ZUr2_r3HoAc-/0/1740197593336?e=1772668800&v=beta&t=v4u_yaMhDVtyVkSRPH5o_L_4Q3FnFdV4ScVmSKD4o04',
    name: 'Shree bhagan',
    title: 'UI/UX Designer',
  },
  {
    img: 'https://www.material-tailwind.com/img/avatar5.jpg',
    name: 'Nora Hazel',
    title: 'UI/UX Designer',
  },
  {
    img: 'https://www.material-tailwind.com/img/avatar4.jpg',
    name: 'Otto Gonzalez',
    title: 'Marketing Specialist',
  },
  {
    img: 'https://www.material-tailwind.com/img/avatar6.jpg',
    name: 'Emma Roberts',
    title: 'UI Designer',
  },
  {
    img: 'https://www.material-tailwind.com/img/avatar3.jpg',
    name: 'William Pearce',
    title: 'Web Developer',
  },
  {
    img: 'https://www.material-tailwind.com/image/avatar7.svg',
    name: 'Bruce Mars',
    title: 'UI/UX Designer',
  },
  {
    img: 'https://www.material-tailwind.com/image/avatar8.svg',
    name: 'Annie Sprrat',
    title: 'Marketing Specialist',
  },
];

const Team = () => {
  return (
    <section className="team">
      <div className="team__inner">
        <div className="team__header">
          <p className="team__eyebrow">Meet the Team</p>
          <h1 className="team__title">Behind the Success: Our Dedicated Team</h1>
          <p className="team__lead">
            From visionary leadership to creative talent and technical wizards, each team member plays a
            pivotal role in delivering exceptional service and innovative solutions.
          </p>
        </div>
        <div className="team__grid">
          {members.map((member, index) => (
            <article className="team-card" key={`${member.name}-${index}`}>
              <div className="team-card__avatar">
                <img src={member.img} alt={member.name} loading="lazy" />
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__title">{member.title}</p>
              <div className="team-card__social">
                <a className="team-card__icon" href="#" aria-label="Twitter">
                  X
                </a>
                <a className="team-card__icon" href="#" aria-label="LinkedIn">
                  in
                </a>
                <a className="team-card__icon" href="#" aria-label="Dribbble">
                  dr
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
