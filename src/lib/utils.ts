export const getSingleValue = (value: string | string[] | undefined): string | undefined => {
  if (!value) return undefined;
  return Array.isArray(value) ? value[0] : value;
};

type Layout = 'grid' | 'list';

export const getRandomLayout = (): Layout => {
  return Math.random() < 0.5 ? 'grid' : 'list';
};

export const getTodayKey = (): string => {
  const today = new Date();
  return today.toISOString().slice(0, 10);
};
export const getDailyLayout = (): Layout => {
  if (typeof window === 'undefined') {
    return getRandomLayout();
  }

  const key = `layout-${getTodayKey()}`;
  const stored = localStorage.getItem(key) as Layout | null;

  if (stored === 'grid' || stored === 'list') {
    return stored;
  }

  const newLayout = getRandomLayout();
  localStorage.setItem(key, newLayout);
  return newLayout;
};
