import React from 'react';
import styled from 'styled-components';
import SmurfCard from './SmurfCard';

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SmurfList = ({smurfList}) => {
    return (
        <ListWrapper>
            {smurfList.map(smurf => <SmurfCard key={smurf.id} smurf={smurf}/>)}
        </ListWrapper>
    );
};

export default SmurfList;