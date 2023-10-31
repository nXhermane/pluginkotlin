export default async function workerManager(instance, type, info) {
   if (type === "analyse/extract") {
      console.log(info);
      await instance.WordTree.insert(info.data);
   }
}
