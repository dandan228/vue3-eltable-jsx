import { defineClientConfig } from '@vuepress/client'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import MTableDemo from '../components/MTable/index.vue'
import TableDemo from '../components/Table/index.vue'
import FormDemo from '../components/Form/index.vue'
import PageinateDemo from '../components/Pageinate/index.vue'
import DialogDemo from '../components/Dialog/index.vue'
import DescriptionsDemo from '../components/Descriptions/index.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus)
    app.component('MTableDemo', MTableDemo)
    app.component('TableDemo', TableDemo)
    app.component('FormDemo', FormDemo)
    app.component('PageinateDemo', PageinateDemo)
    app.component('DialogDemo', DialogDemo)
    app.component('DescriptionsDemo', DescriptionsDemo)
  },
  setup() {},
  rootComponents: [],
})
