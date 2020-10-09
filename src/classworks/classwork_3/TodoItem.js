import React, { useState } from 'react';

export default function TodoItem({title, id, completed}) {

  const [checked, setChecked] = useState(completed)

  return(
    <li >
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        
        <span>{title}</span>

        <i className="material=icons red-text">delete</i>
      </label>
    </li>
  )
}