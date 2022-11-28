import Grid from "@mui/material/Grid"
import { Container } from "@mui/system"
import { Provider } from "react-redux"
import MyForm from "./components/MyForm"
import MyTable from "./components/MyTable"
import store from './store'

const App = () => {
    return <>
    <Container>
        <Provider store={store}>
            <Grid>
                <Grid>
                    <MyForm/>
                </Grid>
                <Grid>
                    <MyTable />
                </Grid>
            </Grid>
        </Provider>
        </Container>
    </>
}

export default App;