import { useState, useEffect } from 'react';
import { getColaboradores, addColaborador } from '../api/colaboradorApi.js';

const useColaboradores = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [loading, setLoading] = useState(false);

  // Obtener todos los colaboradores
  const fetchColaboradores = async () => {
    try {
      setLoading(true);
      const data = await getColaboradores();
      setColaboradores(data);
    } catch (error) {
      console.error('Error cargando colaboradores:', error);
    } finally {
      setLoading(false);
    }
  };

  // Agregar un colaborador
  const createColaborador = async (colaborador) => {
    try {
      await addColaborador(colaborador);
      await fetchColaboradores(); // Actualiza la lista
    } catch (error) {
      console.error('Error creando colaborador:', error);
    }
  };

  useEffect(() => {
    fetchColaboradores();
  }, []);

  return {
    colaboradores,
    loading,
    createColaborador,
  };
};

export default useColaboradores;
