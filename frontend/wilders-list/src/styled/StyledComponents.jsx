import styled, {css} from 'styled-components';

export const Formular = styled.form`

    height: 150px;
    width: 400px;
    padding: 2rem;

    border: 1px, solid, black;
    color: white;
    background-color: #6ee7b7;
    box-shadow: 4px 5px 15px grey;

    font-weight: bold;
    text-shadow: 2px 2px 5px black;

    display: flex;
    flex-flow: column;
    line-height: 2rem;
    align-items: center;
`
export const Input = styled.input`
    height: 1rem;
    width: 300px;

    margin-top: 0.5rem;
    border-radius: 5px;
    border: none;

    :focus {
        box-shadow: 2px 2px 10px #f59e0b;
        outline: unset;
    }
`
export const Label = styled.label `
`
export const Button = styled.button `

    width: fit-content;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: none;
    border-radius: 0.8rem;
`

export const Container = styled.div`
    width: 650px;
    margin-top: 5rem;
    border: 1px, solid, #f0f;
`
export const Tarzan = styled.img`
    border: 2px solid red;
    width: 400px;
    height: 400px;
`