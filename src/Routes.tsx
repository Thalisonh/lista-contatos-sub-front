import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import FormContatos from './pages/FormContatos'
import FormEndereco from './pages/FormEndereco'
import FormTelefone from './pages/FormTelefone'

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
                <Route path="/formEndereco/:id" children={<FormEndereco/>}/>
                <Route path="/formTelefone/:id" children={<FormTelefone/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes