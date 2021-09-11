import React from 'react';

// project imports
import SubCard from './../../ui-component/cards/SubCard';
import MainCard from './../../ui-component/cards/MainCard';
import WeavyMessenger from '../../weavy/components/WeavyMessenger';

//===============================|| UI COLOR ||===============================//

const UtilitiesMessenger = () => {

    return (
        <MainCard  >
            <SubCard>
                <WeavyMessenger/>
            </SubCard>
        </MainCard>
    );
};

export default UtilitiesMessenger;
