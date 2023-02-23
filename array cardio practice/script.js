
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  const fifteen = inventors.filter(function(invent){
    if(invent.year >= 1500 && invent.year < 1600){
        return true;
    }
  });

  console.table(fifteen);

  // ! map
  const fullNames = inventors.map(function(inventor){
    return inventor.first + inventor.last;
  }) 

  console.log(fullNames);

  // ! sort
  const ordered = inventors.sort(function(a,b){
    if(a.year > b.year){
        return 1
    }else{
        return -1
    }
  });

  console.table(ordered);

  // ! filter: 
  const fifteen2 = inventors.filter(
    function(inventor){
      if(inventor.year >= 1500 && inventor.year < 1600){
        return true;
      }
    }
  )
  console.table(fifteen2);

  //! ruduce
  //* how many years all the inventors lives

  var totalYears = 0;
  for(var i = 0; i<inventors.length;i++){
    totalYears +=inventors[i].year
  }

  console.log(totalYears);

  //* reduce
  const reduce = inventors.reduce(function(total,value,index,array){
    return total + (value.passed - value.year);
  },0)

  console.log(reduce);
  
  
  //! sort the inventors by years lived
  const oldest  = inventors.sort(function(a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 :1;
  })
  console.table(oldest);

  // ! create a list of boulevards in paris that contain 'de' anywhere in the name 

  //! sort exesize
  const alpha = people.sort(function(lastone,nextone){
    const [alast,afirst] = lastone.split(', ');
    const [blast,bfirst] = nextone.split(', ');
    return alast > blast ? 1 : -1;
  })

  console.log(alpha);

  //! reduce execise
  // sum up the instances of each of textEmphasisStyle: 
  const data = ['car','car','truck','truck','bike','walk','car','van','bike'];

  const transpotation = data.reduce(function(obj,item){
    if(!obj[item]){
      obj[item] = 0;
    }
    obj[item]++;
    console.log(item);
    return obj
  },{})