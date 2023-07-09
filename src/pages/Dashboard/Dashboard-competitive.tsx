import DashboardNav from "../../components/common/DashboardNav";
import PlayerWidget from "../../components/common/PlayerWidget";
import MatchDashboardContent from "../../components/MatchDashboardContent";

const DashboardCompetitive = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center sm:flex-wrap-reverse sm:gap-10 ">
        <DashboardNav />
        <PlayerWidget />
      </div>

      <MatchDashboardContent
      />
    </section>
  );
};

export default DashboardCompetitive;
