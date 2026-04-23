import React from 'react'
type Props = {
    useState: unknown | void,
    state: unknown,
}
const PhoneNumberInput = ({...props}: Props) => {
    
  return (
    <div className='flex flex-row'>
        <input type="text" />
    </div>
  )
}

export default PhoneNumberInput