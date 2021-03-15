// FOR EACH, MAP, & FILTER (Array methods that require a function for an argument)

// FOR EACH
const seinfeld = [
    `Jerry`,
    `George`,
    `Elaine`,
    `Kramer`
  ];
  
  // Example
  function names(n){
    console.log(n);
  }
  seinfeld.forEach(names);
  
  console.log("========");
  
  // MAP
  const seinfeldEpisodes = [
    {episodeName: `The Old Man`},
    {episodeName: `The Chinese Restaurant`},
    {episodeName: `The Phone Messsage`},
    {episodeName: `The Soup Nazi`},
    {episodeName: `The Strike`}
  ];
  
  // Example (Using Arrow Function)
  showEpisode = episode => episode.episodeName;
  const greatEpisodes = seinfeldEpisodes.map(showEpisode);
  console.log(greatEpisodes);
  
  console.log("=======");
  
  // FILTER
  const customers = [`Jerry`, `George`, `Eliane`];
  const soup = function(name){
    return 5 === 6;
  }
  const x = customers.filter(soup);
  console.log(x);
  