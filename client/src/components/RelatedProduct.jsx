import React, { useState, useEffect } from 'react';

/* ** IMPORT TEST DATA ** */
import dummy from '../../../dummy_data/related_product.js';

const RelatedProduct = () => {
  return (
    <div>
      {console.log(dummy.mainProduct)}
      <h2>Welcome to the Related Products section</h2>
      <h2>Welcome to the Your Outfit section</h2>
    </div>
  )
}

export default RelatedProduct;