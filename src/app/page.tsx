'use client';

import Image from 'next/image';
import Button from '../components/Button';
import Loader from '../components/Loader/Loader';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full flex-col">
        <Button
          label="Default Button"
          onClick={() => console.log('Button clicked')}
          className="w-40 bg-blue-500 text-white"
        />
        <Button label="Primary Button" className="bg-blue-700 text-white" />
        <Button label="Disabled Button" disabled />
        <Button label="Loading Button" isLoading />
        <Button
          icon={
            <Image
              src={'/vercel.svg'}
              width={50}
              height={50}
              alt="Vercel Logo"
            />
          }
          label="Button with Icon"
        />
        <div className="mb-4">
          <Loader color="#ea4545" />
        </div>
        <div className="mb-4 w-full ">
          <Loader linear />
        </div>
        <div className="mb-4 w-full">
          <Loader linear color="#ea4545" />
        </div>
      </div>
    </main>
  );
}
