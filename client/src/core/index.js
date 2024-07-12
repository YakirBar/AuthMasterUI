import "./index.css";
import { Auth } from "./auth";
import { Layout } from "./layout";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Core = () => {
    const theme = createTheme({
        palette: {
            background: {
                default: "#F0F4FC"
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Auth />
            </Layout>
            <CssBaseline />
        </ThemeProvider>
    );
};

export { Core };