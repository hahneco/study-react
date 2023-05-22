import { isConstructorDeclaration } from "typescript";
import styles from "../globals.css";

export default function Headline(props) {
  console.log(props)
  return (
    <div>
      <style jsx>{`
        h1 {
          color: pink;
        }
      `}</style>

      <h1 className="h1">{props.title} Page</h1>
      <p className="my-3 text-primary text-center">Get started by editing</p>
      <p className="my-3 text-center"><small>pages/{props.page}.js</small></p>
    </div>
  )
}