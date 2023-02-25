/* eslint-disable import/no-extraneous-dependencies */
import {
  Box,
  Button,
  Flex,
  Group,
  ScrollArea,
  Select,
  TextInput,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import { AppLayout } from '@/components/layouts/layout';
// import type { Diary } from '@/global-states/atom';
import { useCurrentDiaryList } from '@/global-states/atom';

// rootのページ
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentDiaryList, setCurrentDiaryList } = useCurrentDiaryList();
  //  setCurrentDiaryList
  const handleToglle = () => {
    setIsOpen(!isOpen);
  };

  const displayCircles = () => {
    const circles = [];
    for (let i = 0; i < 15; i += 1) {
      circles.push(
        <p key={i} className="circle">
          {i}
        </p>
      );
    }
    return circles;
  };

  const form = useForm({
    initialValues: {
      details: 'd',
      activity: 'a',
      date: '2023/01/01',
    },
  });

  const saveDiary = () => {
    setCurrentDiaryList(() => [...currentDiaryList, form.values]);
  };

  console.log(currentDiaryList);

  return (
    <RecoilRoot>
      const exampledata = useRecoilState(datas);
      <AppLayout>
        {isOpen ? (
          <div>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <DatePicker
                placeholder="Click here to choose date"
                label="Date"
                withAsterisk
                {...form.getInputProps('date')}
              />
              <Select
                label="Activity"
                placeholder="Pick one"
                data={[
                  { value: 'walk', label: 'Walk to' },
                  { value: 'drive', label: 'Drive to' },
                  { value: 'stay', label: 'Stay at ' },
                  { value: 'eat', label: 'Eat' },
                ]}
                {...form.getInputProps('activity')}
              />
              <text>Details</text>
              <Box sx={{ maxWidth: 300 }} mx="auto">
                <TextInput
                  withAsterisk
                  label="Detais Here"
                  placeholder="your@email.com"
                  {...form.getInputProps('details')}
                />

                <Group position="right" mt="md">
                  <Button onClick={saveDiary}>Submit</Button>
                </Group>
              </Box>
            </form>
          </div>
        ) : (
          <></>
        )}

        <ScrollArea scrollbarSize={0}>
          <Flex gap="md" direction="row" justify="center">
            {displayCircles()}
          </Flex>
        </ScrollArea>

        <Button onClick={handleToglle}>toggle</Button>

        {form.values.activity}
        {form.values.details}
      </AppLayout>
    </RecoilRoot>
  );
};

export default Index;
