import React from 'react'
import { Input, InputProps } from 'antd'
import 'antd/lib/input/style/index.css'

const CustomInput: React.FC<InputProps> = (props) => {
  return (
    <div>
      <Input {...props} />
    </div>
  )
}

export default CustomInput;