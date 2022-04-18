// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2202-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
      //assign variable to the fetch object
      const response = await fetch(`${APIURL}/players`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
      });
      //assign variable to the response body
      const result = await response.json()
      //create catch/throw condition
      if (result.error) throw result.error
      //if successful
      return result.data.players
    } catch (err){
      console.error("Not successful!")
    }
  };
export const fetchSinglePlayer = async (playerId) => {
    try {
      //assign variable to fetch object for single player
      const response = await fetch(`${APIURL}/players/${playerId}`)
      //assign variable to the response body for single player
      const result = await response.json()
      console.log(result)
      //catch/throw
      if (result.error) throw result.error
      //if successful
      return result.data.player
    } catch (err){
      console.error("Can not fetch Player-ID")
    }
};

export const addNewPlayer = async (playerObj) => {
  try{
    const response = await fetch(`${APIURL}/players`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: playerObj.name,
        breed: playerObj.breed,
      })
    }
  );
  const result = await response.json();
  console.log(result)
  }catch (err){
    console.error(err);
  }
}
export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(
      `${APIURL}/players/${playerId}`,
      {
        method: 'DELETE',
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
