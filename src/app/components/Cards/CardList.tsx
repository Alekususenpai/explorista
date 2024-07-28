// src/components/CardList.tsx
import React from "react";
import Card from "./Card";
import { Event } from "../types/event";

type CardListProps = {
  data: Event[];
};

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {data.map((event) => (
        <Card key={event.id} data={event} />
      ))}
    </div>
  );
};

export default CardList;
