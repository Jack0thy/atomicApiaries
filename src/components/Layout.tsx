import React from 'react';
import Link from 'next/link';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-honey-50 to-sage-50">
      <nav className="bg-sage-800/95 backdrop-blur-sm sticky top-0 z-50 border-b border-sage-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex flex-col leading-tight">
              <span className="font-bold text-xl tracking-tight text-honey-100">
                ATOMIC APIARIES
              </span>
              <span className="text-xs text-honey-200/80 tracking-wider">
                QUEENS & NUCLEUS COLONIES
              </span>
            </Link>
            <div className="flex space-x-8">
              {[
                'Home',
                'Purchase',
                'About',
                'Contact'
              ].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-honey-100/90 hover:text-honey-200 transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-sage-800/95 text-honey-100 mt-auto border-t border-sage-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ATOMIC APIARIES</h3>
              <p className="text-honey-200/80 text-sm">
                Premium nucleus colonies and queen bees bred for excellence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-honey-200/80 text-sm">
                <p>info@atomicapiaries.com</p>
                <p>(555) 123-4567</p>
                <p>Springfield, IL</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <div className="space-y-2 text-honey-200/80 text-sm">
                <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-sage-700">
            <p className="text-center text-honey-200/60 text-sm">
              © 2024 Atomic Apiaries. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout; 