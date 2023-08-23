import {
  DataTable,
  DataType,
  TableElement,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <DataTable>
        <thead>
          <tr>
            <DataType>Type</DataType>
            <DataType>Amount</DataType>
            <DataType>Currency</DataType>
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            return (
              <TableRow key={item.id}>
                <TableElement>{item.type}</TableElement>
                <TableElement>{item.amount}</TableElement>
                <TableElement>{item.currency}</TableElement>
              </TableRow>
            );
          })}
        </tbody>
      </DataTable>
    </div>
  );
};
