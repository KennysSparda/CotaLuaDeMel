import {useState} from 'react'

export default function Button(props) {
  const [show, setShow] = useState(false);

  // function to toggle Show / Hide pix menu
  const showMenu = () => {
    setShow(!show)
  }

  // Verify if pix button is pressed
  if (show == true) {
    return (
      <div className="pix-button-expanded">
        <p>Encaminhar pix para:</p>
        <p><strong>Tipo chave:</strong> E-mail</p>
        <p id="key"><strong>Chave:</strong> cesianesouza@outlook.com</p>
        <p><strong>Banco:</strong> C6 Bank</p>
        <div className="obs">
          <p><strong>OBS: </strong>Favor encaminhar o comprovante <a target="_blank" rel="noopener noreferrer" href="https://contate.me/pix-cota-lua-de-mel"><h1 id="link-number" >Aqui</h1></a> para termos um controle</p>
        </div>
      </div>
    )
  } else {
    return (
      <button className="pix-button" onClick={showMenu}>{props.children}</button>
    )
  }
}
