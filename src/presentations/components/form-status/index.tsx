import React, { useContext, useEffect } from 'react'
import Spinner from '../spinner'
import Context from '@/presentations/contexts/form/form-context'

import Styles from './styles.scss'

const FormStatus: React.FC = () => {
  const { state, setState } = useContext(Context)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {state.mainError && <span className={Styles.error}>{state.mainError}</span>}
    </div>
  )
}

export default FormStatus
