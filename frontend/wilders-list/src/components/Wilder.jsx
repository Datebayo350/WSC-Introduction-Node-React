//? Components
import {Container, Tarzan} from './../styled/StyledComponents';
import Skills from './Skills';
import tarzan from './../tarzan.jpg';

export default function Wilder (props) {
    
    const {name, city, skills} = props;
    return (
        <div>
            <Container>
                <Tarzan src={tarzan} alt="Tarzan Profile" className="tarzan"/>
                <p className="name"> {name}</p>
                <p className="city">{city}</p>
                <p> <Skills techno = {skills} /> </p>
            </Container>
        </div>
    )   

}