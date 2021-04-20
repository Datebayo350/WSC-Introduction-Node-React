import Proptypes from 'prop-types';

export default function Skills (props) {
    const {techno, years} = props;
    return (
        <li>
            {techno} {years > 1 ? `${props.years} an`: `${props.years} ans`}
        </li>
    )

    
}

Skills.propTypes = {
    techno: Proptypes.string.isRequired,
    years: Proptypes.number.isRequired,
}