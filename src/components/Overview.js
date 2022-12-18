import React from 'react'

const GeneralData = ({ general }) => {
  const { dob, email, name, phone } = general;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Date of Birth: {dob.toString()}</p>
    </div>
  )
}

export const Overview = ({ cvData }) => {
  return (
    <div>
      <GeneralData general={cvData.general} />
    </div>
  )
}


