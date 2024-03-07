import { useState } from 'react';
import { Avatar } from './components/common/Avatar/Avatar';
import { Button } from './components/common/Button/Button';

function App() {
    const [fame, setFame] = useState('');
    console.log('first');
    return (
        <>
            {fame}
            <div onClick={() => setFame('psha')}>lll</div>
            <Button />
            <Avatar />
        </>
    );
}

export default App;
