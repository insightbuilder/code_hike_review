import Child from './Child'

export default function Parent(props) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child name={props.name} />
    </div>
  )
}
