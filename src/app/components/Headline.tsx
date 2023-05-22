import { isConstructorDeclaration } from "typescript";
import styles from "../globals.css";

export default function Headline(props) {
  console.log(props)
  return (
    <div>
      <h1 className="h1">{props.title} Page</h1>
      <p>-----</p>
      <p>-----</p>
    </div>
  )
}
