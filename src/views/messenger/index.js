import React from 'react';

// project imports
import SubCard from './../../ui-component/cards/SubCard';
import MainCard from './../../ui-component/cards/MainCard';
import WeavyMessenger from '../../weavy/components/WeavyMessenger';
import WeavySearch from '../../weavy/components/WeavySearch';

//===============================|| UI COLOR ||===============================//

const Messenger = () => {

    return (
        <MainCard  >
            <SubCard>
                <WeavyMessenger/>
            </SubCard>
        </MainCard>
    );
};

export default Messenger;
