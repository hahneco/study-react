'use client'

import '../../globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
import Headline from '../Headline';
import Link from 'next/link';

const Main = (props) => {
  console.log(props)
  const ITEMS = [
    {
      href: "https://segakuin.com/css/tailwind/grid.html",
      title: "Contents1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
      href: "https://segakuin.com/css/tailwind/grid.html",
      title: "Contents2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
      href: "https://www.youtube.com/watch?v=h4981N9af18&list=PLwM1-TnN_NN6fUhOoZyU4iZiwhLyISopO&index=7",
      title: "Contents3",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
      href: "https://qiita.com/FumioNonaka/items/0e97dca13528fb3366a0",
      title: "Contents4",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="container">
        <Headline
          page={props.page}
        >
          code={<p className="my-3 text-center"><span>pages/{props.page}.js</span></p>}
        </Headline>
      </div>

      <div className='container grid grid-cols-4 gap-4'>
        {ITEMS.map((item) => {
          return (
            <div key={item.href} className="px-6 py-4 bg-red-50 divide-red-300 border-solid border-2 rounded-md no-underline">
              <Link href={item.href} legacyBehavior>
                <a>
                  <h3 className='font-bold text-xl mb-2 no-underline'>{item.title}</h3>
                  <p className='text-gray-500 text-base no-underline'>{item.description}</p>
                </a>
              </Link>

            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Main;
