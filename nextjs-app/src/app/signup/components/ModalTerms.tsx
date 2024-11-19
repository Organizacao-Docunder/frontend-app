import CustomModal from "@/components/CustomModal";

export default function ModalSecretAnswers({ isModalOpen, setIsModalOpen }) {
  return (
    <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} customStyle={"max-w-3xl"}>
      <div className="flex flex-col py-1 px-4 w-full justify-center">
        {/* <div className="flex items-center gap-1 mb-3">
          <span className="tag">#Python</span>
          <span className="tag">#Dev</span>
          </div> */}
        <div className="flex flex-col gap-2 max-h-72 overflow-y-auto">
          <h3 className="text-h3 mb-4 font-weight-600 text-neutral-2">Termos e Condições de Uso</h3>
          <p className="text-neutral-2">
            Boas vindas aos nossos Termos e Condições de Uso. Ao acessar ou utilizar nosso website, você concorda com estes termos e condições.
          </p>
          <h5 className="text-neutral-2 font-weight-500">Uso do website Docunder</h5>
          <p className="pl-4 text-neutral-2">
            1.1. Este website destina-se a pessoas desenvolvedoras de software, gerentes de projeto e produto, designers e demais profissionais da área de tecnologia.
          </p>
          <p className="pl-4 text-neutral-2">
            1.2. Ao aceitar estes termos você concorda em não utilizar o website para qualquer fim ilegal ou não autorizado.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Código Aberto
          </h5>
          <p className="pl-4 text-neutral-2">
            2.1. Este website possui  o seu código fonte disponível no <a className="text-primary-1" href="https://github.com/Organizacao-Docunder/App" target="_blank">GitHub</a> sob a licença de uso de Código Aberto MIT. Esta licença permite o uso, cópia, modificação, fusão, publicação, distribuição, sublicenciamento e/ou venda de cópias do software, desde que os avisos de direitos autorais e de permissão sejam incluídos em todas as cópias ou partes substanciais do software.
          </p>
          <p className="pl-4 text-neutral-2">
            2.2. Para saber mais, acesse o link: <a className="text-primary-1" href="https://github.com/Organizacao-Docunder/App/blob/main/LICENSE" target="_blank">https://github.com/Organizacao-Docunder/App/blob/main/LICENSE</a>
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Limitação de responsabilidade
          </h5>
          <p className="pl-4 text-neutral-2">
            3.1. Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou incapacidade de uso deste website, bem como pelas pessoas usuárias que utilizam o website para qualquer fim ilegal ou não autorizado.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Links para Outros Websites
          </h5>
          <p className="pl-4 text-neutral-2">
            4.1. Este website pode conter links para sites de terceiros que não são controlados ou operados por nós. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Segurança
          </h5>
          <p className="pl-4 text-neutral-2">
            5.1. É responsabilidade do usuário manter sua senha confidencial e adotar boas práticas de segurança, como não compartilhar a senha com terceiros e alterar a senha regularmente.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Alterações nos Termos
          </h5>
          <p className="pl-4 text-neutral-2">
            6.1. Reservamo-nos o direito de modificar estes Termos e Condições de Uso a qualquer momento. Recomendamos que você revise periodicamente estes termos para estar ciente de quaisquer alterações.
          </p>
          <h3 className="text-h3 mb-4 mt-4 font-weight-600 text-neutral-2">Política de Privacidade</h3>
          <p className="text-neutral-2">
            Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso website. Estamos comprometidos em proteger a sua privacidade e os seus dados pessoais. Nosso uso, coleta e armazenamento de informações estão em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e outras regulamentações de privacidade aplicáveis.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Informações coletadas no cadastro
          </h5>
          <p className="pl-4 text-neutral-2">
            1.1. Ao se cadastrar no website, a pessoa usuária deverá fornecer informações pessoais e válidas como nome e endereço de e-mail.
          </p>
          <p className="pl-4 text-neutral-2">
            1.2. É de responsabilidade da pessoa usuária manter as informações de cadastro válidas e atualizadas.
          </p>
          <p className="pl-4 text-neutral-2">
            1.3. A responsabilidade pelo uso do Docunder por menores de idade recai integralmente sobre os próprios usuários da plataforma, uma vez que não solicitamos dados de data de nascimento como requisito para o cadastro.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Uso das Informações
          </h5>
          <p className="pl-4 text-neutral-2">
            2.1. As informações pessoais coletadas são usadas para validação de cadastro e acesso ao website, e não serão utilizadas para qualquer fim que não vá de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Cookies
          </h5>
          <p className="pl-4 text-neutral-2">
            3.1. Utilizamos cookies para coletar informações sobre como você interage com nosso website e para personalizar sua experiência de navegação. Você pode optar por desativar os cookies em seu navegador, mas isso pode afetar a funcionalidade do website.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Compartilhamento de Informações
          </h5>
          <p className="pl-4 text-neutral-2">
            4.1. Não compartilhamos suas informações pessoais com terceiros sem seu consentimento, exceto em casos amparados pela lei.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Segurança
          </h5>
          <p className="pl-4 text-neutral-2">
            5.1 Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Realizamos uma atualização obrigatória de senha a cada 6 meses, na qual o usuário é convidado a atualizar sua senha, visando garantir a segurança operacional e o acesso protegido ao Docunder.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Alterações na Política de Privacidade
          </h5>
          <p className="pl-4 text-neutral-2">
            6.1. Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. Recomendamos que você revise esta política a cada 6 meses para estar ciente de quaisquer alterações.
          </p>
          <p className="pt-4 text-neutral-2">
            Ao utilizar nosso website, você concorda com os termos desta Política de Privacidade.
          </p>
        </div>
        <div className="flex justify-center w-full gap-20">
          <button onClick={() => setIsModalOpen(false)} className="rounded-lg py-2 px-4 mt-8 bg-primary-1 text-h5 text-neutral-1 font-weight-bold">Fechar</button>
        </div>
      </div>
    </CustomModal>
  )
}