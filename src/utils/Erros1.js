import { Alert } from '@mui/material';
import PropTypes from 'prop-types';
export default function Error1({ error }) {
    if (!error) {
        return
    }

    // status code
    const INTERNAL_SERVER_ERROR = 500;
    const FORDERBIAN = 403;

    const statusCode = error?.status
    const listErrors = error?.data?.erros

    if (statusCode === FORDERBIAN) {
        return (
            <>
                {
                    listErrors?.map((d, i) => {
                        return (
                            <Alert key={i} severity="warning">
                                {d?.message}
                            </Alert>
                        );
                    })
                }
            </>
        )
    }

    if (statusCode === INTERNAL_SERVER_ERROR) {
        return <Alert severity="error">Server Error</Alert>;
    }

    return <Alert severity="error">{error?.data?.message}</Alert>;
}

Error1.propTypes = {
    error: PropTypes.any
};