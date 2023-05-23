'use client'

// import 'bootstrap/dist/css/bootstrap.css'
import '../../globals.css'
import Headline from '../Headline';

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

      <div className="container">
        <div className="px-6 py-4 grid-rows-4">
          <h3 className='font-bold text-xl mb-2'>title</h3>
          <p className='text-gray-700 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div className="px-6 py-4 grid-rows-4">
          <h3 className='font-bold text-xl mb-2'>title</h3>
          <p className='text-gray-700 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div className="px-6 py-4 grid-rows-4">
          <h3 className='font-bold text-xl mb-2'>title</h3>
          <p className='text-gray-700 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div className="px-6 py-4 grid-rows-4">
          <h3 className='font-bold text-xl mb-2'>title</h3>
          <p className='text-gray-700 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
      </div>
    </main>
  )
}

export default Main;
