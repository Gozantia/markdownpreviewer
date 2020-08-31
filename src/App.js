
import marked from 'marked';
import React, { Component } from 'react'

let textoinicial = `
 Lorem ipsum

  **Preview**
  > Bloque de citas!

  # Heading
  ## Heading 2

  - lista item 1
  - lista item 2
  - lista item 3


  [Enlace](https://google.com)

  This is a inline \`<div> </div>\`
  This is a block of code:

  \`\`\`
    let a = 1;
    let b = 2;
    let c = a + b;
  \`\`\`

  ![imagen](https://makaia.org/wp-content/uploads/2020/03/AGSerCapaces-1024x1005.jpg)
`;

export default class App extends Component{
  state = {
    text: textoinicial
  }

  cambioTexto = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state;
    
    const markdown = marked(text, { breaks: true });
    
    return(
      <div>
        <h2 className="text-center m-4">Generador de código HTML</h2>
        <div className="row">
          <div className="col-6 mx-auto">
            <h6 className="text-center">Ingresa el texto</h6>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.cambioTexto}/>
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto">         
            <h6 className="text-center">Resultado:</h6>
            <div className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview" />
          </div>
        </div>
      </div>
    );
  }
}
