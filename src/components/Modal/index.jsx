import Card from "../Card"
import Button from "../Button"
import { useRef, useState, useEffect } from "react"

const index = ({title, hasCloseButton, children, size, open, close}) => {
  const [toggleModal, setToggleModal] = useState('opacity-0 invisible')

  useEffect(() => {
    if (open) {
      setToggleModal('opacity-100 visible')
    } else {
      setToggleModal('opacity-0 invisible')
    }
    return
  }, [open])

  return (
    <div className={`fixed top-0 left-0 h-screen w-screen bg-slate-400 bg-opacity-50 flex justify-center items-center transition-all duration-300 ${toggleModal}`}>
      <Card className={size}>
        <div className='p-4 flex justify-between items-center'>
          <h3 className='font-bold text-2xl text-slate-700'>{title}</h3>
          {
            hasCloseButton && (
              <div className="cursor-pointer flex items-center" onClick={close}>
                <box-icon name='x'></box-icon>
              </div>
            )
          }
        </div>
        {children}
      </Card>
    </div>
  )
}

export default index