import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const DonationPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#f36a34] py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-[64px] leading-tight md:leading-[97px] font-light text-white capitalize mb-4 md:mb-8">
            Make a Difference Today
          </h1>
          <p className="text-lg md:text-xl leading-6 text-[#ffffffb2] mb-8 md:mb-12 max-w-4xl mx-auto">
            Your generous donation helps us provide mentorship, career support, scholarships, and resources to International Students, empowering them to achieve their dreams.
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="bg-[#f9f9fb] py-12 md:py-24 px-4 md:px-20 -mt-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[30px] shadow-lg p-6 md:p-12">
            <div className="space-y-8">
              {/* Predefined Amounts */}
              <div>
                <label className="text-xl md:text-2xl font-medium text-[#030d28] mb-6 block">
                  Select Donation Amount
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`${
                        selectedAmount === amount
                          ? 'bg-[#f36a34] text-white border-[#f36a34]'
                          : 'bg-white text-[#030d28] border-[#e7e7ee] hover:border-[#f36a34] hover:text-[#f36a34]'
                      } px-6 py-4 rounded-2xl font-medium transition-all duration-200 text-lg border-2`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <label className="text-xl md:text-2xl font-medium text-[#030d28] mb-6 block">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <span className="text-[#030d28] text-xl font-medium">$</span>
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-12 pr-6 py-4 text-xl border-2 border-[#e7e7ee] rounded-2xl focus:outline-none focus:border-[#f36a34] transition-colors"
                    placeholder="Enter amount"
                    min="1"
                  />
                </div>
              </div>

              {/* Impact Information */}
              <div className="bg-[#fde1d6] rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-medium text-[#030d28] mb-4">Your Impact</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#f36a34] rounded-full mt-2"></div>
                    <p className="text-[#030d28] flex-1">Support scholarship programs for deserving students</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#f36a34] rounded-full mt-2"></div>
                    <p className="text-[#030d28] flex-1">Fund career development workshops and resources</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#f36a34] rounded-full mt-2"></div>
                    <p className="text-[#030d28] flex-1">Enable mentorship programs connecting students with professionals</p>
                  </div>
                </div>
              </div>

              {/* Donation Button */}
              <button
                className={`w-full py-5 rounded-2xl text-xl font-medium transition-all duration-200 ${
                  !selectedAmount && !customAmount
                    ? 'bg-[#e7e7ee] text-[#7f7f7f] cursor-not-allowed'
                    : 'bg-[#f36a34] text-white hover:bg-[#e55a2b]'
                }`}
                disabled={!selectedAmount && !customAmount}
              >
                Donate ${selectedAmount || customAmount || '0'}
              </button>

              <div className="flex items-center justify-center space-x-2 text-[#7f7f7f]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-sm">All donations are secure and encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonationPage; 