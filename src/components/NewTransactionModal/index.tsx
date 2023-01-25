import * as Dialog  from "@radix-ui/react-dialog";
import { Close, Content, Overlay, Portal, Title } from "./styles";

export function NewTransactionModal() {
  return (
    <Portal>
      <Overlay/>
      <Content>
        <Title>Nova Transação</Title>

        <Close >X</Close>
      </Content>
    </Portal>
  );
}
