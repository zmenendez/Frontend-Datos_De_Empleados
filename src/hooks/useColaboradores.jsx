import { useState, useEffect } from 'react';
import { getColaboradores, addColaborador } from '../api/colaboradorApi.js';

const useColaboradores = () => {
  // Estado para almacenar la lista de colaboradores
  const [colaboradores, setColaboradores] = useState([]);
  // Estado para manejar la carga de datos
  const [loading, setLoading] = useState(false);

  /**
   * Función asíncrona para obtener todos los colaboradores.
   * Actualiza el estado de `colaboradores` y maneja errores de carga.
   */
  const fetchColaboradores = async () => {
    try {
      setLoading(true); // Indica que se está cargando
      const data = await getColaboradores(); // Llama a la API para obtener colaboradores
      setColaboradores(data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error('Error cargando colaboradores:', error); // Manejo de errores
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  /**
   * Función asíncrona para agregar un nuevo colaborador.
   * Llama a la API para agregar el colaborador y actualiza la lista.
   */
  const createColaborador = async (colaborador) => {
    try {
      await addColaborador(colaborador); // Llama a la API para agregar el colaborador
      await fetchColaboradores(); // Actualiza la lista de colaboradores
    } catch (error) {
      console.error('Error creando colaborador:', error); // Manejo de errores
    }
  };

  // Efecto que se ejecuta al montar el componente para cargar los colaboradores
  useEffect(() => {
    fetchColaboradores(); // Llama a la función para obtener colaboradores
  }, []);

  // Retorna el estado y las funciones para ser utilizadas en otros componentes
  return {
    colaboradores,
    loading,
    createColaborador,
  };
};

export default useColaboradores;
