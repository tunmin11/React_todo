import React, { useState } from 'react'
import Form from './Form'

const Item = props => {

    let [items,setItem] = useState([
        { id : 1, task : 'Add another component to Tailwind Components', status : true },
        { id : 2, task : 'Have Fun!!!!!!!', status : false }
    ]) 

    let add = task => {
        
        let id = items.length + 1
        let status = false

        if(task !== '')
        {
            setItem([  ...items,  { id, task, status } ])
        }
        
    }

    let switchStatus = id => {
        items = [...items]
        items[id].status = (items[id].status) ? false : true
        setItem(items)
    }

    let removeItem = id => {
        setItem(
            items.filter(item => item.id != id )
        )
    }

    return (
        <div>
            <Form add={add}/>
            {
                items.map(item => (
            
                    <div className="flex mb-4 items-center pb-3 border-3 border-red-400" key={item.id}>
                        
                        { 
                            item.status ? 
                                (<div className='flex w-full'>
                                    <p className="w-full line-through text-gray-400"> { item.task }</p>
                                    <button onClick={ () => switchStatus(item.id - 1) } className="p-2 ml-4 mr-2 border-2 rounded bg-yellow-300 hover:bg-yellow-500" >UnDone</button> 
                                 </div>) : 
                                 (<div className='flex w-full'>
                                    <p className="w-full text-through"> { item.task }</p>
                                    <button onClick={ () => switchStatus(item.id - 1) } className="p-2 ml-4 mr-2 border-2 rounded bg-green-300 hover:bg-green-500" >Done</button> 
                                 </div>)
                        }
                    <button onClick={ () => removeItem(item.id ) } className="p-2 ml-2 border-2 rounded bg-red-300 hover:bg-red-500">Remove</button>
                    </div>

                ))
            }
        </div>
    )
}

export default Item;