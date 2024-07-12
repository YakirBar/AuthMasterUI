import { Box, Typography, TextField } from "@mui/material";

const Auth = () => {
    return (
        <Box class="p-28 gap-10 w-full flex flex-col">
            <Typography class="text-2xl font-bold">
                Sign in
            </Typography>
            <TextField
                type="text"
                label="Username"
                variant="outlined"
            />
            <TextField
                type="password"
                label="Password"
                variant="outlined"
            />
        </Box>
    );
};

export { Auth };