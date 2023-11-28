import React from 'react';
import { students } from '../../SharedData';
const Academics = () => {

  return (
    <div style={{ marginLeft: '250px', marginRight: '250px',marginTop:'100px',border:'1px solid black',padding:'10px',borderRadius:'10px',backgroundColor:'ghostwhite'}}>
      <h2>ACADEMICS</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Roll No</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '8px' }}>{student.name}</td>
              <td style={{ padding: '8px' }}>{student.rollNo}</td>
              <td style={{ padding: '8px' }}>{student.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Academics;
