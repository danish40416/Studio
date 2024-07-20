import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <h5 className="mb-4 d-flex justify-content-center">StyleScan&reg;</h5>
                    <ul className="nav flex-column mb-5">
                         <li ><a href="#" className="nav-link"><i className="fas fa-eraser"></i> Erase</a>
                         </li>
                         <li><a href="#" className="nav-link"><i className="fas fa-expand-arrows-alt"></i> Warp</a></li>
                         <li><a href="#" className="nav-link"><i className="fas fa-sliders-h"></i> Adjust</a></li>
                         <li><a href="#" className="nav-link"><i className="fas fa-shadow"></i> Shadow</a></li>
                         <li><a href="#" className="nav-link"><i className="fas fa-image"></i> Image Size</a></li>
                         <li><a href="#" className="nav-link"><i className="fas fa-fill-drip"></i> Background</a></li>
                         <li><a href="#" className="nav-link"><i className="fas fa-save"></i> Save</a></li>
                    </ul>

                    <ul className="nav flex-column mt-5 ">
                         <li><button className="btn btn-secondary btn-block w-100 mb-3"><i className="fas fa-arrow-up"></i>
                                   Upgrade</button></li>
                         <li><a href="#" className="nav-link"><i className="fas fa-book"></i> Guide</a></li>
                         <li><a href="#" className="nav-link"><i className="fas fa-video"></i> Tutorials</a></li>
                         <li><a href="#" className="nav-link"><i className="fas fa-comment-dots"></i> Feedback</a></li>
                         <li><a href="#" className="nav-link"><i className="fas fa-credit-card"></i> Billing & Plans</a></li>
                    </ul>
               </div>
    
      
  )
}
