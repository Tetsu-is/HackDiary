import { Button, Flex, Input, ScrollArea, Text } from '@mantine/core';
import { useState } from 'react';

import { AppLayout } from '@/components/layouts/layout';

// rootのページ
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToglle = () => {
    setIsOpen(!isOpen);
  };

  const displayCircles = () => {
    const circles = [];
    for (let i = 0; i < 15; i + 1) {
      circles.push(
        <p key={i} className="circle">
          {i}
        </p>
      );
    }
    return circles;
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
      {/* <ScrollArea  style={{ width: "100%", height: 200 ,}}> */}
      <ScrollArea scrollbarSize={0}>
        <Flex gap="md" direction="row" justify="center">
          {displayCircles()}
        </Flex>
      </ScrollArea>
    </AppLayout>
  );
};

export default Index;
