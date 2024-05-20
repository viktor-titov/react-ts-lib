import './App.css'
import { Button } from './lib'

function App() {
    const onClick = (variant: string) => {
        console.log(`${variant} button clicked`);
    };

    return (
        <>
            <Button onClick={() => onClick("primary")}>primary</Button>
            <Button onClick={() => onClick("disabled")} disabled>
                disabled
            </Button>
        </>
    )
}

export default App
