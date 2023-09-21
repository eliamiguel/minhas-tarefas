import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar, alterarStatus } from '../../../store/reducers/tarefas'
import TarefaClass from '../../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../../styles'

import * as enums from '../../../utils/enums/Tarefas'

type Props = TarefaClass

const Tarefa = ({
  descricao: descrcaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispacth = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descrcaoOriginal.length > 0) {
      setDescricao(descrcaoOriginal)
    }
  }, [descrcaoOriginal])

  function CancelarEdicao() {
    setDescricao(descrcaoOriginal)
    setEstaEditando(false)
  }

  function alteraStatusTarefa(_evento: ChangeEvent<HTMLInputElement>) {
    console.log()
    dispacth(
      alterarStatus({
        id,
        finalizado: _evento.target.checked
      })
    )
  }
  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={status === enums.State.CONCLUIDA}
          id={titulo}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        value={descricao}
        disabled={!estaEditando}
        onChange={(event) => setDescricao(event.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispacth(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id,
                    state: undefined
                  })
                )
                setEstaEditando(false)
              }}
            >
              salvar
            </BotaoSalvar>
            <S.BotaocancelarRemover onClick={CancelarEdicao}>
              cancelar
            </S.BotaocancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaocancelarRemover onClick={() => dispacth(remover(id))}>
              Remover
            </S.BotaocancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
