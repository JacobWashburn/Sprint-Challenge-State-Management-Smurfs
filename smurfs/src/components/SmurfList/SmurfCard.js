import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {putSmurfs, putSmurfsStart, resetEditing} from '../../Actions';

const Card = styled.div`
  border: 1px solid darkblue;
  border-radius: 1rem;
  width: 23%;
  margin: 2% .5%; 
`;
const Name = styled.h2`

`;
const Attribute = styled.h4`

`;
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2% 0;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2% 0;
`;
const Input = styled.input`
  width: 65%;
  margin: 2% 0;
`;
const Button = styled.button`
  width: 65%;
  margin: 1% auto;
  background-color: lightgrey;
  border-radius: 15px;
`;

const SmurfCard = props => {
    const [smurfEdit, setSmurfEdit] = useState({
        ...props.smurf
    });
    console.log({smurfEdit});
    const onChangeHandler = e => {
        setSmurfEdit({...smurfEdit, [e.target.name]: e.target.value});
    };
    const onSubmitHandler = () => {
        props.putSmurfs(smurfEdit);
    };
    return (
        <Card>

            {props.isEditing && props.id === props.smurf.id ? <FormWrapper>
                <Form onSubmit={onSubmitHandler}>
                    <Label>Name:
                        <Input required type='text' name='name' value={smurfEdit.name}
                               onChange={e => onChangeHandler(e)}/>
                    </Label>
                    <Label>Age:
                        <Input required label='Age' type='number' name='age' value={smurfEdit.age}
                               onChange={e => onChangeHandler(e)}/>
                    </Label>
                    <Label>Height:
                        <Input required type='number' name='height' value={smurfEdit.height}
                               onChange={e => onChangeHandler(e)}/>
                    </Label>
                    <Button type='submit'>Change This Smurf!!!</Button>
                    <Button onClick={e => {e.preventDefault();props.resetEditing()}}>Cancel</Button>
                </Form>
            </FormWrapper> : <div><Name>{props.smurf.name}</Name>
            <Attribute>Age: {props.smurf.age}</Attribute>
            <Attribute>Height: {props.smurf.height}cm</Attribute><Button onClick={e => {e.preventDefault();props.putSmurfsStart(props.smurf.id)}}>Edit</Button></div>}
        </Card>
    );
};

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps, {putSmurfs, putSmurfsStart, resetEditing})(SmurfCard);