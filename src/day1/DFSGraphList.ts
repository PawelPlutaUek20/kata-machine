function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    path: number[],
    seen: boolean[],
): boolean {
    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    path.push(curr);
    if (curr === needle) {
        return true;
    }

    const list = graph[curr];
    for (let i = 0; i < list.length; ++i) {
        const edge = list[i];
        if (walk(graph, edge.to, needle, path, seen)) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, path, seen);

    if (path.length === 0) {
        return null;
    }

    return path;
}
