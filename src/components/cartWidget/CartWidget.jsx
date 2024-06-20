import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../../context/cart/CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
  const { itemsEnCarro } = useContext(CartContext);

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={itemsEnCarro} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}