import theme from '@src/theme';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Content = styled.div`
  padding: 20px;

  p {
    font-size: 12px;
  }

  .info-drag-and-drop {
    margin-top: 35px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    text-align: center;

    span {
      color: ${theme.colors.orange[700]};
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px 20px;
  background-color: ${transparentize('0.7', '#28262E')};

  button {
    background: ${theme.colors.orange[700]};
    border: 0;
    border-radius: 5px;
    height: 40px;
    width: 150px;
    font-size: 15px;
    color: ${theme.colors.txt};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${transparentize(0.3, theme.colors.orange[700])};
      color: ${theme.colors.txt};
    }
  }
`;

export const CancelContainer = styled.a`
  margin-right: 30px;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.orange[700]};
  }
`;

interface DropzoneContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

const isDragActive = css`
  border-color: ${theme.colors.green[900]};
  background-color: ${transparentize(0.95, theme.colors.green[900])};
`;

const isDragReject = css`
  border-color: ${theme.colors.red[900]};
  background-color: ${transparentize(0.95, theme.colors.red[900])};
`;

export const DropzoneContainer = styled.div<DropzoneContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 30px;
  border: 2px dashed ${theme.colors.orange[700]};
  cursor: pointer;

  div {
    margin-top: 50px;

    strong {
      color: ${theme.colors.orange[700]};
    }
  }

  ${props => props.isDragActive && isDragActive}
  ${props => props.isDragReject && isDragReject}
`;

export const UploadMessage = styled.p``;
