import { ThunkAction } from 'redux-thunk';
import { notify } from '../../components/app/Notifier';
import FuncionarioRepository from '../../data/repository/FuncionarioRepository';
import Funcionario from '../../models/Funcionario';
import {
    FuncionariosActionTypes,
    FuncionariosState,
    FUNCIONARIOS_OBTIDOS,
    FUNCIONARIO_EXCLUIDO
} from './types';

export const excluirFuncionario = (
    funcionario: Funcionario
): ThunkAction<void, FuncionariosState, null, FuncionariosActionTypes> => async dispatch => {
    if (!funcionario.id) {
        throw new Error('Funcionario não possui Id');
    }

    const exclusao = `Deseja realmente excluir o funcionário "${funcionario.nome}"?`;

    if (window.confirm(exclusao)) {
        await FuncionarioRepository.remove(funcionario.id);

        notify({ message: `Funcionário "${funcionario.nome}" excluido.` });

        dispatch({
            type: FUNCIONARIO_EXCLUIDO,
            payload: funcionario
        });

        dispatch(obterFuncionarios());
    }
};

export const obterFuncionarios = (): ThunkAction<
    void,
    FuncionariosState,
    null,
    FuncionariosActionTypes
> => async dispatch => {
    const funcionarios = await FuncionarioRepository.getAll();

    dispatch({
        type: FUNCIONARIOS_OBTIDOS,
        payload: funcionarios
    });
};
