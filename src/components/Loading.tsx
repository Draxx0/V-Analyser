import LoadingImage from "/assets/images/loading.gif";
import { useEffect, useState } from "react";
import NoDataFound from "./NoDataFound";

const Loading = () => {
  const [noData, setNodata] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setNodata(true);
    }, 8000);
  }, [])
  return (
    <>
      {!noData ? (
        <div className="absolute left-2/4 top-2/4 flex flex-col gap-3 translate-y-[-50%] translate-x-[-50%] w-full h-full items-center justify-center">
          <img src={LoadingImage} alt="" className="w-32" />
          <span className="text-2xl font-semibold tracking-wide mt-6">
            Loading...
          </span>
        </div>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default Loading;
