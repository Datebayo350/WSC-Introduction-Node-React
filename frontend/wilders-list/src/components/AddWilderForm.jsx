import {Formular, Input, Label, Button} from "./../styled/StyledComponents";
import {useState} from 'react';
   


export  function AddWilderForm () {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
 
    const handleFormular = (event) => {
        event.preventDefault();
        console.log(name, city);
    }
    //? Passé un bon moment à ne pas détécter l'event submit car l'appel à la fonction n'était pas entouré d'accolades

    //? Egalemment sur les setValeurDuState car je ne passais pas la bonne valeur et n'utilisais pas l'event : setName(name)...
    return (
        <Formular onSubmit={(e)=> {handleFormular(e)}}>
            <Label htmlFor="Name"> Nom du Wilder</Label>
            <Input type="text" id="Name" value={name} onChange={e=>{setName(e.target.value);console.log(name);}} autoFocus/>

            <Label htmlFor="Name"> Ville du Wilder</Label>
            <Input type="text" id="City" value={city} onChange={e=>{setCity(e.target.value)}} />

            <Button > New Wilder </Button>
        </Formular>
    )
}
