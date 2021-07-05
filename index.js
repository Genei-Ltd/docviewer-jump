CoreControls.setWorkerPath('webviewer/core')
CoreControls.enableFullPDF(false)

const docViewer = new CoreControls.DocumentViewer()
docViewer.setScrollViewElement(document.getElementById('scrollView'))
docViewer.setViewerElement(document.getElementById('docViewer'))
docViewer.setOptions({ enableAnnotations: true })
docViewer.on('documentLoaded', () => {
    docViewer.setFitMode(docViewer.FitMode.FitWidth)
    const annotManager = docViewer.getAnnotationManager()
    const annotation = new Annotations.TextHighlightAnnotation()
    annotation.PageNumber = 7
    annotation.FillColor = 'rgba(12, 105, 255, 0.3)'
    annotation.Quads = [{
        x1: 108,
        x2: 134.2204473888,
        x3: 134.2204473888,
        x4: 108,
        y1: 243.3255354687501,
        y2: 243.3255354687501,
        y3: 231.94855760000007,
        y4: 231.94855760000007
    }]
    annotManager.addAnnotation(annotation)
    annotManager.drawAnnotations(7)
    annotManager.selectAnnotation(annotation)
    annotManager.bringToBack(annotation)
    annotManager.jumpToAnnotation(annotation)
})
docViewer.loadDocument('learn-to-summarize.pdf', {
    filename: 'learn to summarize',
    extension: 'pdf'
})
