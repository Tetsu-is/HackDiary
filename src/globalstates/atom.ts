// eslint-disable-next-line import/no-extraneous-dependencies
import { atom, useRecoilState } from 'recoil';

export type Diary = {
  date: string;
  activity: string;
  details: string;
};
export const currentDiaryListState = atom<Diary[]>({
  key: 'datas',
  default: [
    {
      date: '1234',
      activity: 'walk',
      details: 'School',
    },
  ],
});

export const useCurrentDiaryList = () => {
  const [currentDiaryList, setCurrentDiaryList] = useRecoilState(
    currentDiaryListState
  );

  return { currentDiaryList, setCurrentDiaryList };
};
