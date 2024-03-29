import React from "react";
import { GymElement } from "../../../types/response";

interface SpotElementProps {
  gym: GymElement;
}

export const SpotElement: React.FC<SpotElementProps> = ({ gym }) => {
  return (
    <div className="h-96 md:h-64 my-5 p-4 flex ">
      <div className="w-full px-4 py-2">
        <img
          className="h-44 w-full py-3 object-cover flex md:hidden"
          src={gym.picture}
        />
        <h2 className="p-4 bg-primary rounded text-white font-bold shadow text-center">
          {gym.name}
        </h2>
        <div className="flex-col p-2 ">
          <p className="inline-block w-full py-3 border-b-2 border-secondary ">
            {gym.about}
          </p>
          <div className="flex justify-between">
            <div className="mt-2 pt-2">
              <div className="flex h-6">
                <p>Kilterboard:</p>
                {gym.kilterboard == "true" ? (
                  <img src="/icons8-done-48.png" />
                ) : (
                  <img src="/icons8-close-48.png" />
                )}
              </div>
              <div className="flex h-6">
                <p>Moonboard:</p>
                {gym.moonboard == "true" ? (
                  <img src="/icons8-done-48.png" />
                ) : (
                  <img src="/icons8-close-48.png" />
                )}
              </div>
              <p className="">
                City: {gym.city.charAt(0).toUpperCase()}
                {gym.city.slice(1)}
              </p>
            </div>
            <a target="_blank" href={gym.homepage}>
              <div className="flex border-2 border-secondary rounded w-max p-2 mt-4">
                <p className="px-2">Homepage</p>
                <img
                  className="h-5 my-auto"
                  src={"https://static.thenounproject.com/png/1598671-200.png"}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <img
        className="w-60 hidden md:flex my-7 ml-auto object-cover"
        src={gym.picture}
      />
    </div>
  );
};

export default SpotElement;
