import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

let openSnackbarFn: (opts: SnackbarOpts) => void;

class Notifier extends React.Component {
    state = {
        open: false,
        message: ''
    };

    componentDidMount() {
        openSnackbarFn = this.openSnackbar;
    }

    openSnackbar = ({ message }: SnackbarOpts) => {
        this.setState({
            open: true,
            message
        });
    };

    handleSnackbarClose = () => {
        this.setState({
            open: false,
            message: ''
        });
    };

    render() {
        const message = (
            <span
                id="snackbar-message-id"
                dangerouslySetInnerHTML={{ __html: this.state.message }}
            />
        );

        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                message={message}
                autoHideDuration={3000}
                onClose={this.handleSnackbarClose}
                open={this.state.open}
            />
        );
    }
}

export interface SnackbarOpts {
    message: string;
}

export function notify({ message }: SnackbarOpts) {
    openSnackbarFn({ message });
}

export default Notifier;
