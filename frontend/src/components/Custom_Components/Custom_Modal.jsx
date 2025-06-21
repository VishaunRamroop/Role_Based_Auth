

export default function CustomModal({children, close, onClose,modalContainer,modalWrapper,modalButton}) {

  return (
<div className={modalContainer} style={{ pointerEvents: close ? 'auto' : 'none' }}
onClick={onClose}
>
      <div className={modalWrapper} onClick={e => e.stopPropagation()}>
        <button className={modalButton} onClick={onClose} aria-label="Close">&times;</button>
        {children}
      </div>
    </div>
  )
}
