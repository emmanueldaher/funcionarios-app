import Funcionario from '../../models/Funcionario';
import FuncionarioDTO from '../dto/FuncionarioDTO';
import Mapper from './Mapper';

export default class FuncionarioMapper implements Mapper<FuncionarioDTO, Funcionario> {
    toModel(dto: FuncionarioDTO): Funcionario {
        if (dto.IdFuncionario === undefined) {
            throw new Error('DTO sem IdFuncionario');
        }

        if (dto.TempoServico === undefined) {
            throw new Error('DTO sem TempoServico');
        }

        return {
            id: dto.IdFuncionario,
            nome: dto.Nome,
            salario: dto.Salario,
            admissao: new Date(dto.DataAdmissao),
            tempo: dto.TempoServico
        };
    }

    toDTO(model: Funcionario): FuncionarioDTO {
        return {
            IdFuncionario: model.id,
            Nome: model.nome,
            Salario: model.salario,
            DataAdmissao: model.admissao.toISOString(),
            TempoServico: model.tempo
        };
    }
}
