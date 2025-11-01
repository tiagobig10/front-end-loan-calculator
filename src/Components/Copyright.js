import { useTheme } from '@emotion/react';
import { Stack, Typography } from '@mui/material';

export const Copyright = () => {
    const theme = useTheme();
    return (
        <Stack component="aside" alignItems="center" textAlign="center" spacing={0} sx={{ m: '12px' }}>
            <Typography sx={{ userSelect: 'none' }} variant="caption">
                © <span style={{ color: theme.palette.primary.main, fontWeight: '600' }}>Test</span> todos os direitos reservados.
            </Typography>
        </Stack>

    );
};
