import React from 'react';
import ReactDOM from 'react-dom/client';
import { Saludar } from './Saludar';
import { Button } from './Button';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
       <Saludar
       producto = "mayonesa"
       marca = "dava"
       precio = {300}
       />
       <Button/>

</>);

