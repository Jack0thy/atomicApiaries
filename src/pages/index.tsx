import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

function HomePage() {
  return (
    <Layout>
      <div className="space-y-20">
        <section className="relative h-[700px] rounded-2xl overflow-hidden">
          <Image
            src="/images/hero-bees.jpg"
            alt="Honey bees on honeycomb"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
              <div className="mb-6">
                <span className="text-honey-300 uppercase tracking-wider text-sm font-semibold">
                  Ottawa Valley's Premier Queen Breeding Program
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Building Resilient Colonies for
                <span className="text-honey-300"> Northern Success</span>
              </h1>
              <p className="text-xl mb-8 text-honey-100/90 max-w-2xl">
                Specializing in locally adapted queen bees and nucleus colonies, 
                backed by scientific breeding practices and years of commercial expertise 
                in the Ottawa Valley.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/purchase"
                  className="bg-honey-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-honey-700 transition-colors inline-flex items-center justify-center"
                >
                  Purchase Stock
                </Link>
                <Link
                  href="/about"
                  className="bg-sage-700/80 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-sage-800 transition-colors inline-flex items-center justify-center"
                >
                  Our Approach
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sage-800 mb-4">The Atomic Difference</h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Our breeding program combines scientific methodology with deep respect for bee biology, 
              resulting in exceptional colony performance and survival rates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Adaptation",
                description: "Queens bred and tested in the Ottawa Valley climate, ensuring strong winter survival and spring build-up.",
                icon: "🌱"
              },
              {
                title: "Scientific Breeding",
                description: "Rigorous selection process focusing on disease resistance, productivity, and gentle temperament.",
                icon: "🧬"
              },
              {
                title: "Expert Leadership",
                description: "Led by the president of the Upper Ottawa Valley Beekeeping Association, combining education with excellence.",
                icon: "👑"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-sage-200 hover:border-honey-300 transition-colors">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">{feature.title}</h3>
                <p className="text-sage-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 py-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-sage-800 mb-6">Our Impact</h2>
              <p className="text-lg text-sage-700 mb-8">
                With over 180 colonies maintained throughout the season, we're committed to 
                strengthening the local beekeeping community through superior genetics and 
                educational support.
              </p>
            </div>
            <ul className="space-y-6">
              {[
                'Proven success with 80 production and 100 mating colonies',
                'Exceptional overwintering rates through selective breeding',
                'Active contribution to regional beekeeping education',
                'Commitment to sustainable beekeeping practices'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-honey-100 flex items-center justify-center mt-1">
                    <span className="text-honey-600 text-lg">•</span>
                  </span>
                  <span className="text-sage-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-sage-50 to-honey-50 p-8 rounded-2xl border border-sage-200">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">2024 Season</h2>
            <p className="text-lg text-sage-700 mb-6">
              Pre-orders are now open for the 2024 season. Secure your locally adapted queens 
              and nucleus colonies early to ensure availability.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sage-700">
                <svg className="w-5 h-5 text-honey-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>Queen Bees: March - September</span>
              </div>
              <div className="flex items-center gap-3 text-sage-700">
                <svg className="w-5 h-5 text-honey-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>Nucleus Colonies: April - June</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center text-honey-600 font-semibold hover:text-honey-700 text-lg group"
            >
              Reserve Your Stock
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default HomePage; 