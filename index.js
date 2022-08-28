var boxTextOne = document.getElementById('boxTextOne');
var one = false;
var two = false;
var toggle = true;
const textOneInfo = "Climate change is a change in the usual weather found in a place. This could be a change in how much rain a place usually gets in a year. Or it could be a change in a place's usual temperature for a month or season. Climate change is also a change in Earth's climate. This could be a change in Earth's usual temperature. Or it could be a change in where rain and snow usually fall on Earth.Weather can change in just a few hours. Climate takes hundreds or even millions of years to change."
document.getElementById("one").onclick = function() {
  if (boxTextOne.innerHTML === "What is climate change?") {
    boxTextOne.innerHTML = textOneInfo;
    changeSize('one');
  } else {
    boxTextOne.innerHTML = "What is climate change?";
    changeSize('one');
  }
};

var boxTextTwo = document.getElementById('boxTextTwo');
const textTwoInfo = "The consequences of ongoing climate change brought on by people include those on the environment, ecosystems, and human society. The future impacts of climate change will depend on how much governments cut greenhouse gas emissions and adapt to it. Sea ice loss, fast sea level rise, and longer, more intense heat waves have already begun to have an impact. It is projected that not all areas of the Earth would experience the same climate changes. Particularly, land areas change more quickly than marine regions do, and northern high latitudes change more quickly than tropical places. Melting glaciers, changing precipitation and evaporation cycles, and altered hydrological cycle are the three main ways that global warming will affect regional climate."
document.getElementById("two").onclick = function() {
  if (boxTextTwo.innerHTML === "The effects") {
    boxTextTwo.innerHTML = textTwoInfo;
    changeSize('two');
  } else {
    boxTextTwo.innerHTML = "The effects";
    changeSize('two');
  }
};

document.getElementById('buttonSubmit').onclick = function() {
  var totalValue = 0;
  for (var i = 1; i <= 5; i++) {

    var input = document.getElementsByName('question' + i);//gets all inputs

    if (input[0].checked) {//if a is checked
      totalValue++;
    } else if (input[1].checked) {//if b is checked
      totalValue = totalValue + 2;
    } else if (input[2].checked) {//if c is checked
      totalValue = totalValue + 3;
    } else {
      totalValue = 100;
      console.log(totalValue);
      console.log(input[0].checked);
    }

  }


  if (totalValue < 7) {
    document.getElementById('results').scrollIntoView();
    document.getElementById('results').innerHTML = `You are doing you're part! From our results it seems you are doing a good job mainting our planets health, however there may be more you can do! If you would like to further help our planet consider following some of <a href="https://cotap.org/reduce-carbon-footprint/" target='_blank' style="color: #b5c8ff;">these</a> guides. Although you may think the changes you are making are small, if enough people do them collectively the result may be drastic!`;
    document.getElementById('results').style.display = 'block';
  } else if (totalValue < 10) {
    document.getElementById('results').scrollIntoView();
    document.getElementById('results').innerHTML = `You could be doing better! From our results it seems you aren't causing alot of harm to the enviroment, but it takes more than that to save a planet! <a href="https://www.mass.gov/service-details/reduce-your-carbon-footprint-at-home" target='_blank' style="color: #b5c8ff;">Here</a> are some ways you could increase your involvment and help our planet more!`;
    document.getElementById('results').style.display = 'block';
  } else if (totalValue < 20) {
    document.getElementById('results').scrollIntoView();
    document.getElementById('results').innerHTML = `The way you are living is hurting our planet. It may be time you started changing the way you do things if you care about the place we all live. If you do want to change and help your planet, <a href="https://europa.eu/youth/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en" target="_blank" style="color: #b5c8ff;">heres</a> a first step.`;
    document.getElementById('results').style.display = 'block';
  } else {
    document.getElementById('results').scrollIntoView();
    document.getElementById('results').innerHTML = "You didn't answer a question. You must answer all questions to get a result";
    document.getElementById('results').style.display = 'block';
  }
}


var tchart = document.getElementById('tchart').getContext('2d');
document.getElementById('box3').onclick = function() {
  if (toggle) {
    toggle = false;
    document.getElementById('tchart').style.display = 'block';
    document.getElementById('chartInfo').style.display = 'block';
    document.getElementById('chartBorder').style.borderWidth = '10px';
    document.getElementById('chartBorder').style.backgroundColor = '#29293d';

  } else {
    toggle = true;
    document.getElementById('tchart').style.display = 'none';
    document.getElementById('chartInfo').style.display = 'none';
    document.getElementById('chartBorder').style.borderWidth = '0px';
    document.getElementById('chartBorder').style.backgroundColor = '#29293d00';
  }
}
var graph = new Chart(tchart, {
  type: 'line',
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Global Temperatures(1880-2021)',
        color: 'white',
        font: {
          size: 18,//title properties
        },

      },
      legend: {
        labels: {
          color: "white",//line label color
        }
      }

    },

    scales: {
      y: {
        ticks: {
          color: "white", //yaxis label properties
        }
      },
      x: {
        ticks: {
          color: "white", //xaxis label properties
        }
      }
    }

  },
  data: {
    labels: [1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889,
      1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899,
      1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909,
      1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919,
      1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929,
      1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939,
      1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949,
      1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
      1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
      1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
      1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
      1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
      1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
      2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
      2019, 2020, 2021],
    datasets: [{
      label: 'Temperature Anomaly in Celsius',
      color: 'blue',
      data: [
        -0.16, -0.08, -0.1,
        -0.17, -0.28, -0.33, -0.31, -0.36, -0.17, -0.1, -0.35, -0.22, -0.27,
        -0.31, -0.31, -0.23, -0.11, -0.1, -0.27, -0.18, -0.08, -0.16, -0.27,
        -0.36, -0.46, -0.26, -0.22, -0.38, -0.42, -0.48, -0.43, -0.44, -0.36,
        -0.35, -0.15, -0.14, -0.35, -0.46, -0.3, -0.27, -0.27, -0.18, -0.29,
        -0.27, -0.27, -0.22, -0.1, -0.22, -0.2, -0.36, -0.15, -0.09, -0.16,
        -0.28, -0.12, -0.19, -0.14, -0.02, 0, -0.01, 0.13, 0.19, 0.07,
        0.09, 0.21, 0.09, -0.07, -0.03, -0.11, -0.11, -0.17, -0.07, 0.01,
        0.08, -0.13, -0.14, -0.19, 0.05, 0.06, 0.03, -0.03, 0.06, 0.03,
        0.05, -0.2, -0.11, -0.06, -0.02, -0.08, 0.05, 0.02, -0.08, 0.01,
        0.16, -0.07, -0.01, -0.1, 0.18, 0.07, 0.16, 0.26, 0.32,
        0.14, 0.31, 0.16, 0.12, 0.18, 0.32, 0.39, 0.27, 0.45, 0.4,
        0.22, 0.23, 0.31, 0.45, 0.33, 0.46, 0.61, 0.38, 0.39, 0.53,
        0.62, 0.61, 0.53, 0.67, 0.63, 0.66, 0.54, 0.65, 0.72, 0.61,
        0.64, 0.67, 0.74, 0.9, 1.01, 0.92, 0.85, 0.97, 1.01, 0.84
      ],
      borderColor: 'white',
      backgroundColor: 'red',

    }],
  }
});

function changeSize(current) {
  if (current === 'one' && one === false) {//one is clicked and is title turning to text
    if (two) {//two is text
      document.getElementById('one').style.height = '400px';
      one = true;
    } else {//two is title
      document.getElementById('wrapper').style.height = '400px';
      document.getElementById('one').style.height = '400px';
      document.getElementById('two').style.height = '100px';
      one = true;
    }
  } else if (current === 'one' && one === true) {//one is clicked and is text turning to title
    if (two) {//two is text
      document.getElementById('one').style.height = '100px';
      one = false;
    } else {//two is title
      document.getElementById('wrapper').style.height = '100px';
      document.getElementById('one').style.height = '100px';
      document.getElementById('two').style.height = '100px';
      one = false;
    }
  } else if (current === 'two' && two === true) {//two is clicked and is text turning to title
    if (one) {//one is text
      document.getElementById('two').style.height = '100px';
      two = false;
    } else {//one is title
      document.getElementById('wrapper').style.height = '100px';
      document.getElementById('two').style.height = '100px';
      document.getElementById('one').style.height = '100px';
      two = false;
    }
  } else {//two is clicked and is title turning to text
    if (one) {//one is text
      document.getElementById('two').style.height = '400px';
      two = true;
    } else {//one is title
      document.getElementById('wrapper').style.height = '400px';
      document.getElementById('two').style.height = '400px';
      document.getElementById('one').style.height = '100px';
      two = true;
    }
  }

}

