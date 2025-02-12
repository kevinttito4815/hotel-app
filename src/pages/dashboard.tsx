import DefaultLayout from "@/layouts/default";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'YAPE',
    'EFECTIVO',
    'PLIN'
  ],
  datasets: [{
    label: 'Dinero',
    data: [500, 50, 100],
    backgroundColor: [
      'rgb(127, 106, 204)',
      'rgb(54, 162, 235)',
      'rgb(86, 255, 137)'
    ],
    hoverOffset: 4
  }]
};

export default function Dashboard() {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-center mb-4">Trafico de dinero</h1>
          <Pie data={data} />
        </div>
      </div>
    </DefaultLayout>
  );
}
