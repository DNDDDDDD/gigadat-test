import { Td, Tr, Th, Box } from '@chakra-ui/react';

const rowStyles = {
  maxWidth: 'inherit',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

export const TableRow = (props) => {
  const {
    brand = '',
    category = '',
    description = '',
    title = '',
    price = '',
    rating = ''
  } = props;

  return (<Tr>
    <Th>{title}</Th>
    <Td>
      <Box sx={rowStyles}>{description}</Box>
    </Td>
    <Td>{price}</Td>
    <Td>{rating}</Td><Td>{brand}</Td>
    <Td>{category}</Td>
  </Tr>);
}
