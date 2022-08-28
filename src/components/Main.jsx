import React from 'react';

const Main = ({children}) => {
    return (
        <main className="main">
            <div className="wrap">
                {children}
            </div>
        </main>
    );
}

export default Main;