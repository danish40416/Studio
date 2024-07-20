import React from 'react'

export default function Sidebar() {
  return (
    <div>
          <h4 className="m-3 d-flex justify-content-center">Erase</h4>

          <div className="erase-shapes mb-2 d-flex justify-content-center">
            <button className="btn big-square ">
              <img src="https://pubstylescan.blob.core.windows.net/000001/studio/Circle-Erase-Tool.png" />
            </button>
            <button className="btn big-square">
              <img src="https://pubstylescan.blob.core.windows.net/000001/studio/Triangle-Erase-Tool.png" />
            </button>

            <button className="btn big-square">
              <img src="https://pubstylescan.blob.core.windows.net/000001/studio/ToolLasso2.png" />
            </button>

            <button className="btn big-square">
              <img src="https://pubstylescan.blob.core.windows.net/000001/studio/ToolMagic.png" />
            </button>

          </div>
          <ul className="nav  mb-3 px-4">
            <div>
              <span className="label ">Opacity</span>
              <input className="mb-2" type="range" min="0" max="100" value="0" />

              <span className="label ">Size</span>
              <input className="mb-2" type="range" min="0" max="100"  />

              <span className="label ">Streach</span>
              <input className="mb-2" type="range" min="0" max="100"  />

              <span className="label ">Angel</span>
              <input className="mb-2" type="range" min="0" max="100" value="0" />
            </div>
          </ul>

          <ul className="nav flex-column  mt-5">
            <div className="sub-bar">
              <button className="btn btn-block w-100 mt-4 mb-3"> See Through</button>
              <button className="btn btn-block w-100">Add Backdrop</button>
            </div>
            <li><a href="#" className="nav-link mt-3">
              <i className="fas fa-sync-alt icon"></i> Reset To Original</a></li>

          </ul>
          <div class="d-flex justify-content-between erase-changes m-3">
            <button class="btn  btn-block " onclick="removeErase()">
              <i class="fas fa-times"></i>
            </button>
            <div class="d-flex">
              <button class="btn  btn-block ">
                <i class="fas fa-arrow-left icon"></i>
              </button>
              <button class=" btn btn-block ">
                <i class=" fas fa-arrow-right icon"></i>
              </button>
            </div>
            <button class="btn  btn-block ">
              <i class="fas fa-check"></i>
            </button>
          </div>
       
    </div>
  )
}
