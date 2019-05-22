import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import React, { SyntheticEvent } from 'react';
import Funcionario from '../../models/Funcionario';
import { notify } from '../app/Notifier';

const styles = ({ spacing }: Theme) =>
    createStyles({
        form: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: -spacing.unit
        },
        nomeControl: {
            flex: '1 0 300px',
            margin: spacing.unit
        },
        salarioControl: {
            flex: '1 0 100px',
            margin: spacing.unit
        },
        admissaoControl: {
            flex: '0 0 200px',
            margin: spacing.unit
        }
    });

interface FuncionarioFormProps extends WithStyles<typeof styles> {
    onSubmit: (funcionario: Funcionario) => void;
    funcionario?: Funcionario;
}

interface FuncionarioFormState {
    nome: string;
    salario: string;
    admissao: any;
}

class FuncionarioForm extends React.Component<FuncionarioFormProps, FuncionarioFormState> {
    state: FuncionarioFormState = {
        nome: '',
        salario: '',
        admissao: undefined
    };

    formatCurrency = (value: number) => {
        const formatter = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2
        });

        return formatter.format(value);
    };

    normalizeCurrency = (value: string) => {
        return Number.parseFloat(value.replace(/\./, '').replace(/,/, '.'));
    };

    handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        const { onSubmit: submit, funcionario } = this.props;
        const { nome, salario, admissao } = this.state;

        let salarioNumber = this.normalizeCurrency(salario);

        if (isNaN(salarioNumber)) {
            notify({
                message: 'Salário inválido.'
            });
        } else {
            submit({
                id: funcionario && funcionario.id,
                nome: nome,
                salario: this.normalizeCurrency(salario),
                admissao: new Date(admissao)
            });
        }
    };

    render = () => {
        const { classes } = this.props;

        return (
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <CardContent className={classes.form}>
                        <TextField
                            className={classes.nomeControl}
                            label="Nome"
                            value={this.state.nome}
                            onChange={e =>
                                this.setState({ ...this.state, nome: e.target.value })
                            }
                            inputProps={{ minLength: 6 }}
                            required
                        />
                        <TextField
                            className={classes.salarioControl}
                            label="Salário"
                            value={this.state.salario}
                            onChange={e =>
                                this.setState({
                                    ...this.state,
                                    salario: e.target.value
                                })
                            }
                            required
                        />

                        <FormControl className={classes.admissaoControl}>
                            <InputLabel htmlFor="admissao">Data de Admissão</InputLabel>
                            <Input
                                name="admissao"
                                type="date"
                                value={this.state.admissao}
                                onChange={e =>
                                    this.setState({
                                        ...this.state,
                                        admissao: e.target.value
                                    })
                                }
                                required
                            />
                        </FormControl>
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" type="submit" color="primary">
                            CADASTRAR
                        </Button>
                    </CardActions>
                </form>
            </Card>
        );
    };
}

let DecoratedComponent: any = FuncionarioForm;

DecoratedComponent = withStyles(styles)(DecoratedComponent);

export default DecoratedComponent;
