import {
    CadastroDeFuncionarioState,
    CadastroDeFuncionarioActionTypes,
    FUNCIONARIO_CADASTRADO
} from './types';

const initialState: CadastroDeFuncionarioState = {};

export function cadastroDeFuncionarioReducer(
    state = initialState,
    action: CadastroDeFuncionarioActionTypes
): CadastroDeFuncionarioState {
    switch (action.type) {
        case FUNCIONARIO_CADASTRADO:
        default:
            return state;
    }
}
