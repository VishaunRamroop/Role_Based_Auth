import {useState} from 'react';


export default function CustomeForm({className,onSubmit,title='form',children}) {
  return (
  <form onSubmit={onSubmit} className={` rounded-lg p-2 shadow-lg gap-3 flex flex-col ${className}`}>
    <h1 className='text-2xl font-bold text-center'>{title}</h1>
    {children}
  </form>
  )
}
