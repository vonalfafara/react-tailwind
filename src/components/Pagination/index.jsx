import { useEffect, useState } from "react"

const index = ({pages, page}) => {
  const [currentPage, setCurrentPage] = useState()

  useEffect(() => {
    if (page) {
      setCurrentPage(page)
    } else {
      setCurrentPage(1)
    }
    return
  }, [])

  return (
    <div className="flex">
      <div className="rounded-tl-md rounded-bl-md flex items-center justify-center cursor-pointer transition-colors hover:bg-indigo-200">
        <box-icon name='chevrons-left'></box-icon>
      </div>
      {[...Array(pages).keys()].map(number => {
        let btnStyle = "px-2 cursor-pointer transition-colors hover:bg-indigo-200"
        if (currentPage === number + 1) {
          btnStyle += " bg-indigo-300 text-white"
        }
        return <div key={number} className={btnStyle} onClick={() => setCurrentPage(number + 1)}>{number + 1}</div>
      })}
      {/* <div className="px-2 cursor-pointer bg-indigo-300 text-white transition-colors hover:bg-indigo-200">2</div> */}
      <div className="rounded-tr-md rounded-br-md flex items-center justify-center cursor-pointer transition-colors hover:bg-indigo-200">
        <box-icon name='chevrons-right'></box-icon>
      </div>
    </div>
  )
}

export default index