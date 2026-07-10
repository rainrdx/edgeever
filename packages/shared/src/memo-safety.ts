export const isSuspiciousMemoOverwrite = (
  currentTitle: string | null,
  currentContentText: string,
  nextTitle: string | null,
  nextContentText: string
) => {
  const currentLength = currentContentText.trim().length;
  const nextLength = nextContentText.trim().length;
  const titleChanged = (currentTitle ?? "").trim() !== (nextTitle ?? "").trim();

  return titleChanged && currentLength >= 200 && nextLength < currentLength * 0.35;
};
