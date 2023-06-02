import NoDataGif from "../../../public/assets/images/nodata.gif"
import { AiOutlineReload } from "react-icons/ai";

const NoDataFound = ({ isAbsolute }: { isAbsolute?: boolean }) => {
 return (
  <div className={`flex flex-col gap-3 w-full h-full items-center justify-center ${isAbsolute && "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}`}>
   <h1 className="text-5xl font-bold text-red">No data found</h1>
   <img src={NoDataGif} alt="" className="w-64" />
   <div className="flex gap-2 items-center">
    <p className="text-2xl underline text-red cursor-pointer" onClick={() => window.location.reload()}>
     Reload page
    </p>
    <AiOutlineReload color="#DF5B5C" />
   </div>
  </div>
 );
}

export default NoDataFound;