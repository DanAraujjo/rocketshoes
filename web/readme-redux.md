## React Redux

Instale o pacote

```
yarn add redux react-redux
```

Crie o arquivo [src/store/index.js](/src/store/index.js)

Importe o _Provider_ e _store_ no arquivo [src/App.js](/src/App.js)

Crie o arquivo [src/store/modules/rootReducer.js](/src/store/modules/rootReducer.js)

Crie o arquivo [src/store/modules/cart/reducer.js](/src/store/modules/cart/reducer.js)

Importe o _connect_ na pagina desejada.
Exemplo:

```
import { connect } from 'react-redux';

export default connect()(Home);
```

Instale

```
yarn add reactotron-react-js reactotron-redux
```

Crie o arquivo [src/config/ReactotronConfig.js](/src/config/ReactotronConfig.js)
