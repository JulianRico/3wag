import React, { useRef, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const Datepicker = ({ onChange }) => {
  const datepickerRef = useRef(null);

  useEffect(() => {
    const fp = flatpickr(datepickerRef.current, {
      dateFormat: 'Y-m-d',
      onChange: (selectedDates, dateStr, instance) => {
        onChange(dateStr); // Llama a la función de retorno de llamada con la fecha seleccionada
      },
    });

    return () => {
      fp.destroy(); // Limpia Flatpickr al desmontar el componente
    };
  }, [onChange]);

  return (
    <input
      ref={datepickerRef}
      type="text"
      placeholder="Seleccionar fecha"
      className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
    />
  );
};

export default Datepicker;