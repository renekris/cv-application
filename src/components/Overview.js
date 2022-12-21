import React from 'react'
import format from 'date-fns/format';
import './Overview.css';

const UserHeader = ({ userData }) => {
  const { dob, email, name, phone } = userData;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Date of Birth: {dob.toString()}</p>
    </div>
  )
}

const Summary = ({ summaryData }) => {
  return (
    <div>
      <h2>Summary</h2>
      <p>{summaryData}</p>
    </div>
  )
}

const WorkExperience = ({ experienceData }) => {
  return (
    <div>
      <h2>Work Experience</h2>
      {experienceData.map((data, i) => {
        return (
          <div key={i}>
            <p>{data.company}</p>
            <p>{format(data.dateFrom, 'yyyy LLL')} - {format(data.dateTo, 'yyyy LLL')}</p>
            <p>{data.position}</p>
            <p>Tasks: <br />{data.mainTasks}</p>
            <p>{data.additionalInfo}</p>
          </div>
        )
      })}
    </div>
  )
}

const Education = ({ educationData }) => {
  return (
    <div>
      <h2>Education</h2>
      {educationData.map((data, i) => {
        return (
          <div key={i}>
            <p>{data.school}</p>
            <p>{format(data.dateFrom, 'yyyy LLL')} - {format(data.dateTo, 'yyyy LLL')}</p>
            <p>{data.title}</p>
            <p>{data.additionalInfo}</p>
          </div>
        )
      })}
    </div>
  )
}

const LanguageSkills = ({ languageData }) => {
  return (
    <div>
      <h2>Language Skills</h2>
      {languageData.map((data, i) => {
        return (
          <div key={i}>
            <p>{data.language} - {data.skillLevel}</p>
          </div>
        )
      })}
    </div>
  )
}

const ComputerSkill = ({ skillData, title, cName }) => {
  return (
    <>
      {skillData.length > 0 &&
        <div className={cName}>
          <p>
            {title}
            {skillData.map((data, i, arr) => {
              return (
                <React.Fragment key={i}>{data}{i < arr.length - 1 ? ',' : ''} </React.Fragment>
              )
            })}
          </p>
        </div>
      }
    </>
  )
}

const ComputerSkills = ({ skillsData }) => {
  return (
    <div>
      <h2>Computer Skills</h2>
      <ComputerSkill skillData={skillsData.expert} title='Expert: ' cName='expert' />
      <ComputerSkill skillData={skillsData.advanced} title='Advanced: ' cName='advanced' />
      <ComputerSkill skillData={skillsData.intermediate} title='Intermediate: ' cName='intermediate' />
      <ComputerSkill skillData={skillsData.average} title='Average user: ' cName='average' />
      <ComputerSkill skillData={skillsData.beginner} title='Beginner: ' cName='beginner' />
    </div>
  )
}

const Other = ({ otherData }) => {
  return (
    <div>
      <h2>Other</h2>
      <p>{otherData.otherInfo}</p>
    </div>
  )
}

export const Overview = ({ cvData, setEditing }) => {
  return (
    <div>
      <h1>Your CV</h1>
      <UserHeader userData={cvData.general} />
      <Summary summaryData={cvData.summary} />
      <WorkExperience experienceData={cvData.workExperience} />
      <Education educationData={cvData.education} />
      <LanguageSkills languageData={cvData.languageSkills} />
      <ComputerSkills skillsData={cvData.computerSkills} />
      <Other otherData={cvData.other} />
      <button onClick={() => setEditing(true)}>Edit data</button>
    </div>
  )
}


