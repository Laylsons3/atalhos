import { useEffect, useState } from "react"
import Link from "next/link";

export default function Cnd() {

  const [cnpj, setCnpj] = useState('');
  const data = new Date()

  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const mesA = '0' + mes
  const ano = data.getFullYear()

  const [dados, setDados] = useState([]);

  useEffect(() => {

    if ( cnpj.length === 14 ) {
      fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj.replace(/[^\d]+/g, "")}`)
      .then((res) => res.json())
      .then((res => setDados(res)))

    }

  }, [cnpj])

  return(
    <div className="flex flex-col items-center justify-center">
        <div className="text-red-500 text-sm mb-10">versão de teste</div>
      <div className="flex items-center">
        <label>CNPJ: </label>
        <input maxLength={14} placeholder="somente números" className="p-1 ml-1 text-gray-500 rounded" value={cnpj} onChange={e => setCnpj(e.target.value)} />
      </div>
      {dados.razao_social}
      <div className="flex flex-col mt-20 gap-2">
        <Link href={`https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Consultar?ni=${cnpj}&TipoPesquisa=1&PeriodoInicio=2022-01-13&PeriodoFim=${ano}-${mesA}-${dia}`}><a target="_blank" rel="nofollow" className="text-blue-700 bg-green-300 px-5 py-1 rounded-lg hover:underline">Consultar CND Federal</a></Link>
        <Link href={`https://internet-consultapublica.apps.sefaz.ce.gov.br/certidaonegativa/consultarPdf?tipoDevedor=2&codigoDevedor=${cnpj}`}><a target="_blank" rel="nofollow" className="text-blue-700 bg-green-300 px-5 py-1 rounded-lg hover:underline">Baixar CND Estadual CE</a></Link>
      </div>
    </div>
  )
}