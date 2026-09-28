import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import { client, urlFor } from './client';
import portrait from './assets/profileeeeddsds.jpg';
import './App.scss';

const resumeUrl = 'https://drive.google.com/file/d/1tSVXfm42eW0oUoQxtdmgYmyrjPR4guiN/view?usp=sharing';
const featuredWork = [
  { _id: 'iotronix', title: 'Iotronix', tags: ['React JS'], projectLink: 'https://xbytelab.com/demo/iotronix/' },
  { _id: 'ecommerce', title: 'Ecommerce', tags: ['Next JS'], projectLink: 'https://ecommerce-digital.vercel.app/', codeLink: 'https://github.com/harshitjain453/ecommerce_digital' },
  { _id: 'shareme', title: 'ShareME', tags: ['React JS'], projectLink: 'https://sharemeee.vercel.app/', codeLink: 'https://github.com/harshitjain453/sharemeee' },
  { _id: 'summerizer', title: 'AI Summerizer', tags: ['React JS'], projectLink: 'https://ai-summerizer-tau.vercel.app/', codeLink: 'https://github.com/harshitjain453/AISummery' },
];
const defaultSkills = ['JavaScript', 'React JS', 'Next Js', 'Node JS', 'MongoDB', 'Figma', 'Git'];
const defaultExperiences = [{ year: '2021', works: [{ name: 'Frontend Developer', company: 'Tata Consultancy Services' }] }];
const filters = ['All', 'React JS', 'Next JS'];

function Reveal({ children, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const floatY = useTransform(scrollYProgress, [0, 0.25], [0, -120]);

  const handlePointerMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${((event.clientX - left) / width) * 100}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${((event.clientY - top) / height) * 100}%`);
  };

  return (
    <section id="home" className="hero" onPointerMove={handlePointerMove}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid page-width">
        <div className="hero__content">
          <Reveal className="eyebrow hero__eyebrow"><span className="status-dot" /> PORTFOLIO / HARSHIT JAIN</Reveal>
          <h1 className="hero__title">
            <span className="hero__line"><span>Digital</span></span>
            <span className="hero__line"><span>experiences</span></span>
            <span className="hero__line hero__line--accent"><span>that feel alive<span className="hero__period">.</span></span></span>
          </h1>
          <Reveal className="hero__bottom" delay={0.35}>
            <p>Hi, I’m Harshit — a full-stack engineer crafting thoughtful interfaces and the code behind them.</p>
            <a className="round-link" href="#work" aria-label="Explore selected work"><span>↘</span></a>
          </Reveal>
        </div>
        <motion.div className="hero__visual" style={reducedMotion ? undefined : { y: floatY }} aria-hidden="true">
          <div className="hero__halo hero__halo--outer" />
          <div className="hero__halo hero__halo--inner" />
          <div className="hero__orbit hero__orbit--one"><span /></div>
          <div className="hero__orbit hero__orbit--two"><span /></div>
          <div className="hero__portrait-frame"><img src={portrait} alt="" fetchPriority="high" /></div>
          <span className="hero__visual-label hero__visual-label--top">IDEAS → INTERFACES</span>
          <span className="hero__visual-label hero__visual-label--bottom">BUILD / EXPLORE / REPEAT</span>
          <span className="hero__spark hero__spark--one" />
          <span className="hero__spark hero__spark--two" />
        </motion.div>
      </div>
      <div className="hero__foot page-width"><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span><span>01 / 04</span></div>
    </section>
  );
}

function Marquee() {
  const words = 'DESIGN • DEVELOPMENT • INTERACTION • ';
  return (
    <div className="marquee" aria-label="Design, development, interaction">
      <div className="marquee__track" aria-hidden="true"><span>{words.repeat(3)}</span><span>{words.repeat(3)}</span></div>
    </div>
  );
}

function Work({ works }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const reducedMotion = useReducedMotion();
  const visibleWorks = works.filter((work) => activeFilter === 'All' || work.tags?.includes(activeFilter));
  return (
    <section id="work" className="work section-pad page-width">
      <div className="section-heading">
        <Reveal><p className="eyebrow"><span className="section-number">01 /</span> THE PROJECTS</p><h2>Selected <em>work.</em></h2></Reveal>
        <Reveal className="section-heading__aside" delay={0.1}><p>A collection of ideas turned into experiences. Built to be useful, and made to be remembered.</p></Reveal>
      </div>
      <div className="work__filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button key={filter} type="button" aria-pressed={activeFilter === filter} className={activeFilter === filter ? 'is-active' : ''} onClick={() => setActiveFilter(filter)}>
            {filter} <span>{filter === 'All' ? works.length : works.filter((work) => work.tags?.includes(filter)).length}</span>
          </button>
        ))}
      </div>
      <motion.div className="work__grid" layout={!reducedMotion}>
        <AnimatePresence mode="popLayout">
          {visibleWorks.map((work, index) => {
            const image = work.imgUrl ? urlFor(work.imgUrl).width(1100).quality(85).url() : null;
            return (
              <motion.article
                className={`project project--${index % 4}`}
                key={work._id || work.title}
                layout={!reducedMotion}
                initial={reducedMotion ? false : { opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <a className="project__visual" href={work.projectLink || work.codeLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${work.title} project`}>
                  {image ? <img src={image} alt={`${work.title} project preview`} loading="lazy" /> : <span className="project__placeholder" aria-hidden="true">{work.title}</span>}
                  <span className="project__view" aria-hidden="true">VIEW PROJECT ↗</span>
                  <span className="project__index" aria-hidden="true">0{index + 1}</span>
                </a>
                <div className="project__details">
                  <div><span className="project__type">{work.tags?.join(' / ') || 'PROJECT'}</span><h3>{work.title}</h3></div>
                  {work.codeLink && <a className="project__source" href={work.codeLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${work.title} source code`}>CODE ↗</a>}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function About({ skills, experiences }) {
  return (
    <section id="about" className="about section-pad">
      <div className="about__inner page-width">
        <Reveal className="about__intro"><p className="eyebrow"><span className="section-number">02 /</span> BEHIND THE SCREEN</p><h2>Curious by nature.<br /><em>Builder by choice.</em></h2></Reveal>
        <div className="about__details">
          <Reveal className="about__statement">
            <span className="about__asterisk" aria-hidden="true">✳</span>
            <p>I’m Harshit Jain, a full-stack engineer who loves turning complex ideas into simple, engaging digital experiences. From the first interaction to the final detail, I believe the best work makes technology feel human.</p>
            <a className="text-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">MORE ABOUT ME <span aria-hidden="true">↗</span></a>
          </Reveal>
          <Reveal className="about__experience" delay={0.1}>
            <span className="eyebrow">A LITTLE BACKGROUND</span>
            {experiences.flatMap((experience) => (experience.works || []).map((work, index) => (
              <div className="about__experience-entry" key={`${experience._id || experience.year}-${index}`}>
                <span>{experience.year}</span>
                <p>{work.name}<small>{work.company}</small></p>
              </div>
            )))}
          </Reveal>
        </div>
      </div>
      <div id="skills" className="skills page-width">
        <Reveal className="skills__heading"><p className="eyebrow"><span className="section-number">03 /</span> THE TOOLKIT</p><h3>Tools of the <em>trade.</em></h3></Reveal>
        <div className="skills__list">{skills.map((skill, index) => <Reveal key={skill} delay={Math.min(index * 0.04, 0.28)}><span className="skills__item"><span className="skills__index">{String(index + 1).padStart(2, '0')}</span>{skill}<span className="skills__arrow" aria-hidden="true">↗</span></span></Reveal>)}</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact section-pad">
      <div className="page-width">
        <Reveal><p className="eyebrow"><span className="section-number">04 /</span> WHAT'S NEXT?</p><h2>Have something<br /><em>in mind?</em></h2></Reveal>
        <Reveal className="contact__action" delay={0.15}><a href="mailto:harshitjain374@gmail.com" className="contact__email">Let’s talk <span aria-hidden="true">↗</span></a><p>Have a project, a question, or just a good idea? My inbox is open.</p></Reveal>
        <div className="contact__footer">
          <a href="#home" className="contact__brand">HJ<span className="accent">.</span></a>
          <span>© {new Date().getFullYear()} HARSHIT JAIN</span>
          <div><a href="https://github.com/harshitjain453" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/harshit374" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="mailto:harshitjain374@gmail.com">EMAIL ↗</a></div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [works, setWorks] = useState(featuredWork);
  const [skills, setSkills] = useState(defaultSkills);
  const [experiences, setExperiences] = useState(defaultExperiences);

  useEffect(() => {
    if (!client) return;
    client.fetch('*[_type == "works"]{_id,title,tags,projectLink,codeLink,imgUrl}').then((data) => {
      if (data.length) setWorks(data);
    }).catch(() => {});
    client.fetch('*[_type == "skills"]{name}').then((data) => {
      if (data.length) setSkills(data.map((skill) => skill.name).filter(Boolean));
    }).catch(() => {});
    client.fetch('*[_type == "experiences"] | order(year desc){_id,year,works[]{name,company}}').then((data) => {
      if (data.length) setExperiences(data);
    }).catch(() => {});
  }, []);

  return <div className="app"><Navbar /><main><Hero /><Marquee /><Work works={works} /><About skills={skills} experiences={experiences} /></main><Contact /></div>;
}

export default App;