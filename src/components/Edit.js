import React, { Component } from 'react'

export class Edit extends Component {
  constructor({ cvData, setEditing, setData }) {
    super();

    cvData.summary = 'Data has been changed';

    this.setEditing = setEditing;
    this.setData = setData;
    this.state = { cv: cvData };
  }

  saveChanges = () => {
    this.setData(this.state.cv);
    this.setEditing(false);
  }

  render() {
    return (
      <div>
        Editing...
        <button onClick={() => this.saveChanges()}>Save</button>
      </div>
    )
  }
}
