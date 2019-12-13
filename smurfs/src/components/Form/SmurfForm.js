import React, {useState} from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid forestgreen;
  border-radius: 2rem;
`;
const Label = styled.label`
  width: 35%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
const Input = styled.input`
  width: 65%;
  
 
`;
const Button = styled.button`
  width: 35%;
    margin: 0 auto;
  background-color: lightgrey;
  border-radius: 15px;
`;

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });
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
        <FormWrapper>
            <Form onSubmit={onSubmitHandler}>
                <Label>Name:
                    <Input required type='text' name='name' onChange={e => onChangeHandler(e)}/>
                </Label>
                <Label>Age:
                    <Input required label='Age' type='number' name='age' onChange={e => onChangeHandler(e)}/>
                </Label>
                <Label>Height:
                    <Input required type='number' name='height' onChange={e => onChangeHandler(e)}/>
                </Label>
                <Button type='submit'>Add This Smurf!!!</Button>
            </Form>
        </FormWrapper>
    );
};

export default SmurfForm;
