
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';

import Card from './components/Card';


function App() {
 

  return (
    <>
   {/* nav bar is start  */}
<Navbar logo="ABES"/>
  {/* nav bar closed */}
<br/>

{/* card is start */}

<Card name="abhinav" education="b.com" image="https://img.freepik.com/free-vector/cute-panda-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat-vector_138676-8342.jpg?semt=ais_hybrid&w=740&q=80"/>
<br/>
<Card name="preet" education="bba" image="https://i.pinimg.com/736x/2e/ee/22/2eee22af81bf4d66a70c64576e137349.jpg"/>
<br/>
<Card name="rahul" education="m.com" image="https://i.pinimg.com/736x/e5/b3/55/e5b3556a0dc3b5d107c4bb8e077d6b89.jpg" />
{/* card is cloesd */}

{/* this is image code statt */}

{/* image code is clode */}
    </>
  )
}

export default App
