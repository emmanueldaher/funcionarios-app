import Typography from '@material-ui/core/Typography';
import React from 'react';
import FuncionariosList from './FuncionariosList';

const Funcionarios: React.SFC = () => (
    <div className="funcionarios">
        <Typography variant="h4" gutterBottom component="h2">
            Funcionários
        </Typography>

        <FuncionariosList />
    </div>
);

export default Funcionarios;
