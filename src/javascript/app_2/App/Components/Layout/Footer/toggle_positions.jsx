import classNames        from 'classnames';
import PropTypes         from 'prop-types';
import React             from 'react';
import { IconPositions } from 'Assets/Footer';

const TogglePositions = ({
    is_positions_drawer_on,
    togglePositionsDrawer,
}) => {
    const toggle_positions_class = classNames('ic-positions', {
        'active': is_positions_drawer_on,
    });
    return (
        <a
            href='javascript:;'
            className={toggle_positions_class}
            onClick={togglePositionsDrawer}
        >
            <IconPositions />
        </a>
    );
};

TogglePositions.propTypes = {
    is_positions_drawer_on: PropTypes.bool,
    togglePositionsDrawer : PropTypes.func,
};

export { TogglePositions };
