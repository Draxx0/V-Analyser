import MapDetails from "../../components/MapDetails";
import MapItem from "../../components/MapItem";
import PlayerWidget from "../../components/PlayerWidget";
import { PlayerContext } from "../../contexts/PlayerContext";
import localMapsJson from "../../data/maps.json";
import ApiService from "../../services/api.service";
import { ILocalMap, IMap, IMapResponse } from "../../types/map.type";
import { useEffect, useState, useContext } from "react";
const MapDashboard = () => {
  const { player } = useContext(PlayerContext);
  const [localMaps, setLocalMaps] = useState<ILocalMap[]>([]);
  const [mapData, setMapData] = useState<IMap[]>([]);
  const [currentMap, setCurrentMap] = useState<IMap[]>([]);

  const getMapData = async (mapName: string): Promise<void> => {
    if (player) {
      try {
        const response: IMap[] = await ApiService.getMap(
          player.region,
          player.name,
          player.tag,
          mapName
        );
        setMapData(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setLocalMaps(localMapsJson.maps);
    getMapData(localMapsJson.maps[0].name);
  }, [player]);

  useEffect(() => {
    if (mapData.length > 0) {
      setCurrentMap(mapData);
    }
  }, [mapData]);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-8 sm:flex-col-reverse sm:gap-4 sm:items-start">
        <h1 className="text-4xl font-bold tracking-wide">Maps</h1>
        <PlayerWidget />
      </div>

      <div className="grid grid-cols-6 mt-[50px] pb-[100px] gap-5 xl:flex xl:flex-col">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 block h-full gradient no-p maps">
          <div className="flex flex-col justify-center h-full xl:flex-row w-full">
            {localMaps.map((map: ILocalMap) => (
              <MapItem
                map={map}
                setMapData={setMapData}
                key={map.id}
                getMapData={getMapData}
              />
            ))}
          </div>
        </div>

        <div className="col-start-2 col-end-7 row-start-1 gradient h-full w-full relative">
          {currentMap.length > 0 ? (<MapDetails currentMap={currentMap} />) : (<h3 className="text-3xl font-bold tracking-wide text-red flex items-center justify-center">No data found</h3>)}
        </div>
      </div>
    </section >
  );
};

export default MapDashboard;
