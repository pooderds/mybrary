FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageResizeTaregtWidth: 100,
    imageResizeTaregtHeight: 150
})

FilePond.parse(document.body)