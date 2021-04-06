import { Helmet } from 'react-helmet';
import AppRouter from './route';

function App() {
    return (
        <div>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,700i&amp;subset=latin-ext"
                    rel="stylesheet"
                />
            </Helmet>
            <AppRouter />
        </div>
    );
}

export default App;
