
import React, { useState } from 'react';


  export default function EditProfile() {

    const [step, setStep] = useState(1);
    const [photo, setPhoto] = useState(null);


    const SiguienteStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handlePhotoChange = (e) => {        
        const file = e.target.files[0];
        setPhoto(URL.createObjectURL(file));        
    };

    return (
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">        
            <div className="grid ">       
                <div className="md:col-span-2 sm:col-span-1">
                    <div className="bg-white p-8 rounded shadow-md">
                        <div className="mb-4 text-center">
                            <span className="text-gray-500 mr-2">Paso {step} de 3</span>
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
                                <h2 className="text-lg font-bold mb-4">Datos</h2>
                                <div className="flex items-center justify-center space-x-4 py-2">
                                <img
  src={photo ?? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"}
  className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
/></div>
                                <input type="text" placeholder="Nombre" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <input type="text" placeholder="Apellidos" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <input type="text" placeholder="Ciudad" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <input type="text" placeholder="Pais" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                
                                <input type="file" onChange={handlePhotoChange} className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <button onClick={SiguienteStep} className="bg-blue-500 text-white px-4 py-2 rounded">Siguiente</button>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <h2 className="text-lg font-bold mb-4">Redes</h2>
                                <input type="text" placeholder="Instagram" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <input type="text" placeholder="TicTok" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <input type="text" placeholder="Youtube" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <input type="text" placeholder="Facebook" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <input type="text" placeholder="Twitch" className="border border-gray-300 rounded px-3 py-2 w-full mb-4" />
                                <div className="flex justify-between">
                                    <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Atrás</button>
                                    <button onClick={SiguienteStep} className="bg-blue-500 text-white px-4 py-2 rounded">Siguiente</button>
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <h2 className="text-lg font-bold mb-4">Descripción</h2>
                                <textarea placeholder="Descripción..." className="border border-gray-300 rounded px-3 py-2 w-full mb-4"></textarea>
                                <div className="flex justify-between">
                                    <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Atrás</button>
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={SiguienteStep} >Guadar</button>
                                </div>
                            </div>
                        )}
                        {step === 4 && (
                            <div>
                                <h2 className="text-lg font-bold mb-4">Se han guardado todos los cambios.. </h2>
                                
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
  }
  