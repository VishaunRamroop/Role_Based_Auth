

export default function CustomButton({className,alt,disabled,onClick, icon:Icon,children,...props}) {
  
 
  return (
    <>
          
    
            <button type='button'{...props} alt={alt||'button'} className={`flex flex-row items-center justify-center gap-2 cursor-pointer w-fit ${className}`} onClick={onClick} disabled={disabled} >{Icon&& <Icon/>}{children}</button>
        
          
    </>
  )
}
