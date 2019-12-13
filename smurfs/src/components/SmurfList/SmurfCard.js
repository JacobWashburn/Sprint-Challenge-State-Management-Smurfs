import React from 'react';
import styled from 'styled-components';

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

const SmurfCard = ({smurf}) => {
    return (
            <Card>
                <Name>{smurf.name}</Name>
                <Attribute>Age: {smurf.age}</Attribute>
                <Attribute>Height: {smurf.height}cm</Attribute>
            </Card>
    );
};

export default SmurfCard;