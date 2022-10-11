import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { save, update } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { success } from '../Feedback';

const Form = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { items, total, clearCart } = useCartContext();

  const products = items.map(({ id, title, price, qty }) => {
    return { id, title, price, qty };
  });

  const [order, setOrder] = useState({
    buyer: {},
    products,
    date: new Date(),
    total,
  });

  const handleChange = ({ target: { name, value } }) => {
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      var orderId = await save("orders", order);
  
      for(const item of items) {
        await update('products', item.id, {stock: item.stock - item.qty})
      }
    }
    catch(error) {
      console.log(error)
    }
    finally {
      setLoading(false);
      success('Order confirmed!', `Order ID: <strong>${orderId}</strong>`);
      clearCart();
      navigate('/');
    }
  };

  return (
    <form className="mt-2 form" onSubmit={handleSubmit}>
      <div className="row">
        <h4>Provide personal data</h4>
      </div>
      <div className="row">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={order.name}
          className="input"
          placeholder="Name"
          required
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={order.phone}
          className="input"
          placeholder="Phone"
          required
        />
      </div>
      <div className="row">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={order.email}
          className="input"
          placeholder="Email"
          required
        />
      </div>

      <div className="row">
        <button disabled={loading} className={`button fullWidth ${loading && "loading"}`}>
          Confirm order
        </button>
      </div>
    </form>
  );
};

export default Form;
