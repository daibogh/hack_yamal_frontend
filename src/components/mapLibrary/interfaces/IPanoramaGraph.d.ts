namespace ymaps.interfaces {
  interface IPanoramaGraph {
    getEdges(): IPanoramaGraphEdge[];
    getNodes(): IPanoramaGraphNode[];
    getPanorama(): IPanorama;
  }
}
