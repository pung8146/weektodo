import React from 'react'
import Item from './Item'

export default function List(props) {
    
  return (
    <div className='content'>
          <ul className='todo_list'>
          </ul>
          {props.todoList.map((item=><Item item={item} />))}
    </div>
  )
}
