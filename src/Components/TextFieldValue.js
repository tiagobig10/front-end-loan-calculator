import { Skeleton, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import { maskValue } from '../utils/maskValue';

// +==============================|| Esotar Develop ||==============================+ //

export default function TextFieldValue({ required, skeleton, control, name, ...props }) {
    // const { control } = useFormContext();

    return (
        <Controller
            control={control}
            rules={{
                required: required || false
            }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <>
                    {skeleton ? (
                        <Skeleton animation="wave" variant="rectangular" width="100%" height={50} />
                    ) : (
                        <TextField
                            fullWidth
                            id={name}
                            onBlur={onBlur}
                            placeholder="R$ 0,00"
                            onChange={(e) => onChange(e.target.value.replace(/\D/g, ''))}
                            value={value > 0 ? maskValue(value) : ''}
                            {...props}
                            error={!!error}
                            helperText={!!error && 'Obrigatório!'}
                        />
                    )}
                </>
            )}
            name={name}
        />
    );
}

TextFieldValue.propTypes = {
    skeleton: PropTypes.bool,
    name: PropTypes.string,
    control: PropTypes.any,
    required: PropTypes.bool
};
