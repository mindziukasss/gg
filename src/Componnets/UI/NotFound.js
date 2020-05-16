import React from 'react';
import './style/404.scss'

const NotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Oops! Šio puslapio nepavyko rasti</h2>
                <p>Deja, Jūsų ieškomas puslapis neegzistuoja arba buvo pašalintas.</p>
                <a href="/">Grįžti į pradžią</a>
            </div>
        </div>
    );
};

export default NotFound;