import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Card from './components/Card'
// import Test from './components/Test'
import cat from '../src/images/cat-551554_1920.jpg'

function App() {
    return (
        <div>
            <Navbar />
            {/* <Main/> */}
            <Card
            img="water-3354062_1920.jpg"
            rating="5"
            reviewCount={6}
            country="sweden"
            title="Learn to surf"
            price={127} />







            {/* <Test
            joke='Vad är ankan'
            punchline='Inte vet jag!'
            isPun={true}/>

            <Test
            joke='Vad är apan'
            punchline='Jag vet!'
            isPun={true}/>
            <Test
            joke='Vad är skalman'
            punchline='Sover!'
            isPun={true}/>
            <Test
            joke=''
            punchline='Jojo!'
            isPun={false}/> */}

            {/* <Test
                img
                src={cat}
                alt=""
                name="Alex"
                phoneNumber="035843905"
                email="caaaat@123"
            />
            <Test
                img
                src={cat}
                alt=""
                name="Niklas"
                phoneNumber="12345"
                email="mammacat@123"
            />
            <Test
                img
                src={cat}
                alt=""
                name="Adam"
                phoneNumber="123"
                email="ammacat@123"
            />
            <Test
                img
                src={cat}
                alt=""
                name="David"
                phoneNumber="123"
                email="dksjhdiscat@123"
            /> */}
        </div>
    )
}

export default App
