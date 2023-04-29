import { useContext, useEffect, useState } from "react";
import ApiService from "../services/api.service";
import { separateUsernameAndTag } from "../functions/separateUsernameAndTag";
import { PlayerContext } from "../contexts/PlayerContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { setPlayer } = useContext(PlayerContext);
  const [formUsername, setFormUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleConnectData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const trimmedUsername: string = formUsername.trim();
      const { username, tag } = separateUsernameAndTag(trimmedUsername);
      const account: any = await ApiService.getAccount(username, tag);
      localStorage.setItem("player", JSON.stringify(account.data));
      setPlayer(account.data);
      navigate("/dashboard/competitive");
    } catch (error) {
      setError(true);
      setIsLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("player")) navigate("/dashboard/competitive");
  }, []);

  return (
    <section className="flex h-screen auth 2sm:flex-col">
      <div className="w-1/2 h-full bg-[url('/assets/images/valo-background.jpg')] bg-cover bg-center lg:w-1/3 2sm:w-full 2sm:h-1/3"></div>
      <div className="w-1/2 flex flex-col p-10 justify-center relative lg:w-2/3 2sm:w-full 2sm:h-2/3 2sm:justify-start">
        <h1 className="text-5xl font-bold mb-5 text-red uppercase lg:text-4xl md:text-3xl">
          V-Analyser
        </h1>
        <form
          onSubmit={handleConnectData}
          className="flex flex-col gap-5 w-2/3 lg:w-full"
        >
          <input
            type="text"
            id="username"
            placeholder="Username#TAG"
            className="p-2 border-2 border-red text-white rounded-md outline-none bg-transparent"
            onChange={(e) => setFormUsername(e.target.value)}
          />
          {error && (
            <p className="text-red text-lg">
              An error occured, please try again.
            </p>
          )}
          <div className="relative w-fit h-fit md:w-full">
            <button
              type="submit"
              onClick={() => setIsLoading(true)}
              className="bg-red text-white p-3 w-fit rounded cursor-pointer md:p-2 md:w-full md:text-md uppercase font-bold tracking-wide hover:filter hover:brightness-75 transition delay-0 duration-300 ease-in-out"
            >
              Load my stats
            </button>

            {isLoading && (
              <div className="absolute top-1/2 left-1/2 wrapper-loader">
                <div className="border-4 border-white border-t-4 border-t-red w-[40px] h-[40px] rounded-full loader"></div>
              </div>
            )}
          </div>
        </form>

        <small className="text-lg absolute bottom-5">
          Made with 🤍 by{" "}
          <span
            className="text-red underline cursor-pointer"
            onClick={() => window.open("https://github.com/Draxx0")}
          >
            DraxX0
          </span>
          .
        </small>
      </div>
    </section>
  );
};

export default Auth;
