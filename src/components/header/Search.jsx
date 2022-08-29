import { Input } from '@chakra-ui/react';
import WebApi from '../../api/web-api';

export const Search = ({ setProducts }) => {
  const handleChange = (event) => {
    WebApi.getSearchProducts(event.target.value)
      .then((data) => {
        setProducts(data);
      });
  };

  return <Input placeholder='Search for...' onChange={handleChange} />;
};
