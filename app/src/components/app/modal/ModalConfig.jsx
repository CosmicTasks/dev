import React, { useState } from "react";

function Modal({ onClose, loggedIn, onLogout, onChangeAvatar }) {
  const [avatar, setAvatar] = useState(""); // Estado para o avatar, caso queira  permitir que o usuário mude

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Configurações</h2>
        {loggedIn ? (
          <>
            <button onClick={onLogout}>Deslogar</button>
            <button onClick={onChangeAvatar}>Mudar Avatar</button>
          </>
        ) : (
          <p>Faça login para acessar as configurações.</p>
        )}
      </div>
    </div>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Função para deslogar o usuário
  function handleLogout() {
    //  lógica para deslogar o usuário aqui
    alert("Usuário deslogado com sucesso!");
    setLoggedIn(false);
  }

  // Função para mudar o avatar do usuário
  function handleChangeAvatar() {
    //  lógica para mudar o avatar aqui
    // Por exemplo, você pode abrir um seletor de arquivo para o usuário escolher uma imagem
    alert("Implemente a lógica para mudar o avatar aqui!");
  }

  // Função para abrir/fechar o modal
  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <div>
      <button onClick={toggleModal}>Abrir Modal</button>
      {modalOpen && (
        <Modal
          onClose={toggleModal}
          loggedIn={loggedIn}
          onLogout={handleLogout}
          onChangeAvatar={handleChangeAvatar}
        />
      )}
    </div>
  );
}

export default App;
