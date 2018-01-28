import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './Modal.css'

const modalRoot = document.getElementById('modal')!

export default class Modal extends React.Component {
  props: { render: () => JSX.Element; onClose: () => void }
  el = document.createElement('div')

  componentDidMount() {
    this.el.classList.add('modal__wrapper')
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    const { render, onClose } = this.props
    return ReactDOM.createPortal(
      <div className={'modal'}>
        <div onClick={onClose} className={'modal__close-btn'} />
        {render()}
      </div>,
      this.el,
    )
  }
}
