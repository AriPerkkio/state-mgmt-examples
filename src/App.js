import React, { Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Routes from 'views/Routes';
import Sidebar from 'components/common/Sidebar';
import { Loader } from 'components/common/Indicators';
import CodeBlock, { CodeBlockProvider } from 'components/common/CodeBlock';

const App = () => (
    <HashRouter>
        <Sidebar />
        <CodeBlockProvider>
            <main className='content'>
                <section className='content-main'>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            {Routes.map(props => (
                                <Route key={props.path} {...props} />
                            ))}

                            <Redirect to={Routes[0].path} />
                        </Switch>
                    </Suspense>
                </section>
                <CodeBlock />
            </main>
        </CodeBlockProvider>
    </HashRouter>
);

export default App;
