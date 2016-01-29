import React from 'react'

let Label = ({name}) => <p style={{color: '#ddd'}}>{ `Hello ${name} 😉` }</p>
let Button = ({label, name}) => <button type="button" onClick={() => console.log('REACT IS MOUNTED : '+ name) }>{ label }</button>

var name = "YannickDot"

export class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Label name={name} />
        <Button label="CLICK ME" name={name}/>
      </div>
    )
  }
}
