export default async function workerManager(instance, type, info) {
   if (type === "analyse/extract") {
      instance.errorManager.removeAllErrorIcons();
      instance.errorManager.errorManagement(info.errorArray);
      await instance.WordTree.insert(info.data);
   }
}
