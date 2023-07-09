export const separateUsernameAndTag = (
  usernameAndTag: string
): Record<string, string> => {
  const [username, tag] = usernameAndTag.split("#");
  return { username, tag };
};
