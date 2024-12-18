import React from 'react';
import { toast } from 'sonner';

const NivelRiesgo = ({ edad }) => {
  const calcularNivelRiesgo = (edad) => {
    if (edad >= 18 && edad <= 25) return 'FUERA DE PELIGRO';
    if (edad >= 26 && edad <= 50) return 'TENGA CUIDADO, TOME TODAS LAS MEDIDAS DE PREVENCIÓN';
    if (edad >= 51) return 'POR FAVOR QUÉDESE EN CASA';
    return 'Edad no válida';
  };

  const handleNivelRiesgo = () => {
    if (!edad || edad <= 0) {
      toast.error('Por favor, ingresa una edad válida.');
      return;
    }
    const mensaje = calcularNivelRiesgo(edad);
    toast.success(`Nivel de riesgo: ${mensaje}`);
  };

  return <button onClick={handleNivelRiesgo}>Calcular Nivel de Riesgo</button>;
};

export default NivelRiesgo;
