import Model from '../../models/Model';
import DTO from '../dto/DTO';

/**
 * Deixei e os métodos de instância ao invez de estáticos,
 * pois um Mapper pode possuir dependências não estáticas
 * e podem ser injetadas através do construtor, como por exempo outros Mappers.
 */

/**
 * Abstração da responsabilidade de conversão do Objeto de Transporte(DTO) para Dominio(Model).
 */
export default interface Mapper<D extends DTO, M extends Model> {
    /**
     * Converte o `dto` para o Model
     *
     * @param dto Objeto de Transporte
     */
    toModel(dto: D): M;

    /**
     * Converte o `model` para o Objeto de Transporte
     *
     * @param model objeto do Domínio
     */
    toDTO(model: M): D;
}
