import React from "react";
import Card from "./Card";
import { dataTypes } from "../../types/dataTypes";

type CardListProps = {
  data: dataTypes[];
};

export default function CardList({ data }: CardListProps) {
  return (
    <div className="card-list">
      {data.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
    </div>
  );
}
