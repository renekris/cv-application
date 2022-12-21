import React, { Component } from 'react'
import { Overview } from './components/Overview';

export default class CVApp extends Component {
  constructor() {
    super();

    this.state = {
      cv: {
        summary: 'Currently I am learning Full Stack via The Odin Project. \nCompleted projects: https://github.com/renekris',
        general: {
          name: 'Renekris',
          email: 'renekrispohlak@gmail.com',
          phone: '5555 5555',
          dob: new Date(1007433661000),
        },
        education: {
          'TTHK': {
            title: 'Software Development',
            dateFrom: new Date(1625346000000),
            dateTo: new Date(1626346000000),
            additionalInfo: 'EQF level 4 qualification as a junior IT systems specialist.',
          }
        },
        workExperience: {
          'SMIT': {
            position: 'IT Technician',
            dateFrom: new Date(1581026400000),
            dateTo: new Date(1596747600000),
            mainTasks: 'Fix hardware',
            additionalInfo: 'Responded to tickets and fixed internal problems',
          }
        },
        languageSkills: {
          estonian: 'Native',
          english: 'C2',
          japanese: 'B2',
        },
        computerSkills: {
          expert: [],
          advanced: ['Javascript', 'C#', 'Linux', 'Windows'],
          intermediate: ['SQL', 'Node.js', 'MySQL', 'HTML', 'CSS', 'Jira'],
          average: ['React', 'Apache'],
          beginner: ['Angular', 'Python'],
        },
        other: {
          otherInfo: 'I love learning new and interesting computer-related stuff. I go out of my way to do testing with software and hardware to confirm or disprove my hypotheses.',
        }
      }
    };
  }

  render() {
    const { cv } = this.state;

    return (
      <div>
        <Overview cvData={cv} />
      </div>
    )
  }
}
