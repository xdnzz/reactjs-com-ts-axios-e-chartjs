import * as C from '../pages/home/style';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Country } from '../tipagems';

type Props = {
    countries: Country[];

}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false
    },
    title: {
      display: false,
    },
  },

};

const BarChart = ({countries}:Props) => {

    const gerarDados = () =>{
        const data: number[] = [];
        const labels: string[] = [];
        countries.forEach((country) => {
            data.push(country.NewConfirmed);
            labels.push(country.Country)
        })

        return {
            labels,
                datasets: [
                    {
                    label:'',
                    data,
                    backgroundColor: ['#720972', '#4e0d4e','#8a1a8a', '#754375',],
                    },
    
  ],

        }

    }

    return  <C.ChartWrapper>
                   <Bar data={gerarDados()} options={options}/>
             </C.ChartWrapper>
}

export default BarChart;