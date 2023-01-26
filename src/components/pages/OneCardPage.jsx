import React from 'react';

export default function OneCardPage({ card }) {
    console.log(card.img)
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={card.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">{card.description}</p>
          <a href="/OneCard" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}
