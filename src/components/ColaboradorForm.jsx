import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { addColaborador, updateColaborador } from '../api/colaboradorApi';

//Componente de formulario para agregar o editar un colaborador.
const ColaboradorForm = ({ onSuccess, colaboradorSeleccionado, limpiarSeleccion }) => {
  // Estado para manejar los datos del formulario
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    edad: '',
    profesion: '',
    estadoCivil: '',
  });

  // Cargar datos del colaborador seleccionado al montar el componente o cambiar la selección
  useEffect(() => {
    if (colaboradorSeleccionado) {
      setForm({
        nombre: colaboradorSeleccionado.NOMBRE || '',
        apellido: colaboradorSeleccionado.APELLIDO || '',
        direccion: colaboradorSeleccionado.DIRECCION || '',
        edad: colaboradorSeleccionado.EDAD || '',
        profesion: colaboradorSeleccionado.PROFESION || '',
        estadoCivil: colaboradorSeleccionado.ESTADOCIVIL || '',
      });
    } else {
      setForm({
        nombre: '',
        apellido: '',
        direccion: '',
        edad: '',
        profesion: '',
        estadoCivil: '',
      });
    }
  }, [colaboradorSeleccionado]);

//Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /**
   * Maneja el envío del formulario.
   * Valida la edad y llama a la API para agregar o actualizar el colaborador.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, apellido, edad } = form;

    // Validación de la edad
    if (edad <= 17) {
      toast.error('Edad debe ser mayor o igual a 18.');
      return;
    }

    try {
      if (colaboradorSeleccionado) {
        // Modo edición
        await updateColaborador(colaboradorSeleccionado.IDCOLABORADOR, form);
        toast.success('Colaborador actualizado con éxito.');
        limpiarSeleccion(); // Limpia la selección después de actualizar
      } else {
        // Modo agregar
        await addColaborador(form);
        toast.success('Colaborador agregado con éxito.');
      }
      // Reinicia el formulario
      setForm({ nombre: '', apellido: '', direccion: '', edad: '', profesion: '', estadoCivil: '' });
      onSuccess(); // Actualiza la tabla
    } catch (error) {
      toast.error('Error al guardar el colaborador.'); // Manejo de errores
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Grid para 3 columnas con 2 filas */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required 
          value={form.nombre}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          required
          value={form.apellido}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          required
          value={form.edad}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="profesion"
          placeholder="Profesión"
          value={form.profesion}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="estadoCivil"
          placeholder="Estado Civil"
          value={form.estadoCivil}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Botones debajo de los inputs */}
      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {colaboradorSeleccionado ? 'Actualizar Colaborador' : 'Agregar Colaborador'}
        </button>
        {colaboradorSeleccionado && (
          <button
            type="button"
            onClick={limpiarSeleccion}
            className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none"
          >
            Cancelar Edición
          </button>
        )}
      </div>
    </form>
  );
};

export default ColaboradorForm;
