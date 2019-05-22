import { ThunkAction } from 'redux-thunk';
import FuncionarioRepository from '../../data/repository/FuncionarioRepository';
import Funcionario from '../../models/Funcionario';
import {
    CadastroDeFuncionarioActionTypes,
    CadastroDeFuncionarioState,
    FUNCIONARIO_CADASTRADO
} from './types';

export const cadastrarFuncionario = (
    funcionario: Funcionario
): ThunkAction<
    void,
    CadastroDeFuncionarioState,
    null,
    CadastroDeFuncionarioActionTypes
> => async dispatch => {
    await FuncionarioRepository.add(funcionario);

    dispatch({
        type: FUNCIONARIO_CADASTRADO,
        payload: funcionario
    });
};
