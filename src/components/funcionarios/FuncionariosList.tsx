import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { connect } from 'react-redux';
import Funcionario from '../../models/Funcionario';
import Currency from '../../services/Currency';
import { AppState } from '../../store';
import { excluirFuncionario, obterFuncionarios } from '../../store/funcionarios/actions';

interface FuncionariosListProps {
    funcionarios: Funcionario[] | null;
    excluirFuncionario: (funcionario: Funcionario) => void;
    obterFuncionarios: () => void;
}

class FuncionariosList extends React.Component<FuncionariosListProps> {
    componentDidMount() {
        this.props.obterFuncionarios();
    }

    renderHeader = () => {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell align="right">Salário (R$)</TableCell>
                    <TableCell>Admissão</TableCell>
                    <TableCell>Tempo de casa</TableCell>
                    <TableCell />
                </TableRow>
            </TableHead>
        );
    };

    renderRow = (funcionario: Funcionario) => {
        const { excluirFuncionario } = this.props;

        return (
            <TableRow key={funcionario.id}>
                <TableCell component="th" scope="row">
                    {funcionario.nome}
                </TableCell>
                <TableCell align="right">{Currency.format(funcionario.salario)}</TableCell>
                <TableCell>{funcionario.admissao.toLocaleDateString()}</TableCell>
                <TableCell>{funcionario.tempo}</TableCell>
                <TableCell align="right">
                    <IconButton onClick={() => excluirFuncionario(funcionario)}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    };

    render() {
        const { funcionarios } = this.props;

        return funcionarios ? (
            <Paper>
                <Table>
                    {this.renderHeader()}
                    <TableBody>{funcionarios.map(this.renderRow)}</TableBody>
                </Table>
            </Paper>
        ) : (
            <CircularProgress />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    funcionarios: state.funcionarios.list
});

export default connect(
    mapStateToProps,
    { excluirFuncionario, obterFuncionarios }
)(FuncionariosList);
