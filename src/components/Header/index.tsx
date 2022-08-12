import { useState } from 'react';
import Avatar from 'react-avatar';
import { AiOutlinePoweroff } from 'react-icons/ai';
import LogoutModal from '../Modal/LogoutModal';
import { Container, IconLogout, UserArea, UserInfo, Welcome } from './style';

export default function Header() {
  const [isVisibleLogoutModal, setIsVisibleLogoutModal] = useState(false);

  function handleShowLogoutModal() {
    setIsVisibleLogoutModal(prev => !prev);
  }

  return (
    <>
      <Container>
        <Welcome className="welcome">
          <h1>
            Bem-vindo(a), <span>Cassio</span>
          </h1>

          <p>Aqui está o resumo da sua vida financeira</p>
        </Welcome>

        <UserArea>
          <Avatar name="Cassio Oliveira" size="56" round="50%" />

          <UserInfo>
            <p className="name">Cassio Oliveira Silva</p>
            <p id="email">cassiointw1993@gmail.com</p>
          </UserInfo>
        </UserArea>

        <IconLogout>
          <a>
            <AiOutlinePoweroff size={25} onClick={handleShowLogoutModal} />
          </a>
        </IconLogout>
      </Container>

      <LogoutModal
        isVisibleModal={isVisibleLogoutModal}
        handleCloseModal={handleShowLogoutModal}
      />
    </>
  );
}
