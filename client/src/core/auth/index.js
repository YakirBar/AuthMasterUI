import { Box, Typography, TextField, InputAdornment, IconButton, Icon } from "@mui/material";

const Auth = () => {
    return (
        <Box class="p-28 gap-5 w-full flex flex-col">
            <Typography class="text-2xl font-bold">
                Sign in
            </Typography>
            <TextField
                type="text"
                label="Username"
                variant="outlined"
                style={{ backgroundColor: "#ffffff" }}
            />
            <TextField
                type="password"
                label="Password"
                variant="outlined"
                style={{ backgroundColor: "#ffffff" }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon>visibility</Icon>
                        </InputAdornment>
                    )
                }}
            />
            <Typography class="flex justify-end text-slate-500" variant="body1">
                Recover Password ?
            </Typography>
        </Box>
    );
};

export { Auth };