import React, { Component } from 'react'
import './App.css';
import { Edit } from './components/Edit';
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
        education: [
          {
            school: 'TTHK',
            title: 'Software Development',
            dateFrom: new Date(1625346000000),
            dateTo: new Date(1626346000000),
            additionalInfo: 'EQF level 4 qualification as a junior IT systems specialist.',
          },
        ],
        workExperience: [
          {
            company: 'SMIT',
            position: 'IT Technician',
            dateFrom: new Date(1581026400000),
            dateTo: new Date(1596747600000),
            mainTasks: 'Fix hardware',
            additionalInfo: 'Responded to tickets and fixed internal problems',
          },
        ],
        languageSkills: [
          {
            language: 'Estonian',
            skillLevel: 'Native',
          },
          {
            language: 'English',
            skillLevel: 'C2',
          },
          {
            language: 'Japanese',
            skillLevel: 'B2',
          },
        ],
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
      },
      isEditing: false,
    };
  }

  setEditing = (value) => {
    this.setState({ isEditing: value });
  }

  setData = (value) => {
    this.setState({ cv: value })
  }

  render() {
    const { cv, isEditing } = this.state;

    return (
      <div className='container'>
        {
          isEditing
            ? <Edit cvData={cv} setEditing={this.setEditing} setData={this.setData} />
            : <Overview cvData={cv} setEditing={this.setEditing} />
        }
        <p className='notice'>All of this data has been made up for this task</p>
      </div>
    )
  }
}
