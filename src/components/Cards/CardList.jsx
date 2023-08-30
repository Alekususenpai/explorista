import React from "react";
import Card from "./Card";

export default function CardList({ data }) {
  return (
    <div className="card-list">
      {data.map((item) => {
        return <Card data={item} key={item.id}/>;
      })}
    </div>
  );
}
