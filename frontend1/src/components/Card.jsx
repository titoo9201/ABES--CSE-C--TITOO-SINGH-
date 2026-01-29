import React from 'react';
import './Card.css';

const Card = ({ student }) => {
  return (
    <div className="card">
      <div className="card-header">ID: {student.id}</div>
      <div className="card-body">
        <h3 className="card-name">{student.name || 'Unknown'}</h3>
        <p className="card-detail">Class: <strong>{student.class || 'N/A'}</strong></p>
        {student.email && <p className="card-detail">Email: {student.email}</p>}
        {student.phone && <p className="card-detail">Phone: {student.phone}</p>}
      </div>
    </div>
  );
};

export default Card;
 