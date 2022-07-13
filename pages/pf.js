import { useMemo, useState } from 'react';
import Link from 'next/link';
import { municipios } from '../components/Dados/Municipais';
import Head from 'next/head';

function Pf() {
    const [busca, setBusca] = useState('');

    const munFiltrados = useMemo(() => {
        const lowerBusca = busca.toLocaleLowerCase()
        return municipios.filter((municipio) => 
            municipio.nome.toLocaleLowerCase().includes(lowerBusca));
    }, [busca])

    return (
    <div>
        <Head>
            <title>Atalhos CND - Pessoa Física</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className='flex justify-center'>
            <h2 className='text-2xl text-center font-bold'>
                EMISSÃO E VALIDAÇÃO DE CERTIDÕES
            </h2>
        </header>
        <div className='flex justify-center my-2'>
            <Link href="/">
            <a className='bg-green-700 text-green-50 hover:underline hover:bg-green-600 rounded-lg px-4 py-1'>Pessoa Jurídica</a>
            </Link>
        </div>

        <div className='flex justify-center'>
            <div className='bg-white rounded-xl max-w-4xl w-full drop-shadow-xl'>
                <h3 className='text-center text-xl font-bold py-4'>PESSOA FÍSICA</h3>
                <section className='grid grid-cols-2 md:grid-cols-4 p-4 gap-4 text-center font-medium'>
                    <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                        <p>CPF</p>
                        <div className='flex justify-center gap-1 my-2'>
                            <a target="_blank" rel="noreferrer" href="https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp">
                                <input id="botao" className='bg-green-300 hover:bg-green-400 rounded-md text-black py-1 w-32 hover:cursor-pointer' type="button" value="Emitir"></input>
                            </a>
                        </div>
                    </div>
                    <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                        <p>CND Federal</p>
                        <div className='flex justify-center gap-1 my-2'>
                            <a target="_blank" rel="noreferrer" href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Emitir">
                                <input id="botao" className='bg-green-300 hover:bg-green-400 rounded-md text-black py-1 w-16 hover:cursor-pointer' type="button" value="Emitir"></input>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Autenticidade/Confirmar">
                                <input id="botao" className='bg-red-300 hover:bg-red-400 rounded-md text-black py-1 w-16 hover:cursor-pointer' type="button" value="Validar"></input>
                            </a>
                        </div>
                    </div>
                    <div className='bg-green-700 col-span-1 py-2 rounded-lg text-green-50'>
                    <p className='textoA'>CND Estadual</p>
                        <div className='flex justify-center gap-1 my-2'>
                            <a target="_blank" rel="noreferrer" href="https://internet-consultapublica.apps.sefaz.ce.gov.br/certidaonegativa/preparar-consultar">
                                <input id="botao" className='bg-green-300 hover:bg-green-400 rounded-md text-black py-1 w-16 hover:cursor-pointer' type="button" value="Emitir"></input>
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
                    </div>}
                </div>
                
                </section>
            </div>
        </div>
    </div>
    )
}

export default Pf