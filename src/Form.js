import React, { createRef } from 'react'
import Header from './Header'

const Form = props => {

    let taskRef = createRef();
    
    let add = () => {
        let task = taskRef.current.value
        let add = props.add
        add(task)
        
        taskRef.current.value = ''
    }

    return (
        <div className="mb-4">
            <Header name='Todo List'/>
            <div className="flex mt-4">
                <input ref={taskRef} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-indigo-500" placeholder='New Todo List'></input>
                <button className="flex-no-shrink p-2 border-2 rounded bg-indigo-400 hover:bg-indigo-500" onClick={add}>Add</button>
            </div>
        </div>
    )
}

export default Form