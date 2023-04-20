import DashboardNav from "../../components/DashboardNav";
import PlayerWidget from "../../components/PlayerWidget";

const DashboardUnrated = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <DashboardNav />
        <PlayerWidget />
      </div>
    </section>
  );
};

export default DashboardUnrated;
