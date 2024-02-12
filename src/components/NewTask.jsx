import React from 'react'

export default function NewTask() {
  return (
    <div className='flex, items-center gap-4'>
        <input type='text' className='2-64 px-2 rounded-sm bg-stone-200'/>
        <button className='text-stone-700 hover:text-stone-300'>Add Task</button>
    </div>
  )
}
