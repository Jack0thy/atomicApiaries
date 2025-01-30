import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { products } from '../data/products';

function PurchasePage() {
  return (
    <Layout>
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-sage-800 mb-4">2024 Stock</h1>
          <p className="text-sage-600 text-lg">
            Pre-orders now open for the 2024 season. All stock is bred and selected 
            for excellence in the Ottawa Valley climate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Queen Cells Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sage-200 hover:border-honey-300 transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/images/queen-cells.jpg"
                alt="Queen Cells"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Queen Cells</h2>
                <p className="text-honey-100">Ripe & Ready to Emerge</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sage-700 font-medium">Price</span>
                  <span className="text-honey-700 font-bold text-lg">$8.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage-700 font-medium">Availability</span>
                  <span className="text-sage-600">May - August</span>
                </div>
              </div>
              <p className="text-sage-600 text-sm">
                Premium queen cells from selected breeder queens. Ideal for queen 
                replacement or colony expansion.
              </p>
              <button className="w-full bg-sage-700 text-white py-3 rounded-lg font-medium hover:bg-honey-600 transition-colors duration-300">
                Reserve Queen Cells
              </button>
            </div>
          </div>

          {/* Mated Queens Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sage-200 hover:border-honey-300 transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/images/italian-queen.jpg"
                alt="Mated Queen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Mated Queens</h2>
                <p className="text-honey-100">Locally Adapted Genetics</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sage-700 font-medium">Price</span>
                  <span className="text-honey-700 font-bold text-lg">$45.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage-700 font-medium">Availability</span>
                  <span className="text-sage-600">March - September</span>
                </div>
              </div>
              <p className="text-sage-600 text-sm">
                Marked and tested queens from our selective breeding program. Known for 
                productivity and gentle temperament.
              </p>
              <button className="w-full bg-sage-700 text-white py-3 rounded-lg font-medium hover:bg-honey-600 transition-colors duration-300">
                Reserve Queens
              </button>
            </div>
          </div>

          {/* Nucleus Colonies Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sage-200 hover:border-honey-300 transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/images/nucleus-colony.jpg"
                alt="Nucleus Colony"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Nucleus Colonies</h2>
                <p className="text-honey-100">5-Frame Overwintered Stock</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sage-700 font-medium">Price</span>
                  <span className="text-honey-700 font-bold text-lg">$185.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage-700 font-medium">Availability</span>
                  <span className="text-sage-600">April - June</span>
                </div>
              </div>
              <p className="text-sage-600 text-sm">
                Strong colonies with laying queens, diverse brood stages, and food stores. 
                Perfect for spring start-up or expansion.
              </p>
              <button className="w-full bg-sage-700 text-white py-3 rounded-lg font-medium hover:bg-honey-600 transition-colors duration-300">
                Reserve Nucleus Colony
              </button>
            </div>
          </div>
        </div>

        <section className="bg-sage-50 rounded-2xl p-8 border border-sage-200">
          <h2 className="text-2xl font-bold text-sage-800 mb-4">Ordering Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-sage-700">How to Order</h3>
              <p className="text-sage-600">
                Contact us to discuss your needs and place a pre-order. A 50% deposit 
                is required to secure your order, with the balance due at pickup.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-sage-700">Pickup Location</h3>
              <p className="text-sage-600">
                All orders are available for pickup at our location in the Ottawa Valley. 
                Specific pickup dates will be arranged based on your order.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default PurchasePage; 