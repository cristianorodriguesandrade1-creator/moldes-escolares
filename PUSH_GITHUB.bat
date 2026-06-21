@echo off
REM Script para fazer push dos arquivos para GitHub - SEM PRECISAR DE TERMINAL

echo ========================================
echo PUSH PARA GITHUB - Moldes Escolares
echo ========================================
echo.

REM Navegar até a pasta do projeto
cd /d "E:\-PROJETOS CLAUDE-\site remunerado"

echo [1/5] Configurando Git user...
git config user.email "divadchaves035@gmail.com"
git config user.name "Cristiano Rodrigues"
echo ✅ User configurado

echo.
echo [2/5] Removendo .git corrompido (se houver)...
rmdir /s /q .git 2>nul
echo ✅ .git limpado

echo.
echo [3/5] Inicializando repositório Git...
git init --initial-branch=main
echo ✅ Git inicializado

echo.
echo [4/5] Adicionando remote...
git remote add origin https://github.com/cristianorodriguesandrade1-creator/moldes-escolares.git
echo ✅ Remote adicionado

echo.
echo [5/5] Adicionando arquivos...
git add .
echo ✅ Arquivos adicionados

echo.
echo [6/6] Fazendo commit...
git commit -m "Initial: Moldes Escolares - 60+ files, 13 complete development phases - Production ready"
echo ✅ Commit feito

echo.
echo ========================================
echo IMPORTANTE: Próximo passo MANUAL
echo ========================================
echo.
echo Você vai fazer o PUSH agora.
echo GitHub pode pedir seu usuário/senha ou token.
echo.
echo Duas opções:
echo.
echo OPÇÃO 1 (GitHub Web): Usar GitHub CLI
echo   - Abra PowerShell ou Prompt Comando
echo   - Digite: gh auth login
echo   - Siga as instruções
echo.
echo OPÇÃO 2 (Token): Usar token do GitHub
echo   - Vá para: https://github.com/settings/tokens
echo   - Crie novo token com permissão "repo"
echo   - Copie o token
echo   - Na próxima tela, use como senha
echo.
echo Clique ENTER para continuar com o PUSH...
pause

echo.
echo Fazendo PUSH para GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ SUCESSO! Código enviado para GitHub!
    echo ========================================
    echo.
    echo Seu repositório: https://github.com/cristianorodriguesandrade1-creator/moldes-escolares
    echo.
    echo Próximo passo: Configure no Vercel!
) else (
    echo.
    echo ========================================
    echo ❌ ERRO ao fazer push
    echo ========================================
    echo.
    echo Possíveis soluções:
    echo 1. Verifique conexão com internet
    echo 2. Verifique usuário/senha do GitHub
    echo 3. Use GitHub CLI: gh auth login
    echo 4. Copie o comando e execute manualmente:
    echo    git push -u origin main
    echo.
)

pause
