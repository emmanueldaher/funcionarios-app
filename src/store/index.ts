import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { cadastroDeFuncionarioReducer } from './cadastro-de-funcionarios/reducers';
import { funcionariosReducer } from './funcionarios/reducers';

const rootReducer = combineReducers({
    funcionarios: funcionariosReducer,
    cadastroDeFuncionario: cadastroDeFuncionarioReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const devTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
    // return createStore(rootReducer, applyMiddleware(ReduxThunk));
    return applyMiddleware(ReduxThunk)(createStore)(rootReducer, devTools);
}
