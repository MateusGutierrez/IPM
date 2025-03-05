import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { User } from '@/zustand/userStore';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

interface Props {
  users: User[];
}
const generateColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const ChartComponent: React.FC<Props> = ({ users }: Props) => {
  const nationalityData = users.reduce<{ [key: string]: number }>(
    (acc, user) => {
      const nationality = user.nat;
      acc[nationality] = (acc[nationality] || 0) + 1;
      return acc;
    },
    {}
  );
  const nationalityColors = Object.keys(nationalityData).map(generateColor);
  const barData = {
    labels: Object.keys(nationalityData),
    datasets: [
      {
        label: 'Número de Usuários',
        data: Object.values(nationalityData),
        backgroundColor: nationalityColors,
        borderColor: nationalityColors,
        borderWidth: 1
      }
    ]
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="w-full min-w-[200px]">
      <h2 className="text-center">
        Gráfico de Barras - Distribuição por Nacionalidade
      </h2>
      <Bar data={barData} options={options} />
    </div>
  );
};

export default ChartComponent;
