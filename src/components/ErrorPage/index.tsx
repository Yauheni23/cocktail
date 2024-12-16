import { Link } from 'react-router'

import CN from './style.module.scss'

export const ErrorPage = () => {
  return (
    <article className={CN.content}>
      <svg viewBox="0 0 960 150" className={CN.icon}>
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="90%">
            404
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#s-text" className={CN.text} />
          <use xlinkHref="#s-text" className={CN.text} />
          <use xlinkHref="#s-text" className={CN.text} />
          <use xlinkHref="#s-text" className={CN.text} />
          <use xlinkHref="#s-text" className={CN.text} />
        </g>
      </svg>

      <h1 className={CN.title}>Page Not Found</h1>
      <Link to="/" className={CN.link}>
        Back to Home
      </Link>
    </article>
  )
}
