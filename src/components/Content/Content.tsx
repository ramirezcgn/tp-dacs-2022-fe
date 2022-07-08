import React from 'react';
import styles from 'styles/global.module.css';
import { Doughnut } from 'react-chartjs-2';

//data for bar chart
const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Sales/ month',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
    },
  ],
};

//doughnut chart data set

const data1 = {
  labels: ['Disponibles', 'Reservados', 'Vendidos'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#61fc58', '#FFCE56', '#cf0c02'],
      hoverBackgroundColor: ['#61fc58', '#FFCE56', '#cf0c02'],
    },
  ],
};

function Content() {
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Ej1</h2>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Ej2</h2>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Ej3</h2>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Ej4</h2>
          </div>
        </div>
      </div>
      {/* chart started  */}
      <div className={styles.charts}>
        <div className={styles.circle}>
          <h2>Estadistica de paquetes</h2>
          <Doughnut data={data1} width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Content;
