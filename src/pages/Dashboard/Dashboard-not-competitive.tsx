import DashboardNav from "../../components/common/DashboardNav";
import MatchDashboardContent from "../../components/MatchDashboardContent";
import PlayerWidget from "../../components/common/PlayerWidget";

const DashboardNotCompetitive = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center sm:flex-wrap-reverse sm:gap-10 ">
        <DashboardNav />
        <PlayerWidget />
      </div>
      <MatchDashboardContent />
    </section>
  );
};

export default DashboardNotCompetitive;
