import React from "react";

export default function Card({ data }) {
  let badgeText;
  if (data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (data.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card" key={data.id}>
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`images/${data.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="icons/star.png" className="card--star" />
        <span>{data.stats.rating} </span>
        <span className="gray">({data.stats.reviewCount}) • </span>
        <span className="gray">{data.location}</span>
      </div>
      <p className="card--title">{data.title}</p>
      <p className="card--price">
        <span className="bold">From ${data.price}</span> / person
      </p>
    </div>
  );
}
