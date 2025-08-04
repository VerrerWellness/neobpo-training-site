// Função para embutir vídeo do YouTube ou Google Drive
function embedVideo() {
    const videoUrl = document.getElementById('video-url').value;
    const videoContainer = document.getElementById('video-container');
    let embedUrl = '';

    // Verifica se é YouTube
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        const videoId = videoUrl.split('v=')[1]?.split('&')[0] || videoUrl.split('/').pop();
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
    // Verifica se é Google Drive
    else if (videoUrl.includes('drive.google.com')) {
        const fileId = videoUrl.split('/d/')[1]?.split('/')[0];
        embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    } else {
        videoContainer.innerHTML = '<p>URL inválida. Use links do YouTube ou Google Drive.</p>';
        return;
    }

    videoContainer.innerHTML = `<iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
}

// Função para embutir quiz do Google Forms
function embedQuiz() {
    const quizUrl = document.getElementById('quiz-url').value;
    const quizContainer = document.getElementById('quiz-container');

    if (quizUrl.includes('forms.gle') || quizUrl.includes('docs.google.com/forms')) {
        quizContainer.innerHTML = `<iframe src="${quizUrl}" frameborder="0"></iframe>`;
    } else {
        quizContainer.innerHTML = '<p>URL inválida. Use links do Google Forms.</p>';
    }
}

// Lista de palavras comuns (exemplo simplificado, substitua por um dataset completo)
const commonWords = [
    'usar', 'fazer', 'dizer', 'ter', 'ir', 'ver', 'saber', 'pensar', 'pegar', 'começar',
    // Adicione mais palavras ou use um dataset como Moby Thesaurus
];

// Mapeamento de sinônimos simples (exemplo, expanda com WordNet ou similar)
const synonymMap = {
    'utilizar': 'usar',
    'necessitar': 'precisar',
    'complexo': 'difícil',
    'iniciar': 'começar',
    // Adicione mais mapeamentos conforme necessário
};

// Função para simplificar texto
function simplifyText() {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    // Divide o texto em palavras
    let words = inputText.split(/\s+/);
    let simplified = words.map(word => {
        // Remove pontuação para comparação
        const cleanWord = word.replace(/[.,!?]/g, '').toLowerCase();
        // Se a palavra não está na lista de palavras comuns, tenta substituir
        if (!commonWords.includes(cleanWord) && synonymMap[cleanWord]) {
            return synonymMap[cleanWord];
        }
        return word;
    });

    outputText.innerHTML = simplified.join(' ');
}

// Sugestão de melhoria futura: Integrar uma IA para personalizar textos automaticamente
// Exemplo: const aiEnhancedText = await fetchAI(text); // Integração futura com API de IA
