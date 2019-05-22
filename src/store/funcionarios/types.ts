import Funcionario from '../../models/Funcionario';

const FUNCIONARIO_EXCLUIDO = '@@funcionarios/FUNCIONARIO_EXCLUIDO';
const FUNCIONARIOS_OBTIDOS = '@@funcionarios/FUNCIONARIOS_OBTIDOS';

interface ExcluirFuncionarioAction {
    type: typeof FUNCIONARIO_EXCLUIDO;
    payload: Funcionario;
}

interface FuncionariosObtidosAction {
    type: typeof FUNCIONARIOS_OBTIDOS;
    payload: Funcionario[];
}

export interface FuncionariosState {
    readonly list: Funcionario[] | null;
}

export { FUNCIONARIO_EXCLUIDO, FUNCIONARIOS_OBTIDOS };

export type FuncionariosActionTypes = ExcluirFuncionarioAction | FuncionariosObtidosAction;
