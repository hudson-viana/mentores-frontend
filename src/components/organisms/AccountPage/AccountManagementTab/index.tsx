import ButtonFullWidth from '@/components/atoms/ButtonFullWidth';
import {
  Divider,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '@/components/organisms/AccountPage/styles';
import {
  AccountManagementContent,
  ExplanationContainer,
  ExplanationWrapper,
  ButtonsWrapper,
} from './styles';

export function AccountManagementTab() {
  return (
    <TabContainer value="account-management">
      <TitleTab>Gestão da conta</TitleTab>
      <SubtitleTab>
        Você tem duas opções para se ausentar da plataforma: desativar ou
        excluir sua conta.
      </SubtitleTab>

      <AccountManagementContent>
        <ExplanationWrapper>
          <ExplanationContainer>
            Desative sua conta e ela será temporariamente suspensa, mantendo
            seus dados e permitindo reativação a qualquer momento.
          </ExplanationContainer>
          <ExplanationContainer>
            Ao excluir, ela será deletada permanentemente após 30 dias. Após
            esse prazo, seus dados serão removidos definitivamente.
          </ExplanationContainer>
        </ExplanationWrapper>
        <Divider />
        <ButtonsWrapper>
          <ButtonFullWidth textcolor="gray">Desativar conta</ButtonFullWidth>
          <ButtonFullWidth textcolor="red">Excluir conta</ButtonFullWidth>
        </ButtonsWrapper>
      </AccountManagementContent>
    </TabContainer>
  );
}
