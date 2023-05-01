import NoDataGif from "../../public/assets/images/nodata.gif"

const NoDataFound = () => {
 return (<div className="flex flex-col items-center justify-center w-full h-full gap-5">
  <h1 className="text-5xl font-bold text-red">No data found</h1>
  <img src={NoDataGif} alt="" className="w-64" />
 </div>);
}

export default NoDataFound;