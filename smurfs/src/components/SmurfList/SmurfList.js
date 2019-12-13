import React from 'react';
import styled from 'styled-components';
import SmurfCard from './SmurfCard';

const ListWrapper = styled.div`
  
`;

const SmurfList = ({smurfList}) => {
    return (
        <ListWrapper>
            {smurfList.map(smurf => <SmurfCard key={smurf.id} smurf={smurf}/>)}
        </ListWrapper>
    );
};

export default SmurfList;