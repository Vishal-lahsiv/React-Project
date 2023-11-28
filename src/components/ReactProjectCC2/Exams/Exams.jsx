import React from 'react';
import {exams}   from '../../SharedData';
import { Button } from '@mui/material';
const ExamList = () => {

  

  return (
    <>
        <div style={{ marginLeft: '100px', marginRight: '100px', border: '1px solid #ccc', padding: '20px' ,borderRadius:'10px',marginTop:'100px',backgroundColor:'ghostwhite'}}>
        <p style={{fontSize:'20px'}}>Welcome to Controller of Examinations Section. Exam Related information / services
           for all the Students  will be provided under this category</p>
      <h2>End Semester Exam TimeTable - Apr/May 2023</h2>
      <ul>
        {exams.map((exam) => (
          <li key={exam.id} style={{marginTop:'10px'}}>
            <span>{exam.name}</span>
            <Button style={{marginLeft:'20px'}} variant='contained'>IV SEMESTER</Button>
          </li>
        ))}
      </ul>
    </div>
      </>
  );
};

export default ExamList;
