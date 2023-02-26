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

import { StatsGridIcons } from '@/components/DetailView';
import { AppLayout } from '@/components/layouts/layout';
import { useCurrentDiaryList } from '@/globalstates/atom';

// rootのページ
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrue] = useState(true);
  const { currentDiaryList, setCurrentDiaryList } = useCurrentDiaryList();
  // const {totalCircles, setCircles} = useState([]);
  //  setCurrentDiaryList
  const handleToglle = () => {
    setIsOpen(!isOpen);
  };

  // const displayRectangles = () => {};

  const displayCircles = () => {
    const handleMouseEnter = (e: any) => {
      e.target.style.transform = 'scale(2)';
      e.target.style.zIndex = '20';
    };
    const handleMouseLeave = (e: any) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.zIndex = '10';
    };
    const handleMouseDown = (e: any) => {
      e.target.style.transform = 'scale(2)';
      e.target.style.zIndex = '20';
      console.log('mouseDown');
    };

    const circles = [];
    for (let i = 0; i < currentDiaryList.length; i += 1) {
      const date = currentDiaryList[i]?.date;
      // const activity = currentDiaryList[i]?.activity;
      // const details = currentDiaryList[i]?.details;
      console.log(date);
      circles.push(
        <p
          key={i}
          className="circle"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
        >
          {date?.toString()}
        </p>
      );
    }

    return circles;
  };

  const form = useForm({
    initialValues: {
      details: '',
      activity: '',
      date: '',
    },
  });

  const saveDiary = () => {
    console.log(form.values);
    form.values.date = form.values.date.toString();
    setCurrentDiaryList(() => [...currentDiaryList, form.values]);
  };

  // const detailViewList = () => {
  // const object = currentDiaryList.filter(() => {});
  // };

  console.log(currentDiaryList);
  return (
    <RecoilRoot>
      const exampledata = useRecoilState(datas);
      <AppLayout>
        <Button onClick={handleToglle}>New</Button>
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
                  { value: 'play', label: 'Play' },
                  { value: 'meet', label: 'Meet' },
                  { value: 'study', label: 'Study' },
                ]}
                {...form.getInputProps('activity')}
              />
              <h3>Details</h3>
              <Box>
                <TextInput
                  withAsterisk
                  label=""
                  placeholder="details here"
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
        <div>
          {isTrue ? (
            <div>
              {currentDiaryList.map((item) => {
                return <StatsGridIcons key={item.date} stat={item} />;
              })}
            </div>
          ) : (
            <p>False</p>
          )}
          ;
        </div>
      </AppLayout>
    </RecoilRoot>
  );
};

export default Index;
