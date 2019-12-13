import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {putSmurfs, putSmurfsStart} from '../../Actions';

const Card = styled.div`
  border: 1px solid darkblue;
  border-radius: 1rem;
  width: 22%;
  margin: 2%; 
`;
const Name = styled.h2`

`;
const Attribute = styled.h4`

`;
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid forestgreen;
  border-radius: 1rem;
`;
const Label = styled.label`

`;
const Input = styled.input`
  width: 35%;
  margin: 0 auto;
`;
const Button = styled.button`
  width: 35%;
  margin: 0 auto;
`;

const SmurfCard = props => {
    const [smurfEdit, setSmurfEdit] = useState({
        ...props.smurf
    });
    console.log({smurfEdit})
    const onChangeHandler = e => {
        setSmurfEdit({...smurfEdit, [e.target.name]: e.target.value});
    };
    const onSubmitHandler = () => {
        props.putSmurfs(smurfEdit);
    };
    return (
        <Card>
            <Name>{props.smurf.name}</Name>
            <Attribute>Age: {props.smurf.age}</Attribute>
            <Attribute>Height: {props.smurf.height}cm</Attribute>
            {props.isEditing && props.id === props.smurf.id ? <FormWrapper>
                <Form onSubmit={onSubmitHandler}>
                    <Label>Name:
                        <Input required type='text' name='name' value={smurfEdit.name} onChange={e => onChangeHandler(e)}/>
                    </Label>
                    <Label>Age:
                        <Input required label='Age' type='number' name='age' value={smurfEdit.age} onChange={e => onChangeHandler(e)}/>
                    </Label>
                    <Label>Height:
                        <Input required type='number' name='height' value={smurfEdit.height} onChange={e => onChangeHandler(e)}/>
                    </Label>
                    <Button type='submit'>Change This Smurf!!!</Button>
                </Form>
            </FormWrapper> : <button onClick={e => props.putSmurfsStart(props.smurf.id)}>Edit</button>}
        </Card>
    );
};

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps, {putSmurfs, putSmurfsStart})(SmurfCard);