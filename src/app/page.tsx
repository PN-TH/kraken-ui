'use client';

import Button from '../components/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button
          label="Default Button"
          onClick={() => console.log('Button clicked')}
        />
        <Button label="Primary Button" className="bg-blue-700 text-white" />
        <Button label="Disabled Button" disabled />
        <Button label="Loading Button" isLoading />
      </div>
    </main>
  );
}
