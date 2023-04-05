import PropTypes from 'prop-types';
import { StatisticsItem } from "./StatisticsItem";

export const StatisticList = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
            {stats.map((stat) => {
					return <StatisticsItem key={stat.id} {...stat} />;
				})}
            </ul>
        </section>
    );
};

StatisticList.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array
};