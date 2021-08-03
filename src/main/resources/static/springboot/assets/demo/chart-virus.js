// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("virusChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31",
    "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11", "4.12", "4.13", "4.14", "4.15", "4.16", "4.17", "4.18", "4.19", "4.20", "4.21", "4.22", "4.23", "4.24", "4.25", "4.26", "4.27", "4.28", "4.29", "4.30",
"5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10", "5.11", "5.12", "5.13", "5.14", "5.15", "5.16", "5.17", "5.18", "5.19", "5.20", "5.21", "5.22", "5.23", "5.24", "5.25", "5.26", "5.27", "5.28", "5.29", "5.30"],
    datasets: [{
      label: "누적확진자",
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 2,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      lineTension: 0.3,
      data: [4.5, 53.01, 203.31, 492.52, 927.63, 1490.01, 2144.32, 2847.5, 3556.03, 4230.84, 4840.22, 5361.02, 5778.65, 6086.3, 6283.72, 6375.81, 6371.25, 6281.22, 6118.24, 5895.37, 5625.44, 5320.55, 4991.76, 4648.85, 4300.26, 3953.04, 3612.94, 3284.47, 2971.03, 2675.07, 2398.17, 2141.22, 1904.53, 1687.94, 1490.94, 1312.75, 1152.38, 1008.72, 880.59, 766.77, 666.03, 577.19, 499.09, 430.65, 370.84, 318.73, 273.44, 234.17, 200.2, 170.88, 145.62, 123.92, 105.29, 89.34, 75.71, 64.07, 54.16, 45.72, 38.56, 32.48, 27.32, 22.97, 19.28, 16.18, 13.56, 11.35, 9.5, 7.94, 6.63, 5.53, 4.61, 3.84, 3.2, 2.66, 2.21, 1.84, 1.52, 1.26, 1.05, 0.87, 0.72, 0.6, 0.49, 0.41, 0.34, 0.28, 0.23, 0.19, 0.16, 0.13, 0.11]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'day'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
