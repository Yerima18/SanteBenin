import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const SYSTEM_INSTRUCTION = `Tu es un assistant virtuel de santé publique pour la plateforme SanteBenin.
Ton rôle est d'informer les citoyens béninois sur les maladies courantes (Paludisme, Dengue, Choléra, etc.).
RÈGLES CRUCIALES :
1. Ne donne JAMAIS de prescription médicale ou de dosage.
2. Ajoute TOUJOURS ce rappel : "Ceci est une information éducative. Consultez un médecin au centre de santé le plus proche."
3. Encourage l'utilisation du numéro d'urgence 136 au Bénin.
4. Sois empathique, clair et utilise un langage simple accessible à tous.
5. Si les symptômes semblent graves (difficulté respiratoire, inconscience), dis à l'utilisateur d'appeler immédiatement le 187 (SAMU).`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Messages array is required" });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const conversationHistory = messages.map((m: { role: string; text: string }) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: conversationHistory,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const text = response.text || "Désolé, je ne peux pas répondre pour le moment.";
    return res.status(200).json({ text });
  } catch (error) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ error: "Failed to generate response" });
  }
}
