import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text}) => (
    <div className={`card text-white ${completed ? 'bg-secondary' : 'bg-info'} mb-3`}
        onClick = {onClick}
        >
        <div className="card-body">
            {text}
        </div>
    </div>
);
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo
