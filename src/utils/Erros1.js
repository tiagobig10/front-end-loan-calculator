import { Alert, styled } from '@mui/material';
import PropTypes from 'prop-types';

const StyledAlert = styled(Alert)(({ theme }) => ({
  marginTop: '8px',
  border: '1px solid #eeeeee'
}));


export default function Error1({ error }) {
    if (!error) {
        return
    }

    // response api error
    const responseApiError = error?.response

    // status code
    const INTERNAL_SERVER_ERROR = 500;
    const FORDIDDEN = 403;

    const statusCode = responseApiError?.status
    const listErrors = responseApiError?.data?.erros

    if (statusCode === FORDIDDEN) {
        return (
            <>
                {
                    listErrors?.map((d, i) => {
                        return (
                            <StyledAlert key={i} severity="warning">
                                {d?.message}
                            </StyledAlert>
                        );
                    })
                }
            </>
        )
    }

    if (statusCode === INTERNAL_SERVER_ERROR) {
        return <StyledAlert severity="error">Server Error</StyledAlert>;
    }

    return <StyledAlert severity="error">{error?.message}</StyledAlert>;
}

Error1.propTypes = {
    error: PropTypes.object
};