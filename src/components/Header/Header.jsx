import { useTranslation } from 'react-i18next';
import './Header.scss';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Header = (props) => {
    const { t } = useTranslation();

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h5" className="app-name">
                            {t('app-name').toUpperCase()}
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
export default Header;