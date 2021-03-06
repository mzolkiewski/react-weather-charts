import moment from 'moment';

let weatherData = {
   "city":{
      "id":707860,
      "name":"Hurzuf",
      "country":"UA",
      "coord":{
         "lon":34.283333,
         "lat":44.549999
      }
   },
   "time":1394864756,
   "data":[
      {
         "dt":1394874000,
         "temp":{
            "day":290.09,
            "min":280.14,
            "max":290.09,
            "night":280.14,
            "eve":287.01,
            "morn":280.15
         },
         "pressure":994.57,
         "humidity":73,
         "weather":[
            {
               "id":800,
               "main":"Clear",
               "description":"sky is clear",
               "icon":"01d"
            }
         ],
         "speed":5.21,
         "deg":230,
         "clouds":0
      },
      {
         "dt":1394960400,
         "temp":{
            "day":280.23,
            "min":277.08,
            "max":282.84,
            "night":277.08,
            "eve":279.45,
            "morn":281.18
         },
         "pressure":981.46,
         "humidity":93,
         "weather":[
            {
               "id":804,
               "main":"Clouds",
               "description":"overcast clouds",
               "icon":"04d"
            }
         ],
         "speed":5.06,
         "deg":289,
         "clouds":88
      },
      {
         "dt":1395046800,
         "temp":{
            "day":273.77,
            "min":272.57,
            "max":275.85,
            "night":272.57,
            "eve":274.77,
            "morn":275.85
         },
         "pressure":981.92,
         "humidity":93,
         "weather":[
            {
               "id":601,
               "main":"Snow",
               "description":"snow",
               "icon":"13d"
            }
         ],
         "speed":9.63,
         "deg":297,
         "clouds":88,
         "rain":6,
         "snow":3
      },
      {
         "dt":1395133200,
         "temp":{
            "day":283.7,
            "min":278.18,
            "max":284.85,
            "night":279.5,
            "eve":282.81,
            "morn":278.18
         },
         "pressure":993.76,
         "humidity":94,
         "weather":[
            {
               "id":802,
               "main":"Clouds",
               "description":"scattered clouds",
               "icon":"03d"
            }
         ],
         "speed":6.16,
         "deg":243,
         "clouds":48
      },
      {
         "dt":1395219600,
         "temp":{
            "day":287.73,
            "min":279.58,
            "max":289.05,
            "night":281.1,
            "eve":286.61,
            "morn":279.58
         },
         "pressure":995.07,
         "humidity":82,
         "weather":[
            {
               "id":800,
               "main":"Clear",
               "description":"sky is clear",
               "icon":"01d"
            }
         ],
         "speed":2.4,
         "deg":241,
         "clouds":0
      },
      {
         "dt":1395306000,
         "temp":{
            "day":287.64,
            "min":282.66,
            "max":287.64,
            "night":282.66,
            "eve":283.59,
            "morn":284.64
         },
         "pressure":1012.82,
         "humidity":0,
         "weather":[
            {
               "id":800,
               "main":"Clear",
               "description":"sky is clear",
               "icon":"01d"
            }
         ],
         "speed":5.77,
         "deg":226,
         "clouds":6
      },
      {
         "dt":1395392400,
         "temp":{
            "day":286.18,
            "min":283.36,
            "max":286.18,
            "night":283.36,
            "eve":284.26,
            "morn":284.41
         },
         "pressure":998.41,
         "humidity":0,
         "weather":[
            {
               "id":501,
               "main":"Rain",
               "description":"moderate rain",
               "icon":"10d"
            }
         ],
         "speed":11.07,
         "deg":226,
         "clouds":87,
         "rain":3.03
      },
      {
         "dt":1395478800,
         "temp":{
            "day":285.06,
            "min":276.39,
            "max":285.06,
            "night":276.39,
            "eve":280.37,
            "morn":283.21
         },
         "pressure":1001.51,
         "humidity":0,
         "weather":[
            {
               "id":500,
               "main":"Rain",
               "description":"light rain",
               "icon":"10d"
            }
         ],
         "speed":8.19,
         "deg":286,
         "clouds":6,
         "rain":2.03
      },
      {
         "dt":1395565200,
         "temp":{
            "day":287.2,
            "min":280.71,
            "max":287.2,
            "night":282.33,
            "eve":283.97,
            "morn":280.71
         },
         "pressure":1012.44,
         "humidity":0,
         "weather":[
            {
               "id":500,
               "main":"Rain",
               "description":"light rain",
               "icon":"10d"
            }
         ],
         "speed":4.13,
         "deg":189,
         "clouds":67,
         "rain":2.59
      },
      {
         "dt":1395651600,
         "temp":{
            "day":279.79,
            "min":276.93,
            "max":281.13,
            "night":276.93,
            "eve":278.05,
            "morn":281.13
         },
         "pressure":1011.7,
         "humidity":0,
         "weather":[
            {
               "id":502,
               "main":"Rain",
               "description":"heavy intensity rain",
               "icon":"10d"
            }
         ],
         "speed":5.94,
         "deg":78,
         "clouds":100,
         "rain":16.25
      },
      {
         "dt":1395738000,
         "temp":{
            "day":276.38,
            "min":272.76,
            "max":276.38,
            "night":272.76,
            "eve":275.51,
            "morn":275.96
         },
         "pressure":1008.58,
         "humidity":0,
         "weather":[
            {
               "id":600,
               "main":"Snow",
               "description":"light snow",
               "icon":"13d"
            }
         ],
         "speed":7.02,
         "deg":24,
         "clouds":100,
         "rain":11.4,
         "snow":0.73
      },
      {
         "dt":1395824400,
         "temp":{
            "day":279.72,
            "min":275.47,
            "max":279.72,
            "night":275.47,
            "eve":276.19,
            "morn":277.62
         },
         "pressure":1015.74,
         "humidity":0,
         "weather":[
            {
               "id":500,
               "main":"Rain",
               "description":"light rain",
               "icon":"10d"
            }
         ],
         "speed":4.54,
         "deg":234,
         "clouds":48,
         "rain":2.43
      },
      {
         "dt":1395910800,
         "temp":{
            "day":283.5,
            "min":277.14,
            "max":283.5,
            "night":277.14,
            "eve":279.2,
            "morn":278.52
         },
         "pressure":1013.91,
         "humidity":0,
         "weather":[
            {
               "id":800,
               "main":"Clear",
               "description":"sky is clear",
               "icon":"01d"
            }
         ],
         "speed":3.56,
         "deg":151,
         "clouds":1
      },
      {
         "dt":1395997200,
         "temp":{
            "day":286.81,
            "min":276.25,
            "max":286.81,
            "night":276.25,
            "eve":281.31,
            "morn":279.89
         },
         "pressure":1014.77,
         "humidity":0,
         "weather":[
            {
               "id":800,
               "main":"Clear",
               "description":"sky is clear",
               "icon":"01d"
            }
         ],
         "speed":3.67,
         "deg":85,
         "clouds":0
      },
      {
         "dt":1396083600,
         "temp":{
            "day":288.65,
            "min":278.79,
            "max":288.65,
            "night":278.79,
            "eve":282.21,
            "morn":280.39
         },
         "pressure":1020.57,
         "humidity":0,
         "weather":[
            {
               "id":800,
               "main":"Clear",
               "description":"sky is clear",
               "icon":"01d"
            }
         ],
         "speed":2.33,
         "deg":185,
         "clouds":0
      },
      {
         "dt":1396170000,
         "temp":{
            "day":278.79,
            "min":278.79,
            "max":278.79,
            "night":278.79,
            "eve":278.79,
            "morn":278.79
         },
         "pressure":1020,
         "humidity":0,
         "weather":[
            {
               "id":800,
               "main":"Clear",
               "description":"sky is clear",
               "icon":"01ddd"
            }
         ],
         "speed":2.28,
         "deg":124,
         "clouds":6
      }
   ]
};

/////////////////////////////////////

const config = {
    title: {
        text: 'Daily Average Temperature',
        x: -20 //center
    },
    xAxis: {
        categories: getXAxis()
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [getDataSeries()]
};


function getXAxis() {
    return weatherData.data.map((elem) => {
        return moment(new Date(elem.dt * 1000)).format('DD-MM-YYYY');
    });
}

function getDataSeries() {
    return {
        name: getCityName(),
        data: getAvgTempData()
    };
}

function getCityName() {
    return weatherData.city.name;
}

function getAvgTempData() {
    return weatherData.data.map((elem) => {
        return kelvinToCelsius(elem.temp.day);
    });
}

function kelvinToCelsius(k) {
    return +((k - 274.15).toFixed(2));
}

export default config;
