function Infos(Infs)
{
    
 var infosgui = document.getElementById("Infos")
    if (Infs == 'HTML')
    {
    
infosgui.innerHTML = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia <br> fonte:  <a href='https://pt.wikipedia.org/wiki/HTML' target='_blank'>Wikipedia </a> "  

    }
if (Infs == "CSS")
{

    infosgui.innerHTML = "CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, onde se define estilos para seu projeto web.Com efeitos de transição, imagem,imagem de fundo/Background e outros, que dão um estilo novo e elegante a seus projetos web.Ou em todos os aspectos de design do layout da página. <br> fonte:  <a href='https://pt.wikipedia.org/wiki/CSS3 ' target='_blank'>Wikipedia</a>  "
    
}

}