import { useState } from 'react'

const Item = ({ name, completed, removeItem, id, editItem }) => {
  return (
    <div className="item">
      <div className="item-desc">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={completed}
          onChange={() => editItem(id)}
        />
        <p className={`${completed ? 'item-name completed' : 'item-name'}`}>
          {name}
        </p>
      </div>
      <button onClick={() => removeItem(id)} className="delete" type="button">
        delete
      </button>
    </div>
  )
}

export default Item
