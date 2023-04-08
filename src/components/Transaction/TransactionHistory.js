import { BaseTable, THead, Th, Tr, Td } from './TransactionHistory.styled.jsx';

export const TransactionHistory = ({items}) => {
    return (
        <BaseTable className="transaction-history">
              <THead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </THead>
        <tbody>
          {items.map((item) => {
					return <Tr key={item.id}>
          <Td>{item.type}</Td>
          <Td>{item.amount}</Td>
          <Td>{item.currency}</Td>
      </Tr>
				})}
        </tbody>
      </BaseTable>
    );
};