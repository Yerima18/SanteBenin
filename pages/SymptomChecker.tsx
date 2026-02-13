
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `Tu es un assistant virtuel de santé publique pour la plateforme SanteBenin.
Ton rôle est d'informer les citoyens béninois sur les maladies courantes (Paludisme, Dengue, Choléra, etc.).
RÈGLES CRUCIALES :
1. Ne donne JAMAIS de prescription médicale ou de dosage.
2. Ajoute TOUJOURS ce rappel : "Ceci est une information éducative. Consultez un médecin au centre de santé le plus proche."
3. Encourage l'utilisation du numéro d'urgence 136 au Bénin.
4. Sois empathique, clair et utilise un langage simple accessible à tous.
5. Si les symptômes semblent graves (difficulté respiratoire, inconscience), dis à l'utilisateur d'appeler immédiatement le 187 (SAMU).`;

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const SymptomChecker: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    const updatedMessages: Message[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const conversationHistory = updatedMessages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }],
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: conversationHistory,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const aiText = response.text || "Désolé, je ne peux pas répondre pour le moment. Veuillez réessayer.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Une erreur est survenue. Veuillez consulter un médecin directement." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="animate-slide-up text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Assistant Santé SanteBenin</h1>
        <div className="animate-slide-up delay-1 bg-amber-50 border border-amber-200 p-4 rounded-2xl inline-block max-w-2xl">
          <p className="text-amber-800 text-xs leading-relaxed">
            <strong>Avertissement :</strong> Cet assistant utilise l'intelligence artificielle pour vous guider. Il ne remplace pas un diagnostic médical. En cas de doute, rendez-vous dans un centre de santé.
          </p>
        </div>
      </div>

      <div className="animate-scale-in delay-2 bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 shadow-xl overflow-hidden flex flex-col h-[70vh] sm:h-[600px]">
        <div ref={scrollRef} className="flex-grow p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.length === 0 && (
            <div className="text-center py-16 sm:py-20 animate-fade-in">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">👋</div>
              <p className="text-slate-500 text-sm">Bonjour ! Décrivez-moi vos symptômes ou posez une question sur une maladie au Bénin.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['Symptômes du Paludisme', 'Où se faire vacciner ?', 'Prévenir le choléra'].map(q => (
                  <button key={q} onClick={() => setInput(q)} className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:border-blue-400 active:scale-95 text-slate-600 transition-all">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`flex animate-slide-up ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] sm:max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-3 sm:p-4 bg-white border-t border-slate-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Décrivez vos symptômes ici..."
            className="flex-grow px-4 py-3 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 active:scale-90 disabled:opacity-50 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
