import LoadingImage from "../../public/assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="absolute left-2/4 top-2/4 flex flex-col gap-3 translate-y-[-50%] translate-x-[-50%]">
      <img src={LoadingImage} alt="" className="w-32" />
      <span className="text-2xl font-semibold tracking-wide mt-6">
        Loading...
      </span>
    </div>
  );
};

export default Loading;
