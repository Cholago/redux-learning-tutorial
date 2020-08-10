import React from 'react'
import { connect } from 'react-redux'
import * as ActionCreactors from './ActionCreactors'

const AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(ActionCreactors.bugAdded(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">
                    Add Todo
        </button>
            </form>
        </div>
    )
}
export default connect()(AddTodo)