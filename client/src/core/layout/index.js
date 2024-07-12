import { Box } from "@mui/material";

const Layout = ({ children }) => {
    return (
        <Box class="h-screen grid grid-cols-5 align-center ">
            <Box class="col-span-3 flex justify-center items-center">
                <h1 className="text-3xl font-bold underline">
                    Background
                </h1>
            </Box>
            <Box class="flex justify-center items-center col-span-2">
                {children}
            </Box>
        </Box>
    );
};

export { Layout };