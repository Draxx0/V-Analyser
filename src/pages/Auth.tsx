import { useContext, useEffect, useState } from "react";
import ApiService from "../services/api.service";
import { separateUsernameAndTag } from "../functions/separateUsernameAndTag";
import { PlayerContext } from "../contexts/PlayerContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { setPlayer } = useContext(PlayerContext);
  const [formUsername, setFormUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleConnectData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedUsername = formUsername.trim();
    const { username, tag } = separateUsernameAndTag(trimmedUsername);
    const account = await ApiService.getAccount(username, tag);
    localStorage.setItem("player", JSON.stringify(account.data));
    setPlayer(account.data as any);
    navigate("/dashboard/competitive");
  };

  useEffect(() => {
    if (localStorage.getItem("player")) navigate("/dashboard/competitive");
  }, []);

  return (
    <section>
      <form onSubmit={handleConnectData}>
        <label htmlFor="username">Username#TAG</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setFormUsername(e.target.value)}
        />
        <input type="submit" value="Find stats" />
      </form>
    </section>
  );
};

export default Auth;
