export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-500 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🏥 SantéBénin
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Tailwind CSS v4 configuré !
          </p>
          <button className="btn-primary">
            Ça marche ! ✅
          </button>
          
          {/* Test des cartes de maladies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-red-500 disease-card">
              <div className="text-3xl mb-2">🦟</div>
              <h3 className="text-xl font-bold">Paludisme</h3>
              <p className="text-sm opacity-90">Très Haute priorité</p>
            </div>
            <div className="bg-blue-500 disease-card">
              <div className="text-3xl mb-2">💧</div>
              <h3 className="text-xl font-bold">Diarrhée</h3>
              <p className="text-sm opacity-90">Haute priorité</p>
            </div>
            <div className="bg-orange-500 disease-card">
              <div className="text-3xl mb-2">🪱</div>
              <h3 className="text-xl font-bold">MTN</h3>
              <p className="text-sm opacity-90">Haute priorité</p>
            </div>
          </div>
          
          {/* Test des statistiques */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="stat-card">
              <div className="text-3xl mb-2">🦟</div>
              <div className="text-2xl font-bold text-red-600">20%</div>
              <div className="text-sm text-gray-600">Hospitalisations</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl mb-2">🏥</div>
              <div className="text-2xl font-bold text-blue-600">200+</div>
              <div className="text-sm text-gray-600">Centres</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl mb-2">💉</div>
              <div className="text-2xl font-bold text-green-600">Gratuit</div>
              <div className="text-sm text-gray-600">Vaccination</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}