import { Statistic } from "@/types/statistic";

const SingleStatistic = ({ statistic }: { statistic: Statistic }) => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-4xl font-bold text-dark">
        {statistic.number}
      </h3>
      <p className="text-lg text-body-color">
        {statistic.name}
      </p>
    </div>
  );
};

export default SingleStatistic;
