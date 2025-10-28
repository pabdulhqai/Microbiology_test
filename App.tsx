
import React, { useState } from 'react';
import { AppView } from './types';
import { LearningHub } from './components/LearningHub';
import { Quiz } from './components/Quiz';
import { BookOpenIcon, BeakerIcon } from './components/icons';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.Learning);

  const header = (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-24 py-4">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Microbiology & Bacteriology
            </h1>
            <p className="text-sm text-slate-500">
              An Advanced Educational Course
            </p>
          </div>
          <nav className="flex items-center space-x-2 p-1 bg-slate-100 rounded-full">
            <button 
              onClick={() => setView(AppView.Learning)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 text-sm font-semibold ${view === AppView.Learning ? 'bg-sky-600 text-white shadow' : 'text-slate-600 hover:bg-slate-200'}`}
            >
              <BookOpenIcon className="w-5 h-5" />
              <span>Learn</span>
            </button>
            <button 
              onClick={() => setView(AppView.Quiz)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 text-sm font-semibold ${view === AppView.Quiz ? 'bg-sky-600 text-white shadow' : 'text-slate-600 hover:bg-slate-200'}`}
            >
              <BeakerIcon className="w-5 h-5" />
              <span>Quiz</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {header}
      <main className="flex-grow py-8">
        {view === AppView.Learning ? <LearningHub /> : <Quiz />}
      </main>
      <footer className="text-center py-4 bg-slate-100 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Advanced Microbiology Course. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
