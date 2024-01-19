export const Droptown = ({ buttonText, menuOptions }) => {
  return (
   
  <div class="btn-group">
    <button 
    type="button" 
    class="btn text-dark dropdown-toggle p-2"  
    data-bs-toggle="dropdown" 
    aria-expanded="false"
    >
    {buttonText}
    </button>
  
  <ul class="dropdown-menu">
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
