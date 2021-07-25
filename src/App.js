import { FormEvent, useState } from 'react'
import axios from 'axios';
import result from 'autoprefixer/data/prefixes';

function App() {
  const [url, seturl] = useState('')
  const [videoUrl, setvideoUrl] = useState('')
  
  const submitForm = async (event) => {
    event.preventDefault()
    console.log("sending")
console.log(url)
    try {
      const res = await axios.post('https://flask-scrapers.herokuapp.com/scrap', {
     url
      })
      console.log(res)
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="App">
<div class="h-screen bg-green-900 flex justify-center items-center">
  <form onSubmit={submitForm} class="w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" >
    <label class="text-gray-700 font-bold py-2" for="link">Link</label>
    <input  value= {url} onChange={(e) => seturl(e.target.value)} class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-2 px-3 mb-3" type="text" placeholder="Link" />
    <div class="flex justify-center items-center my-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4" type='submit'>
        Generate
      </button>
    </div>
    
  </form>
</div>

    </div>
  );
}

export default App;
