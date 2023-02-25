import { Button, Input, Text } from '@mantine/core';
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
        toggle boolean
      </Button>
      <Text>{isOpen ? 'true' : 'false'}</Text>
      {isOpen ? (
        <div>
          <Input placeholder="Your email" />
          <Button color="blue">aa</Button>
          <Text>aaaaaaaaaaaaaassssee</Text>
        </div>
      ) : (
        <div>false</div>
      )}
    </AppLayout>
  );
};

export default Index;
