import React from 'react'
import { Modal, ModalProps } from 'antd'
import 'antd/lib/modal/style/index.css'

const CustomModal: React.FC<ModalProps>  = (props)=> {
  return (
    <div className="custom-button">
      <Modal {...props}>{props.children}</Modal>  
    </div>
  )
}

export default CustomModal