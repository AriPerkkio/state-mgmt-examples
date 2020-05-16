import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Routes from 'views/Routes';
import Sidebar from 'components/common/Sidebar';
import CodeBlock, { CodeBlockProvider } from 'components/common/CodeBlock';

const App = () => (
    <HashRouter>
        <Sidebar />
        <CodeBlockProvider>
            <main className='content'>
                <section className='content-main'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            {Routes.map(props => (
                                <Route key={props.path} {...props} />
                            ))}
                        </Switch>
                    </Suspense>
                </section>
                <CodeBlock />
            </main>
        </CodeBlockProvider>
    </HashRouter>
);

export default App;
