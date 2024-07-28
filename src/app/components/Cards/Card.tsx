// src/components/Card.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Event } from "../types/event";

type CardProps = {
  data: Event;
};

const Card: React.FC<CardProps> = ({ data }) => {
  let badgeText;
  let badgeColor;

  if (data.openSpots === 0) {
    badgeText = "SOLD OUT";
    badgeColor = "bg-red-500";
  } else {
    badgeText = "Available!";
    badgeColor = "bg-green-500";
  }

  return (
    <Link to={`/explore/${data.id}`} className="block overflow-hidden rounded-lg">
      <div className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        {badgeText && (
          <div className={`absolute top-2 left-2 text-white py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wide z-10 ${badgeColor}`}>
            {badgeText}
          </div>
        )}
        <div className="relative h-60 w-full overflow-hidden rounded-lg group-hover:opacity-80">
          <img
            src={`images/${data.coverImg}`}
            alt={data.title}
            className="h-full w-full object-cover transition-transform transform group-hover:scale-105 duration-300"
          />
        </div>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
            {data.title}
          </h3>
          <div className="flex items-center space-x-1 text-yellow-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049.608l1.175 3.61h3.81c.214 0 .307.278.132.423l-3.086 2.235 1.175 3.61c.085.263-.217.481-.453.337L10 10.223 6.746 12.823c-.236.144-.538-.074-.453-.337l1.175-3.61L4.38 4.64c-.175-.145-.082-.423.132-.423h3.81L9.049.608c.082-.251.433-.251.515 0z" />
            </svg>
            <span className="text-lg font-bold">{data.stats.rating ? "Rated " + data.stats.rating : "No ratings yet"}</span>
            <span className="text-sm text-gray-600">• ({data.stats.reviewCount})</span>
          </div>
          <div className="mt-4 flex justify-between w-full text-gray-700">
            <div className="text-center w-1/2 border-r pr-4">
              <p className="text-sm font-medium">Price</p>
              <p className="text-lg font-bold">{data.price === 0 ? 'Free' : `$${data.price}`}</p>
            </div>
            <div className="text-center w-1/2 pl-4">
              <p className="text-sm font-medium">Open Spots</p>
              <p className="text-lg font-bold">{data.openSpots}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
