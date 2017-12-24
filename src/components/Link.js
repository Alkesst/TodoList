import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onClick}) => {
    return (
        <button type='button' className={`btn btn-primary ${active ? 'active' : ''}`}
            onClick={c => {
                c.preventDefault();
                onClick()
            }}
        >
            {children}
        </button>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link
