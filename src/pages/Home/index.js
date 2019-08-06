import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-direct-masculino/44/D22-2835-844/D22-2835-844_detalhe1.jpg?resize=326:*"
          alt=""
        />
        <strong>tenis</strong>
        <span>R$</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span> ADCIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
