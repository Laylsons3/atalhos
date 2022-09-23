import { useMemo, useState } from 'react';
import Link from 'next/link';
import { municipios } from '../components/Dados/Municipais';
import Head from 'next/head';

function Home() {
    const [busca, setBusca] = useState('');

    const munFiltrados = useMemo(() => {
        const lowerBusca = busca.toLocaleLowerCase()
        return municipios.filter((municipio) => 
            municipio.nome.toLocaleLowerCase().includes(lowerBusca));
    }, [busca])

  return (
    <div>
      <Head>
        <title>Atalhos CND</title>
        <meta name="title" content="Atalhos CND"/>
        <meta name="description" content="Atalhos para emissão das principais certidões negativas."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://atalhocnd.com.br/"/>
        <meta property="og:title" content="Atalhos CND"/>
        <meta property="og:description" content="Atalhos para emissão das principais certidões negativas."/>
        <meta property="og:image" content="https://atalhocnd.com.br/image.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://atalhocnd.com.br/"/>
        <meta property="twitter:title" content="Atalhos CND"/>
        <meta property="twitter:description" content="Atalhos para emissão das principais certidões negativas."/>
        <meta property="twitter:image" content="https://atalhocnd.com.br/image.png"/>
        <meta name="google-site-verification" content="kQtiYuplM3IY350vq6CkuUxnxQnoQptbut6CpuhwXFk" />
      </Head>

        <header className='flex justify-center'>
          <h2 className='text-2xl text-center font-bold'>
            EMISSÃO E VALIDAÇÃO DE CERTIDÕES
          </h2>
        </header>

        <div className='flex justify-center my-2'>
          <Link href="/pf">
            <a className='bg-green-700 text-green-50 hover:underline hover:bg-green-600 rounded-lg px-4 py-1'>
              Pessoa Física
            </a>
          </Link>
        </div>

        <div className='flex justify-center'>
          <div className='bg-white rounded-xl max-w-4xl w-full drop-shadow-xl'>
              <h3 className='text-center text-xl font-bold py-4'>PESSOA JURÍDICA</h3>
              <section className='grid grid-cols-2 md:grid-cols-4 p-4 gap-4 text-center font-medium'>
                  <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                      <p>CNPJ</p>
                      <div className='my-2'>
                          <a target="_blank" rel="noreferrer" href="http://servicos.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp">
                              <input id="botao" className='bg-green-300 hover:bg-green-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Emitir"></input>
                          </a>
                      </div>
                  </div>
                  <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                      <p>CND Federal</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir">
                              <input id="botao" className='bg-green-300 hover:bg-green-400 rounded-md text-black py-1 w-16 hover:cursor-pointer' type="button" value="Emitir"></input>
                          </a>
                          <a target="_blank" rel="noreferrer" href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Autenticidade/Confirmar">
                              <input id="botao" className='bg-red-300 hover:bg-red-400 rounded-md text-black py-1 w-16 hover:cursor-pointer' type="button" value="Validar"></input>
                          </a>
                      </div>
                  </div>
              <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                      <p>CND Estadual</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="https://internet-consultapublica.apps.sefaz.ce.gov.br/certidaonegativa/preparar-consultar">
                              <input id="botao" className='bg-green-300 hover:bg-green-400 rounded-md text-black py-1 w-16 hover:cursor-pointer' type="button" value="Emitir"/>
                          </a>
                          <a target="_blank" rel="noreferrer" href="https://internet-consultapublica.apps.sefaz.ce.gov.br/certidaonegativa/preparar-validacao">
                              <input id="botao" className='bg-red-300 hover:bg-red-400 rounded-md text-black py-1 w-16 hover:cursor-pointer' type="button" value="Validar"></input>
                          </a>
                      </div>
                  </div>
            
                  <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                  <p className='textoA'>CRF FGTS</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf">
                              <input id="botao" className='bg-cyan-300 hover:bg-cyan-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Emitir/Validar"></input>
                          </a>
                      </div>
              </div>
              <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                  <p className='textoA'>CND Trabalhista</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="https://www.tst.jus.br/certidao1">
                              <input id="botao" className='bg-cyan-300 hover:bg-cyan-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Emitir/Validar"></input>
                          </a>
                      </div>
              </div>
              <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                  <p className='textoA'>Falência</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="https://autdoc.tjce.jus.br/">
                              {/* Emitir */}
                          {/* https://sirece.tjce.jus.br/sirece-web/nova/solicitacao.jsf;jsessionid=WopYm2Wo1S5aryJJ5tqv2prAE2XFchMV7_HhXTuA.tjsrp03 */}
                              <input id="botao" className='bg-yellow-300 hover:bg-yellow-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Validar"></input>
                          </a>
                      </div>
              </div>
              <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                  <p className='textoA'>CREA-CE</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="https://crea-ce.sitac.com.br/app/view/sight/externo?form=ConsultarCertidaoSimples">
                              <input id="botao" className='bg-yellow-300 hover:bg-yellow-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Validar"></input>
                          </a>
                      </div>
              </div>
              <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                  <p className='textoA'>Anvisa</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="https://www9.anvisa.gov.br/peticionamento/sat/formularios/CertificadoCertidao/frmValidaCertidao.asp?sarea=GGTPS">
                              <input id="botao" className='bg-yellow-300 hover:bg-yellow-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Validar"></input>
                          </a>
                      </div>
              </div>
              <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                  <p className='textoA'>SINTEGRA</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="https://servicos.sefaz.ce.gov.br/internet/Sintegra/Sintegra.Asp?estado=CE">
                              <input id="botao" className='bg-yellow-300 hover:bg-yellow-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Validar"></input>
                          </a>
                      </div>
              </div>
              <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                  <p className='textoA'>SPED</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="http://www.sped.fazenda.gov.br/appConsultaSituacaoContabil/">
                              <input id="botao" className='bg-yellow-300 hover:bg-yellow-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Validar"></input>
                          </a>
                      </div>
              </div>
              <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                  <p className='textoA'>JUCEC-CE</p>
                      <div className='flex justify-center gap-1 my-2'>
                          <a target="_blank" rel="noreferrer" href="https://www.jucec.ce.gov.br/projeto/validar-documentos/">
                              <input id="botao" className='bg-yellow-300 hover:bg-yellow-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Validar"></input>
                          </a>
                      </div>
              </div>
                  <div className='col-span-2 md:col-span-4 m-2'>
                      {<div className="bg-green-700 rounded-lg">
                          <div className='grid mb-1 col-span-1'>

                              <input 
                              autoFocus
                              className='mb-2 rounded-md p-1 text-lg text-gray-900 m-2 border-none'
                              placeholder="Buscar município..." 
                              type="text" 
                              name="search"
                              value={busca} 
                              onChange={(e) => setBusca(e.target.value)} 
                              />
                          </div>

                          <div>
                              {munFiltrados.map(municipio => (
                                  <Link key={municipio.nome} href={municipio.link}>
                                  <a target="_BLANK" className='inline-flex text-md md:text-xl mb-1 px-1 mx-1 hover:underline hover:text-white text-gray-200'>{municipio.nome}</a>
                                  </Link>
                              ))}
                          </div>
                          <br />
                      </div>}
                  </div>

              </section>
          </div>
        </div>
        <footer className='text-[8pt] mr-2 mt-1 text-right'>
            v1.3
        </footer>
    </div>
    )
}

export default Home