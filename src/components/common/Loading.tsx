import LoadingImage from "/assets/images/loading.gif";
import { useEffect, useState } from "react";
import NoDataFound from "./NoDataFound";

const Loading = ({ isAbsolute }: { isAbsolute?: boolean }) => {
  const [noData, setNodata] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setNodata(true);
    }, 8000);
  }, [])
  return (
    <>
      {!noData ? (
        <div className={`flex flex-col gap-3 w-full h-full items-center justify-center ${isAbsolute && "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}`}>
          <img src={LoadingImage} alt="" className="w-32" />
          <span className="text-2xl font-semibold tracking-wide mt-6">
            Loading...
          </span>
        </div>
      ) : (
        <NoDataFound isAbsolute={isAbsolute} />
      )}
    </>
  );
};

export default Loading;
