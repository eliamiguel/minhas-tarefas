import * as enums from '../utils/enums/Tarefas'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.State
  descricao: string
  id: number
  state: enums.Prioridade | enums.State | undefined
  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.State,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
