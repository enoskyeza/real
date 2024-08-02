import { Statistic } from "@/types/statistic";

const SingleStatistic = ({ statistic }: { statistic: Statistic }) => {
  return (
    <div className="text-center mb-8 md:mb-0 flex flex-col justify-center">
      <h3 className="text-4xl font-medium text-dark">
        {statistic.number}
      </h3>
      <p className="text-lg font-light text-body-color">
        {statistic.name}
      </p>
    </div>
  );
};

export default SingleStatistic;
