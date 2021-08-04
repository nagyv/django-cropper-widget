window.addEventListener('DOMContentLoaded', function() {
    const croppers = document.querySelectorAll('img.cropper')
    croppers.forEach(function(cropperImg) {
        const input_name = cropperImg.dataset.cropperFor
        const cropperConf = cropperImg.dataset.cropperConf
        const input = document.querySelector('input[name=' + input_name + ']')
        const croppedInput = document.querySelector('input[name=' + input_name + '-cropped-data]')
        const form = input.closest('form')
        input.addEventListener('change', function(changeEv) {
            const input = changeEv.target;
            if (input.files && input.files[0]) {
                const file = input.files[0];
                const type = file.type

                // input.value = ''
                cropperImg.src = URL.createObjectURL(file)

                const cropper = new Cropper(cropperImg, cropperConf)
                form.addEventListener('submit', function(submitEv) {

                    croppedInput.value = cropper.getCroppedCanvas().toDataURL(type)
                    // submitEv.preventDefault()

                })
            }
        })
    })
})
