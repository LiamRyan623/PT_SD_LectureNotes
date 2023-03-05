class Location {
    constructor(name, description) {
        this.name = name,
        this.desc = description
    }
    // your code here
  
  }
  
  // Create three objects from Location
  
  
  // Build out lookup table
  let locationLookUp = {
    home: "home",
    sidewalk: "sidewalk",
    store: "sidewalk",
    park: "park",
  
  };
  
  // Build out a location state machine
  let locationStates = {
  
  };
  
  // Write message to user on the starting location
  
  // Build out moveLocation function to move between locations
  function moveLocation(newLocation) {
    // You code goes here:
  
  }
  
  moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
  moveLocation("store");
  // Prints 'You are in the store.'
  moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
  moveLocation("home");
  // Prints 'You are at your house.'
  
  moveLocation("park");
  // Prints 'You cannot go from sidewalk to park.'
  