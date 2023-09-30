'use client';
import OpenAI from 'openai';

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    'Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh..'
  );

  const openai = new OpenAI({
    apiKey: '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',
  });

  const generateImage = async () => {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Dall-E 2 Image Creation
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      <div className="mb-32 grid text-center  lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-left">
        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Generate an Image using Open AI API
          </h2>

          <textarea
            className="border-2 border-pink-500 rounded p-2"
            placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />
          <button
            className="bg-indigo-500 p-2 rounded text-white mt-2"
            onClick={generateImage}
          >
            Generate an Image
          </button>
        </div>
      </div>
    </main>
  );
}
