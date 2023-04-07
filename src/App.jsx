import { useState } from 'react'
import ListComponent from './ListComponent'
import { ToastContainer, toast } from 'react-toastify'
import Form from './Form'
import { nanoid } from 'nanoid'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

// ******** GET LOCAL STORAGE ITEMS ********
// const getLocalStorage = () => {
//   let list = localStorage.getItem('list')
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'))
//   } else {
//     list = []
//   }

//   return list
// }

// ******** GET LOCAL STORAGE ALTERNATIVE ********
const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const App = () => {
  const [list, setList] = useState(defaultList)
  // ADD ITEM
  const addItem = (item) => {
    const itemAdded = {
      name: item,
      completed: false,
      id: nanoid(),
    }
    const newItem = [...list, itemAdded]
    setList(newItem)
    setLocalStorage(newItem)
    toast.success('Item added to the list')
  }
  // REMOVE ITEM
  const removeItem = (itemId) => {
    const newList = list.filter((item) => item.id !== itemId)
    setList(newList)
    setLocalStorage(newList)
    toast.success('Item removed')
  }
  // EDIT ITEM IN THE lOCAL STORAGE AND LOCALLY (ITEM.JSX)
  const editItem = (itemId) => {
    const newList = list.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setList(newList)
    setLocalStorage(newList)
  }

  return (
    <main>
      <section className="container">
        <h1>Grocery Bud</h1>
        <Form addItem={addItem} />
        <ListComponent
          list={list}
          removeItem={removeItem}
          editItem={editItem}
        />
        <ToastContainer position="top-center" />
      </section>
    </main>
  )
}

export default App
