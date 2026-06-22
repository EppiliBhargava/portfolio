import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import StackSection from './components/StackSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import JourneySection from './components/JourneySection';
import MoreSection from './components/MoreSection';

function App() {
  const [isUnstuck, setIsUnstuck] = useState(false);
  const profileColumnRef = useRef(null);
  const stickyTriggerRef = useRef(null);
  const shellInnerRef = useRef(null);

  // Must match `.profile-column { top: ... }` in styles.css for the >=900px breakpoint.
  const STICKY_TOP = 50;

  useEffect(() => {
    // Reveal on scroll observer
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('revealed'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );
      elements.forEach((el) => revealObserver.observe(el));

      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
      });

      return () => revealObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    const profileEl = profileColumnRef.current;
    const triggerWrapperEl = stickyTriggerRef.current;
    const shellInnerEl = shellInnerRef.current;
    if (!profileEl || !triggerWrapperEl || !shellInnerEl) return undefined;

    // Trigger off the "App Stack" heading itself, not the section wrapper —
    // the wrapper includes top padding (40px) above the heading, which would
    // cause the unstick to fire too early.
    const triggerHeadingEl =
      triggerWrapperEl.querySelector('.section-title') || triggerWrapperEl;

    const isDesktop = () => window.matchMedia('(min-width: 900px)').matches;

    const handleScroll = () => {
      if (!isDesktop()) {
        if (isUnstuck) setIsUnstuck(false);
        return;
      }

      const triggerRect = triggerHeadingEl.getBoundingClientRect();

      // Trigger condition is always evaluated against the same fixed reference
      // line (STICKY_TOP) regardless of current state — stable and consistent
      // in both scroll directions.
      const shouldUnstick = triggerRect.top <= STICKY_TOP;

      if (shouldUnstick && !isUnstuck) {
        // Capture the card's current fixed position (viewport-relative) at the
        // exact moment of handoff, and convert to shell-inner-relative
        // coordinates so absolute positioning continues from the same spot.
        // Both rects are viewport-relative at this same instant, so we simply
        // take the difference — no scrollY addition needed (that double-counts
        // the offset and pushes the card far too low).
        const profileRect = profileEl.getBoundingClientRect();
        const shellRect = shellInnerEl.getBoundingClientRect();
        const left = profileRect.left - shellRect.left;
        const top = profileRect.top - shellRect.top;
        profileEl.style.setProperty('--unstuck-left', `${left}px`);
        profileEl.style.setProperty('--unstuck-top', `${top}px`);
        setIsUnstuck(true);
      } else if (!shouldUnstick && isUnstuck) {
        setIsUnstuck(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUnstuck]);

  return (
    <div className="app">
      <div className="bg-blob" aria-hidden="true" />
      <div className="bg-rays" aria-hidden="true" />
      <div className="bg-blob-extra" aria-hidden="true" />

      <Navbar />
      <main className="main">
        <div className="shell">
          <div className="shell-inner" ref={shellInnerRef}>

            <div
              className={`profile-column${isUnstuck ? ' unstuck' : ''}`}
              ref={profileColumnRef}
            >
              <ProfileCard />
            </div>

            <div className="content-column">
              <Hero />

              <div className="reveal-on-scroll">
                <ExperienceSection />
              </div>

              <div className="reveal-on-scroll">
                <SkillsSection />
              </div>
              <div className="reveal-on-scroll" ref={stickyTriggerRef}>
                <StackSection />
              </div>
              <div className="reveal-on-scroll">
                <ProjectsSection />
              </div>
              <div className="reveal-on-scroll">
                <EducationSection />
              </div>
              <div className="reveal-on-scroll">
                <JourneySection />
              </div>
              <div className="reveal-on-scroll">
                <MoreSection />
              </div>
            </div>

          </div>
        </div>
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Eppili Bhargava</span>
      </footer>
    </div>
  );
}

export default App;
