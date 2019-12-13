import React, {useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`

`;
const Input = styled.input`

`;
const Button = styled.button`

`;

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });
    console.log({newSmurf})
    const onChangeHandler = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
    };
    const onSubmitHandler = () => {
        props.postSmurf(newSmurf);
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        });
    };
    return (
        <Form onSubmit={onSubmitHandler}>
            <Input required type='text' name='name' onChange={e => onChangeHandler(e)}/>
            <Input required type='number' name='age' onChange={e => onChangeHandler(e)}/>
            <Input required type='number' name='height' onChange={e => onChangeHandler(e)}/>
            <Button type='submit'>Add This Smurf!!!</Button>
        </Form>
    );
};

export default SmurfForm;
