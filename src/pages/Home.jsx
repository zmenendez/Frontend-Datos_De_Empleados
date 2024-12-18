import React, { useState, useEffect } from 'react';
import ColaboradorForm from '../components/ColaboradorForm';
import ColaboradorTable from '../components/ColaboradorTable';
import { getColaboradores } from '../api/colaboradorApi';

const Home = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [colaboradorSeleccionado, setColaboradorSeleccionado] = useState(null);

  // Cargar colaboradores desde la API
  const fetchColaboradores = async () => {
    try {
      const data = await getColaboradores();
      setColaboradores(data);
    } catch (error) {
      console.error('Error al cargar colaboradores:', error);
      toast.error('Error al cargar colaboradores');
    }
  };

  const limpiarSeleccion = () => {
    setColaboradorSeleccionado(null);
  };

  // Función para manejar la edición de un colaborador
  const handleEdit = (colaborador) => {
    setColaboradorSeleccionado(colaborador);
  };

  // Función para manejar la eliminación de un colaborador
  const handleDelete = () => {
    fetchColaboradores(); // Actualiza la tabla después de eliminar
  };

  useEffect(() => {
    fetchColaboradores(); // Cargar colaboradores automáticamente al iniciar
  }, []);

  return (
    <div>
      <h1>Sistema de Gestión de Colaboradores</h1>

      {/* Formulario para agregar o editar colaboradores */}
      <ColaboradorForm
        onSuccess={fetchColaboradores} // Actualiza la tabla después de agregar o editar
        colaboradorSeleccionado={colaboradorSeleccionado}
        limpiarSeleccion={limpiarSeleccion}
      />

      {/* Tabla de colaboradores */}
      <ColaboradorTable
        colaboradores={colaboradores}
        onDelete={handleDelete} // Actualiza la tabla después de eliminar
        onEdit={handleEdit}     // Permite seleccionar un colaborador para editar
        onRiesgo={() => {}}     // Botón de nivel de riesgo no necesita manejar nada en Home
      />
    </div>
  );
};

export default Home;
