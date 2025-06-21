

export default function CustomInput({className,aria,icon:Icon,...props}) {

  return (
   <label className={`flex items-center justify-center gap-2 ${className}`}>
    <div className='icon-container'>
      <Icon/>
    </div>
     <input {...props} aria-label={aria || 'input field'} required className='border-none rounded-lg focus:outline-none p-2 shadow-lg transition-all duration-200 focus:shadow-2xl focus:shadow-slate-500 text-black font-bold text-lg w-full' />
   </label>
  )
}
