import React from 'react';

const CvPreview = ({ formData }) => {
  const {
    photo,
    givenName,
    familyName,
    headline,
    email,
    phone,
    city,
    linkedin,
    github,
    skills,
    languages
  } = formData;

  return (
    <div className="cv-preview">
      {photo && <img src={photo} alt="Profile" className="cv-photo" />}
      <h1>{givenName} {familyName}</h1>
      <h2>{headline}</h2>
      <p>{email} | {phone}</p>
      <p>{city}</p>
      <hr />
      <p><strong>LinkedIn:</strong> {linkedin}</p>
      <p><strong>GitHub:</strong> {github}</p>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
      </ul>
      <h3>Languages</h3>
      <ul>
        {languages.map((lang, idx) => <li key={idx}>{lang}</li>)}
      </ul>
    </div>
  );
};

export default CvPreview;
