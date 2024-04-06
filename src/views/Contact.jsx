
import React, { useState } from 'react';

  export default function Contact() {

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };


    return (
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">        
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">       
                <div className="md:col-span-2 sm:col-span-1">
                    <div className="bg-white p-8 rounded shadow-md">
                        <div className="mb-4 text-center">
                            <span className="text-gray-500 mr-2">Step {step} of 3</span>
                        </div>
                        <div className="mt-4 flex items-center justify-center space-x-4">
                            <div className="flex items-center">
                                <div className={`w-4 h-4 ${step >= 1 ? 'bg-blue-500' : 'bg-gray-300'} rounded-full`}></div>
                                {step >= 2 ? <div className="h-0.5 bg-blue-500 w-16"></div> : <div className="h-0.5 bg-gray-300 w-16"></div>}
                                <div className={`w-4 h-4 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'} rounded-full`}></div>
                                {step >= 3 ? <div className="h-0.5 bg-blue-500 w-16"></div> : <div className="h-0.5 bg-gray-300 w-16"></div>}
                                <div className={`w-4 h-4 ${step === 3 ? 'bg-blue-500' : 'bg-gray-300'} rounded-full`}></div>
                            </div>
                        </div>
                        {step === 1 && (
                            <div>
                                <h2 className="text-lg font-bold mb-4">Step 1</h2>
                                <input type="text" placeholder="Name" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <h2 className="text-lg font-bold mb-4">Step 2</h2>
                                <input type="email" placeholder="Email" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <div className="flex justify-between">
                                    <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Previous</button>
                                    <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <h2 className="text-lg font-bold mb-4">Step 3</h2>
                                <textarea placeholder="Message" className="border border-gray-300 rounded px-3 py-2 w-full mb-4"></textarea>
                                <div className="flex justify-between">
                                    <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Previous</button>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
  }
  