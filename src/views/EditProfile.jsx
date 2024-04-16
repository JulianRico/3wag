import  { useState, Fragment, useEffect } from "react";
import { CreateInfluencer } from "./services";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import Datepicker from './components/DatePicker';



export default function EditProfile() {
  const [step, setStep] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [user, setUser] = useState({
    "phone": "",
    "country": "",
    "ein": "",
    "avatar": avatar,
    "name": "",
    'gender': "",
    'birthday': "",
    'category': "",
  });

  const Category = [
    { name: "Tecnología", key: "1" },
    { name: "Noticias", key: "2" },
    { name: "Fútbol", key: "3" },
  ];

  const Genero = [
    { name: "Masculino", key: "Male" },
    { name: "Femenino", key: "Famale" },
    { name: "Otro", key: "Others" },
  ];

  const SiguienteStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    setPhoto(URL.createObjectURL(file));
  };

  const HandleChange = (name, e)=>{
    
   setUser({...user, [name]: e.target?.value})
  }


  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date); // Actualiza el estado con la fecha seleccionada
  };


  const handleSaveInfluencer = async () => {    
    console.log(user)
    const saveUser = await CreateInfluencer(
      "931314241",
      "Perú",
      "10732015239",
      avatar,
      "Ibai Llanos",
      "male",
      selectedDate,
      "3"
    );
    console.log(saveUser);
    if (saveUser.status === 201) {
      SiguienteStep();
    } else {
    }
  };

  const handleDropDownSelect = (selectedItem)  => {   

    if(selectedItem[1] === "gen"){
        setUser({...user, ['gender']: selectedItem[0].key})
    }
    if(selectedItem[1] === "cat"){ setUser({...user, ['category']: selectedItem[0].key})}
   
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
                <div
                  className={`w-4 h-4 ${
                    step >= 1 ? "bg-blue-500" : "bg-gray-300"
                  } rounded-full`}
                ></div>
                {step >= 2 ? (
                  <div className="h-0.5 bg-blue-500 w-16"></div>
                ) : (
                  <div className="h-0.5 bg-gray-300 w-16"></div>
                )}
                <div
                  className={`w-4 h-4 ${
                    step >= 2 ? "bg-blue-500" : "bg-gray-300"
                  } rounded-full`}
                ></div>
                {step >= 3 ? (
                  <div className="h-0.5 bg-blue-500 w-16"></div>
                ) : (
                  <div className="h-0.5 bg-gray-300 w-16"></div>
                )}
                <div
                  className={`w-4 h-4 ${
                    step === 3 ? "bg-blue-500" : "bg-gray-300"
                  } rounded-full`}
                ></div>
              </div>
            </div>
            {step === 1 && (
              <div>
                <h2 className="text-lg font-bold mb-4">Datos</h2>
                <div className="flex items-center justify-center space-x-4 py-2">
                  <img
                    src={
                      photo ??
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                    }
                    className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  value={user.name}
                  onChange={(e)=>HandleChange("name",e)}
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                
                <DropDown id="cat" titulo={'Categoría'} data={Category}  onSelect={handleDropDownSelect} />

                <DropDown id="gen" titulo={'Género'} data={Genero}  onSelect={handleDropDownSelect}/>
                <input
                  type="text"
                  placeholder="Pais"
                  onChange={(e)=>HandleChange("country",e)}
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Correo Electrónico"
                  onChange={(e)=>HandleChange("mail",e)}
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />

                <input
                  type="text"
                  id="datepicker"
                  placeholder="Ciudad"
                  onChange={(e)=>HandleChange("name",e)}
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                
                <input
                  type="text"
                  placeholder="# Movil"
                  onChange={(e)=>HandleChange("phone",e)}
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                <Datepicker onChange={handleDateChange} />
                <input
                  type="file"
                  onChange={handlePhotoChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                <button
                  onClick={SiguienteStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Siguiente
                </button>
              </div>
            )}
            {step === 2 && (
              <div>
                <h2 className="text-lg font-bold mb-4">Redes</h2>
                <input
                  type="text"
                  placeholder="Instagram"
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="TicTok"
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Youtube"
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Facebook"
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Twitch"
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                />
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={SiguienteStep}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h2 className="text-lg font-bold mb-4">Descripción</h2>
                <textarea
                  placeholder="Descripción..."
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                ></textarea>
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Atrás
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                    onClick={handleSaveInfluencer}
                  >
                    Guadar
                  </button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <h2 className="text-lg font-bold mb-4">
                  Se han guardado todos los cambios..{" "}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



const DropDown = ({titulo,data,id, onSelect })=>{
    const [selected, setSelected] = useState();
    
  
    const handleSelect = (item) => {
      setSelected(item);
      onSelect([item,id]); // Llama a la función de retorno de llamada con el elemento seleccionado
    };
    
    return(
        <Listbox value={selected} onChange={handleSelect}>
        {({ open }) => (
         
            
            <div className=" rounded  w-full mb-4">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">                  
                  <span className="ml-3 block truncate">{selected?.name ?? titulo}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data.map((item) => (
                    <Listbox.Option
                      key={item.key}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-blue-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {item.name}
                            </span>
                          </div>
  
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          
        )}
      </Listbox>
        )
    
}