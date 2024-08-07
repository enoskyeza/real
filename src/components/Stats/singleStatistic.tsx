import {Statistic} from "@/types/statistic";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const SingleStatistic = ({statistic}: { statistic: Statistic }) => {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1});

    return (
        <div ref={ref} className="text-center mb-8 md:mb-0 flex flex-col justify-center">
            <h3 className="text-4xl font-medium text-dark">
                {inView ? <CountUp end={statistic.number} duration={2} /> : 0 }
            </h3>
            <p className="text-lg font-light text-body-color">
                {statistic.name}
            </p>
        </div>
    );
};

export default SingleStatistic;
