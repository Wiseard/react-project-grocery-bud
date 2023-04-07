import { nanoid } from 'nanoid'
import Item from './Item'
import { toast } from 'react-toastify'

const ListComponent = ({ list, removeItem, editItem }) => {
  if (!list.length) return
  return (
    <article className="list">
      {list.map((item) => {
        return (
          <Item
            {...item}
            key={item.id}
            removeItem={removeItem}
            editItem={editItem}
          />
        )
      })}
    </article>
  )
}

export default ListComponent
