import Funcionario from '../../models/Funcionario';

const FUNCIONARIO_CADASTRADO = '@@cadastro-de-funcionario/FUNCIONARIO_EXCLUIDO';

interface FuncionarioCadastradoAction {
    type: typeof FUNCIONARIO_CADASTRADO;
    payload: Funcionario;
}

export interface CadastroDeFuncionarioState {
    /** funcionario em edição */
    funcionario?: Funcionario;
}

export { FUNCIONARIO_CADASTRADO };

export type CadastroDeFuncionarioActionTypes = FuncionarioCadastradoAction;
