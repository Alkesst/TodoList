import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div style={{ 'margin-bottom': 15}}>
            <form className='form-inline'
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}
            >
                <input className='form-control mr-2'
                    ref={node => {
                        input = node
                    }}
                />
                <button className='btn btn-success' type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo);
export default AddTodo
