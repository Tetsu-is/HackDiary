/* eslint-disable import/no-extraneous-dependencies */
import { Box, Button, Group, Select, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useState } from 'react';

import { AppLayout } from '@/components/layouts/layout';

// rootのページ
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToglle = () => {
    setIsOpen(!isOpen);
  };

  const form = useForm({
    initialValues: {
      details: 'd',
      activity: 'a',
      date: '2023/01/01',
    },
  });

  return (
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
                <Button type="submit">Submit</Button>
              </Group>
            </Box>
          </form>
        </div>
      ) : (
        <></>
      )}
      <Button onClick={handleToglle}>toggle</Button>

      {form.values.activity}
      {form.values.details}
    </AppLayout>
  );
};

export default Index;
