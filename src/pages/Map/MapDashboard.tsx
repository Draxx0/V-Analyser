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
  const [maps, setMaps] = useState<IMap[]>([]);
  const [currentMap, setCurrentMap] = useState<IMap[]>([]);

  const getMapData = async (mapName: string) => {
    if (player) {
      try {
        const response: IMapResponse = await ApiService.getMap(
          player.region,
          player.name,
          player.tag,
          mapName
        );
        console.log(response.data);
        setMaps(response.data);
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
    if (maps.length > 0) {
      setCurrentMap(maps);
    }
  }, [maps]);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold tracking-wide">Maps</h1>
        <PlayerWidget />
      </div>

      <div className="grid grid-cols-6 mt-[50px] pb-[100px] gap-5">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 block h-full gradient no-p maps">
          <div className="flex flex-col justify-center h-full">
            {localMaps.map((map: ILocalMap) => (
              <MapItem
                map={map}
                setMaps={setMaps}
                key={map.id}
                getMapData={getMapData}
              />
            ))}
          </div>
        </div>

        <div className="col-start-2 col-end-7 row-start-1 gradient h-full w-full relative">
          <MapDetails currentMap={currentMap} />
        </div>
      </div>
    </section>
  );
};

export default MapDashboard;
