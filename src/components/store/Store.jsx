import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import products from "../../img/products";

const viewModes = ['view_module', 'view_list'];

export default function Store() {
  const [view, changeView] = useState(0);

  const onSwitch = () => {
    changeView(prev => 1 - prev);
  }

  return (
    <div className="Store">
      <IconSwitch icon={viewModes[1 - view]} onSwitch={onSwitch} />
      {viewModes[view] === 'view_module' ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  );
}