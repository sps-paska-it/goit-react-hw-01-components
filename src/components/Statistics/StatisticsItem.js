import PropTypes from 'prop-types';
import clsx from "clsx";
import './StatisticsItem.css'

export const StatisticsItem = ({ label, percentage}) => {
    return (
        <li  className={clsx('item',{
            one: percentage<=10,
            two: percentage<=20 && percentage>10,
            four: percentage<=40 && percentage>20,
            six: percentage<=60 && percentage>40,
            eight: percentage<=80 && percentage>60,
            ten: percentage<=100 && percentage>80,
        })}
        > 
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};
