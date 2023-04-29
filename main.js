import Chart from 'chart.js/auto';
// import './style.css'
import * as Utils from './utils.js'

// const DATA_COUNT = 5;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {
  labels: ['Galaxy', 'Dairy Milk', 'Crunchie', 'Mars', 'Snickers'],
  datasets: [{
    data: [30, 40, 15, 5, 10],
    backgroundColor: Object.values(Utils.CHART_COLORS),
    borderColor: 'rgb(220,220,220)',
    hoverOffset: 4,
    hoverBackgroundColor: 'rgb(255,255,255)',

  }]
};

const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Favourite chocolate bar?',
      }
    }
  },
};

new Chart(document.getElementById("myChart"), config);



