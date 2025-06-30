import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Stats from './Stats'
import Pricing from './Pricing';
import OpenAcc from '../OpenAcc';

export default function HomePage (){
    return(
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAcc />
        </>
    )
}