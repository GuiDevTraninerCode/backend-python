module.exports = {
  apps: [
    {
      name: "backend-python",
      // Caminho para o executável do gunicorn ou uvicorn dentro do ambiente virtual da VM
      script: "/home/guimartins20/apps/python/venv/bin/unicorn",
      // Ajuste 'main:app' para o nome do seu arquivo principal e da sua instância da API (ex: fastapi ou flask)
      args: "main:app --workers 2 --bind 127.0.0.1:8000",
      cwd: "/home/guimartins20/apps/python",
      interpreter: "none",       
      exec_mode: "fork",      
      autorestart: true,
      watch: false
    }
  ]
};
