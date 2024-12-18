import React from 'react';
import { toast } from 'sonner';
import { deleteColaborador } from '../api/colaboradorApi';

const ColaboradorTable = ({ colaboradores, onDelete, onEdit, onRiesgo }) => {
  const handleDelete = async (id) => {
    try {
      await deleteColaborador(id);
      toast.success('Colaborador eliminado con éxito.');
      onDelete(); // Actualiza la tabla
    } catch (error) {
      toast.error('Error al eliminar colaborador.');
    }
  };

  const handleRiesgo = (edad) => {
    if (edad && edad > 0) {
      let mensaje = '';
      if (edad >= 18 && edad <= 25) mensaje = 'FUERA DE PELIGRO';
      else if (edad >= 26 && edad <= 50) mensaje = 'TENGA CUIDADO, TOME TODAS LAS MEDIDAS DE PREVENCIÓN';
      else if (edad >= 51) mensaje = 'POR FAVOR QUÉDESE EN CASA';

      toast.success(`Nivel de riesgo: ${mensaje}`);
    } else {
      toast.error('Edad no válida.');
    }
  };

  return (
    <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="py-3 px-4">Nombre</th>
          <th className="py-3 px-4">Apellido</th>
          <th className="py-3 px-4">Dirección</th>
          <th className="py-3 px-4">Edad</th>
          <th className="py-3 px-4">Profesión</th>
          <th className="py-3 px-4">Estado Civil</th>
          <th className="py-3 px-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((col) => (
          <tr key={col.IDCOLABORADOR} className="border-t">
            <td className="py-3 px-4">{col.NOMBRE}</td>
            <td className="py-3 px-4">{col.APELLIDO}</td>
            <td className="py-3 px-4">{col.DIRECCION}</td>
            <td className="py-3 px-4">{col.EDAD}</td>
            <td className="py-3 px-4">{col.PROFESION}</td>
            <td className="py-3 px-4">{col.ESTADOCIVIL}</td>
            <td className="py-3 px-4 space-x-2">
              <button
                onClick={() => onEdit(col)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(col.IDCOLABORADOR)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
              >
                Eliminar
              </button>
              <button
                onClick={() => handleRiesgo(col.EDAD)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
              >
                Nivel de Riesgo
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ColaboradorTable;
