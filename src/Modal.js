import { useState } from 'react'

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const url = "https://www.metacritic.com/"
  return (
    <>
      <button
        class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        How it works
      </button>
      {showModal ? (
        <>
          <div
            class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div class="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 class="text-3xl font-semibold">
                    How it works
                  </h3>
                  <button
                    class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div class="relative flex-auto p-6">
                  <ol class="list-decimal m-1 space-y-1">
                   <li>Go to <a target="_blank" href={url} rel="noopener noreferrer"> {url} </a> </li> 
                   <li>Navigate to any list of </li> 
                   <li>Make view condensed</li> 
                   <li>Copy Link</li> 
                   <li>Paste link</li> 
                   <li>Click generate</li> 
                    </ol>
                    <small>Program may take around 2-5 minutes to generate video <br/>Video generated is only the first 3 names in the list<br/></small>
                  <button class="bg-green-500 hover:bg-green-700 text-white text-s mt-2 font-bold rounded py-2 px-2">  <a href="https://www.youtube.com/watch?v=BdqRhyQ_QAU" class="hover:text-white">example video</a> </button>
                </div>
                {/*footer*/}
                <div class="flex items-center justify-end p-1 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
       
                </div>
              </div>
            </div>
          </div>
          <div class="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}