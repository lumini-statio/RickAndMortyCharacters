import React, {useState} from 'react'

const Footer = () => {

  const [clicks, setClicks] = useState(0)
  const year = new Date().getFullYear()
  const companyName = 'Emilio Education -'

  const handleClicks = ()=>{
    setClicks(clicks+1);
  }

  return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName} clicks={clicks}</p>

            <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"onClick={handleClicks}>Click</li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer
