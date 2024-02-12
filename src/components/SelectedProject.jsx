import React from 'react'
import Tasks from './Tasks';

export default function SelectedProject({project, onDelete}) {
    const formattedStartDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      const formattedDueDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
  return (
    <div className='w-[35rem] mt-16'>
        
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
            <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">Delete</button>
        </header>
        <div className="flex items-center justify-between">
        <h3>Start Date<p className="mb-4 text-stone-600">{formattedStartDate}</p></h3>
        <h3>Due Date <p className="mb-4 text-stone-600">{formattedDueDate}</p></h3>
        <h3>Description<p className="mb-4 text-stone-600">{project.description}</p></h3>
        </div>
        <Tasks />
    </div>
  )
}
