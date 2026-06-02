from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Minha Primeira API em Python")

# Simulando um "Banco de Dados" na memóri
banco_de_dados = [
    {"id": 1, "tarefa": "Estudar Python", "concluida": False},
    {"id": 2, "tarefa": "Criar uma API com FastAPI", "concluida": True}
]

# Modelo de dados que a API espera receber (validação)
class Item(BaseModel):
    tarefa: str
    concluida: bool = False

# 1. Rota Inicial (Home)
@app.get("/")
def home():
    return {"mensagem": "Back-end Python 2!"}

# 2. Rota para Listar todos os itens (GET)
@app.get("/tarefas", response_model=List[dict])
def listar_tarefas():
    return banco_de_dados

# 3. Rota para Criar uma nova tarefa (POST)
@app.post("/tarefas", status_code=21)
def criar_tarefa(item: Item):
    novo_id = len(banco_de_dados) + 1 if banco_de_dados else 1
    nova_tarefa = {"id": new_id, "tarefa": item.tarefa, "concluida": item.concluida}
    banco_de_dados.append(nova_tarefa)
    return nova_tarefa

# 4. Rota para Deletar uma tarefa por ID (DELETE)
@app.delete("/tarefas/{tarefa_id}")
def deletar_tarefa(tarefa_id: int):
    for tarefa in banco_de_dados:
        if tarefa["id"] == tarefa_id:
            banco_de_dados.remove(tarefa)
            return {"mensagem": f"Tarefa {tarefa_id} deletada com sucesso!"}
    
    raise HTTPException(status_code=404, detail="Tarefa não encontrada")
