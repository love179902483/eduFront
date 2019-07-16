<template>
    <div>
        <textarea name="test" id="test" cols="30" rows="10"></textarea>

        <v-layout>
            <v-flex sm12>
                <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
                <input type="file" ref="inputImage" style="display:none" accept="image/*" @change="onFilePicked">
                <img :src="imageUrl" height="200">
                <v-btn class="warning" @click="testUpload">testUpload</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>


<script lang='js'>
import axios from 'axios';

export default {
    data() {
        return {
            imageUrl: '',
            image: '',
        };

    },
    methods: {
        aaa() {
            alert(1111);

        },
        onPickFile() {
            this.$refs.inputImage.click();
        },
        async onFilePicked(event) {
            const files = event.target.files;
            const filename = files[0].name;
            console.log(filename);
            if (filename.lastIndexOf('.') <= 0) {
                return alert('Pelease add a valid file!');
            }
            const fileReader = new FileReader();
            fileReader.addEventListener('load', async () => {
                this.imageUrl = fileReader.result;
                console.log('load file ok!');
                console.log(this.imageUrl);
                if (this.imageUrl !== '') {
                // const response = await axios.get('/schoolmanage');
                const response2 = await axios.post('/upload/image', {
                    image: this.imageUrl,
                    name: files[0].name,
                });
                // console.log(response);
                console.log(response2);
            }
            });
            fileReader.readAsDataURL(files[0]);


        },
        async testUpload() {
             const result = await axios.post('/upload/image', {
                image: 'data:image/png;base64,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',
                name: 'hehe.png',
            });

             console.log(result);
        },
    },
mounted() {
        CKEDITOR.replace('test', {
            extraPlugins: 'image2,autogrow',
            });
    },
};
</script>
