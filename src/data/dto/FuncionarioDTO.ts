import DTO from './DTO';

export default interface FuncionarioDTO extends DTO {
    /** Identificador */
    IdFuncionario?: number;

    /** Nome */
    Nome: string;

    /** Número decimal (moeda) */
    Salario: number;

    /** ISO Date */
    DataAdmissao: string;

    /** Tepo de casa por extenso */
    TempoServico?: string;
}
