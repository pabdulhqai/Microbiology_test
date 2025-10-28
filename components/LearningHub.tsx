
import React, { useState, useMemo } from 'react';
import { LEARNING_TOPICS } from '../constants';
import type { Topic } from '../types';

export const LearningHub: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(LEARNING_TOPICS[0].id);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(LEARNING_TOPICS.map(topic => topic.category))];
    return uniqueCategories;
  }, []);

  const selectedTopic = LEARNING_TOPICS.find(t => t.id === selectedTopicId);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">Learning Modules</h2>
        <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4">
                <nav className="sticky top-8">
                    {categories.map(category => (
                        <div key={category} className="mb-6">
                            <h3 className="text-lg font-semibold text-sky-800 mb-3 border-b-2 border-sky-200 pb-2">{category}</h3>
                            <ul className="space-y-1">
                                {LEARNING_TOPICS.filter(t => t.category === category).map(topic => (
                                    <li key={topic.id}>
                                        <button
                                            onClick={() => setSelectedTopicId(topic.id)}
                                            className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${selectedTopicId === topic.id ? 'bg-sky-600 text-white font-semibold shadow-md' : 'hover:bg-sky-100 text-slate-700'}`}
                                        >
                                            {topic.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
            <main className="md:w-3/4">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 min-h-[400px]">
                    {selectedTopic ? (
                        <article className="prose max-w-none">
                           <div dangerouslySetInnerHTML={{ __html: selectedTopic.content }} />
                        </article>
                    ) : (
                        <p>Select a topic to begin.</p>
                    )}
                </div>
            </main>
        </div>
    </div>
  );
};
