import React from 'react';
import Section from './Section';

function JourneySection() {
  return (
    <Section
      id="journey"
      title="Origins & Journey"
    >
      <div className="journey">
        <p>
          I was born in <strong>Srikakulam, Andhra Pradesh</strong>, in 1999, but my story spans across states. With my mother from <strong>Ramagundam, Telangana</strong>, and my father from Srikakulam, my family eventually made its home in <strong>Khurda Road, Odisha</strong>, thanks to my grandfather&apos;s service in the Indian Railways.
        </p>
        <p>
          I grew up and completed my schooling in Khurda Road, Odisha, moved to <strong>Visakhapatnam</strong> for my +2 studies, and later returned to <strong>Jatani</strong> for my B.Tech.
        </p>
        <p>
          After graduation, I began my professional journey with <strong>Wipro in Bangalore</strong>, where I continue to live and work today.
        </p>
      </div>
    </Section>
  );
}

export default JourneySection;
