import api from './axios.js'; // Importa la instancia de Axios configurada

// Obtener todos los colaboradores
export const getColaboradores = async () => {
  try {
    const response = await api.get('/colaborador');
    return response.data;
  } catch (error) {
    console.error('Error obteniendo colaboradores:', error);
    throw error;
  }
};

// Obtener un colaborador por ID
export const getColaboradorById = async (id) => {
  try {
    const response = await api.get(`/colaborador/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo colaborador con ID ${id}:`, error);
    throw error;
  }
};

// Agregar un nuevo colaborador
export const addColaborador = async (colaborador) => {
  try {
    const response = await api.post('/colaborador', colaborador);
    return response.data;
  } catch (error) {
    console.error('Error agregando colaborador:', error);
    throw error;
  }
};

// Actualizar un colaborador por ID
export const updateColaborador = async (id, colaborador) => {
  try {
    const response = await api.put(`/colaborador/${id}`, colaborador);
    return response.data;
  } catch (error) {
    console.error(`Error actualizando colaborador con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un colaborador por ID
export const deleteColaborador = async (id) => {
  try {
    const response = await api.delete(`/colaborador/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error eliminando colaborador con ID ${id}:`, error);
    throw error;
  }
};
