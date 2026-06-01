module.exports = {
  apps: [
    {
      name: "backend-python",
      // Caminho para o executável do gunicorn ou uvicorn dentro do ambiente virtual da VM
      script: "/home/SEU_USUARIO_GCP/apps/python/venv/bin/gunicorn",
      // Ajuste 'main:app' para o nome do seu arquivo principal e da sua instância da API (ex: fastapi ou flask)
      args: "main:app --workers 2 --bind 127.0.0.1:8000",
      cwd: "/home/SEU_USUARIO_GCP/apps/python",
      autorestart: true,
      watch: false
    }
  ]
};
