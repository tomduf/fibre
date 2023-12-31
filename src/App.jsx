import {OrbitControls} from '@react-three/drei'
import Fibre from "./Fibre.jsx"
import './App.css'

function App() {

    return <>

        <OrbitControls makeDefault />

        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight castShadow={true} position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04}/>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={ 0.5 } />

        <Fibre />

    </>
}

export default App
