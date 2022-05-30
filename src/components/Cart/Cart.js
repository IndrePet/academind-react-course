import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';

import styles from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <li className={styles['cart-items']}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
