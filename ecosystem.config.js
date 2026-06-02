module.exports = {
  apps: [
    {
      name: "backend-python",
      // CORREÇÃO: Adicionado o 'v' em uvicorn
      script: "/home/guimartins20/apps/python/venv/bin/uvicorn",
      // CORREÇÃO: Argumentos padrão do Uvicorn para o FastAPI funcionar em ASGI
      args: "main:app --host 127.0.0.1 --port 8000 --workers 2",
      cwd: "/home/guimartins20/apps/python",
      interpreter: "none",      
      exec_mode: "fork",      
      autorestart: true,
      watch: false
    }
  ]
};