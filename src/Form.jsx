import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [item, setItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!item) {
      toast.error('Please provide a value')
      return
    }
    addItem(item)
    setItem('')
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-item"
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="btn" type="submit">
        add item
      </button>
    </form>
  )
}

export default Form
