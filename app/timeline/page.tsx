import React from 'react';
import Timeline from 'app/components/timeline';
import timelineData from 'app/data/timeline/index';

export const metadata = {
  title: 'Timeline',
  description: 'Check my timeline.',
};

const TimelinePage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">timeline</h1>
      <Timeline />
    </div>
  );
};

export default TimelinePage;
