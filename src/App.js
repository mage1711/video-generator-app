import { Fragment, useState, useEffect } from 'react'
import axios from 'axios';


function App() {
  useEffect( () => {
    console.log(list)
    generateVideo()
 },[list]);
  const [list,setList] = useState()
  const [url, seturl] = useState('')
  const [videoUrl, setvideoUrl] = useState('')
  const [loading,setLoading] = useState(false)
  const [buttonText,setButtonText] = useState('Generate')
  const demo1 = "https://www.metacritic.com/browse/games/score/metascore/year/ps5/filtered?view=condensed"
  const demo2 = "https://www.metacritic.com/browse/games/score/metascore/year/xbox-series-x/filtered?view=condensed"

useEffect( () => {
  console.log(videoUrl)
  setLoading(false)
},[videoUrl]);

const generateVideo = async()=>{
  setButtonText("generating video")

  try {
   
    const res = await axios.post('https://video-editor-go-server-qyx5x.ondigitalocean.app/generate', list)
    console.log("this is the list ",list)
    // const res = await axios.post('http://localhost:8080/generate', list)

    console.log(res.data)
    setvideoUrl(res.data)
    setButtonText("Done")
  } catch (err) {
    setButtonText("Failed")
    setLoading(false)
    console.error(err)

  }

}
const fetchList = async() =>{
  console.log(url)
  if (url.length > 0) {
    console.log("sending")
  setLoading(true)
  setButtonText("scraping list")
      try {
        const res = await axios.post('https://flask-scrapers.herokuapp.com/scrap', {
       url
        })
        console.log(res)
        console.log(res.data)
        setList(res.data)

      } catch (err) {
        setButtonText("Failed")
        setLoading(false)
          console.error(err)
      }
    }
  else {
    setButtonText("empty field")
  }
}
  const submitForm = async (event) => {
    event.preventDefault()
    console.log(event.type)
   fetchList()

}

const handleDemo1 =  async (e) => {
  console.log("demo 1")
  seturl(demo1)
  fetchList()
}


const handleDemo2 = async (e) => {
  console.log("demo 2")
  seturl(demo2)
  fetchList()
}

  return (
    <div className="App">
<div class="h-screen bg-green-900 flex justify-center items-center">
  <form onSubmit={submitForm} class="w-full max-w-screen-sm bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" >
    <label class="text-gray-700 font-bold py-2" for="link">Link</label>
    <input  value= {url} onChange={(e) => seturl(e.target.value)} class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-2 px-3 mb-3" type="text" placeholder="Link" />
    <div class="flex justify-center items-center my-4 space-x-4">
     { loading ?(<button class="bg-green-500 hover:bg-green-700 text-white content-center font-bold rounded py-2 px-4 cursor-not-allowed " type='submit' disabled = {loading} >
      <svg class="animate-spin  h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
   {buttonText}
      </button>):(
        <Fragment>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 " type='submit' disabled = {loading} >
     {buttonText}
        </button>
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded py-2 px-4" onClick={handleDemo1} type="button"  disabled = {loading} >
               Demo 1
                   </button>
                           <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded py-2 px-4 " onClick={handleDemo2} type="button" disabled = {loading} >
                         Demo 2
                        </button>
                              </Fragment>
      )}
    </div>
    <video width="750" height="500" controls src={videoUrl} >
</video>
  </form>

</div>

    </div>
  );
}

export default App;
