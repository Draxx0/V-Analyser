import { useState, useEffect } from "react";
import { formatDate } from "../functions/formatDate";
import { IMap } from "../types/map.type";
import Loading from "./Loading";

const MapDetails = ({ currentMap }: { currentMap: IMap[] }) => {
  return (
    <>
      {currentMap.length > 0 ? (
        <div className="flex flex-col">
          {currentMap.map((map: IMap) => (
            <div key={map.meta.id}>
              <h4>{formatDate(map.meta.started_at)}</h4>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MapDetails;
