import { createStyles, Group, Paper, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 7,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface StatsGridIconsProps {
  stat?: { date: string; activity: string; details: string };
}

export function StatsGridIcons({ stat }: StatsGridIconsProps) {
  const { classes } = useStyles();
  // if (data === undefined) {
  // return [];
  // }
  // const samplenumber = 1;
  if (!stat) {
    return <div>statsな</div>;
  }

  return (
    <Paper withBorder p="md" radius="md" key={stat.date}>
      <Group position="apart">
        <div>
          <Text
            color="dimmed"
            transform="uppercase"
            weight={700}
            size="xs"
            className={classes.label}
          >
            {stat?.date || '2023/01/01'}
          </Text>
        </div>
      </Group>
      <Text color="dimmed" size="sm" mt="md">
        I {stat.activity || '2023/01/01'}
        {stat.details}
      </Text>
    </Paper>
  );

  // return (
  //   <div className={classes.root}>
  //     <SimpleGrid
  //       cols={3}
  //       breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
  //     ></SimpleGrid>
  //   </div>
  // );
}
