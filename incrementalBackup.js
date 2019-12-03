function incrementalBackup(lastBackupTime, changes) {
  const fileIDs = [];

  for (let change of changes) {
    const fileBackUpTime = change[0];
    const fileID = change[1];
    if (fileBackUpTime > lastBackupTime) {
      if (!fileIDs.includes(fileID)) {
        fileIDs.push(fileID);
      }
    }
  }
  return fileIDs.sort((fileID1, fileID2) => fileID1 - fileID2);
}

console.log(
  incrementalBackup(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620206, 3],
    [461620203, 5],
    [461620207, 6],
    [461620207, 2],
    [461620203, 5]
  ])
);
