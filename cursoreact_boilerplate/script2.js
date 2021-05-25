const atributos = {
    id: 'imgPerfil',
    src: 'https://uifaces.co/our-content/donated/noplz47r59v1uxvyg8ku.png',
    className: 'imagen_avatar',
    width: 200
}

// const element = <h1 className="main">Título de la página</h1>;

// const element = React.createElement('h1', { className: 'main' }, 'Título de la página');

const element =
    <div>
        {/* Comentamos las cosas */}
        <img {...atributos} />
    </div>;

ReactDOM.render(element, document.getElementById('root'));