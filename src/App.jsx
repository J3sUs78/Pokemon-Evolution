import { useEffect, useState } from "react"


const App = ()=>{

    let [pokemonNumber, setPokemonNumber] = useState(10) //siempre se usa dentro del componente
    let [pokemonName, setPokemonName] = useState('')

    function increaseNumber(){
        setPokemonNumber(pokemonNumber +1 ) //esta funcion actualiza el estado 
        console.log('Valor antes del nuevo render: ',pokemonNumber)
    }
    useEffect(()=>{ //Obtener las variables de estado actualizadas, tambien se recomienda los llamados a las APIS
        console.log('Valor al actualizar el estado: ',pokemonNumber)
        //fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        //.then(result => result.json())
        //.then(data=> setPokemonName(data.name))
        searchPokemon(pokemonNumber)
    }, [pokemonNumber])

    let searchPokemon = async pokemonNumber =>{ //hacer uso de la API mediante una funciion asyncrona en vez de promesas
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        const data = await response.json()
        setPokemonName(data.name)
        console.log(data)
    }

    //se puede dejar con la etiqueta div y tambien dejar vacio
    return(
    <>  
        <button onClick={increaseNumber}>Next</button>
        <div>{pokemonNumber} - {pokemonName}</div>
    </>
    
    ) //componente 
}

export {App} //exportar componente