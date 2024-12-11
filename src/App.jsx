import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <img src="./assets/img/logoExtensa.png" alt="" className= 'logo'/>
        <button className='contact-button'> Entre em Contato </button>
      </div>

      <div className='conteiner'>

        <div className='intro' >
          <h1> Reprograme sua história </h1>
          <h3> O curso que ajuda a sua prefeitura a mudar o seu futuro através da tecnologia </h3>
          <button> Grade de Ensino <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> </button>
          <button> Kit Desenvolve <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca"  className = 'button-kit' /></button>
        </div>
  
        <div className= 'registration'>
          <h1 className='highlight-blue'> FAÇA SUA INSCRIÇÃO </h1>
          <h3 className= 'registration-text'> Selecione a sua cidade e dê um start nessa nova jornada! 🚀</h3>
          <button className='button-Itabira'> Itabira </button>
          <button className= 'button-Bom-Despacho'> Bom Despacho </button>
        </div>

        <div className= 'moment'>
          <span className= 'highlight-purple'> NO SEU MOMENTO </span>
          <h1>Programa de formação para desenvolvedor</h1>
          <h3>E outros profissionais em tecnologia, informação e comunicação (TIC)</h3>

          <div className= 'block'> 
            <h1 className= 'block-title'> No 1º semestre o aluno irá desenvolver um app e um site </h1>
            <p className='block-text'> Nossa educação é oprientada a projetos!</p>
            <p className='block-text'> Domine diversas linguagens de programação! <br /> Domine seu futuro! </p>
          </div>

          <div className= 'tim-block'>
            <h1 className= 'tim-block-title'> Nosso próposito é transformar vidas por meio da educação e da tecnologia </h1>
            <p className= 'tim-block-quotes'>
            "Se eu fosse um estudante e tivesse 10 anos de idade, acredito que seria mais importante aprender a programar do que falar inglês. Não estou dizendo que as pessoas não devem aprender o idioma - mas essa é uma linguagem que você pode usar para expressar com 07 bilhões de pessoas no mundo” 
            </p>
            <p className= 'tim-block-name'> - Tim CEO da Apple - </p>
          </div>

        </div>

        <div className='border'>
          <span className= 'highlight-purple'> SEM FRONTEIRAS </span>
          <p>
          Com o Projeto Desenvolve o estudante tem acesso a mais de <span className= 'purple-bolder'> 1200h </span> de aulas gravadas para assistir no horário que se encaixar melhor na rotina!</p>
          {/* Aqui colocar o vídeo do link a seguir: https://www.youtube.com/watch?v=-mCfcoftb6M&t=3s */}
        </div>

        <div className='course'>
          <h1 className= 'couse-title'> Curso prático e guiado para o futuro </h1>
          <p className= 'course-text'> Capacitação para se tornar um profissional bem remunerado em poucos meses </p>
        </div>

        <div className= 'graph'>
          <span className= 'highlight-purple'> PRIMEIRO PASSO RUMO AO FUTURO </span>
          <h1 className= 'graph-title'> Sabe aquela carreira que você sonha em ter? O sucesso dela começa aqui! </h1>
          <p className= 'graph-text'> Mas uma coisa é certa: <br /> Você vai precisar de tecnologia e nós ajudamos a cada passo desse caminho </p>
          {/* Aqui colocar a imagem do gráfico */}
        </div>

        <div className= 'partners'>
          <h1 className= 'highlight-gradient'> PERCURSO DE APRENDIZAGEM </h1>
          <h1 className= 'highlight-gradient'> DESENHADO POR ESPECIALISTAS </h1>
          <p> Conteúdo das aulas produzidos em parceria com a <span className= 'bold-yellow'> UFMG </span> - <span className='italic'> uma das melhores universidades nacionais. </span> Os alunos terão também acesso a matériasi de empreendedorismo com metodologia <span className='bold-blue'> SEBRAE</span>, para aprender a transformar seu conhecimento em dinheiro. Além disso, o app <span className='bold-purple'> Rossetta Stone </span> oferece ao aluno, um curso de inglês do básico ao avançado </p>
          
          <div>
          {/* Aqui colocar as imagens dos parceiros do desenvolve */}
          </div>

        </div>

        <div className= 'boxes'>
          
          <div className='box1'> 
            {/* Imagem do relógio */}
            <h2> Assista de onde e quando quiser </h2>
            <p> As aulas são gravadas! <br /> Aulas ao vivo online e eventos presenciais serão notificados com antecedência em seu calendário. </p>
          </div>

          <div className='box2'>
            {/* Imagem do livro*/}
            <h2> Aprenda inglês do básico ao avançado </h2>
            <p> Curso de inglês em uma das maiores plataformas de ensino do mundo: Rossetta Stone. <br /> Inglês regular e técnico para avalançar a sua carreira. </p>
          </div>

          <div>
            {/* Imagem do porquinho */}
            <h2> Faça dinheiro enquanto estuda </h2>
            <p> Projetos reais, com material e metodologia SEBRAE para que você aprenda a ganhar dinheiro com seus novos conhecimentos o mais rápido o possível. </p>
          </div>

          <div>
            {/* Imagem da maleta */}
            <h2> Mentoria de Carreira </h2>
            <p> Tenha a orientação de profissionais com grande experiência no mercado de trabalho, além de acompanhamento psicopedagógico. </p>
          </div>
        
          <div>
            {/* Imagem do mapa mental */}
            <h2> Vaga específicas para alunos </h2>
            <p>Se conecte e conquiste vagas em empresas parceiras do mundo inteiro através da nossa plataforma de rede social interna exclusiva </p>
          </div>

          <div>
            {/* Imagem do aluno de mão pra cima */}
            <h2> Você não está sozinho</h2> 
            <p> Mentoria online disponível 12h por dia com turores; <br /> Tira-dúvidas 24h com nossa Inteligência Artificial; <br /> Acompanhamento pedagógico</p>
          </div>

        </div>
        
        <div>
          <span className='highlight-purple'> O POR QUÊ DO PD </span>
          <h1> Diferenciais do Projeto Desenvolve </h1>
        
          <div className='list1'>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Evento de boas-vindas </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Kit enpoderamento </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Governança local </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Ciclos de palestras presenciais </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Hacktons e workshops presenciais </p>
          </div>

          <div className='list2'>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Notebook (Hardware) </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Internet móvel (conectividade) </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Gestão de carreira (profissionais do mercado) </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Ofertas de vagas de emprego </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Soft Skills </p> 
          </div>

          <div className='list3'>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Sucesso do aluno (plantoões 12h/dia) </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Projetos conectados à realidade das cidades </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Aprendizagem baseada em projetos (ABP/PBL) </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Curso de inglês </p>
            <p className='differential'> <img src={'./assets/img/home/witheArrow.png'} alt="Seta branca" className='button-grade' /> Pacote de acessibilidade </p>            
          </div>

          <div className='hardware-block'>
            {/* COlocar aqui a foto com o notebook e bolhas ligadas à ele */}
          </div>
        </div>

        <div className='grade-box'>
          <span className='highlight-purple'> GRADE CURRICULAR </span>
          <h1> Roteiro de ensino Desenvolve </h1>
        </div>
          
        <div>
          <span className='highlight-purple'> KIT ESTUDANTE DESENVOLVE </span>
          <h1> Cada um dos alunos recebe um Kit Desenvolve </h1>
          <ul>
            <li> Notebook </li>
            <li> Sim card 4G </li>
            <li> Tecçadp ABNT2 </li>
            <li> Mouse 1200 DPI sem fio </li>
            <li> Suporte portátil de notebook </li>
            <li> Mochila </li>
            <li> Camiseta 100% algodão </li>
          </ul>
        </div>

      </div>

      <div className='footer'>

        <div className='social-media'> 
          {/* colocar logo desenvolve aqui */}
          <span className='whatsapp'> <img src="assets\img\wpp.png" alt="Logo do whatsapp em cor roxa" width={20}/> +55 (31) 98310-9936 <br /> </span> 
          <span className='instagram'> <img src="assets\img\insta.png" alt="Logo do instagram em cor roxa" width={20}/> projetodesenvolve_br </span> {/* Colocar o icon do instagram e link clicavel */}
        </div>

        <div className='pd-info'>
          <p className='address'> Rua Tomé de Souza, 810, cj 401, Savassi, Belo Horizonte/MG - CEP: 30..140-135</p>
          <p className='cnpj'> PROSPERARE EDUCAÇÃO, CULTURA E CIDADANIA S.A - CNPJ n 10.976.971/0001-25 </p>
          <span className='rights'> Todos os direitos reservados </span>
          <span className='version'> Versão 3.0.0 </span>
        </div>

      </div>

    </>
  )
}

export default App
