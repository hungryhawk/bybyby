import { useState } from 'react';
import './App.scss';
import { Button } from './components/common/Button';

function App() {
    const [name, setName] = useState('');
    return (
        <>
            {name}
            <div onClick={() => setName('psha')}>lll</div>
            <Button />
        </>
    );
}

export default App;
