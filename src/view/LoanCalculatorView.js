import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import TextField1 from "../Components/TextField1";
import { useForm } from "react-hook-form";
import DatePicker1 from "../Components/DatePicker1";
import TextFieldValue from "../Components/TextFieldValue";
import CustomizedTables from "../Components/CustomizedTables";
import { PostApi } from "../api/PostApi";

const LoanCalculatorView = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  // defaultValues
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      interestRate: 7,
      startDate: null,
      endDate: null,
      firstPayment: null,
      loanAmount: 14000000,
    },
  });

  // onSubmit
  const onSubmit = async (request) => {
    setLoading(true);
    setData(null);
    setError(null);
    setTimeout(() => {
      PostApi(request).then((r) => {
        setLoading(false);
        if (r?.status === 201) {
          setData(r?.data);
          return;
        }
        setError(r?.response);
      });
    }, 500);
  };

  return (
    <>
      <Typography variant="h4" sx={{ mb: "24px" }}>
        Calculadorar de Empréstimos
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <DatePicker1
              control={control}
              required
              name="startDate"
              label="Data inicial"
              inputFormat="dd/MM/yyyy"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <DatePicker1
              control={control}
              required
              name="endDate"
              label="Data final"
              inputFormat="dd/MM/yyyy"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <DatePicker1
              control={control}
              required
              name="firstPayment"
              label="Primeiro Pagamento"
              inputFormat="dd/MM/yyyy"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <TextFieldValue
              required
              control={control}
              fullWidth
              label="Valor do empréstimo"
              name="loanAmount"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <TextField1
              required
              type="number"
              control={control}
              fullWidth
              label="Taxa de juros"
              name="interestRate"
              InputProps={{
                startAdornment: <>%</>,
              }}
            />
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Stack alignItems="flex-start" direction="row" spacing={2}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                disabled={loading || !isValid}
                loading={loading}
                loadingPosition="center"
              >
                <span>Calcular</span>
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12 }}>
            {loading ? (
              <Stack
                component="aside"
                alignItems="center"
                textAlign="center"
                spacing={0}
                sx={{ m: "12px" }}
              >
                <CircularProgress />
              </Stack>
            ) : (
              <>{data && <CustomizedTables data={data?.competences} />}</>
            )}
            {error?.data.status === 403 &&
              error?.data?.erros?.map((d, i) => {
                return (
                  <Alert key={i} severity="warning">
                    {d?.message}
                  </Alert>
                );
              })}
            {error?.data.status === 500 && (
              <Alert severity="error">Server Error</Alert>
            )}
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LoanCalculatorView;
