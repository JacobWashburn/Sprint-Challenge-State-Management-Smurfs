import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  
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