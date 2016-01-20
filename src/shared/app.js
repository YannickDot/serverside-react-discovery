import React from 'react'

let Label = ({name}) => <p style={{color: '#ddd'}}>{ `Hello ${name} 😉` }</p>
let Button = ({label}) => <button type="button" onClick={() => console.log(2) }>{ label }</button>

export class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Label name="Yannick"/>
        <Button label="CLICK ME" />
      </div>
    )
  }
}
