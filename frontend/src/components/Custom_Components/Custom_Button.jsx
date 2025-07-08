

export default function CustomButton({type='button',className,alt,disabled,onClick, icon:Icon,children,...props}) {
  
 
  return (
    <>
          
    
            <button type={type} {...props} alt={alt||'button'} className={`flex flex-row items-center justify-center gap-2 cursor-pointer w-fit ${className}`}  onClick={onClick} disabled={disabled} >{Icon&& <Icon/>}{children}</button>
        
          
    </>
  )
}
