import axios from 'axios';
import Funcionario from '../../models/Funcionario';
import FuncionarioDTO from '../dto/FuncionarioDTO';
import FuncionarioMapper from '../map/FuncionarioMapper';

const API_URL = process.env.REACT_APP_API_URL;

class FuncionarioRepository {
    async add(funcionario: Funcionario) {
        const mapper = new FuncionarioMapper();
        const dto = mapper.toDTO(funcionario);

        await axios.post(`${API_URL}/funcionario/cadastrar`, dto);
    }

    async remove(id: number) {
        await axios.delete(`${API_URL}/funcionario/excluir`, {
            params: {
                id
            }
        });
    }

    async update(funcionario: Funcionario) {
        const mapper = new FuncionarioMapper();
        const dto = mapper.toDTO(funcionario);

        await axios.put(`${API_URL}/funcionario/atualizar`, dto);
    }

    async getById(id: number) {
        const response = await axios.get<FuncionarioDTO>(`${API_URL}/funcionario/obter`, {
            params: {
                id
            }
        });
        const dto = response.data;
        const mapper = new FuncionarioMapper();

        return mapper.toModel(dto);
    }

    async getAll() {
        const response = await axios.get<FuncionarioDTO[]>(
            `${API_URL}/funcionario/listartodos`
        );
        const dtos = response.data;
        const mapper = new FuncionarioMapper();

        return dtos.map(dto => mapper.toModel(dto));
    }

    async query(params: any): Promise<Funcionario[]> {
        throw new Error('Não implementado no servidor.');
    }
}

export { FuncionarioRepository };
export default new FuncionarioRepository();
