import React from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function ProductsPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-amber-900">Our Products</h1>
        
        <section>
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Nucleus Colonies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(product => product.category === 'nucleus')
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Queen Bees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(product => product.category === 'queen')
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ProductsPage; 