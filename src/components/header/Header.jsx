import {Box} from "@chakra-ui/react";
import {Search} from "./Search";
import {CategoriesSelect} from "./CategoriesSelect";

export const Header = ({ setProducts }) => (<Box
        sx={{ display: 'flex', gap: '30px', padding: '5px', width: '50%', }}
    >
      <Search setProducts={setProducts} />
      <CategoriesSelect setProducts={setProducts} />
  </Box>
);
