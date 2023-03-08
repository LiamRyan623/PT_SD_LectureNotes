class Location {
    constructor(name, description) {
        this.name = name,
        this.desc = description
    }
    // your code here
  
  }
  
  

  
  // Create three objects from Location
  let home = new Location(
    "home",
    "Your house",
  )
  let sidewalk = new Location(
    "sidewalk",
    "the sidewalk"
  )
  let store = new Location(
    "store",
    "the store",
  )

  let locationCurrent = home
  // Build out lookup table
  let locationLookUp = {
    "home": home,
    "sidewalk": sidewalk,
    "store": store,
  
  };
  
  // Build out a location state machine
  let locationStates = {
    home: ["sidewalk"],
    sidewalk: ["home", "store"],
    store: ["sidewalk"]
  
  };

  // Write message to user on the starting location
  console.log(`\nYou are at ${locationCurrent.name}`);  
  // Build out moveLocation function to move between locations
  function moveLocation(newLocation) {
    // You code goes here:
    
      let validTransitions = locationStates[locationCurrent];

    console.log(`\nYou are at ${locationCurrent.name}`);    

    
    if (validTransitions.includes(newLocation)) {
        // Allow our state to change if true to next state
        locationCurrent = newLocation;
        console.log(` you're at ${locationLookUp[locationCurrent].desc}`)
    } else {
        //Have a message if state is not available.
        //console.log("Invalid State.")
        // use throw to stope, state, and define an error
        throw `You can not go from ${locationCurrent} to ${newLocation}`
    }
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
  