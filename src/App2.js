import { useEffect, useState } from "react"

function App() {
  const [advice, setAdvice] = useState("")
  const [error, setError] = useState({
    error:false,
    message: ""
  })
  let handleFetch = async () => {
    try {
    let response = await fetch("https://api.adviceslip.com/advice")
    if (response.status !== 200) {
      throw new Error("oops")
    }
    let data = await response.json()
    setAdvice(data.slip)
  } catch (error) {
    console.log("error: ", error)
    setError({ error: true, message: error.message })
  }
  }
  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div>
      <h1>hi</h1>
      <h2>{advice.advice}</h2>
      <button onClick={handleFetch}>Fetch</button>
    </div>
  );
}

export default App;
