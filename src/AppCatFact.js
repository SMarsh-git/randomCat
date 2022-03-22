import { useEffect, useState } from "react"

function App() {
  const [catFact, setCatFact] = useState("")
  let handleFetch = async () => {
    
    let response = await fetch("https://meowfacts.herokuapp.com/")
    let data = await response.json()
    setCatFact(data.data)
  } 
  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div>
      <h1>Random Cat Facts</h1>
      <h2>{catFact}</h2>
      <button onClick={handleFetch}>Fetch</button>
    </div>
  );
}

export default App;
