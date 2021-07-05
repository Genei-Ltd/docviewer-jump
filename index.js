CoreControls.setWorkerPath('webviewer/core')
CoreControls.enableFullPDF(false)
window.PDFNet.runWithCleanup(() => {}, "Genie Technology Limited(genei.io):OEM:Genei::B+:AMS(20211013):85DC82B307DABAF34B313BC9B243382F4E6F0FB768AD6B566A758A042499DE4AE2B6F5C7")

const docViewer = new CoreControls.DocumentViewer()
docViewer.setScrollViewElement(document.getElementById('scrollView'))
docViewer.setViewerElement(document.getElementById('docViewer'))
docViewer.setOptions({ enableAnnotations: true })
docViewer.loadDocument('learn-to-summarize.pdf', {
    filename: 'learn to summarize',
    extension: 'pdf'
  })
