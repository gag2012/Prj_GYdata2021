// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

const wave = {
  labels: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31",
    "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11", "4.12", "4.13", "4.14", "4.15", "4.16", "4.17", "4.18", "4.19", "4.20", "4.21", "4.22", "4.23", "4.24", "4.25", "4.26", "4.27", "4.28", "4.29", "4.30",
    "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10", "5.11", "5.12", "5.13", "5.14", "5.15", "5.16", "5.17", "5.18", "5.19", "5.20", "5.21", "5.22", "5.23", "5.24", "5.25", "5.26", "5.27", "5.28", "5.29"],
    datasets: [{
      label: "누적확진자(예측)",
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
      data: [4.5, 53.01, 203.31, 492.52, 927.63, 1490.01, 2144.32, 2847.5, 3556.03, 4230.84, 4840.22, 5361.02, 5778.65, 6086.3, 6283.72, 6375.81, 6371.25, 6281.22, 6118.24, 5895.37, 5625.44, 5320.55, 4991.76, 4648.85, 4300.26, 3953.04, 3612.94, 3284.47, 2971.03, 2675.07, 2398.17, 2141.22, 1904.53, 1687.94, 1490.94, 1312.75, 1152.38, 1008.72, 880.59, 766.77, 666.03, 577.19, 499.09, 430.65, 370.84, 318.73, 273.44, 234.17, 200.2, 170.88, 145.62, 123.92, 105.29, 89.34, 75.71, 64.07, 54.16, 45.72, 38.56, 32.48, 27.32, 22.97, 19.28, 16.18, 13.56, 11.35, 9.5, 7.94, 6.63, 5.53, 4.61, 3.84, 3.2, 2.66, 2.21, 1.84, 1.52, 1.26, 1.05, 0.87, 0.72, 0.6, 0.49, 0.41, 0.34, 0.28, 0.23, 0.19, 0.16, 0.13],
    }, {
      label: "누적확진자(실제)",
      data: [1, 4, 4, 5, 8, 12, 13, 13, 14, 16, 17, 17, 16, 13, 13, 13, 11, 8, 7, 80, 179, 406, 574, 805, 949, 1233, 1738, 2308, 3120, 3705, 4304, 5082, 5417, 5655, 5991, 6208, 6337, 6217, 5747, 5418, 4719, 4243, 3751, 2976, 2615, 2232, 1820, 1524, 1338, 1321, 1448, 1206, 1168, 1158, 1155, 1170, 1242, 1263, 1248, 1221, 1235, 1177, 1101, 1195, 1200, 1147, 1090, 1052, 945, 867, 819, 726, 650, 588, 529, 457, 398, 369, 330, 290, 260, 244, 228, 206, 191, 174, 161, 148, 130, 121],
      type: 'line',
    }]
};

const wave2 = {
  labels: ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7", "7.8", "7.9", "7.10", "7.11", "7.12", "7.13", "7.14", "7.15", "7.16", "7.17", "7.18", "7.19", "7.20", "7.21", "7.22", "7.23", "7.24", "7.25", "7.26", "7.27", "7.28", "7.29", "7.30", "7.31",
    "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8", "8.9", "8.10", "8.11", "8.12", "8.13", "8.14", "8.15", "8.16", "8.17", "8.18", "8.19", "8.20", "8.21", "8.22", "8.23", "8.24", "8.25", "8.26", "8.27", "8.28", "8.29", "8.30", "8.31",
    "9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7", "9.8", "9.9", "9.10", "9.11", "9.12", "9.13", "9.14", "9.15", "9.16", "9.17", "9.18", "9.19", "9.20", "9.21", "9.22", "9.23", "9.24", "9.25", "9.26", "9.27", "9.28", "9.29", "9.30"],
    datasets: [{
      label: "누적확진자(예측)",
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
      data: [4.43, 51.26, 193.29, 460.42, 852.68, 1346.74, 1905.75, 2488.42, 3055.68, 3574.79, 4021.35, 4379.62, 4641.92, 4807.37, 4880.37, 4869.16, 4784.39, 4637.97, 4442.15, 4208.82, 3949.0, 3672.57, 3388.05, 3102.59, 2821.99, 2550.79, 2292.38, 2049.15, 1822.63, 1613.65, 1422.44, 1248.82, 1092.21, 951.83, 826.7, 715.73, 617.8, 531.75, 456.45, 390.81, 333.79, 284.43, 241.84, 205.19, 173.74, 146.83, 123.86, 104.3, 87.68, 73.59, 61.66, 51.6, 43.11, 35.97, 29.97, 24.94, 20.73, 17.21, 14.27, 11.82, 9.78, 8.08, 6.67, 5.5, 4.53, 3.73, 3.07, 2.52, 2.07, 1.7, 1.39, 1.14, 0.93, 0.76, 0.62, 0.51, 0.42, 0.34, 0.28, 0.23, 0.18, 0.15, 0.12, 0.1, 0.08, 0.07, 0.05, 0.04, 0.03, 0.03, 0.02],
    }, {
      label: "누적확진자(실제)",
      data: [54, 117, 180, 241, 287, 331, 394, 443, 488, 523, 567, 629, 608, 584, 582, 581, 574, 564, 527, 523, 541, 565, 562, 613, 638, 624, 591, 579, 558, 560, 565, 550, 510, 485, 477, 407, 369, 387, 395, 375, 391, 409, 434, 507, 650, 895, 1059, 1262, 1539, 1784, 2072, 2376, 2739, 2951, 3175, 3392, 3667, 3759, 3885, 3938, 3889, 3836, 3779, 3642, 3443, 3345, 3232, 3031, 2726, 2511, 2343, 2220, 2108, 1994, 1836, 1747, 1662, 1647, 1606, 1597, 1543, 1457, 1363, 1297, 1286, 1279, 1231, 1220, 1157, 1042],
      type: 'line',
    }]
};

const wave3 = {
  labels: ["11.1", "11.2", "11.3", "11.4", "11.5", "11.6", "11.7", "11.8", "11.9", "11.10", "11.11", "11.12", "11.13", "11.14", "11.15", "11.16", "11.17", "11.18", "11.19", "11.20", "11.21", "11.22", "11.23", "11.24", "11.25", "11.26", "11.27", "11.28", "11.29", "11.30",
        "12.1", "12.2", "12.3", "12.4", "12.5", "12.6", "12.7", "12.8", "12.9", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "12.18", "12.19", "12.20", "12.21", "12.22", "12.23", "12.24", "12.25", "12.26", "12.27", "12.28", "12.29", "12.30", "12.31",
        "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10", "1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26", "1.27", "1.28", "1.29", "1.30", "1.31"],
    datasets: [{
      label: "누적확진자(예측)",
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
      data: [4.7, 57.77, 231.25, 584.79, 1149.74, 1927.79, 2896.03, 4014.43, 5233.23, 6499.44, 7761.74, 8974.0, 10097.41, 11101.51, 11964.38, 12672.26, 13218.69, 13603.55, 13831.85, 13912.65, 13857.97, 13681.84, 13399.43, 13026.37, 12578.16, 12069.77, 11515.25, 10927.54, 10318.35, 9698.01, 9075.53, 8458.59, 7853.6, 7265.81, 6699.36, 6157.43, 5642.32, 5155.6, 4698.15, 4270.32, 3872.0, 3502.69, 3161.61, 2847.73, 2559.84, 2296.64, 2056.69, 1838.57, 1640.8, 1461.93, 1300.52, 1155.21, 1024.65, 907.58, 802.82, 709.23, 625.77, 551.48, 485.44, 426.83, 374.89, 328.92, 288.3, 252.45, 220.84, 193.02, 168.54, 147.05, 128.18, 111.65, 97.17, 84.5, 73.43, 63.77, 55.33, 47.98, 41.58, 36.0, 31.16, 26.95, 23.29, 20.12, 17.37, 14.99, 12.93, 11.14, 9.6, 8.26, 7.11, 6.12, 5.26, 4.52],
    }, {
      label: "누적확진자(실제)",
      data: [97, 172, 290, 415, 560, 649, 792, 918, 1018, 1164, 1307, 1498, 1606, 1739, 1844, 1948, 2116, 2370, 2590, 2850, 3080, 3205, 3411, 3602, 3980, 4341, 4606, 4826, 4890, 4998, 5146, 5300, 5599, 5911, 6193, 6426, 6437, 6545, 6723, 6962, 7535, 8114, 8321, 8661, 9110, 9538, 9969, 10409, 10910, 11159, 11362, 11764, 11797, 12004, 12418, 12508, 12238, 12272, 12258, 12170, 12104, 12002, 11784, 11714, 11446, 11048, 10784, 10486, 10319, 9939, 9341, 8911, 8443, 8135, 7997, 7556, 7361, 6911, 6429, 6160, 5919, 5598, 5578, 5433, 5309, 5147, 5188, 5106, 5055, 5121, 5090],
      type: 'line',
    }]
};

var ctx = document.getElementById("virusChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: wave,
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


function btn_wave1_click(){
    //var ctx = document.getElementById("virusChart");
    myLineChart = new Chart(ctx, {
      type: 'line',
      data: wave,
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
}

function btn_wave2_click(){
    //var ctx = document.getElementById("virusChart");
    myLineChart = new Chart(ctx, {
      type: 'line',
      data: wave2,
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
}

function btn_wave3_click(){
    //var ctx = document.getElementById("virusChart");
    myLineChart3 = new Chart(ctx, {
      type: 'line',
      data: wave3,
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
              max: 15000,
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
}

function btn_wave4_click(){
  alert('준비중입니다.');
}

function gclear(){
  myLineChart.update();
  myLineChart.destroy();
}