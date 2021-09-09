import React from 'react';
// project imports
import SubCard from './../../ui-component/cards/SubCard';
import MainCard from './../../ui-component/cards/MainCard';
import SecondaryAction from './../../ui-component/cards/CardSecondaryAction';
import MapWithSearch from './MapWithSearch';
//==============================|| Maps ||==============================//


const Maps = () => {
    return (
        <MainCard title="Maps">
            <MapWithSearch/>
        </MainCard>
    );
};

export default Maps;
