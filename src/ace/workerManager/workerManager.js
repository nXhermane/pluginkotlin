

export default async function workerManager(instance, type, info) {


	if (type === "analyse/extract") {
		await instance.WordTree.insert(info.data);
	}
}