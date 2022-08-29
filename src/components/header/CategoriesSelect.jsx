import { Select } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import WebApi from '../../api/web-api';
import { RESET } from '../../constants/global';

export const CategoriesSelect = ({ setProducts }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    WebApi.getCategories().then(data => {
      setCategories(data);
    });
  }, []);

  const handleCategorySelect = (event) => {
    const categoryName = event.target.value;
    if (categoryName !== RESET) {
      WebApi.getCategoryProducts(categoryName).then((data) => {
        console.log(data);
        setProducts(data);
      });
    } else {
      WebApi.getProducts().then(data => {
        console.log(data);
        setProducts(data);
      });
    }
  };

  return <Select onChange={handleCategorySelect}>
    <option key={RESET} value={RESET}>
      All
    </option>
    {categories.map(category =>
      (<option key={category} value={category}>
        {category}
      </option>)
    )}
  </Select>;
};
