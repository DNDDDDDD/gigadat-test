import { TableContainer, Tbody, Thead, Table, Tr, Th } from '@chakra-ui/react';
import { TableRow } from './TableRow';

export const ProductsTable = ({ products = [], headers = [] }) => (
  <TableContainer>
    <Table variant='striped' size='sm' sx={{ tableLayout: 'fixed' }}>
      <Thead sx={{ height: '60px', backgroundColor: 'gray.400' }}>
        <Tr>
          {headers.map((header, index) => <Th key={index}>{header}</Th>)}
        </Tr>
      </Thead>
      <Tbody>
        {
          products.map((product) => <TableRow key={product.id} {...product} />)
        }
      </Tbody>
    </Table>
  </TableContainer>
);
