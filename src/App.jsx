import React from 'react'
import Button from "./components/Button"
import Card from "./components/Card"
import Pagination from "./components/Pagination"
import Modal from "./components/Modal"
import { useState } from "react"

const App = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className='flex px-8 mb-8 gap-2 items-center'>
        <Button>Primary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="lg" variant="success">Large</Button>
      </div>
      <div className='flex px-8 mb-8 gap-2 items-center'>
        <Card>
          <div className='px-4 py-2'>
            <h3 className='font-bold text-2xl text-slate-700'>Card Title</h3>
          </div>
          <div className='px-4 py-2 text-slate-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla eveniet assumenda provident aliquid cupiditate tempora at, obcaecati facilis natus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, tenetur. Aliquam hic eius exercitationem perspiciatis inventore similique ab veritatis deleniti, veniam molestiae quaerat nisi, excepturi expedita repellendus iusto optio, necessitatibus incidunt laborum? Suscipit atque accusamus eum debitis aut ipsa magnam?</p>
          </div>
          <div className='px-4 py-2 flex justify-end gap-2'>
            <Button variant="danger">Close</Button>
            <Button variant="success">Accept</Button>
          </div>
        </Card>
      </div>
      <div className='flex px-8 mb-8 gap-2 items-center'>
        <Pagination pages={20} page={17} />
      </div>
      <div className='flex px-8 mb-8 gap-2 items-center'>
        <Button onClick={() => setShowModal(!showModal)}>Open Modal</Button>
      </div>
      <Modal title={"Modal Title"} size="w-[500px]" open={showModal} close={() => setShowModal(false)} hasCloseButton>
        <div className='px-4 py-2 text-slate-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla eveniet assumenda provident aliquid cupiditate tempora at, obcaecati facilis natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, tenetur. Aliquam hic eius exercitationem perspiciatis inventore similique ab veritatis deleniti, veniam molestiae quaerat nisi, excepturi expedita repellendus iusto optio, necessitatibus incidunt laborum? Suscipit atque accusamus eum debitis aut ipsa magnam?</p>
        </div>
        <div className='p-4 flex justify-end gap-2'>
          <Button variant="danger" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="success">Accept</Button>
        </div>
      </Modal>
    </>
  )
}

export default App