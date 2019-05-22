import Typography from '@material-ui/core/Typography';
import React from 'react';
import FuncionarioForm from './FuncionarioForm';
import { connect } from 'react-redux';
import Funcionario from '../../models/Funcionario';
import { cadastrarFuncionario } from '../../store/cadastro-de-funcionarios/actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { notify } from '../app/Notifier';

interface CadastroDeFuncionarioProps {
    cadastrarFuncionario: (funcionario: Funcionario) => void;
}

const CadastroDeFuncionario: React.SFC<
    CadastroDeFuncionarioProps & RouteComponentProps
> = props => {
    const { cadastrarFuncionario } = props;

    const cadastrar = async (funcionario: Funcionario) => {
        await cadastrarFuncionario(funcionario);

        notify({ message: `Funcionário "${funcionario.nome}" cadastrado com sucesso!` });

        props.history.push('/');
    };

    return (
        <div className="cadastro-de-funcionario">
            <Typography variant="h4" gutterBottom component="h2">
                Cadastrar novo funcionário
            </Typography>

            <FuncionarioForm onSubmit={cadastrar} />
        </div>
    );
};

let DecoratedComponent: any = CadastroDeFuncionario;

DecoratedComponent = connect(
    undefined,
    {
        cadastrarFuncionario
    }
)(DecoratedComponent);

DecoratedComponent = withRouter(DecoratedComponent);

export default DecoratedComponent;
