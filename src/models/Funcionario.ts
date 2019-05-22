import Model from './Model';

export default interface Funcionario extends Model {
    nome: string;

    /** Número decimal (moeda). */
    salario: number;

    admissao: Date;

    /** Tempo empregado na empresa. */
    tempo?: string;
}
