import { ILocalMap, Map } from "../types/map.type";

const MapItem = ({
  map,
  getMapData,
}: {
  map: ILocalMap;
  setMapData: React.Dispatch<React.SetStateAction<Map[]>>;
  getMapData: (mapName: string) => Promise<void>;
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center relative w-full"
      onClick={() => getMapData(map.name)}
    >
      <img
        src={map.image}
        alt={map.name}
        className="w-full h-[100px] object-cover brightness-75 hover:brightness-50 cursor-pointer transition duration-100 ease-in-out delay-0"
      />

      <h4 className="absolute bottom-3 left-3 tracking-wide uppercase font-bold">
        {map.name}
      </h4>
    </div>
  );
};

export default MapItem;
