import React from 'react'
import {
  Link,
  hashHistory
} from 'react-router'
import style from './css/layout.scss'
import {
  log
} from '../utils/Utils.js'

export default function App({
  children
}) {
  return (
    <div>
      <header className={style.tst}>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => hashHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}



//'<button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>'
