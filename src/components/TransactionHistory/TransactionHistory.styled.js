import styled from 'styled-components';

export const DataTable = styled.table`
  width: 800px;
  margin: 0 auto;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 5px;
`;

export const DataType = styled.th`
  padding: 10px 40px;
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  width: calc(100% / 3);
  background-color: #1e90ff;
`;
export const TableElement = styled.td`
  padding: 10px;
  height: 20px;
  text-align: center;
  width: calc(100% / 3);
  color: #808080;
`;
export const TableRow = styled.tr`
  background-color: #eee;
`;
