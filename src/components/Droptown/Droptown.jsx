export const Droptown = ({ buttonText, menuOptions }) => {
  return (
   
  <div className="btn-group">
    <button 
    type="button" 
    className="btn text-dark dropdown-toggle p-2"  
    data-bs-toggle="dropdown" 
    aria-expanded="false"
    >
    {buttonText}
    </button>
  
  <ul className="dropdown-menu">
    {menuOptions.map((option, index) => (
          <li key={index}>
            <a className="dropdown-item" href="#">
              {option}
            </a>
          </li>
        ))}
  </ul>
  </div>
  )
}
