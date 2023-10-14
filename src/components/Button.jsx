import '../sass/Button.scss'
//instalar SAAS en tu proyecto
//npm add -D sass

const Button = ({icon, handleClick}) => { //del objeto props extraigo solo el icon
    return (
        <div 
            className='btn_box'>
            
            <button 
                className="btn" 
                onClick={handleClick}>{icon}
            </button>

            <div 
                className='btn_shadow'></div>
        </div>
    )
}

//Second way
//const Button = (props) => {
//    return (
//        <div className='btn_box'>
//            <button className="btn">{props.icon}</button>
//        </div>
//    )
//}


//si es un export default puedes cambiar el nombre del componente, aunque es una mala practica
//export default Button bad practice 

//good practice
export {Button}