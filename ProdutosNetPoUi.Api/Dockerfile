# ------------------------------------------------------------------
# ESTÁGIO 1: BUILD (SDK)
# ------------------------------------------------------------------
# ?? Ajuste a versão do SDK (ex: 8.0, 9.0) conforme o seu projeto
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build 
WORKDIR /src

# 1. Copia o arquivo de solução e todos os arquivos de projeto (csproj)
# O Docker está olhando a pasta raiz, então os caminhos são completos.
COPY ProdutosNetPoUi.sln .
COPY ProdutosNetPoUi.Api/*.csproj ProdutosNetPoUi.Api/
COPY ProdutosNetPoUi.Domain/*.csproj ProdutosNetPoUi.Domain/
COPY ProdutosNetPoUi.Infra/*.csproj ProdutosNetPoUi.Infra/
COPY ProdutosNetPoUi.Tests/*.csproj ProdutosNetPoUi.Tests/
# Se houver outros projetos de infraestrutura ou testes, copie-os aqui

# 2. Restaura as dependências (com o .sln e todos os .csproj presentes)
# Isso garante que as referências entre projetos sejam resolvidas
RUN dotnet restore ProdutosNetPoUi.sln

# 3. Copia todas as pastas de código-fonte
# Copia o código-fonte restante da API e dos projetos dependentes
COPY . .

# 4. Publica a aplicação de API
# Publica APENAS o projeto da API
RUN dotnet publish ProdutosNetPoUi.Api/ProdutosNetPoUi.Api.csproj -c Release -o /app/publish

# ------------------------------------------------------------------
# ESTÁGIO 2: FINAL (RUNTIME)
# ------------------------------------------------------------------
# ?? Use a versão do AspNet Runtime correspondente ao SDK
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

# Copia os arquivos publicados para o contêiner final (menor)
COPY --from=build /app/publish .

# Define a porta interna (a porta 8080 será mapeada para a porta 5000 externa no docker-compose)
EXPOSE 8080 

# Comando para iniciar a aplicação
ENTRYPOINT ["dotnet", "ProdutosNetPoUi.Api.dll"] # ?? Ajuste o nome da DLL se for diferente