import {
    FuncionariosActionTypes,
    FuncionariosState,
    FUNCIONARIOS_OBTIDOS,
    FUNCIONARIO_EXCLUIDO
} from './types';

const initialState: FuncionariosState = {
    list: null
};

export function funcionariosReducer(
    state = initialState,
    action: FuncionariosActionTypes
): FuncionariosState {
    switch (action.type) {
        case FUNCIONARIOS_OBTIDOS:
            return {
                ...state,
                list: action.payload
            };

        case FUNCIONARIO_EXCLUIDO:
        default:
            return state;
    }
}
