import React from 'react';

// material-ui
import { Grid } from '@material-ui/core';

import { gridSpacing } from './../../store/constant';
import WeavyFeeds from '../../weavy/components/WeavyFeeds';
import WeavyTasks from '../../weavy/components/WeavyTasks';
import WeavyFiles from '../../weavy/components/WeavyFiles';

//-----------------------|| DEFAULT DASHBOARD ||-----------------------//

const Dashboard = () => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <WeavyFeeds height="85vh"/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Grid container direction="column" spacing={gridSpacing}>
                            <Grid item xs={6}>
                                <WeavyTasks height="45vh"/>
                            </Grid>
                            <Grid item xs={6}>
                                <WeavyFiles height="30vh"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
