'use client'

import 'bootstrap/dist/css/bootstrap.css'
import Headline from '../components/Headline';

const Main = (props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="container">
        <Headline
          page={props.page}
        >
          code={<p className="my-3 text-center"><span>pages/{props.page}.js</span></p>}
        </Headline>
      </div>
    </main>
  )
}

export default Main;
