import { Stack, Typography } from "@mui/material";

export const Version1 = () => (
        <Stack
            component="aside"
            alignItems="start"
            textAlign="center"
            spacing={0}
            
        >
            <Typography  sx={{ userSelect: "none" }} variant="caption">
                <span style={{color: '#0897E9', fontWeight: "600", fontSize: '14px' }}>
                    Test
                </span>{" "}
                <Typography
                    sx={{
                        whiteSpace: "nowrap",
                        transition: "color .6s ease-in-out",
                        userSelect: "none",
                        "&:hover": {
                            color: (theme) => theme.palette.primary.main,
                        },
                    }}
                    variant="caption"
                >
                    • v0.0.1
                </Typography>
            </Typography>
        </Stack>
);
