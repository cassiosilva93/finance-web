import { StringHelper } from '@src/helpers/StringHelper';
import { useAuth } from '@src/hooks/auth/auth';
import { useState } from 'react';
import Avatar from 'react-avatar';
import { AiOutlinePoweroff } from 'react-icons/ai';
import LogoutModal from '../Modal/LogoutModal';
import { Container, IconLogout, UserArea, UserInfo, Welcome } from './style';

export default function Header() {
  const { user } = useAuth();
  const [isVisibleLogoutModal, setIsVisibleLogoutModal] = useState(false);

  function handleShowLogoutModal() {
    setIsVisibleLogoutModal(prev => !prev);
  }

  return (
    <>
      <Container>
        <Welcome className="welcome">
          <h1>
            Bem-vindo(a), <span>{StringHelper.getFirstName(user.name)}</span>
          </h1>

          <p>Aqui está o resumo da sua vida financeira</p>
        </Welcome>

        <UserArea>
          <Avatar name={user.name} size="56" round="50%" />

          <UserInfo>
            <p className="name">{user.name}</p>
            <p id="email">{user.email}</p>
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
