import Timeline from 'app/components/timeline';
import timelineData from 'app/data/timeline/index';
import React from 'react';

const TimelinePage: React.FC = () => {
    return (
        <div className="container">
            <h1>Minha Timeline</h1>
            <Timeline items={timelineData} />
        </div>
    );
};

export default TimelinePage;
