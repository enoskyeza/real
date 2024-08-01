import SectionTitle from "../Common/SectionTitle";
import SingleStatistic from "./singleStatistic";
import { Statistic } from "@/types/statistic";

const statisticsData: Statistic[] = [
  { name: "Certified Engineers", number: 220 },
  { name: "Happy Clients", number: 180 },
  { name: "Awards Won", number: 600 },
  { name: "Projects Done", number: 260 },
];

const Statistics = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
        <SectionTitle
          title=""
          subtitle="Mission and Achievements"
          paragraph=""
          center
        />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="flex items-center">
            <div>
              <h2 className="text-6xl font-bold text-orange-500">15</h2>
              <p className="text-xl mt-4">
                The mission of Resident Architects is to be a one-stop center for ingenious, top quality architectural designs and
                services in the building industry within East Africa.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {statisticsData.map((stat, index) => (
              <SingleStatistic key={index} statistic={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
