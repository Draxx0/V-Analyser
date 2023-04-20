export const separateUsernameAndTag = (usernameAndTag: string) => {
  const [username, tag] = usernameAndTag.split("#");
  return { username, tag };
};
