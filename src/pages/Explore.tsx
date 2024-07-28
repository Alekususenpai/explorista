import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CardList from "../app/components/Cards/CardList";

const Explore = () => {
  const events = useSelector((state: RootState) => state.event.events);

  return (
    <div className="bg-slate-100/25">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="flex justify-between items-center">
            <h2 className="heading">Events</h2>
            <div className="logo-circle">
              <img
                className="logo-emblem"
                src="icons/logo1.png"
                alt="Explorista logo"
              />
            </div>
          </div>
          <div className="mt-6 lg:space-y-0 gap-16">
            <CardList data={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
