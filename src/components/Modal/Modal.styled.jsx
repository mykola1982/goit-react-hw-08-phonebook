import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContet = styled.div`
  position: absolute;

  display: flex;

  align-items: center;
  justify-content: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  max-width: 450px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: 2px solid #fff;
`;
