// app/page.js

import { Check, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-700 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">SaaS Product</h1>
          <nav>
            <a href="#features" className="mr-6">Features</a>
            <a href="#pricing" className="mr-6">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      
      <main>
        <section className="bg-blue-600 text-white text-center py-20">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-4">Welcome to SaaS Product</h2>
            <p className="text-xl mb-8">Simplifying your workflow with our intuitive solutions.</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Get Started</button>
          </div>
        </section>
        
        <section id="features" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-700 mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Check className="text-blue-700 w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">Feature One</h3>
                <p>Streamline your processes with our innovative tools.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Check className="text-blue-700 w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">Feature Two</h3>
                <p>Enhance productivity and efficiency effortlessly.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Check className="text-blue-700 w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">Feature Three</h3>
                <p>Get insights and analytics to drive growth.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-blue-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-700 mb-12">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <DollarSign className="text-blue-700 w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
                <p className="text-xl font-semibold mb-4">$10/month</p>
                <p>Essential features to get started.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <DollarSign className="text-blue-700 w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                <p className="text-xl font-semibold mb-4">$30/month</p>
                <p>Advanced features for growing teams.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <DollarSign className="text-blue-700 w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">Enterprise Plan</h3>
                <p className="text-xl font-semibold mb-4">Contact Us</p>
                <p>Customized solutions for large organizations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-blue-700 text-white text-center py-6">
        <p>&copy; 2023 SaaS Product. All rights reserved.</p>
      </footer>
    </div>
  );
}