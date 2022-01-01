import React from 'react'
import Styles from './styles.scss'

type Props = React.HTMLAttributes<HTMLElement> & {
  className: string
}

const Spinner: React.FC<Props> = (props) => {
  return (
    <div {...props} className={`${Styles.spinner} ${props.className}`} >
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Spinner
