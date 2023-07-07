import { stats } from '../data'
import parse from 'html-react-parser'

const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="stats_box" key={index}>
            <h3 className="stats_no">{no}</h3>
            <p className="stats_title">{parse(title)}</p>
          </div>
        )
      })}
    </>
  )
}

export default Stats