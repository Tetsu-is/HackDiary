import { Button } from '@mantine/core';
import { useState } from 'react';

import { AppLayout } from '@/components/layouts/layout';

// rootのページ
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToglle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppLayout>
      <h2 className="text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h2>
      <Button color="red" className="font-mono" onClick={handleToglle}>
        Hello world
      </Button>
      <div></div>
    </AppLayout>
  );
};

export default Index;
