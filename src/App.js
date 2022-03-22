import { useEffect, useState } from "react"
import "./App.css";

function App() {
  const [catImage, setCatImage] = useState("")
  let handleFetch = async () => {
    
    let response = await fetch("https://aws.random.cat/meow?ref=apilist.fun")
    let data = await response.json()
    setCatImage(data.file)
  } 
  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div class="container">
      <img src={catImage} width={720} height={720} />
      <button onClick={handleFetch}>a random cat</button>
    </div>
  );
}

export default App;


// import { useEffect, useState } from "react"

// function App() {
//   const [catFact, setCatFact] = useState("")
//   let handleFetch = async () => {
    
//     let response = await fetch("https://meowfacts.herokuapp.com/")
//     let data = await response.json()
//     setCatFact(data.data)
//   } 
//   useEffect(() => {
//     handleFetch()
//   }, [])

//   return (
//     <div>
//       <h1>Random Cat Facts</h1>
//       <h2>{catFact}</h2>
//       <button onClick={handleFetch}>Fetch</button>
//     </div>
//   );
// }

// export default App;