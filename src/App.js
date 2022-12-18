import React, { Component } from 'react'
import { Overview } from './components/Overview';

export default class CVApp extends Component {
  constructor() {
    super();

    this.state = {
      cv: {
        general: {
          name: 'Renekris',
          email: 'renekrispohlak@gmail.com',
          phone: '5555 5555',
          dob: new Date(1007433661000),
        },
        experience: {
          school: {
            name: 'TTHK',
            title: 'Software Development',
            date: new Date(1625346000000),
          },
          work: {
            company: 'SMIT',
            position: 'IT Technician',
            mainTasks: 'Fix hardware',
            dateFrom: new Date(1581026400000),
            dateTo: new Date(1596747600000),
          }
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
