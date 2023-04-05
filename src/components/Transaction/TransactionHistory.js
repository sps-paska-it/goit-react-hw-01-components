import { TransactionsItem } from "./TransactionsItem";

export const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
              <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
          {items.map((item) => {
					return <TransactionsItem key={item.id} {...item} />;
				})}
        </tbody>
      </table>
    );
};