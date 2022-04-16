import React from 'react'
import { Button, ButtonProps } from 'antd'

import 'antd/lib/button/style/index.css'

export default function CustomButton (props: ButtonProps) {
  return (
    <div className="custom-button">
      <Button {...props} type={props.type ?? "primary"}>{props.children}</Button>  
    </div>
  )
}