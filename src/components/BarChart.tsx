import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
    data: ChartData<'bar'>;
    options?: ChartOptions<'bar'>;
  }

const BarChart : React.FC<BarChartProps> = ({ data, options })=>{





    return <Bar options={options} data={data} />
}


export default BarChart