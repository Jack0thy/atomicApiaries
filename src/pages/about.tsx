import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

function AboutPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/apiary-hero.jpg"
            alt="Our Apiary"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
            <div className="max-w-3xl mx-auto px-4">
              <h1 className="text-4xl font-bold text-white mb-4">About Atomic Apiaries</h1>
              <p className="text-xl text-honey-100/90">
                Where respect for honeybees meets scientific breeding practices
              </p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-sage-800 mb-4">Our Story</h2>
              <p className="text-sage-700 leading-relaxed">
                With over five years of commercial beekeeping experience, Charlotte brings 
                deep expertise and passion to Atomic Apiaries. As the president of the 
                Upper Ottawa Valley Beekeeping Association, she combines hands-on experience 
                with a commitment to education, mentorship, and community building.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sage-800 mb-4">Our Philosophy</h2>
              <p className="text-sage-700 leading-relaxed">
                At the core of our operation is a deep respect for honeybees and their 
                biology. We believe working with these remarkable organisms is both an 
                honor and a privilege—a philosophy we share through our breeding program 
                and educational initiatives.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-sage-800 mb-4">Our Operation</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-honey-100 flex items-center justify-center">
                    <span className="text-honey-600 text-lg">•</span>
                  </span>
                  <span className="text-sage-700">
                    80 production colonies and 100 mating colonies maintained throughout the season
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-honey-100 flex items-center justify-center">
                    <span className="text-honey-600 text-lg">•</span>
                  </span>
                  <span className="text-sage-700">
                    Specialized focus on queen breeding and genetic improvement
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-honey-100 flex items-center justify-center">
                    <span className="text-honey-600 text-lg">•</span>
                  </span>
                  <span className="text-sage-700">
                    Exceptional overwintering success through dedicated breeding program
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-sage-50 p-6 rounded-xl border border-sage-200">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">Our Commitment</h2>
              <p className="text-sage-700 leading-relaxed">
                We are dedicated to promoting locally bred queens and their genetics, 
                ensuring strong, resilient colonies adapted to our climate. Through 
                education and mentorship, we aim to inspire the next generation of 
                beekeepers while maintaining the highest standards in bee health and genetics.
              </p>
            </section>
          </div>
        </div>

        <section className="bg-gradient-to-br from-sage-50 to-honey-50 p-8 rounded-xl mt-8 border border-sage-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-sage-800 mb-6 text-center">Connect With Us</h2>
            <p className="text-sage-700 text-center mb-8">
              Whether you're interested in our queens, nucleus colonies, or educational opportunities,
              we're here to support your beekeeping journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-sage-800 mb-2">Email</h3>
                <p className="text-sage-600">info@atomicapiaries.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-sage-800 mb-2">Location</h3>
                <p className="text-sage-600">Ottawa Valley, Ontario</p>
              </div>
              <div>
                <h3 className="font-semibold text-sage-800 mb-2">Association</h3>
                <p className="text-sage-600">Upper Ottawa Valley Beekeeping Association</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default AboutPage; 