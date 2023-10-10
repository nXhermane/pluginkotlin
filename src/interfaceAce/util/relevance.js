

export default function relevance(lines){
	if(lines.length==0) return 0
	const occurrence = new Set(lines).size;
	const lineProximity = Math.min.apply(null, lines.map((line) => Math.abs(line - 0)));
	const score = 100 / (1 + lineProximity);
	const relevance = occurrence * score;
	return relevance
}

