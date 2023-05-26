import NoDataGif from "../../../public/assets/images/nodata.gif"
import { AiOutlineReload } from "react-icons/ai";

const NoDataFound = () => {
 return (
  <div className="absolute left-2/4 top-2/4 flex flex-col gap-3 translate-y-[-50%] translate-x-[-50%] w-full h-full items-center justify-center">
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