import './Statistics.css'
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
   
    <section className="statistics">
      {title !== undefined && (
        <h2 className="title">{title}</h2>
      )}
  <ul  className="stat-list">
      {stats.map((item) => (   
      
    <li key={item.id} className="item">
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>
           ))}
  </ul>
        
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}