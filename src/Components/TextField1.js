import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

// +==============================|| Esotar Develop ||==============================+ //

export default function TextField1({ mask, skeleton, required, control, name, ...props }) {
    // const { control } = useFormContext();

    return (
        <Controller
            control={control}
            rules={{
                required: required || false
            }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <TextField
                    fullWidth
                    id={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={mask ? mask(value) : value}
                    {...props}
                    error={!!error}
                    helperText={!!error && 'Obrigatório!'}
                />
            )}
            name={name}
        />
    );
}

TextField1.propTypes = {
    skeleton: PropTypes.bool,
    name: PropTypes.string,
    mask: PropTypes.func,
    control: PropTypes.any,
    required: PropTypes.bool
};
