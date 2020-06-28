import React from 'react'

import styles from './layout.module.less'

function ApplicationLayout ({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ApplicationLayout
