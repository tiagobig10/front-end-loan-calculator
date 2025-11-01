import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from '@mui/x-date-pickers/locales';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies

// +==============================|| Develop ||==============================+ //

const DatePicker1 = ({ name, skeleton, required, control, ...props }) => {
    // eslint-disable-next-line no-unused-vars, react/prop-types
    const { id } = props;

    return (
        <Controller
            control={control}
            rules={{
                required: required || false
            }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <LocalizationProvider
                    localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
                    dateAdapter={AdapterDateFns}
                    adapterLocale={pt}
                >

                    <DatePicker
                        onBlur={onBlur}
                        sx={{ width: "100%" }}
                        error
                        id={name}
                        value={value}
                        onChange={onChange}
                        {...props}
                        inputFormat="dd/MM/yyyy"
                        slotProps={{
                            field: { clearable: true},
                            textField: {
                                error:!!error,
                                helperText:!!error && 'Obrigatório!'
                            },
                        }}
                    
                    />
                </LocalizationProvider>


            )}
            name={name}
        />
    );
};

DatePicker1.propTypes = {
    name: PropTypes.string,
    required: PropTypes.bool,
    control: PropTypes.any,
    skeleton: PropTypes.bool
};

export default DatePicker1;
