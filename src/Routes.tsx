import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import FormContatos from './pages/FormContatos'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"exact>
                    <Home/>
                </Route>
                <Route path="/formContatos"exact>
                    <FormContatos/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes