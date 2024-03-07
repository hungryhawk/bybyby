import { useState } from 'react';
import './App.scss';
import { Button } from './components/common/Button';

function App() {
    const [fame, setFame] = useState('');
    console.log('first');
    return (
        <>
            {fame}
            <div onClick={() => setFame('psha')}>lll</div>
            <Button />
        </>
    );
}

export default App;
