function load_data(filename, done) {
    $.ajax(filename).done(function(_raw) {
        var data = jsyaml.load(_raw);
        var nodes = [];
        var links = [];
        var nodes_cache = {};
        for (var node in data) {
            var id = nodes.length;
            if (node in nodes_cache) {
                id = nodes_cache[node];
            } else {
                nodes_cache[node] = id;
                nodes.push({
                    name: node,
                    id: id,
                    data: data[node],
                });
            }
            for (var _child in data[node]["depends"]) {
                var child = data[node]["depends"][_child];
                var child_id = nodes.length;
                if (child in nodes_cache) {
                    child_id = nodes_cache[child];
                } else {
                    nodes_cache[child] = child_id;
                    nodes.push({
                        name: child,
                        id: child_id,
                        data: data[node],
                    });
                }
                links.push({
                    source: child_id,
                    target: id,
                    value: 1,
                });
            }
        }
        var graph = {
            nodes: nodes,
            links: links,
        };
        done(graph);
    });
}
