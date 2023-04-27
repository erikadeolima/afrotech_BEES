import React from 'react';
import './Text.css';

function Text(){
  return (
    <div className="text">
      <div id="text">
        <h1 className='h1'>Lorem Ipsum?</h1>
        <h4 className='h4'>O que é Lorem Ipsum?</h4>
        <p className='texto'>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas a cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.</p>
        <h4 className='h4'>De onde isso vem?</h4>
        <p className='texto'>Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma peça da literatura latina clássica de 45 aC, com mais de 2.000 anos de idade. Richard McClintock, professor de latim no Hampden-Sydney College, na Virgínia, pesquisou uma das palavras latinas mais obscuras, consectetur, de uma passagem de Lorem Ipsum e, examinando as citações da palavra na literatura clássica, descobriu a fonte indubitável. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal) de Cícero, escrito em 45 AC. Este livro é um tratado sobre a teoria da ética, muito popular durante o Renascimento. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..", vem de uma linha na seção 1.10.32.</p>
        <p className='texto'>O pedaço padrão de Lorem Ipsum usado desde 1500 é reproduzido abaixo para os interessados. As seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de Cícero também são reproduzidas em sua forma original exata, acompanhadas por versões em inglês da tradução de 1914 por H. Rackham.</p>
      </div>
    </div>
  );
};

export default Text;