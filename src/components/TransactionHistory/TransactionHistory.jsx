import css from  './TransactionHistory.module.css'
import PropTypes from 'prop-types';


export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
                 <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
 {items.map((data) => (
  <tbody key={data.id}>
    <tr>
      <td>{data.type}</td>
      <td>{data.amount}</td>
      <td>{data.currency}</td>
    </tr>
  </tbody>
            ))}
 </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
 }))
}