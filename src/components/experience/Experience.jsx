import React from 'react';
import styled, { css } from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../data/constants';

const TimelineSection = styled.div`
  width: 100%;
  padding: 0 20rem 0 20rem;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:600px) {
    padding:0;
    translate: -20px;
  }
`;

const getMobileStyles = (index) => css`
  width:100%;
  flex-direction: ${index % 2 === 0 ? 'row-reverse' : 'row'};
  @media screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

const StyledTimelineItem = styled(TimelineItem)`
  ${({ index }) => getMobileStyles(index)}
`;


const Experience = () => {
  return (
    <section id="experience">
      <h5>A journey of professional growth</h5>
      <h2>Career Odyssey</h2>
      <TimelineSection style={{ alignContent:'center',margin:0 }}>
        <Timeline style={{ width: '100%'}}>
          {experiences.map((experience, index) => (
            <StyledTimelineItem key={index} index={index}>
              <TimelineSeparator>
                <TimelineDot variant="" style={{ color: '#4db5ff', marginTop: 30 }} />
                {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#4bd5ff' }} />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: 3, px: 2 }}>
                <ExperienceCard experience={experience} val={index} />
              </TimelineContent>
            </StyledTimelineItem>
          ))}
        </Timeline>
      </TimelineSection>
    </section>
  );
};

export default Experience;
