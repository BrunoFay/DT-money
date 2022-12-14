import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'
/* inset = top,bottom,left,right = 0 */
/* truque para alinhar itens ao centro
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
*/
export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }
    button[type='submit'] {
      height: 58px;
      border: 0;
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
        transition: all 0.2s;
      }
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`
export const CloseModalButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  font-size: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.5rem;
  grid-gap: 1rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};
  font-weight: bold;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
    svg {
      color: ${(props) => props.theme.white};
    }
  }
  &:hover:not([data-state='checked']) {
    background: ${(props) => props.theme['gray-600']};
    transition: all 0.2s;
  }
`
